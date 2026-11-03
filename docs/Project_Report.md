# Bakerz Bite — Project Report

## 1. Problem Definition
Bakerz Bite requires a visually appealing, responsive single-page bakery website that presents bakery products, merchandise, offers and business information while allowing visitors to filter products, inspect detailed product information, view a gallery and submit feedback/rating.

## 2. Objectives
- Build a responsive single-page bakery portal.
- Present cakes, pastries, cookies, pies and merchandise.
- Provide product search and filtering.
- Display detailed product specifications in pop-up windows.
- Add offers, gallery, FAQ, About Us, Contact Us and Site Map.
- Implement visitor count, live date/time and HTML5 geolocation ticker.
- Use consistent branding, smooth navigation and animations.

## 3. Technologies
Frontend: HTML5, CSS3, Bootstrap 5, JavaScript, Bootstrap Icons.
Data Store: JSON file plus browser localStorage for visitor count and feedback.
Browser support: modern Chrome, Edge, Firefox and Safari.

## 4. Design Specification
### Color Palette
- Dark Brown: #3C2116
- Orange: #D97B4C
- Cream: #FFF8ED
- Peach: #F6D6BD
- Gold: #E9AD62

### Main Modules
1. Home / Hero
2. Product Menu
3. Product Detail Modal
4. Offers
5. Gallery
6. About Us
7. FAQ
8. Feedback and Rating
9. Contact / Site Map
10. Footer and Live Ticker

## 5. Data Flow
Visitor → Website → Product Filter → Product Cards → Product Modal
Visitor → Feedback Form → localStorage → Saved Feedback Display
Browser → Geolocation API → Location → Bottom Ticker
Browser → LocalStorage → Visitor Counter → Navbar

## 6. Test Data
| Test | Input | Expected Result |
|---|---|---|
| Search | `cake` | Cake products displayed |
| Category | `Cookies` | Cookie products displayed |
| Price | `Under Rs. 800` | Products below Rs. 800 displayed |
| Product click | Any product card | Detail modal opens |
| Gallery | Any gallery image | Large image modal opens |
| Rating | 1–5 stars | Selected stars highlight |
| Feedback | Name + feedback | Feedback saved locally |
| Visitor count | Reload page | Count increments |
| Location | Allow browser permission | Coordinates shown in ticker |

## 7. Installation
1. Extract the project ZIP.
2. Open `index.html` directly or use a local web server.
3. For best results, use VS Code Live Server.
4. Internet access is recommended for CDN assets and remote demo images.

## 8. Assumptions
- This is a frontend demonstration project; no server-side ordering/payment system is included.
- Feedback and visitor count are browser-local demo features.
- Contact information is demo data and should be replaced with real business information.
- Remote image URLs are used to keep the ZIP lightweight.

## 9. Future Enhancements
- PHP/Laravel or Node.js backend.
- MySQL product/order database.
- Customer authentication.
- Shopping cart and online checkout.
- Admin dashboard.
- Real-time order tracking.
