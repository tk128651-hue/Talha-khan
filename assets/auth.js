/*
 * Bakerz Bite - local authentication for the static demo.
 * Account data is persisted in localStorage; the active login is kept
 * in sessionStorage so opening the site again asks for login.
 */
const AUTH_USER_KEY = 'bakerzAccount';
const AUTH_SESSION_KEY = 'bakerzLoggedIn';

function getSavedAccount() {
  try {
    return JSON.parse(localStorage.getItem(AUTH_USER_KEY) || 'null');
  } catch {
    return null;
  }
}

function isLoggedIn() {
  return sessionStorage.getItem(AUTH_SESSION_KEY) === 'true';
}

function protectMainSite() {
  if (!isLoggedIn()) {
    location.replace(getSavedAccount() ? 'login.html' : 'register.html');
  }
}

function protectRegisterPage() {
  if (getSavedAccount()) location.replace('login.html');
}

function protectLoginPage() {
  if (!getSavedAccount()) location.replace('register.html');
}

function startSession() {
  sessionStorage.setItem(AUTH_SESSION_KEY, 'true');
}

function endSession() {
  sessionStorage.removeItem(AUTH_SESSION_KEY);
}
