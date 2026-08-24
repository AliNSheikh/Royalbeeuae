# Royal Bee UAE — Deployment Package

This is a self-contained static website for Royal Bee Pest Control & Sanitization.

## Included

- `index.html` — bilingual Arabic/English page.
- `style.css` — responsive design, mobile navigation, cards, FAQ, animations and accessibility states.
- `script.js` — language switcher, form handling, Google Sheets integration, WhatsApp fallback, FAQ and mobile menu interactions.
- `config.js` — business settings and Google Sheets endpoint configuration.
- `assets/royal-bee-logo.png` — supplied Royal Bee logo with the white background removed.
- `assets/icons.svg` — local SVG icon set, so critical icons do not depend on Font Awesome or a local-server CDN load.
- `google-apps-script.gs` — Google Apps Script endpoint for writing form submissions to Google Sheets.

## Run locally in VS Code

1. Open the project folder in VS Code.
2. Install/use a static server such as VS Code Live Server.
3. Open `index.html` through the server.
4. The site does not require Font Awesome. Icons are loaded from `assets/icons.svg`, which fixes the common local-server icon-loading problem.

## Google Sheets setup

1. Create a Google Sheet and optionally rename the first sheet to `Leads`.
2. Open **Extensions → Apps Script**.
3. Copy the contents of `google-apps-script.gs` into `Code.gs`.
4. Save the project.
5. Click **Deploy → New deployment**.
6. Select **Web app**.
7. Set **Execute as** to your Google account (Me).
8. Set **Who has access** to **Anyone**.
9. Deploy and authorize the script if Google asks.
10. Copy the generated **Web app URL**.
11. Open `config.js` and set:

   `GOOGLE_SHEETS_ENDPOINT: 'PASTE_YOUR_WEB_APP_URL_HERE'`

12. Upload the updated project to your host.

The form sends these columns: Timestamp, Name, Phone, Service, City, Language, Source.

### Important

The website intentionally also opens WhatsApp after a successful form submission. This gives the sales team an immediate message while Google Sheets provides a lead record. If you want Sheets-only behavior, remove the `openWhatsapp(payload);` line in `script.js`.

## Deployment

Because this is a static site, it can be deployed to shared hosting, cPanel, Netlify, Vercel, GitHub Pages, Cloudflare Pages, or any normal web host.

For cPanel/shared hosting, upload the contents of this folder into `public_html` so that `index.html` is directly inside the web root.

## Before going live

- Put the final Google Apps Script URL in `config.js`.
- Confirm the phone number, email, social links and map link.
- Submit a test lead and confirm it appears in the `Leads` sheet.
- Test Arabic/English switching on desktop and mobile.
- Test the form on both HTTPS hosting and a local VS Code server.
