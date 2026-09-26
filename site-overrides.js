(() => {
  const OLD_PHONE_DISPLAY = "+234 810 244 3111";
  const NEW_PHONE_DISPLAY = "+234 706 558 1586";
  const OLD_PHONE_LINK = "+2348102443111";
  const NEW_PHONE_LINK = "+2347065581586";
  const OLD_ACTIVITY_TITLE = "Activities: Beyond Sunday";
  const NEW_ACTIVITY_TITLE = "Weekly Activities";

  let applying = false;

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

  function applyOverrides() {
    if (applying) return;
    applying = true;

    replaceText(document.body, OLD_PHONE_DISPLAY, NEW_PHONE_DISPLAY);
    replaceText(document.body, OLD_ACTIVITY_TITLE, NEW_ACTIVITY_TITLE);
    replaceText(document.body, "Upcoming Event", NEW_ACTIVITY_TITLE);

    document.querySelectorAll(`a[href="tel:${OLD_PHONE_LINK}"]`).forEach((link) => {
      link.href = `tel:${NEW_PHONE_LINK}`;
      link.setAttribute("aria-label", `Call ${NEW_PHONE_DISPLAY}`);
    });

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

  new MutationObserver(scheduleOverrides).observe(document.documentElement, {
    childList: true,
    subtree: true,
    characterData: true,
  });

  window.addEventListener("load", applyOverrides, { once: true });
  setTimeout(applyOverrides, 250);
  setTimeout(applyOverrides, 1000);
})();
