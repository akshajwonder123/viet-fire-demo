const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const btn = document.getElementById("menuBtn");
const links = document.getElementById("navLinks");

if (btn && links) {
  btn.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(isOpen));
  });

  links.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      links.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
    });
  });
}

function demoSubmit(e) {
  e.preventDefault();
  const msg = document.getElementById("formMsg");
  if (msg) msg.textContent = "Demo form submitted — in the real site this would email the restaurant.";
  return false;
}
window.demoSubmit = demoSubmit;
