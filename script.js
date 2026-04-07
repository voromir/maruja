const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const reservationForm = document.querySelector("#reservation-form");
const feedback = document.querySelector("#form-feedback");

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

if (header) {
  const syncHeaderState = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 20);
  };

  syncHeaderState();
  window.addEventListener("scroll", syncHeaderState, { passive: true });
}

if (reservationForm && feedback) {
  reservationForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(reservationForm);
    const name = formData.get("name") || "Tu nombre";
    const date = formData.get("date") || "fecha pendiente";
    const time = formData.get("time") || "hora pendiente";

    feedback.textContent =
      `Solicitud mock recibida para ${name} el ${date} a las ${time}. No se ha enviado ningun dato fuera del navegador.`;

    reservationForm.reset();
  });
}
