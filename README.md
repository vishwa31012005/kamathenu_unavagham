# KAMATHENU UNAVAGHAM — Landing Page Website

> **Different Tastes. One Destination.**  
> A premium, modern, visually impressive, mobile-first website for Kamathenu Unavagham located inside Semmozhi Poonga, Coimbatore.

---

## 🌟 Key Features

- **Mobile-First Experience**: Tailored for smartphone visitors with thumb-friendly actions, smooth horizontal category scrolling, and sticky bottom action bar (Call, WhatsApp, Menu, Maps).
- **Brand Palette**: Clean White, warm Metallic Golden, and rich Ruby Crimson Red. Elegant, family-friendly, and modern.
- **Multiple Food Stalls**: Promotes all 12 stalls & refreshment services with real photos, menu highlights, and quick modal previews.
- **Complete Menu**: Filter by 14 categories (Meals, Fried Chicken, Burgers, Sandwiches, Momos, Snacks, Chats, Desserts, Drinks, Ice Pops, Soups, Waffles, Other) with instant live search and zero prices displayed.
- **Atmosphere Gallery & Lightbox**: 10 real photos of seating and park ambiance with an interactive, full-screen lightbox modal.
- **Visitor Guidance**: Dedicated Park Entry notice, Facilities (~100 guest capacity, kids area nearby, parking, clean restrooms, drinking water), and interactive Google Maps direction links.
- **No Complex Build Tools Required**: Zero dependencies. Works immediately by opening `index.html` in any web browser or hosting on any static web host.

---

## 📁 Project Directory Structure

```text
KAMATHENU UNAVAGHAM/
│
├── index.html                  # Main semantic landing page (SEO-optimized, mobile-first)
├── server.ps1                  # Optional zero-dependency local preview server
├── README.md                   # Project documentation & customization guide
│
├── css/
│   └── style.css               # Design tokens, responsive CSS, mobile drawer, animations
│
├── js/
│   ├── data.js                 # Centralized configuration (Business info, stalls, menu items, gallery)
│   └── main.js                 # Component renderers, search & category filtering, lightbox & modals
│
└── image/
    ├── shops/                  # Real stall photos, logo, and restaurant exterior
    │   ├── front-view.jpeg     # Hero exterior visual
    │   ├── logo.jpeg           # Official brand logo
    │   ├── a2a-ice-cream.jpeg  # A2A Ice Popsticks
    │   ├── thattu-vadai-settu.jpeg # Salem Thattuvadai Settu
    │   ├── fryzo.jpeg          # Fryzo
    │   ├── kamathenu-restaurant.jpeg # Kamathenu Restaurant
    │   ├── bombay-chats.jpeg   # Bombay Chats
    │   ├── guru-cool-hub.jpeg  # Guru Cool Hub
    │   ├── hot-spring.jpeg     # Hot Spring
    │   ├── natural-soup.jpeg   # Natural Soups
    │   ├── sr-pop-corn.jpeg    # SR Popcorn
    │   ├── delhi-appalam.jpeg  # Delhi Appalam
    │   └── cotton-candy.jpeg   # Indhra Cotton Candies
    │
    ├── atmosphere/             # Real photos of seating, lighting, and park environment
    │   ├── atmosphere-01.jpeg to atmosphere-10.jpeg
    │
    └── food/                   # Curated food category images (Meals, Burgers, Waffles, etc.)
        ├── meals.jpg, fried-chicken.jpg, burgers.jpg, sandwiches.jpg, etc.
```

---

## 🛠️ How to Customize & Replace Content

All business data and media paths are **centralized inside `js/data.js`**. You do not need to hunt through HTML to make updates!

### 1. Update Phone / WhatsApp / Links
In `js/data.js`, edit `businessInfo`:
```javascript
businessInfo: {
  phone: "9626009779",
  whatsapp: "9626009779",
  whatsappUrl: "https://wa.me/919626009779",
  email: "kamathenuunavagham@gmail.com",
  openingHours: "8:00 AM – 8:00 PM",
  ...
}
```

### 2. Replace Logo or Hero Exterior Photo
Place your new image file in `image/shops/` and update the path in `js/data.js`:
```javascript
logoImage: "image/shops/logo.jpeg",
heroImage: "image/shops/front-view.jpeg",
```

### 3. Replace or Update Bombay Chats (Sample Menu)
In `js/data.js`, search for `Bombay Chats` under `menuItems` and adjust or add real items:
```javascript
{
  id: "bc-01",
  name: "Pani Puri",
  stall: "Bombay Chats",
  category: "Chats",
  type: "veg",
  isSample: false, // Change to false once finalized
  description: "..."
}
```

### 4. Replace or Update Massage Center (Sample Services)
In `js/data.js`, search for `Massage Center` under `menuItems` and adjust the services:
```javascript
{
  id: "ms-01",
  name: "Foot Massage",
  stall: "Massage Center",
  category: "Other",
  type: "service",
  isSample: false, // Change to false once finalized
  description: "..."
}
```

---

## 🚀 How to Run the Website Locally

### Option A: Direct in Browser
Double click `index.html` to open it in Chrome, Edge, Safari, or Firefox.

### Option B: Local HTTP Server (Port 3000)
Run in PowerShell:
```powershell
powershell -ExecutionPolicy Bypass -File .\server.ps1
```
Then visit: `http://localhost:3000`

---

## 🌐 How to Deploy Live
You can deploy this static project to any hosting platform in seconds:
- **GitHub Pages**: Push repo and enable Pages under Settings.
- **Netlify / Vercel**: Drag & drop this folder into your dashboard.
- **cPanel / Apache / Nginx**: Upload all files to `public_html`.
