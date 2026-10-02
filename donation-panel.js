(() => {
  const donation = window.MCN_DONATION || {};
  const bankName = donation.bankName || "First Bank Nigeria";
  const accountName = donation.accountName || "MCN 67, Udo Umana";
  const accountNumber = donation.accountNumber || "34184792093";
  const dialogId = "mcn-donation-dialog";
  const astroTriggerSelector = "[data-donation-trigger]";
  let lastTrigger = null;

  const styles = `
    #${dialogId} { border: 0; padding: 0; width: min(680px, calc(100vw - 32px)); max-width: none; max-height: min(780px, calc(100dvh - 32px)); overflow: auto; border-radius: 22px; background: #fff; color: #121212; box-shadow: 0 24px 80px rgba(0,0,0,.35); }
    #${dialogId}::backdrop { background: rgba(12, 6, 30, .72); backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px); }
    #${dialogId} .mcn-donation-card { position: relative; padding: 30px; text-align: center; font-family: Sora, Arial, sans-serif; }
    #${dialogId} .mcn-donation-close { position: absolute; top: 12px; right: 12px; display: grid; place-items: center; width: 44px; height: 44px; border: 0; border-radius: 50%; background: #eee; color: #171717; font-size: 25px; line-height: 1; cursor: pointer; }
    #${dialogId} .mcn-donation-logo { width: 58px; height: 58px; object-fit: contain; margin: 0 auto 6px; }
    #${dialogId} h2 { margin: 0; font-size: 19px; line-height: 1.2; font-weight: 800; text-transform: uppercase; }
    #${dialogId} .mcn-donation-intro { max-width: 580px; margin: 7px auto 20px; font-size: 17px; line-height: 1.45; }
    #${dialogId} .mcn-donation-bank { padding: 19px 20px 20px; background: #0c061e; color: #fff; }
    #${dialogId} .mcn-donation-bank p { margin: 0; font-size: 16px; line-height: 1.38; }
    #${dialogId} .mcn-donation-label { margin-top: 13px !important; color: #d9d9d9; font-size: 13px !important; font-weight: 800; letter-spacing: .08em; }
    #${dialogId} .mcn-donation-number { margin: 0 0 13px; color: #fff; font-size: clamp(22px, 8vw, 48px); font-weight: 800; letter-spacing: .02em; line-height: 1.1; overflow-wrap: anywhere; font-variant-numeric: tabular-nums; }
    #${dialogId} .mcn-donation-copy { min-height: 44px; border: 0; padding: 10px 28px; background: #c29d59; color: #171717; font-size: 16px; font-weight: 700; cursor: pointer; }
    #${dialogId} .mcn-donation-note { display: flex; align-items: flex-start; justify-content: center; gap: 11px; margin: 20px 0; padding: 18px; border: 1px solid #dfd6c3; background: #f4f0e8; font-size: 16px; line-height: 1.45; }
    #${dialogId} .mcn-donation-note-icon { display: grid; place-items: center; flex: 0 0 21px; width: 21px; height: 21px; border-radius: 50%; background: #151515; color: #fff; font-size: 13px; font-weight: 800; }
    #${dialogId} .mcn-donation-done { min-height: 48px; border: 0; padding: 14px 25px; background: #dc3525; color: #fff; box-shadow: 0 10px 20px rgba(220,53,37,.25); font-size: 16px; font-weight: 800; cursor: pointer; }
    #${dialogId} .mcn-donation-status { min-height: 21px; margin: 10px 0 0; color: #315f2b; font-size: 14px; font-weight: 600; }
    #${dialogId} :focus-visible { outline: 3px solid #c29d59; outline-offset: 3px; }
    @media (max-width: 560px) { #${dialogId} { width: calc(100vw - 24px); max-height: calc(100dvh - 24px); border-radius: 18px; } #${dialogId} .mcn-donation-card { padding: 28px 16px 22px; } #${dialogId} .mcn-donation-intro { font-size: 15px; } #${dialogId} .mcn-donation-bank { padding: 18px 12px; } #${dialogId} .mcn-donation-bank p, #${dialogId} .mcn-donation-note { font-size: 14px; } }
  `;

  function copyAccountNumber() {
    if (navigator.clipboard?.writeText) {
      return navigator.clipboard.writeText(accountNumber).then(() => true).catch(() => copyWithTextarea());
    }
    return Promise.resolve(copyWithTextarea());
  }

  function copyWithTextarea() {
    const field = document.createElement("textarea");
    field.value = accountNumber;
    field.style.position = "fixed";
    field.style.opacity = "0";
    document.body.appendChild(field);
    field.select();
    let copied = false;
    try {
      copied = document.execCommand("copy");
    } catch {
      copied = false;
    }
    field.remove();
    return copied;
  }

  function createDialog() {
    const existing = document.getElementById(dialogId);
    if (existing) return existing;

    const style = document.createElement("style");
    style.textContent = styles;
    document.head.appendChild(style);

    const dialog = document.createElement("dialog");
    dialog.id = dialogId;
    dialog.setAttribute("aria-labelledby", "mcn-donation-title");
    dialog.setAttribute("aria-describedby", "mcn-donation-description");
    dialog.innerHTML = `
      <div class="mcn-donation-card">
        <button class="mcn-donation-close" type="button" aria-label="Close giving details">×</button>
        <img class="mcn-donation-logo" src="https://framerusercontent.com/images/orBhSL0iK4TRaiDEetxjPOhlFY.png?width=243&height=240" alt="Methodist Church Nigeria logo">
        <h2 id="mcn-donation-title">Support the Mission</h2>
        <p id="mcn-donation-description" class="mcn-donation-intro">Your generosity fuels our mission to take the whole Gospel to the whole world through evangelism and kingdom projects.</p>
        <section class="mcn-donation-bank" aria-label="Bank transfer details">
          <p>Bank Name: <strong>${bankName}</strong></p>
          <p>Account Name: <strong>${accountName}</strong></p>
          <p class="mcn-donation-label">ACCOUNT NUMBER</p>
          <p class="mcn-donation-number">${accountNumber}</p>
          <button class="mcn-donation-copy" type="button">Copy</button>
        </section>
        <div class="mcn-donation-note"><span class="mcn-donation-note-icon" aria-hidden="true">i</span><span>Please include a reference for your giving. Example:<br><strong>Building &amp; Projects, Tithes &amp; Offerings.</strong></span></div>
        <button class="mcn-donation-done" type="button">I HAVE MADE A TRANSFER</button>
        <p class="mcn-donation-status" role="status" aria-live="polite"></p>
      </div>`;
    document.body.appendChild(dialog);

    const close = () => dialog.close();
    dialog.querySelector(".mcn-donation-close").addEventListener("click", close);
    dialog.querySelector(".mcn-donation-done").addEventListener("click", close);
    dialog.addEventListener("click", (event) => { if (event.target === dialog) close(); });
    dialog.addEventListener("close", () => {
      if (lastTrigger instanceof HTMLElement && lastTrigger.isConnected && !lastTrigger.hasAttribute("disabled")) {
        lastTrigger.focus();
      }
    });
    dialog.querySelector(".mcn-donation-copy").addEventListener("click", async () => {
      const status = dialog.querySelector(".mcn-donation-status");
      const copied = await copyAccountNumber();
      status.textContent = copied ? "Account number copied." : "Copy failed. Please select the account number manually.";
    });
    return dialog;
  }

  function openDialog(trigger) {
    const openMenu = trigger.closest?.(".site-nav-panel.open");
    const menuToggle = document.querySelector('.menu-toggle[aria-controls="site-navigation"]');
    lastTrigger = openMenu && menuToggle ? menuToggle : trigger;
    trigger.dispatchEvent(new CustomEvent("mcn:donation-open", { bubbles: true }));

    const dialog = createDialog();
    dialog.querySelector(".mcn-donation-status").textContent = "";
    if (!dialog.open) dialog.showModal();
    dialog.querySelector(".mcn-donation-close").focus();
  }

  const giveNameSelector = '[data-framer-name="GIVE" i]';
  const giveButtonSelector = '[data-framer-name="BTN"]';
  const interactiveSelector = [
    astroTriggerSelector,
    giveButtonSelector,
    "a",
    "button",
    '[role="button"]',
    '[data-highlight="true"]',
    "[tabindex]",
  ].join(",");
  const menuControlSelector = [
    ":is(#overlay, #template-overlay, .framer-jcswC)",
    ':is(a, button, [role="button"], [data-highlight="true"], [tabindex])',
  ].join(" ");

  function isExactGiveLabel(element) {
    return element?.textContent?.replace(/\s+/g, " ").trim().toUpperCase() === "GIVE";
  }

  function findGiveTrigger(target) {
    if (!(target instanceof Element)) return null;

    const astroTrigger = target.closest(astroTriggerSelector);
    if (astroTrigger) return astroTrigger;

    const namedButton = target.closest(giveButtonSelector);
    if (namedButton?.querySelector(giveNameSelector)) return namedButton;

    const namedLabel = target.closest(giveNameSelector);
    if (namedLabel) return namedLabel.closest(interactiveSelector) || namedLabel;

    const menuControl = target.closest(menuControlSelector);
    return isExactGiveLabel(menuControl) ? menuControl : null;
  }

  function decorateGiveTrigger(trigger) {
    if (!trigger || trigger.dataset.donationBound === "true") return;

    trigger.dataset.donationBound = "true";
    if (!trigger.matches("a, button, input")) {
      trigger.setAttribute("role", "button");
      if (!trigger.hasAttribute("tabindex")) trigger.tabIndex = 0;
    }
    trigger.setAttribute("aria-haspopup", "dialog");
    trigger.setAttribute("aria-label", "Give to support the mission");
  }

  function bindGiveTriggers() {
    const triggers = new Set(document.querySelectorAll(astroTriggerSelector));

    document.querySelectorAll(giveNameSelector).forEach((label) => {
      triggers.add(label.closest(interactiveSelector) || label);
    });
    document.querySelectorAll(giveButtonSelector).forEach((button) => {
      if (button.querySelector(giveNameSelector)) triggers.add(button);
    });
    document.querySelectorAll(menuControlSelector).forEach((control) => {
      if (isExactGiveLabel(control)) triggers.add(control);
    });

    triggers.forEach(decorateGiveTrigger);
  }

  function handleGiveClick(event) {
    const trigger = findGiveTrigger(event.target);
    if (!trigger) return;

    event.preventDefault();
    if (!trigger.matches(astroTriggerSelector)) event.stopImmediatePropagation();
    decorateGiveTrigger(trigger);
    openDialog(trigger);
  }

  function handleGiveKeydown(event) {
    if ((event.key !== "Enter" && event.key !== " ") || event.repeat) return;

    const trigger = findGiveTrigger(event.target);
    if (!trigger || trigger.matches("button, a, input")) return;

    event.preventDefault();
    event.stopImmediatePropagation();
    decorateGiveTrigger(trigger);
    openDialog(trigger);
  }

  document.addEventListener("click", handleGiveClick, { capture: true });
  document.addEventListener("keydown", handleGiveKeydown, { capture: true });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bindGiveTriggers, { once: true });
  } else {
    bindGiveTriggers();
  }

  new MutationObserver(bindGiveTriggers).observe(document.documentElement, {
    childList: true,
    subtree: true,
  });
})();
