(() => {
  const accountNumber = "34184792093";
  const dialogId = "mcn-donation-dialog";
  let lastTrigger = null;

  const styles = `
    #${dialogId} { border: 0; padding: 0; width: min(680px, calc(100vw - 32px)); max-width: none; max-height: min(780px, calc(100dvh - 32px)); overflow: auto; border-radius: 22px; background: #fff; color: #121212; box-shadow: 0 24px 80px rgba(0,0,0,.35); }
    #${dialogId}::backdrop { background: rgba(12, 6, 30, .68); backdrop-filter: blur(3px); }
    #${dialogId} .mcn-donation-card { position: relative; padding: 30px; text-align: center; font-family: Sora, Arial, sans-serif; }
    #${dialogId} .mcn-donation-close { position: absolute; top: 14px; right: 14px; display: grid; place-items: center; width: 38px; height: 38px; border: 0; border-radius: 50%; background: #eee; color: #171717; font-size: 25px; line-height: 1; cursor: pointer; }
    #${dialogId} .mcn-donation-logo { width: 58px; height: 58px; object-fit: contain; margin: 0 auto 6px; }
    #${dialogId} h2 { margin: 0; font-size: 19px; line-height: 1.2; font-weight: 800; text-transform: uppercase; }
    #${dialogId} .mcn-donation-intro { max-width: 580px; margin: 7px auto 20px; font-size: 17px; line-height: 1.45; }
    #${dialogId} .mcn-donation-bank { padding: 19px 20px 20px; background: #0c0c0c; color: #fff; }
    #${dialogId} .mcn-donation-bank p { margin: 0; font-size: 16px; line-height: 1.38; }
    #${dialogId} .mcn-donation-label { margin-top: 13px !important; color: #d9d9d9; font-size: 13px !important; font-weight: 800; letter-spacing: .08em; }
    #${dialogId} .mcn-donation-number { margin: 0 0 13px; color: #fff; font-size: clamp(34px, 6vw, 48px); font-weight: 800; letter-spacing: .02em; line-height: 1; }
    #${dialogId} .mcn-donation-copy { border: 0; padding: 10px 28px; background: #c29d59; color: #171717; font-size: 16px; font-weight: 700; cursor: pointer; }
    #${dialogId} .mcn-donation-note { display: flex; align-items: flex-start; justify-content: center; gap: 11px; margin: 20px 0; padding: 18px; border: 1px solid #dfd6c3; background: #f4f0e8; font-size: 16px; line-height: 1.45; }
    #${dialogId} .mcn-donation-note-icon { display: grid; place-items: center; flex: 0 0 21px; width: 21px; height: 21px; border-radius: 50%; background: #151515; color: #fff; font-size: 13px; font-weight: 800; }
    #${dialogId} .mcn-donation-done { border: 0; padding: 16px 25px; background: #dc3525; color: #fff; box-shadow: 0 10px 20px rgba(220,53,37,.25); font-size: 16px; font-weight: 800; cursor: pointer; }
    #${dialogId} .mcn-donation-status { min-height: 21px; margin: 10px 0 0; color: #315f2b; font-size: 14px; font-weight: 600; }
    @media (max-width: 560px) { #${dialogId} { width: calc(100vw - 24px); max-height: calc(100dvh - 24px); border-radius: 18px; } #${dialogId} .mcn-donation-card { padding: 28px 16px 22px; } #${dialogId} .mcn-donation-intro { font-size: 15px; } #${dialogId} .mcn-donation-bank { padding: 18px 12px; } #${dialogId} .mcn-donation-bank p, #${dialogId} .mcn-donation-note { font-size: 14px; } }
  `;

  function createDialog() {
    if (document.getElementById(dialogId)) return document.getElementById(dialogId);
    const style = document.createElement("style");
    style.textContent = styles;
    document.head.appendChild(style);

    const dialog = document.createElement("dialog");
    dialog.id = dialogId;
    dialog.setAttribute("aria-labelledby", "mcn-donation-title");
    dialog.innerHTML = `
      <div class="mcn-donation-card">
        <button class="mcn-donation-close" type="button" aria-label="Close giving details">×</button>
        <img class="mcn-donation-logo" src="https://framerusercontent.com/images/orBhSL0iK4TRaiDEetxjPOhlFY.png?width=243&height=240" alt="Methodist Church Nigeria logo">
        <h2 id="mcn-donation-title">Support the Mission</h2>
        <p class="mcn-donation-intro">Your generosity fuels our mission to take the whole Gospel to the whole world through evangelism and kingdom projects.</p>
        <section class="mcn-donation-bank" aria-label="Bank transfer details">
          <p>Bank Name: <strong>First Bank Nigeria</strong></p>
          <p>Account Name: <strong>MCN 67, Udo Umana</strong></p>
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
    dialog.addEventListener("close", () => { lastTrigger?.focus(); });
    dialog.querySelector(".mcn-donation-copy").addEventListener("click", async () => {
      const status = dialog.querySelector(".mcn-donation-status");
      try {
        await navigator.clipboard.writeText(accountNumber);
      } catch {
        const field = document.createElement("textarea");
        field.value = accountNumber;
        field.style.position = "fixed";
        field.style.opacity = "0";
        document.body.appendChild(field);
        field.select();
        document.execCommand("copy");
        field.remove();
      }
      status.textContent = "Account number copied.";
    });
    return dialog;
  }

  function openDialog(trigger) {
    lastTrigger = trigger;
    const dialog = createDialog();
    if (!dialog.open) dialog.showModal();
    dialog.querySelector(".mcn-donation-close").focus();
  }

  function findGiveTrigger(target) {
    const label = target.closest?.('[data-framer-name="GIVE"]');
    return label?.closest('[data-framer-name="BTN"]') || null;
  }

  function bindGiveTriggers() {
    document.querySelectorAll('[data-framer-name="GIVE"]').forEach((label) => {
      const trigger = label.closest('[data-framer-name="BTN"]');
      if (!trigger) return;
      trigger.dataset.donationBound = "true";
      trigger.setAttribute("role", "button");
      trigger.setAttribute("aria-haspopup", "dialog");
      trigger.setAttribute("aria-label", "Give to support the mission");
    });
  }

  document.addEventListener("click", (event) => {
    const trigger = findGiveTrigger(event.target);
    if (!trigger) return;
    event.preventDefault();
    openDialog(trigger);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    const trigger = findGiveTrigger(event.target) || event.target.closest?.('[data-framer-name="BTN"]');
    if (!trigger?.querySelector('[data-framer-name="GIVE"]')) return;
    event.preventDefault();
    openDialog(trigger);
  });

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", bindGiveTriggers, { once: true });
  else bindGiveTriggers();

  new MutationObserver(bindGiveTriggers).observe(document.documentElement, {
    childList: true,
    subtree: true,
  });
})();
