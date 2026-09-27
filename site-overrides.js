(() => {
  const OLD_PHONE_DISPLAY = "+234 810 244 3111";
  const NEW_PHONE_DISPLAY = "+234 706 558 1586";
  const OLD_PHONE_LINK = "+2348102443111";
  const NEW_PHONE_LINK = "+2347065581586";
  const OLD_ACTIVITY_TITLE = "Activities: Beyond Sunday";
  const NEW_ACTIVITY_TITLE = "Weekly Activities";
  const RESPONSIVE_STYLE_ID = "mcn-responsive-overrides";

  let applying = false;

  function installResponsiveStyles() {
    if (document.getElementById(RESPONSIVE_STYLE_ID)) return;

    const style = document.createElement("style");
    style.id = RESPONSIVE_STYLE_ID;
    style.textContent = `
      html, body, #main { width: 100%; max-width: 100%; overflow-x: clip; }
      img, picture, video, canvas, svg { max-width: 100%; }
      [data-framer-component-type="RichTextContainer"],
      [data-framer-component-type="Stack"] > * { min-width: 0; }
      .framer-text { overflow-wrap: anywhere; }

      .framer-jcswC {
        background-color: #0c061e !important;
        backdrop-filter: none !important;
        -webkit-backdrop-filter: none !important;
        transition: background-color .3s ease, backdrop-filter .3s ease,
          -webkit-backdrop-filter .3s ease;
      }
      .framer-jcswC.mcn-scrolled {
        background-color: rgba(40, 21, 100, .82) !important;
        backdrop-filter: blur(16px) !important;
        -webkit-backdrop-filter: blur(16px) !important;
      }

      [data-framer-name="Menu Button"],
      [data-framer-name="BTN"] {
        min-width: 44px !important;
        min-height: 44px !important;
      }

      .mcn-responsive-fallback {
        display: none;
        width: 100%;
        background: #f7f5fb;
        color: #171220;
        font-family: Sora, Arial, sans-serif;
      }
      .mcn-responsive-fallback * { box-sizing: border-box; }
      .mcn-responsive-hero {
        position: relative;
        display: grid;
        min-height: clamp(290px, 44vw, 430px);
        place-items: end start;
        overflow: hidden;
        isolation: isolate;
      }
      .mcn-responsive-hero::after {
        content: "";
        position: absolute;
        inset: 0;
        z-index: -1;
        background: linear-gradient(180deg, rgba(12, 6, 30, .08), rgba(12, 6, 30, .88));
      }
      .mcn-responsive-hero img {
        position: absolute;
        inset: 0;
        z-index: -2;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
      .mcn-responsive-hero-copy {
        width: min(100%, 900px);
        padding: clamp(32px, 6vw, 72px) clamp(24px, 6vw, 72px);
        color: #fff;
      }
      .mcn-responsive-eyebrow {
        margin: 0 0 10px;
        color: #e3c27d;
        font-size: 13px;
        font-weight: 800;
        letter-spacing: .14em;
        text-transform: uppercase;
      }
      .mcn-responsive-hero h1 {
        max-width: 850px;
        margin: 0;
        font-size: clamp(28px, 6vw, 52px);
        line-height: 1.08;
        text-wrap: balance;
      }
      .mcn-responsive-content {
        display: grid;
        gap: clamp(22px, 4vw, 36px);
        width: min(100%, 1040px);
        margin: 0 auto;
        padding: clamp(36px, 7vw, 72px) clamp(24px, 6vw, 64px);
      }
      .mcn-responsive-card {
        display: grid;
        gap: 20px;
        padding: clamp(22px, 4vw, 38px);
        border: 1px solid rgba(40, 21, 100, .12);
        border-radius: 18px;
        background: #fff;
        box-shadow: 0 14px 40px rgba(28, 18, 56, .08);
      }
      .mcn-responsive-card h2 {
        margin: 0;
        color: #281564;
        font-size: clamp(22px, 4vw, 34px);
        line-height: 1.18;
        text-wrap: balance;
      }
      .mcn-responsive-card p {
        margin: 0;
        font-size: clamp(16px, 2vw, 18px);
        line-height: 1.75;
        white-space: pre-line;
      }
      .mcn-responsive-card img {
        width: 100%;
        max-height: 520px;
        border-radius: 12px;
        object-fit: cover;
      }
      .mcn-responsive-footer {
        padding: 38px 24px max(38px, env(safe-area-inset-bottom));
        background: #0c061e;
        color: #fff;
        text-align: center;
      }
      .mcn-responsive-footer strong { display: block; margin-bottom: 18px; font-size: 16px; }
      .mcn-responsive-footer nav {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 8px 22px;
      }
      .mcn-responsive-footer a {
        display: inline-flex;
        min-height: 44px;
        align-items: center;
        color: #fff;
        font-size: 15px;
        text-decoration: none;
      }
      .mcn-responsive-footer p { margin: 16px 0 0; color: #cfc8df; font-size: 14px; }

      @media (max-width: 1439.98px) {
        .mcn-fixed-layout-source { display: none !important; }
        .mcn-responsive-fallback { display: block; }
      }
      @media (max-width: 809.98px) {
        [data-framer-name="METHODIST CHURCH NIGERIA 67 UDO UMANA STREET, UYO"] {
          --framer-font-size: clamp(11px, 3vw, 14px) !important;
        }
        .mcn-responsive-hero { min-height: clamp(280px, 72vw, 390px); }
        .mcn-responsive-content { padding-inline: 20px; }
        .mcn-responsive-card { border-radius: 14px; }
      }
      @media (max-width: 359.98px) {
        .mcn-responsive-hero-copy { padding-inline: 18px; }
        .mcn-responsive-content { padding-inline: 14px; }
        .mcn-responsive-footer { padding-inline: 18px; }
      }
      @media (prefers-reduced-motion: reduce) {
        .framer-jcswC { transition: none !important; }
      }
    `;
    document.head.appendChild(style);
  }

  function normalizeText(value) {
    return value.replace(/\s+/g, " ").trim();
  }

  function collectContent(source, isHistory) {
    const ignored = /^(Home|About|Fellowships|Activities|Give|Menu|List|Copyright|Fellowship)$/i;
    const seen = new Set();
    const texts = [];

    source.querySelectorAll('[data-framer-component-type="RichTextContainer"]').forEach((element) => {
      const text = normalizeText(element.textContent || "");
      if (text.length < (isHistory ? 120 : 75) || ignored.test(text) || seen.has(text)) return;
      if (/find your place to serve, grow, and belong/i.test(text)) return;
      if (/methodist church nigeria 67 udo umana street/i.test(text)) return;
      seen.add(text);
      texts.push(text);
    });

    if (isHistory) return texts;
    return texts.sort((a, b) => b.length - a.length).slice(0, 1);
  }

  function collectImages(source) {
    const seen = new Set();
    return [...source.querySelectorAll("img")].filter((image) => {
      const src = image.currentSrc || image.src;
      const width = Number(image.getAttribute("width")) || image.naturalWidth;
      const height = Number(image.getAttribute("height")) || image.naturalHeight;
      if (!src || seen.has(src) || (width < 500 && height < 300)) return false;
      seen.add(src);
      return true;
    });
  }

  function createImage(source, alt, eager = false) {
    if (!source) return null;
    const image = document.createElement("img");
    image.src = source.currentSrc || source.src;
    image.alt = alt;
    image.decoding = "async";
    image.loading = eager ? "eager" : "lazy";
    return image;
  }

  function createResponsiveFallback() {
    if (document.querySelector(".mcn-responsive-fallback")) return;

    const root = document.querySelector(
      '.framer-VosGW[data-framer-root], .framer-3pYWY[data-framer-root]'
    );
    const source = root?.firstElementChild;
    if (!source) return;

    const isHistory = root.classList.contains("framer-3pYWY");
    const title = isHistory
      ? "Udo Umana History"
      : normalizeText(source.getAttribute("data-framer-name") || "Fellowship");
    const texts = collectContent(source, isHistory);
    const images = collectImages(source);

    source.classList.add("mcn-fixed-layout-source");

    const fallback = document.createElement("main");
    fallback.className = "mcn-responsive-fallback";
    fallback.setAttribute("aria-label", title);

    const hero = document.createElement("header");
    hero.className = "mcn-responsive-hero";
    const heroImage = createImage(images[0], "", true);
    if (heroImage) hero.appendChild(heroImage);

    const heroCopy = document.createElement("div");
    heroCopy.className = "mcn-responsive-hero-copy";
    const eyebrow = document.createElement("p");
    eyebrow.className = "mcn-responsive-eyebrow";
    eyebrow.textContent = isHistory ? "About us" : "Fellowship";
    const heading = document.createElement("h1");
    heading.textContent = title;
    heroCopy.append(eyebrow, heading);
    hero.appendChild(heroCopy);
    fallback.appendChild(hero);

    const content = document.createElement("div");
    content.className = "mcn-responsive-content";
    const contentTexts = texts.length ? texts : [source.textContent];
    contentTexts.forEach((text, index) => {
      const card = document.createElement("section");
      card.className = "mcn-responsive-card";
      const cardHeading = document.createElement("h2");
      cardHeading.textContent = isHistory ? `Our story${index ? ` — Part ${index + 1}` : ""}` : title;
      const paragraph = document.createElement("p");
      paragraph.textContent = normalizeText(text);
      card.append(cardHeading, paragraph);
      const cardImage = createImage(images[index + 1], `${title} community`);
      if (cardImage) card.appendChild(cardImage);
      content.appendChild(card);
    });
    fallback.appendChild(content);

    const footer = document.createElement("footer");
    footer.className = "mcn-responsive-footer";
    footer.innerHTML = `
      <strong>Methodist Church Nigeria — 67 Udo Umana Street, Uyo</strong>
      <nav aria-label="Footer navigation">
        <a href="/">Home</a><a href="/about">About</a>
        <a href="/fellowships">Fellowships</a><a href="/activities">Activities</a>
        <a href="tel:${NEW_PHONE_LINK}">${NEW_PHONE_DISPLAY}</a>
      </nav>
      <p>Take the whole Gospel to the whole world.</p>
    `;
    fallback.appendChild(footer);

    source.insertAdjacentElement("afterend", fallback);
  }

  function replaceText(root, oldText, newText) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((node) => {
      if (node.nodeValue.includes(oldText)) {
        node.nodeValue = node.nodeValue.replaceAll(oldText, newText);
      }
    });
  }

  function updateNavbar() {
    const scrolled = window.scrollY > 10;
    document.querySelectorAll(".framer-jcswC").forEach((element) => {
      element.classList.toggle("mcn-scrolled", scrolled);
    });
  }

  function applyOverrides() {
    if (applying || !document.body) return;
    applying = true;

    installResponsiveStyles();
    replaceText(document.body, OLD_PHONE_DISPLAY, NEW_PHONE_DISPLAY);
    replaceText(document.body, OLD_ACTIVITY_TITLE, NEW_ACTIVITY_TITLE);
    replaceText(document.body, "Upcoming Event", NEW_ACTIVITY_TITLE);

    document.querySelectorAll(`a[href="tel:${OLD_PHONE_LINK}"]`).forEach((link) => {
      link.href = `tel:${NEW_PHONE_LINK}`;
      link.setAttribute("aria-label", `Call ${NEW_PHONE_DISPLAY}`);
    });

    createResponsiveFallback();
    updateNavbar();
    applying = false;
  }

  function scheduleOverrides() {
    requestAnimationFrame(applyOverrides);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", applyOverrides, { once: true });
  } else {
    applyOverrides();
  }

  let scrollTicking = false;
  window.addEventListener("scroll", () => {
    if (scrollTicking) return;
    scrollTicking = true;
    requestAnimationFrame(() => {
      updateNavbar();
      scrollTicking = false;
    });
  }, { passive: true });

  new MutationObserver(scheduleOverrides).observe(document.documentElement, {
    childList: true,
    subtree: true,
    characterData: true,
  });

  window.addEventListener("load", applyOverrides, { once: true });
  setTimeout(applyOverrides, 250);
  setTimeout(applyOverrides, 1000);
})();
