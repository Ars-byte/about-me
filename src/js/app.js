(() => {
  const data = window.SITE;
  const C = window.Components;
  const $ = id => document.getElementById(id);
  let lang = localStorage.getItem("lang") || "es";

  const views = ["home", "about", "projects", "social"];

  const show = (targetId) => {
    let id = targetId;
    if (!id) {
      const hash = location.hash.replace(/^#/, "");
      id = views.includes(hash) ? hash : "home";
    }

    views.forEach(v => {
      const el = $(v);
      if (el) {
        if (v === id) {
          el.classList.add("active");
        } else {
          el.classList.remove("active");
        }
      }
    });

    document.querySelectorAll(".nav-links a").forEach(a => {
      a.classList.toggle("active", a.getAttribute("href") === "#" + id);
    });

    document.body.dataset.view = id;
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const render = () => {
    const t = data.i18n;
    document.documentElement.lang = lang;
    $("home").innerHTML = C.hero(data.profile, data.stats, lang, t);
    $("about-body").innerHTML = C.about(data.about[lang], data.stack, lang, data.profile);
    $("featured").innerHTML = C.featured(data.featured, lang, t);
    $("socials").innerHTML = C.socials(data.socials);
    document.querySelectorAll("[data-t]").forEach(el => { el.textContent = t[el.dataset.t][lang]; });
    $("lang-toggle").textContent = lang === "es" ? "EN" : "ES";
    $("year").textContent = new Date().getFullYear();
    Counter.watch($("home"));
    show();
  };

  $("lang-toggle").addEventListener("click", () => {
    lang = lang === "es" ? "en" : "es";
    localStorage.setItem("lang", lang);
    render();
  });

  $("socials").addEventListener("click", e => {
    const btn = e.target.closest("[data-copy]");
    if (!btn) return;
    navigator.clipboard.writeText(btn.dataset.copy);
    const label = btn.querySelector("span");
    label.textContent = data.i18n.copied[lang];
    setTimeout(() => { label.textContent = btn.dataset.copy; }, 1500);
  });

  document.addEventListener("click", e => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    const target = link.getAttribute("href").slice(1);
    if (views.includes(target)) {
      e.preventDefault();
      history.pushState(null, "", "#" + target);
      show(target);
    }
  });

  const nav = document.querySelector(".nav");
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 20);
  window.addEventListener("scroll", onScroll, { passive: true });

  window.addEventListener("popstate", () => show());
  window.addEventListener("hashchange", () => show());

  onScroll();
  render();
})();
