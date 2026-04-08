(function () {
  var AUTH_EVENT_READY = "nuvioauth:ready";
  var AUTH_EVENT_STATE = "nuvioauth:statechange";
  var SUPABASE_SCRIPT_ID = "supabase-js-cdn";
  var SUPABASE_CDN =
    "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.min.js";
  var DEFAULT_SUPABASE_CONFIG = {
    url: "https://khipragjfximigthnmsv.supabase.co",
    anonKey: "sb_publishable_FihvToyy_KbrsAi7CrCuOg_3UIN-QEL",
  };

  var state = {
    client: null,
    session: null,
    user: null,
    initialized: false,
    configError: "",
    initPromise: null,
  };

  function getMetaContent(name) {
    var tag = document.querySelector('meta[name="' + name + '"]');
    return tag ? tag.getAttribute("content") || "" : "";
  }

  function getConfig() {
    var globalConfig = window.NUVIO_SUPABASE_CONFIG || {};
    var url =
      globalConfig.url ||
      getMetaContent("supabase-url") ||
      DEFAULT_SUPABASE_CONFIG.url;
    var anonKey =
      globalConfig.anonKey ||
      getMetaContent("supabase-anon-key") ||
      DEFAULT_SUPABASE_CONFIG.anonKey;

    return { url: url, anonKey: anonKey, error: "" };
  }

  function loadSupabaseScript() {
    if (window.supabase && typeof window.supabase.createClient === "function") {
      return Promise.resolve();
    }

    var existing = document.getElementById(SUPABASE_SCRIPT_ID);
    if (existing) {
      return new Promise(function (resolve, reject) {
        existing.addEventListener("load", function () {
          resolve();
        });
        existing.addEventListener("error", function () {
          reject(new Error("Failed to load Supabase client script."));
        });
      });
    }

    return new Promise(function (resolve, reject) {
      var script = document.createElement("script");
      script.id = SUPABASE_SCRIPT_ID;
      script.src = SUPABASE_CDN;
      script.defer = true;
      script.onload = function () {
        resolve();
      };
      script.onerror = function () {
        reject(new Error("Failed to load Supabase client script."));
      };
      document.head.appendChild(script);
    });
  }

  function emit(name, detail) {
    document.dispatchEvent(new CustomEvent(name, { detail: detail }));
  }

  function getRedirectUrl() {
    return window.location.origin + "/login.html";
  }

  function updateAuthUi() {
    var user = state.user;
    var isLoggedIn = !!user;
    var email = user && user.email ? user.email : "";
    var loginHref = "/login.html?redirect=" + encodeURIComponent(window.location.pathname);

    document.documentElement.setAttribute(
      "data-authenticated",
      isLoggedIn ? "true" : "false"
    );

    document.querySelectorAll('[data-auth~="guest"]').forEach(function (el) {
      el.hidden = isLoggedIn;
    });

    document.querySelectorAll('[data-auth~="user"]').forEach(function (el) {
      el.hidden = !isLoggedIn;
    });

    document.querySelectorAll('[data-auth~="email"]').forEach(function (el) {
      el.textContent = email;
    });

    document.querySelectorAll('[data-auth~="status"]').forEach(function (el) {
      if (state.configError) {
        el.textContent = "Auth unavailable";
        return;
      }

      el.textContent = isLoggedIn ? "Signed in" : "Signed out";
    });

    document.querySelectorAll('[data-auth~="login-link"]').forEach(function (el) {
      if (el.tagName === "A") {
        el.setAttribute("href", loginHref);
      }
    });

    document.querySelectorAll('[data-auth~="message"]').forEach(function (el) {
      if (!state.configError) {
        return;
      }

      if (!el.dataset.preserveOnError) {
        el.textContent = state.configError;
      }
      el.hidden = false;
      el.dataset.tone = "error";
    });
  }

  function setMessage(message, tone) {
    document.querySelectorAll('[data-auth~="message"]').forEach(function (el) {
      el.textContent = message || "";
      el.hidden = !message;
      if (tone) {
        el.dataset.tone = tone;
      } else {
        el.removeAttribute("data-tone");
      }
    });
  }

  function handleSession(session) {
    state.session = session || null;
    state.user = session && session.user ? session.user : null;
    updateAuthUi();
    emit(AUTH_EVENT_STATE, {
      session: state.session,
      user: state.user,
      initialized: state.initialized,
      configError: state.configError,
    });
  }

  function initAuth() {
    if (state.initPromise) {
      return state.initPromise;
    }

    state.initPromise = (async function () {
      var config = getConfig();
      state.configError = config.error;

      if (state.configError) {
        state.initialized = true;
        updateAuthUi();
        emit(AUTH_EVENT_READY, {
          client: null,
          session: null,
          user: null,
          configError: state.configError,
        });
        return state;
      }

      await loadSupabaseScript();

      state.client = window.supabase.createClient(config.url, config.anonKey, {
        auth: {
          persistSession: true,
          autoRefreshToken: true,
          detectSessionInUrl: true,
        },
      });

      var sessionResponse = await state.client.auth.getSession();
      handleSession(sessionResponse.data.session);

      state.client.auth.onAuthStateChange(function (_event, session) {
        handleSession(session);
      });

      state.initialized = true;
      emit(AUTH_EVENT_READY, {
        client: state.client,
        session: state.session,
        user: state.user,
        configError: "",
      });
      return state;
    })().catch(function (error) {
      state.configError = error.message || "Failed to initialize auth.";
      state.initialized = true;
      state.client = null;
      updateAuthUi();
      emit(AUTH_EVENT_READY, {
        client: null,
        session: null,
        user: null,
        configError: state.configError,
      });
      return state;
    });

    return state.initPromise;
  }

  async function signIn(email, password) {
    await initAuth();
    if (!state.client) {
      throw new Error(state.configError);
    }

    setMessage("Signing you in...", "info");

    var response = await state.client.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (response.error) {
      throw response.error;
    }

    setMessage("Signed in successfully.", "success");
    return response.data;
  }

  async function signUp(email, password) {
    await initAuth();
    if (!state.client) {
      throw new Error(state.configError);
    }

    setMessage("Creating your account...", "info");

    var response = await state.client.auth.signUp({
      email: email,
      password: password,
      options: {
        emailRedirectTo: getRedirectUrl(),
      },
    });

    if (response.error) {
      throw response.error;
    }

    var createdSession = response.data.session;
    var needsConfirmation = !createdSession;

    setMessage(
      needsConfirmation
        ? "Account created. Check your email to confirm your address."
        : "Account created and signed in.",
      needsConfirmation ? "info" : "success"
    );

    return response.data;
  }

  async function signOut() {
    await initAuth();
    if (!state.client) {
      throw new Error(state.configError);
    }

    var response = await state.client.auth.signOut();
    if (response.error) {
      throw response.error;
    }

    setMessage("Signed out.", "success");
  }

  async function requireUser(options) {
    var settings = options || {};
    await initAuth();

    if (state.user) {
      return state.user;
    }

    if (settings.redirect === false) {
      return null;
    }

    var destination =
      settings.redirectTo ||
      ("/login.html?redirect=" + encodeURIComponent(window.location.pathname));
    window.location.replace(destination);
    return null;
  }

  function getAuthState() {
    return {
      initialized: state.initialized,
      session: state.session,
      user: state.user,
      configError: state.configError,
    };
  }

  document.addEventListener("click", function (event) {
    var target = event.target.closest('[data-auth~="logout"]');
    if (!target) {
      return;
    }

    event.preventDefault();
    signOut().catch(function (error) {
      setMessage(error.message || "Sign out failed.", "error");
    });
  });

  window.NuvioAuth = {
    init: initAuth,
    signIn: signIn,
    signUp: signUp,
    signOut: signOut,
    requireUser: requireUser,
    getState: getAuthState,
    setMessage: setMessage,
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      initAuth();
    });
  } else {
    initAuth();
  }
})();
