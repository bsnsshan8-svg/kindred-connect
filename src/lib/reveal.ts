const REVEAL_SELECTOR = [
  ".section-heading",
  ".service-card",
  ".review-grid blockquote",
  ".process-list > div",
  ".stats-grid > div",
  ".about-card",
  ".about-visual",
  ".info-card",
  ".contact-card",
  ".detail-list > div",
  ".location-strip",
  ".appointment-banner",
  ".faq-list details",
  ".faq-page-list details",
  ".faq-aside",
  ".clinic-panel",
  ".portrait-image",
  ".schedule-table",
  ".notice",
  ".service-detail > *",
  ".page-hero .container > *",
].join(",");

/**
 * Adds fade/slide-up reveal classes to eligible elements once they scroll into view.
 * Purely presentational; returns a cleanup function.
 */
export function initReveal(root: HTMLElement): () => void {
  if (typeof window === "undefined" || !("IntersectionObserver" in window)) return () => {};

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-revealed");
        observer.unobserve(entry.target);
      }
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
  );

  const register = () => {
    const nodes = Array.from(root.querySelectorAll<HTMLElement>(REVEAL_SELECTOR));
    const groupIndex = new Map<Element, number>();

    for (const node of nodes) {
      if (node.dataset["reveal"]) continue;
      node.dataset["reveal"] = "true";

      const parent = node.parentElement;
      if (parent) {
        const index = groupIndex.get(parent) ?? 0;
        groupIndex.set(parent, index + 1);
        if (index > 0) node.style.setProperty("--reveal-delay", `${Math.min(index, 6) * 70}ms`);
      }

      if (reduceMotion) {
        node.classList.add("reveal", "is-revealed");
        continue;
      }

      node.classList.add("reveal");
      const rect = node.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.92) {
        node.classList.add("is-revealed");
      } else {
        observer.observe(node);
      }
    }
  };

  register();

  const mutations = new MutationObserver(() => register());
  mutations.observe(root, { childList: true, subtree: true });

  return () => {
    observer.disconnect();
    mutations.disconnect();
  };
}
