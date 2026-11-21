/* Kanish Station QR — little letters, not tracking or advertising */
(() => {
  "use strict";
  const notes = [
    "“Some people become memories. Some memories become a part of us.”",
    "“The softest love is sometimes the kind that asks for nothing in return.”",
    "“A beautiful goodbye can still carry a lifetime of kindness.”",
    "“Not every heartache is an ending. Sometimes it becomes art.”",
    "“If you ever think of a happy moment, I hope it makes you smile.”"
  ];
  const button = document.getElementById("next-feeling");
  const text = document.getElementById("feeling-text");
  const count = document.getElementById("feeling-count");
  if (!button || !text || !count) return;
  let index = 0;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  button.addEventListener("click", () => {
    index = (index + 1) % notes.length;
    text.textContent = notes[index];
    count.textContent = String(index + 1).padStart(2, "0") + " / " + String(notes.length).padStart(2, "0");
    if (!reduceMotion.matches && typeof text.animate === "function") {
      text.animate(
        [{ opacity: 0.25, transform: "translateY(8px)" }, { opacity: 1, transform: "translateY(0)" }],
        { duration: 390, easing: "ease-out" }
      );
    }
  });
})();
