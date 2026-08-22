const body = document.body;
const langBtn = document.getElementById("langBtn");
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
const printBtn = document.getElementById("printBtn");
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

function setLanguage(lang){
  const isEn = lang === "en";
  body.classList.toggle("lang-en", isEn);
  document.documentElement.lang = isEn ? "en" : "fa";
  document.documentElement.dir = isEn ? "ltr" : "rtl";
  document.querySelectorAll("[data-fa][data-en]").forEach(el => {
    el.textContent = isEn ? el.dataset.en : el.dataset.fa;
  });
  langBtn.textContent = isEn ? "FA" : "EN";
  localStorage.setItem("resume-lang", lang);
}

langBtn.addEventListener("click", () => {
  setLanguage(body.classList.contains("lang-en") ? "fa" : "en");
});

menuBtn.addEventListener("click", () => nav.classList.toggle("open"));

nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

printBtn.addEventListener("click", () => window.print());

setLanguage(localStorage.getItem("resume-lang") || "fa");
