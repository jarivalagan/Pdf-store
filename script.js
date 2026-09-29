/*
  IMPORTANT:
  Replace 919999999999 below with your WhatsApp number in international format,
  without +, spaces or punctuation.
  Example for an Indian number: 919876543210
*/
const SELLER_WHATSAPP = "919999999999";

document.getElementById("sendBtn").addEventListener("click", () => {
  const name = document.getElementById("name").value.trim();
  const contact = document.getElementById("contact").value.trim();
  const utr = document.getElementById("utr").value.trim();

  if (!name || !contact || !utr) {
    alert("Please enter your name, WhatsApp/email, and UTR/transaction ID.");
    return;
  }

  const message =
`PDF Purchase – ₹600

Name: ${name}
WhatsApp / Email: ${contact}
UPI UTR / Transaction ID: ${utr}

I have paid ₹600 for the M.Com → AI Engineer 12-Month Roadmap PDF.`;

  if (SELLER_WHATSAPP === "919999999999") {
    alert("Seller WhatsApp number is still a placeholder. Open script.js and replace it with your number.");
    return;
  }

  window.open(
    `https://wa.me/${SELLER_WHATSAPP}?text=${encodeURIComponent(message)}`,
    "_blank"
  );
});
