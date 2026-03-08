// contact.js

document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("onboardingForm");
  const submitBtn = contactForm.querySelector(".submit-btn");

  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault(); // Verhindert das Neuladen der Seite

    // Visuelles Feedback: Button deaktivieren
    const originalBtnText = submitBtn.textContent;
    submitBtn.textContent = "Wird gesendet...";
    submitBtn.disabled = true;

    // Formulardaten sammeln
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData.entries());

    // Dein Webhook-Endpunkt (z.B. von Make, Zapier oder ein eigenes Backend)
    const webhookURL = "";

    try {
      const response = await fetch(webhookURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          source: "Website Contact Form",
          ...data,
        }),
      });

      if (response.ok) {
        alert("Vielen Dank! Deine Nachricht wurde erfolgreich versendet.");
        contactForm.reset(); // Formular leeren
      } else {
        throw new Error("Server-Fehler beim Senden.");
      }
    } catch (error) {
      console.error("Fehler beim Webhook-Versand:", error);
      alert(
        "Ups! Etwas ist schiefgelaufen. Bitte versuche es später erneut oder kontaktiere uns direkt.",
      );
    } finally {
      // Button wieder in Ursprungszustand versetzen
      submitBtn.textContent = originalBtnText;
      submitBtn.disabled = false;
    }
  });
});
