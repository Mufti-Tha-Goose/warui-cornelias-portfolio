/* Shared interactions for the portfolio. */
"use strict";

document.addEventListener("DOMContentLoaded", () => {
  // Keep the copyright year current without editing every page.
  document.querySelectorAll("[data-year]").forEach((element) => {
    element.textContent = new Date().getFullYear();
  });

  // Accessible mobile navigation.
  const menuToggle = document.querySelector(".menu-toggle");
  const navigation = document.querySelector("#primary-nav");

  if (menuToggle && navigation) {
    menuToggle.addEventListener("click", () => {
      const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!isExpanded));
      menuToggle.setAttribute("aria-label", isExpanded ? "Open navigation" : "Close navigation");
      navigation.classList.toggle("is-open", !isExpanded);
    });

    navigation.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navigation.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation");
      });
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 800) {
        navigation.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation");
      }
    });
  }

  // GitHub Pages is a static host, so the form prepares an email instead
  // of pretending to submit to a server-side endpoint.
  const contactForm = document.querySelector("#contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();

      if (!contactForm.reportValidity()) return;

      const formData = new FormData(contactForm);
      const name = String(formData.get("name")).trim();
      const email = String(formData.get("email")).trim();
      const message = String(formData.get("message")).trim();

      // Replace this placeholder with the portfolio owner's real address.
      const recipient = "your.email@example.com";
      const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
      );

      const status = document.querySelector("#form-status");
      if (status) {
        status.textContent = "Your email application should open with the message prepared. Review it and press Send.";
      }

      window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    });
  }
});
