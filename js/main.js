/**
 * KAMATHENU UNAVAGHAM - Main Application Script
 * Component renderers, mobile navigation, search & category filtering,
 * gallery lightbox, modal dialogs, and SVG icon system.
 */

document.addEventListener("DOMContentLoaded", () => {
  const data = window.restaurantData;
  if (!data) {
    console.error("restaurantData not loaded!");
    return;
  }

  // Pure Vector SVG Icons Map (Prevents any emoji or encoding corruption)
  const svgIcons = {
    destination: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>`,
    family: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    park: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5"/><path d="M7 14l5-5 5 5"/><path d="M5 19h14"/></svg>`,
    cravings: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2v20M6 2v7a3 3 0 0 0 3 3v10M10 2v7M6 2H2"/></svg>`,
    child: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="3"/><path d="M9 14l3-2 3 2v6H9v-6z"/><path d="M6 10l3 2"/><path d="M18 10l-3 2"/></svg>`,
    water: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>`,
    restroom: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 11V7a3 3 0 0 1 6 0v4"/><rect x="4" y="11" width="12" height="10" rx="2"/><circle cx="10" cy="4" r="2"/></svg>`,
    car: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="8" rx="2"/><circle cx="7.5" cy="18.5" r="1.5"/><circle cx="16.5" cy="18.5" r="1.5"/><path d="M5 11l2-5h10l2 5"/></svg>`,
    bike: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="5.5" cy="17.5" r="3.5"/><circle cx="18.5" cy="17.5" r="3.5"/><path d="M15 6h2m-5 4l3-4h-5l-4 6h7l2 5.5"/></svg>`,
    chair: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"/><path d="M3 11v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"/><path d="M6 18v3M18 18v3"/></svg>`,
    card: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>`,
    ticket: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M10 6v12M14 6v12"/></svg>`,
    utensils: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2v20M6 2v7a3 3 0 0 0 3 3v10M10 2v7M6 2H2"/></svg>`,
    heart: `<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`,
    search: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`
  };

  let currentCategory = "All";
  let searchQuery = "";
  let currentGalleryIndex = 0;

  /* --------------------------------------------------------------------------
     1. Sticky Navbar & Mobile Drawer
     -------------------------------------------------------------------------- */
  const navbar = document.getElementById("navbar");
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const mobileDrawer = document.getElementById("mobileDrawer");
  const drawerBackdrop = document.getElementById("drawerBackdrop");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
  const backToTopBtn = document.getElementById("backToTopBtn");

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    if (scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    if (scrollY > 450) {
      backToTopBtn.classList.add("visible");
    } else {
      backToTopBtn.classList.remove("visible");
    }

    highlightActiveNavLink();
  }, { passive: true });

  function openDrawer() {
    hamburgerBtn.classList.add("open");
    mobileDrawer.classList.add("open");
    drawerBackdrop.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeDrawer() {
    hamburgerBtn.classList.remove("open");
    mobileDrawer.classList.remove("open");
    drawerBackdrop.classList.remove("open");
    document.body.style.overflow = "";
  }

  hamburgerBtn.addEventListener("click", () => {
    if (mobileDrawer.classList.contains("open")) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  drawerBackdrop.addEventListener("click", closeDrawer);

  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", closeDrawer);
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  const navSections = document.querySelectorAll("section[id]");
  const desktopNavLinks = document.querySelectorAll(".nav-link");

  function highlightActiveNavLink() {
    const scrollPos = window.scrollY + 120;
    navSections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");

      if (scrollPos >= top && scrollPos < top + height) {
        desktopNavLinks.forEach((link) => {
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });
  }

  /* --------------------------------------------------------------------------
     2. Render Food Discovery ("What Are You Craving Today?")
     -------------------------------------------------------------------------- */
  const cravingsContainer = document.getElementById("cravingsGrid");
  if (cravingsContainer && data.cravings) {
    cravingsContainer.innerHTML = data.cravings
      .map(
        (c) => `
      <div class="craving-card" data-category="${c.targetCategory}" role="button" tabindex="0" title="Explore ${c.name}">
        <div class="craving-img-box">
          <img src="${c.image}" alt="${c.name} at Kamathenu Unavagham" loading="lazy" />
          <span class="craving-floating-tag">${c.tag}</span>
          <div class="craving-overlay"></div>
        </div>
        <div class="craving-content">
          <h3 class="craving-name">${c.name}</h3>
          <span class="craving-explore-btn">Explore Menu <span class="arrow">&rarr;</span></span>
        </div>
      </div>
    `
      )
      .join("");

    cravingsContainer.querySelectorAll(".craving-card").forEach((card) => {
      card.addEventListener("click", () => {
        const stallsSection = document.getElementById("stalls");
        if (stallsSection) {
          stallsSection.scrollIntoView({ behavior: "smooth" });
        }
      });
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          card.click();
        }
      });
    });
  }

  /* --------------------------------------------------------------------------
     3. Render Explore Food Stalls
     -------------------------------------------------------------------------- */
  const stallsContainer = document.getElementById("stallsGrid");
  if (stallsContainer && data.stalls) {
    stallsContainer.innerHTML = data.stalls
      .map((stall) => {
        const sampleBadge = stall.isSample
          ? `<span class="stall-badge sample-badge">Sample Details</span>`
          : `<span class="stall-badge">${stall.badge}</span>`;

        const specialtyTags = stall.specialties
          ? stall.specialties
              .map((s) => `<span class="specialty-tag">${s}</span>`)
              .join("")
          : "";

        return `
        <article class="stall-card" data-stall-id="${stall.id}">
          <div class="stall-img-wrapper">
            <img src="${stall.image}" alt="${stall.name} at Kamathenu Unavagham" loading="lazy" />
            ${sampleBadge}
          </div>
          <div class="stall-body">
            <h3 class="stall-title">${stall.name}</h3>
            <p class="stall-desc">${stall.description}</p>
            
            <div class="stall-specialties-wrap">
              <div class="stall-specialties-label">Popular Highlights:</div>
              <div class="stall-specialties-tags">
                ${specialtyTags}
              </div>
            </div>

            <div class="stall-action">
              <button type="button" class="btn btn-gold btn-sm stall-view-menu-btn" data-stall-id="${stall.id}" style="width: 100%;">
                <span>View Stall Offerings</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>
        </article>
      `;
      })
      .join("");

    stallsContainer.querySelectorAll(".stall-view-menu-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const stallId = btn.getAttribute("data-stall-id");
        openStallModal(stallId);
      });
    });
  }

  /* --------------------------------------------------------------------------
     4. Render Customer Reviews / Testimonials (Automatic Horizontal Scrolling)
     -------------------------------------------------------------------------- */
  const reviewsTrack = document.getElementById("reviewsTrack");
  const starSvg = `<svg width="16" height="16" viewBox="0 0 24 24" fill="#d4af37"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>`;
  const quoteSvg = `<svg width="24" height="24" viewBox="0 0 24 24" fill="#d4af37" opacity="0.6"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>`;
  const checkSvg = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`;

  if (reviewsTrack && data.reviews) {
    // Duplicate reviews array to create seamless continuous marquee loop
    const doubleReviews = data.reviews.concat(data.reviews);
    
    reviewsTrack.innerHTML = doubleReviews
      .map((rev) => {
        const initial = rev.name.charAt(0).toUpperCase();
        const stars = Array(rev.rating).fill(starSvg).join("");

        return `
        <article class="review-card">
          <div class="review-card-top">
            <div class="review-stars-row" aria-label="5 out of 5 stars">
              ${stars}
            </div>
            <div class="review-quote-icon">
              ${quoteSvg}
            </div>
          </div>
          <p class="review-text">"${rev.text}"</p>
          <div class="review-author-wrap">
            <div class="review-avatar">${initial}</div>
            <div>
              <div class="review-author-name">${rev.name}</div>
              <div class="review-author-meta">
                <span>${rev.tag}</span>
                <span>&bull;</span>
                <span class="review-verified-tag">${checkSvg} ${rev.badge}</span>
              </div>
            </div>
          </div>
        </article>
      `;
      })
      .join("");
  }

  /* --------------------------------------------------------------------------
     4b. Live Operating Hours & Interactive Frontview Card
     -------------------------------------------------------------------------- */
  const liveStatusElem = document.getElementById("heroLiveStatus");
  if (liveStatusElem) {
    const now = new Date();
    const hour = now.getHours();
    // 8:00 AM (8) to 8:00 PM (20)
    const isOpen = hour >= 8 && hour < 20;

    if (isOpen) {
      liveStatusElem.innerHTML = `
        <span class="hero-live-dot"></span>
        <span>Open Now &bull; Closes at 8:00 PM</span>
      `;
    } else {
      liveStatusElem.innerHTML = `
        <span class="hero-live-dot" style="background: #f59e0b; box-shadow: 0 0 10px #f59e0b;"></span>
        <span>Opens at 8:00 AM &bull; Today</span>
      `;
    }
  }

  // Clicking the frontview card opens the gallery lightbox for a rich view
  const heroFrontviewCard = document.getElementById("heroFrontviewCard");
  if (heroFrontviewCard) {
    heroFrontviewCard.addEventListener("click", () => {
      openLightbox(0);
    });
    heroFrontviewCard.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openLightbox(0);
      }
    });
  }

  /* --------------------------------------------------------------------------
     5. Render Why Visit Feature Cards (Pure Vector SVGs)
     -------------------------------------------------------------------------- */
  const whyVisitContainer = document.getElementById("whyVisitGrid");
  if (whyVisitContainer && data.whyVisit) {
    whyVisitContainer.innerHTML = data.whyVisit
      .map(
        (card) => `
      <div class="why-card">
        <div class="why-icon-box">
          ${svgIcons[card.iconKey] || svgIcons.destination}
        </div>
        <h3 class="why-title">${card.title}</h3>
        <p class="why-desc">${card.description}</p>
      </div>
    `
      )
      .join("");
  }

  /* --------------------------------------------------------------------------
     6. Render Atmosphere Gallery & Lightbox
     -------------------------------------------------------------------------- */
  const galleryContainer = document.getElementById("galleryGrid");
  const lightboxModal = document.getElementById("lightboxModal");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxTitle = document.getElementById("lightboxTitle");
  const lightboxSub = document.getElementById("lightboxSub");
  const lightboxCloseBtn = document.getElementById("lightboxCloseBtn");
  const lightboxPrevBtn = document.getElementById("lightboxPrevBtn");
  const lightboxNextBtn = document.getElementById("lightboxNextBtn");

  if (galleryContainer && data.atmosphereGallery && data.atmosphereGallery.length > 0) {
    const half = Math.ceil(data.atmosphereGallery.length / 2);
    const row1 = data.atmosphereGallery.slice(0, half);
    const row2 = data.atmosphereGallery.slice(half);

    const renderSlide = (item, origIndex) => `
      <div class="gallery-slide-card" data-index="${origIndex}" role="button" tabindex="0" title="Click to view full image: ${item.title}">
        <div class="gallery-slide-img-wrap">
          <img src="${item.src}" alt="${item.title} at Kamathenu Unavagham" loading="lazy" />
          <div class="gallery-slide-overlay">
            <span class="gallery-slide-tag">${item.category || "Showcase"}</span>
            <div class="gallery-slide-text">
              <h4 class="gallery-slide-title">${item.title}</h4>
              <p class="gallery-slide-sub">${item.subtitle}</p>
            </div>
          </div>
          <div class="gallery-zoom-badge">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </div>
        </div>
      </div>
    `;

    galleryContainer.innerHTML = `
      <div class="gallery-marquee-wrap">
        <!-- Top Track: Continuously moves LEFT -->
        <div class="gallery-marquee-row row-move-left" aria-label="Gallery Showcase Row 1">
          <div class="gallery-marquee-track">
            ${row1.map((item, i) => renderSlide(item, i)).join("")}
            ${row1.map((item, i) => renderSlide(item, i)).join("")}
          </div>
        </div>

        <!-- Bottom Track: Continuously moves RIGHT -->
        <div class="gallery-marquee-row row-move-right" aria-label="Gallery Showcase Row 2">
          <div class="gallery-marquee-track">
            ${row2.map((item, i) => renderSlide(item, half + i)).join("")}
            ${row2.map((item, i) => renderSlide(item, half + i)).join("")}
          </div>
        </div>
      </div>
    `;

    galleryContainer.querySelectorAll(".gallery-slide-card").forEach((card) => {
      card.addEventListener("click", () => {
        const idx = parseInt(card.getAttribute("data-index"), 10);
        openLightbox(idx);
      });
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          card.click();
        }
      });
    });
  }

  function openLightbox(index) {
    if (!data.atmosphereGallery || !data.atmosphereGallery[index]) return;
    currentGalleryIndex = index;
    const item = data.atmosphereGallery[index];
    lightboxImg.src = item.src;
    lightboxImg.alt = item.title;
    lightboxTitle.textContent = item.title;
    lightboxSub.textContent = item.subtitle;
    lightboxModal.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightboxModal.classList.remove("open");
    document.body.style.overflow = "";
  }

  function showNextGallery() {
    const nextIdx = (currentGalleryIndex + 1) % data.atmosphereGallery.length;
    openLightbox(nextIdx);
  }

  function showPrevGallery() {
    const prevIdx =
      (currentGalleryIndex - 1 + data.atmosphereGallery.length) %
      data.atmosphereGallery.length;
    openLightbox(prevIdx);
  }

  if (lightboxCloseBtn) lightboxCloseBtn.addEventListener("click", closeLightbox);
  if (lightboxNextBtn) lightboxNextBtn.addEventListener("click", showNextGallery);
  if (lightboxPrevBtn) lightboxPrevBtn.addEventListener("click", showPrevGallery);

  if (lightboxModal) {
    lightboxModal.addEventListener("click", (e) => {
      if (e.target === lightboxModal) closeLightbox();
    });
  }

  window.addEventListener("keydown", (e) => {
    if (lightboxModal && lightboxModal.classList.contains("open")) {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNextGallery();
      if (e.key === "ArrowLeft") showPrevGallery();
    }
  });

  /* --------------------------------------------------------------------------
     7. Render Facilities Cards (Pure Vector SVGs)
     -------------------------------------------------------------------------- */
  const facilitiesContainer = document.getElementById("facilitiesGrid");
  if (facilitiesContainer && data.facilities) {
    facilitiesContainer.innerHTML = data.facilities
      .map(
        (fac) => `
      <div class="facility-card">
        <div class="facility-icon-wrap">
          ${svgIcons[fac.iconKey] || svgIcons.chair}
        </div>
        <h3 class="facility-title">${fac.title}</h3>
        <p class="facility-desc">${fac.desc}</p>
      </div>
    `
      )
      .join("");
  }

  /* --------------------------------------------------------------------------
     8. Render Park Entry Points (Pure Vector SVGs)
     -------------------------------------------------------------------------- */
  const parkEntryContainer = document.getElementById("parkEntryGrid");
  if (parkEntryContainer && data.parkEntry && data.parkEntry.points) {
    parkEntryContainer.innerHTML = data.parkEntry.points
      .map(
        (pt) => `
      <div class="park-entry-point">
        <div class="point-icon">
          ${svgIcons[pt.iconKey] || svgIcons.ticket}
        </div>
        <h4 class="point-title">${pt.title}</h4>
        <p class="point-desc">${pt.desc}</p>
      </div>
    `
      )
      .join("");
  }

  /* --------------------------------------------------------------------------
     9. Render Instagram Showcase Grid
     -------------------------------------------------------------------------- */
  const instaGridContainer = document.getElementById("instaGrid");
  if (instaGridContainer && data.instagramFeed) {
    instaGridContainer.innerHTML = data.instagramFeed
      .map(
        (post) => `
      <a href="${data.businessInfo.instagramUrl}" target="_blank" rel="noopener noreferrer" class="insta-card">
        <img src="${post.image}" alt="Kamathenu Unavagham Instagram" loading="lazy" />
        <div class="insta-card-overlay">
          <div class="insta-likes">${svgIcons.heart} <span>${post.likes}</span></div>
          <p class="insta-card-caption">${post.caption}</p>
        </div>
      </a>
    `
      )
      .join("");
  }

  /* --------------------------------------------------------------------------
     10. Stall Detail Modal Logic
     -------------------------------------------------------------------------- */
  const stallModal = document.getElementById("stallModal");
  const stallModalImg = document.getElementById("stallModalImg");
  const stallModalTitle = document.getElementById("stallModalTitle");
  const stallModalBadge = document.getElementById("stallModalBadge");
  const stallModalDesc = document.getElementById("stallModalDesc");
  const stallModalItemsList = document.getElementById("stallModalItemsList");
  const stallModalCloseBtn = document.getElementById("stallModalCloseBtn");
  const stallModalBrowseBtn = document.getElementById("stallModalBrowseBtn");

  function openStallModal(stallId) {
    const stall = data.stalls.find((s) => s.id === stallId);
    if (!stall) return;

    stallModalImg.src = stall.image;
    stallModalImg.alt = stall.name;
    stallModalTitle.textContent = stall.name;
    stallModalBadge.textContent = stall.badge;
    stallModalDesc.textContent = stall.description;

    const stallDishes = data.menuItems.filter((i) => i.stall === stall.name);

    if (stallDishes.length > 0) {
      stallModalItemsList.innerHTML = stallDishes
        .map(
          (dish, index) => `${dish.tier && (index === 0 || dish.tier !== stallDishes[index - 1].tier) ? `<h4 style="margin: 18px 0 8px; color: var(--color-dark-900);">${dish.tier}</h4>` : ""}
        <div class="stall-modal-item-row">
          <div>
            <div style="font-weight: 700; color: var(--color-dark-900); font-size: 0.95rem;">${dish.name}</div>
            <div style="font-size: 0.8rem; color: var(--color-dark-500); margin-top: 2px;">${dish.description || ""}</div>
          </div>
          <span class="badge-diet ${dish.type}"></span>
        </div>
      `
        )
        .join("");
    } else {
      stallModalItemsList.innerHTML = `
        <div style="padding: 16px; text-align: center; color: var(--color-dark-500);">
          Visit our stalls inside Semmozhi Poonga to enjoy these freshly prepared delicacies.
        </div>
      `;
    }

    if (stallModalBrowseBtn) {
      stallModalBrowseBtn.onclick = () => {
        closeStallModal();
        const stallsSection = document.getElementById("stalls");
        if (stallsSection) {
          stallsSection.scrollIntoView({ behavior: "smooth" });
        }
      };
    }

    stallModal.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeStallModal() {
    stallModal.classList.remove("open");
    document.body.style.overflow = "";
  }

  if (stallModalCloseBtn) stallModalCloseBtn.addEventListener("click", closeStallModal);
  if (stallModal) {
    stallModal.addEventListener("click", (e) => {
      if (e.target === stallModal) closeStallModal();
    });
  }

  window.addEventListener("keydown", (e) => {
    if (stallModal && stallModal.classList.contains("open") && e.key === "Escape") {
      closeStallModal();
    }
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId && targetId !== "#") {
        const targetElem = document.querySelector(targetId);
        if (targetElem) {
          e.preventDefault();
          targetElem.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });

  /* --------------------------------------------------------------------------
     11. Interactive 3D Botanical Particle Canvas in Hero Section
     -------------------------------------------------------------------------- */
  function initHeroParticleCanvas() {
    const canvas = document.getElementById("heroParticleCanvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const particles = [];
    const count = window.innerWidth < 768 ? 22 : 42;
    const colors = [
      "rgba(201, 239, 114, 0.45)",
      "rgba(255, 215, 0, 0.35)",
      "rgba(255, 116, 87, 0.32)",
      "rgba(37, 71, 52, 0.3)"
    ];

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * 0.8 + 0.2,
        radius: Math.random() * 3 + 1.2,
        vx: (Math.random() - 0.5) * 0.4,
        vy: -Math.random() * 0.45 - 0.15,
        color: colors[Math.floor(Math.random() * colors.length)],
        angle: Math.random() * Math.PI * 2,
        spin: (Math.random() - 0.5) * 0.02
      });
    }

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetX = mouseX;
    let targetY = mouseY;

    window.addEventListener("mousemove", (e) => {
      const rect = canvas.getBoundingClientRect();
      if (e.clientY < rect.bottom && e.clientY > rect.top) {
        targetX = e.clientX - rect.left;
        targetY = e.clientY - rect.top;
      }
    });

    window.addEventListener("resize", () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    });

    let isVisible = true;
    const obs = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    obs.observe(canvas);

    function animate() {
      if (isVisible) {
        ctx.clearRect(0, 0, width, height);

        mouseX += (targetX - mouseX) * 0.04;
        mouseY += (targetY - mouseY) * 0.04;
        const offsetX = (mouseX - width / 2) * 0.035;
        const offsetY = (mouseY - height / 2) * 0.035;

        particles.forEach((p) => {
          p.x += p.vx + offsetX * p.z;
          p.y += p.vy + offsetY * p.z;
          p.angle += p.spin;

          if (p.y < -12) {
            p.y = height + 10;
            p.x = Math.random() * width;
          }
          if (p.x < -12) p.x = width + 10;
          if (p.x > width + 12) p.x = -10;

          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(p.angle);
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.ellipse(0, 0, p.radius * p.z * 1.5, p.radius * p.z, p.angle, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        });
      }
      requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
  }

  /* --------------------------------------------------------------------------
     12. 3D Tilt & Specular Physics Engine on Cards
     -------------------------------------------------------------------------- */
  function init3DTiltCards() {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const cards = document.querySelectorAll(
      ".craving-card, .stall-card, .hero-image-frame, .location-info-card, .gallery-slide-card"
    );

    cards.forEach((card) => {
      let bounds;
      let glare = card.querySelector(".card-specular-glare");
      if (!glare) {
        glare = document.createElement("div");
        glare.className = "card-specular-glare";
        card.appendChild(glare);
      }

      function onMouseMove(e) {
        if (!bounds) bounds = card.getBoundingClientRect();
        const mouseX = e.clientX - bounds.left;
        const mouseY = e.clientY - bounds.top;
        const xPct = mouseX / bounds.width - 0.5;
        const yPct = mouseY / bounds.height - 0.5;

        const rotateY = xPct * 11;
        const rotateX = -yPct * 11;

        card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-6px) scale3d(1.02, 1.02, 1.02)`;

        const glareX = (mouseX / bounds.width) * 100;
        const glareY = (mouseY / bounds.height) * 100;
        glare.style.opacity = "1";
        glare.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.22) 0%, transparent 60%)`;
      }

      function onMouseEnter() {
        bounds = card.getBoundingClientRect();
        card.style.transition = "transform 0.12s ease-out, box-shadow 0.25s ease";
      }

      function onMouseLeave() {
        card.style.transition = "transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.5s ease";
        card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0) scale3d(1, 1, 1)";
        if (glare) glare.style.opacity = "0";
        bounds = null;
      }

      card.addEventListener("mouseenter", onMouseEnter);
      card.addEventListener("mousemove", onMouseMove);
      card.addEventListener("mouseleave", onMouseLeave);
    });
  }

  /* --------------------------------------------------------------------------
     13. Live Open Hours Indicator
     -------------------------------------------------------------------------- */
  function initLiveStatus() {
    const statusText = document.getElementById("liveStatusText");
    const navLive = document.getElementById("navLiveStatus");
    if (!statusText || !navLive) return;

    function update() {
      const now = new Date();
      const hour = now.getHours();
      if (hour >= 8 && hour < 20) {
        statusText.innerHTML = `Open Now &bull; Closes 8 PM`;
        navLive.classList.remove("status-closed");
        navLive.classList.add("status-open");
      } else {
        statusText.innerHTML = `Opens 8 AM Tomorrow`;
        navLive.classList.remove("status-open");
        navLive.classList.add("status-closed");
      }
    }
    update();
    setInterval(update, 60000);
  }

  /* --------------------------------------------------------------------------
     14. Interactive 3D Food Decision Spinner ("Can't Decide?")
     -------------------------------------------------------------------------- */
  function initFoodSpinner() {
    const triggerBtn = document.getElementById("foodSpinnerTriggerBtn");
    const modal = document.getElementById("foodSpinnerModal");
    const backdrop = document.getElementById("foodSpinnerBackdrop");
    const closeBtn = document.getElementById("foodSpinnerCloseBtn");
    const spinAgainBtn = document.getElementById("spinAgainBtn");
    const goToStallBtn = document.getElementById("spinnerGoToStallBtn");

    const resultImg = document.getElementById("spinnerResultImg");
    const resultName = document.getElementById("spinnerDishName");
    const resultCategory = document.getElementById("spinnerDishCategory");
    const resultStall = document.getElementById("spinnerDishStall");
    const spinnerCard = document.getElementById("foodSpinnerCard");

    if (!triggerBtn || !modal) return;

    const dishes = [
      { name: "BFT Express & Milk Tea", stall: "Kamathenu Coffee Shop", stallId: "kamathenu-coffee-shop", cat: "Tea & Coffee", img: "image/shops/kamathenu-coffee-shop.jpeg" },
      { name: "Crispy Fried Chicken Wings", stall: "Fryzo", stallId: "fryzo", cat: "Fried Chicken", img: "image/food/fried-chicken.jpg" },
      { name: "Loaded Gourmet Cheese Burger", stall: "Fryzo", stallId: "fryzo", cat: "Burgers", img: "image/food/burgers.jpg" },
      { name: "Chicken Biryani Feast", stall: "Kamathenu Restaurant", stallId: "kamathenu-restaurant", cat: "Hearty Meals", img: "image/shops/kamathenu-restaurant.jpeg" },
      { name: "Belgian Chocolate Waffle", stall: "Guru Cool Hub", stallId: "guru-cool-hub", cat: "Desserts", img: "image/food/waffles.jpg" },
      { name: "Chilled Sparkling Mojito", stall: "Guru Cool Hub", stallId: "guru-cool-hub", cat: "Fresh Juices", img: "image/food/drinks.jpg" },
      { name: "Crispy Peri Peri Spiral Potato", stall: "Hot Spring", stallId: "hot-spring", cat: "Potato Tornado", img: "image/food/potato-rolls.jpg" },
      { name: "Steamed & Fried Momos", stall: "Fryzo", stallId: "fryzo", cat: "Momos", img: "image/food/momos.jpg" },
      { name: "Natural Mudakathan Herbal Soup", stall: "Natural Soups", stallId: "natural-soups", cat: "Wellness Soup", img: "image/food/natural-soups.jpg" },
      { name: "Pani Puri & Bombay Chaats", stall: "Bombay Chats", stallId: "bombay-chats", cat: "Street Chaats", img: "image/food/chats.jpg" },
      { name: "Lazza Matka Kulfi & Cassata", stall: "Lazza Ice Cream Premium Gold", stallId: "lazza-premium-gold", cat: "Ice Creams", img: "image/shops/lazza-premium-gold.jpeg" },
      { name: "Exotic Mango Ice Popstick", stall: "A2A Ice Popsticks & Icecreams", stallId: "a2a-ice-popsticks", cat: "Ice Pops", img: "image/food/ice-pops.jpg" },
      { name: "Fresh Butter Popcorn", stall: "SR Popcorn", stallId: "sr-popcorn", cat: "Cinema Snacks", img: "image/food/popcorn.jpg" },
      { name: "Golden Giant Delhi Appalam", stall: "Delhi Appalam", stallId: "delhi-appalam", cat: "Giant Snacks", img: "image/shops/delhi-appalam.jpeg" }
    ];

    let currentChoice = dishes[0];
    let isSpinning = false;

    function spin() {
      if (isSpinning) return;
      isSpinning = true;
      if (spinnerCard) spinnerCard.classList.add("spinning");
      if (spinAgainBtn) spinAgainBtn.disabled = true;

      let count = 0;
      const totalSteps = 16;
      const timer = setInterval(() => {
        const rand = dishes[Math.floor(Math.random() * dishes.length)];
        if (resultName) resultName.textContent = rand.name;
        if (resultCategory) resultCategory.textContent = rand.cat;
        if (resultStall) resultStall.textContent = `Available at: ${rand.stall}`;
        if (resultImg) resultImg.src = rand.img;
        count++;

        if (count >= totalSteps) {
          clearInterval(timer);
          currentChoice = dishes[Math.floor(Math.random() * dishes.length)];
          if (resultName) resultName.textContent = currentChoice.name;
          if (resultCategory) resultCategory.textContent = currentChoice.cat;
          if (resultStall) resultStall.textContent = `Available at: ${currentChoice.stall}`;
          if (resultImg) resultImg.src = currentChoice.img;

          if (spinnerCard) {
            spinnerCard.classList.remove("spinning");
            spinnerCard.classList.add("winner-bounce");
            setTimeout(() => spinnerCard.classList.remove("winner-bounce"), 700);
          }

          isSpinning = false;
          if (spinAgainBtn) spinAgainBtn.disabled = false;
        }
      }, 70);
    }

    function openModal() {
      modal.classList.add("open");
      document.body.style.overflow = "hidden";
      spin();
    }

    function closeModal() {
      modal.classList.remove("open");
      document.body.style.overflow = "";
    }

    triggerBtn.addEventListener("click", openModal);
    if (backdrop) backdrop.addEventListener("click", closeModal);
    if (closeBtn) closeBtn.addEventListener("click", closeModal);
    if (spinAgainBtn) spinAgainBtn.addEventListener("click", spin);

    if (goToStallBtn) {
      goToStallBtn.addEventListener("click", () => {
        closeModal();
        if (currentChoice && currentChoice.stallId) {
          openStallModal(currentChoice.stallId);
        } else {
          const s = document.getElementById("stalls");
          if (s) s.scrollIntoView({ behavior: "smooth" });
        }
      });
    }

    window.addEventListener("keydown", (e) => {
      if (modal.classList.contains("open") && e.key === "Escape") {
        closeModal();
      }
    });
  }

  /* --------------------------------------------------------------------------
     15. Live Instant Search for Stalls & Menu
     -------------------------------------------------------------------------- */
  function initLiveStallSearch() {
    const searchInput = document.getElementById("stallSearchInput");
    const clearBtn = document.getElementById("stallSearchClearBtn");
    const feedback = document.getElementById("stallSearchFeedback");
    const stallsContainer = document.getElementById("stallsGrid");

    if (!searchInput || !stallsContainer) return;

    searchInput.addEventListener("input", () => {
      const query = searchInput.value.trim().toLowerCase();
      if (clearBtn) clearBtn.style.display = query.length > 0 ? "block" : "none";

      const stallCards = stallsContainer.querySelectorAll(".stall-card");

      if (!query) {
        stallCards.forEach((c) => (c.style.display = "flex"));
        if (feedback) feedback.style.display = "none";
        return;
      }

      let matchCount = 0;

      stallCards.forEach((card) => {
        const stallId = card.getAttribute("data-stall-id");
        const stall = data.stalls.find((s) => s.id === stallId);
        if (!stall) return;

        const menuMatches = data.menuItems.some(
          (m) =>
            m.stall === stall.name &&
            (m.name.toLowerCase().includes(query) ||
              (m.description && m.description.toLowerCase().includes(query)))
        );

        const stallMatches =
          stall.name.toLowerCase().includes(query) ||
          stall.badge.toLowerCase().includes(query) ||
          stall.description.toLowerCase().includes(query) ||
          (stall.specialties &&
            stall.specialties.some((s) => s.toLowerCase().includes(query)));

        if (stallMatches || menuMatches) {
          card.style.display = "flex";
          matchCount++;
        } else {
          card.style.display = "none";
        }
      });

      if (feedback) {
        feedback.style.display = "block";
        feedback.innerHTML =
          matchCount > 0
            ? `Found <strong>${matchCount} stall${matchCount > 1 ? "s" : ""}</strong> offering items matching "<em>${query}</em>"`
            : `No stalls found matching "<em>${query}</em>". Try searching for <em>bft, biryani, tea, burger, or juice</em>.`;
      }
    });

    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        searchInput.value = "";
        searchInput.dispatchEvent(new Event("input"));
        searchInput.focus();
      });
    }
  }

  /* --------------------------------------------------------------------------
     16. Scroll-Triggered Reveal Animations
     -------------------------------------------------------------------------- */
  function initScrollReveal() {
    const revealTargets = document.querySelectorAll(
      ".section-header, .cravings-grid, .stall-card, .location-grid, .facilities-grid, .review-card"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    revealTargets.forEach((target) => {
      target.classList.add("reveal-on-scroll");
      observer.observe(target);
    });
  }

  // Run all enhancements
  initHeroParticleCanvas();
  init3DTiltCards();
  initLiveStatus();
  initFoodSpinner();
  initLiveStallSearch();
  initScrollReveal();
});
