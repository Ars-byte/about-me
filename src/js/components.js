window.Components = {
  hero(p, stats, lang, t) {
    return `
      <div>
        <p class="eyebrow reveal">${p.role[lang]}</p>
        <h1 class="hero-title reveal">${t.hi[lang]} <span>${p.name}</span></h1>
        <p class="hero-text reveal">${p.tagline[lang]}</p>
        <div class="hero-cta reveal">
          <a class="btn btn-light" href="#projects">${t.viewWork[lang]} <i class="fa-solid fa-arrow-down"></i></a>
          <a class="btn btn-ghost" href="#social">${t.touch[lang]}</a>
        </div>
        <div class="stats reveal">
          ${stats.map(s => `<div class="stat"><strong data-value="${s.value}">0</strong><span>${s.label[lang]}</span></div>`).join("")}
        </div>
      </div>
      <div class="hero-media reveal">
        <img src="${p.avatar}" alt="${p.name}" class="hero-pfp">
      </div>`;
  },

  about(paragraphs, groups, lang, p) {
    return `
      <div class="about-grid">
        <div class="about-pfp-col reveal">
          <img src="${p.avatar}" alt="${p.name}" class="about-pfp">
        </div>
        <div class="about-info-col">
          <div class="about-text">${paragraphs.map((x) => `<p class="reveal">${x}</p>`).join("")}</div>
          <div class="stack">${groups.map((g) => `
            <div class="reveal">
              <p class="stack-group">${g.group[lang]}</p>
              <div class="chips">${g.items.map(x => `<span class="chip">${x}</span>`).join("")}</div>
            </div>`).join("")}
          </div>
        </div>
      </div>`;
  },

  stars(n) {
    return n ? `<span class="stars"><i class="fa-regular fa-star"></i> ${n}</span>` : "";
  },

  featured(list, lang, t) {
    return list.map((p) => `
      <article class="feature reveal">
        <div class="feature-head"><h3>${p.title}</h3>${this.stars(p.stars)}</div>
        <p>${p.desc[lang]}</p>
        <div class="feature-foot">
          <span class="lang">${p.lang}</span>
          <div class="links">
            ${p.site ? `<a href="${p.site}" target="_blank" rel="noopener">${t.site[lang]}<i class="fa-solid fa-arrow-up-right-from-square"></i></a>` : ""}
            <a href="${p.url}" target="_blank" rel="noopener">${t.code[lang]}<i class="fa-solid fa-arrow-up-right-from-square"></i></a>
          </div>
        </div>
      </article>`).join("");
  },

  socials(list) {
    return list.map(s => s.copy
      ? `<button class="btn btn-ghost" data-copy="${s.copy}"><i class="${s.icon}"></i><span>${s.copy}</span></button>`
      : `<a class="btn btn-ghost" href="${s.url}" target="_blank" rel="noopener"><i class="${s.icon}"></i>${s.name}</a>`).join("");
  }
};
