# PDF Selling Website — ₹600 UPI

This is a simple mobile-friendly static website for manually selling your PDF.

## Included
- `index.html` — product/payment page
- `style.css` — design
- `script.js` — payment-details-to-WhatsApp form
- `assets/upi-qr.jpg` — the QR image you provided

## IMPORTANT BEFORE PUBLISHING

1. Open `script.js`.
2. Find:
   `const SELLER_WHATSAPP = "919999999999";`
3. Replace it with your own Indian WhatsApp number, e.g.:
   `const SELLER_WHATSAPP = "919876543210";`
4. Test the page on your phone.
5. Do NOT upload the paid PDF into the public website folder if you want to manually verify payment first.
6. After verifying a payment, send the PDF privately to the buyer.

## Free hosting
You can publish this as a static site using a free static-hosting service such as GitHub Pages or Cloudflare Pages. The site itself does not require a paid server.

## Buyer flow
Website → Scan QR → Pay ₹600 → Enter UTR/contact → WhatsApp message to seller → Seller verifies payment → Seller sends PDF privately.

The website does not automatically verify UPI payments.
