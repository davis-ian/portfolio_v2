export const scrollToAppTop = function () {
  const el = document.getElementById("app-layout");
  el.scrollIntoView({ behavior: "smooth", block: "start" });
};

export const openEmail = function () {
  const email = import.meta.env.VITE_EMAIL;
  window.open(`mailto:${email}`);
};
