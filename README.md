# Bakerz Bite — Aptech eProject

A responsive Single-Page Application for the Bakerz Bite bakery brief.

## Included Requirements
- Responsive navbar, logo and hero/banner
- Cakes, Pastries, Cookies, Pies and Merchandise sections
- Product search/category/price filters
- Product detail pop-up with image, description and ingredients
- Offers section
- Gallery with image lightbox
- Feedback and 1–5 star rating using localStorage
- About Us, FAQ, Contact Us and Site Map
- Visitor count using localStorage
- Bottom scrolling ticker with live date/time and HTML5 geolocation
- Smooth navigation, hover/click states and fade/animation effects
- Bootstrap, HTML5, CSS3, JavaScript and JSON data

## Run
1. Extract the ZIP.
2. Open `index.html` in Chrome/Edge/Firefox, or serve the folder through VS Code Live Server.
3. Internet access is recommended because Bootstrap, icons, fonts and demo product images use CDN/remote assets.
4. Allow location permission to demonstrate the geolocation ticker.

## Project Structure
- `index.html` — main SPA
- `assets/style.css` — complete responsive styling
- `assets/app.js` — products, filters, modal, gallery, visitor count, feedback and geolocation
- `data/products.json` — sample JSON datastore
- `docs/Project_Report.md` — project report/documentation

## Demo Contact Details
Email: hello@bakerzbite.example
Phone: +92 300 1234567
Address: 123 Bakery Lane, Karachi, Pakistan

Replace demo contact details before final submission/deployment if required.


### Authentication
- The first time the project is opened, `index.html` redirects to `register.html`.
- Registration saves the user's name, email and password in browser `localStorage`.
- After registration, the user is sent to `login.html`.
- Login validates the saved account and opens `index.html` only after successful authentication.
- The account remains saved for future visits; the next new browser session asks the user to login again.
- `sessionStorage` is used for the active login session, and a Logout button is available on the main site.
- This is a frontend/static-demo authentication system. For a real production website, passwords should be handled by a backend/authentication service and never stored as plain text in `localStorage`.
