export const scrollToAppTop = function () {
  const el = document.getElementById("app-layout");
  el.scrollIntoView({ behavior: "smooth", block: "start" });
};

export const openEmail = function () {
  const email = import.meta.env.VITE_EMAIL;
  window.open(`mailto:${email}`);
};

export function setLocalLightModeSettings(val) {
  localStorage.setItem("id-light-mode", val);

  console.log("setting  light mode local storage", val);
}

export function getLocalLightModeSettings() {
  const currentMode = localStorage.getItem("id-light-mode");
  console.log(currentMode, "light mode local stoarge val");

  return currentMode === "true" ?? false;
}
