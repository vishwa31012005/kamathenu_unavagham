/**
 * KAMATHENU UNAVAGHAM - Centralized Restaurant & Menu Data
 * All business details, stall listings, full categorized menus,
 * atmosphere photos, facilities, and links are configured here.
 * Easy to update, customize, or replace anytime.
 */

const restaurantData = {
  businessInfo: {
    name: "KAMATHENU UNAVAGHAM",
    tagline: "Different Tastes. One Destination.",
    description:
      "Kamathenu Unavagham is a family-friendly food destination located inside Semmozhi Poonga, Coimbatore, near the play area. Enjoy a wide variety of meals, snacks, chats, desserts, drinks and refreshing treats from multiple food stalls, all in one convenient destination.",
    shortLocation: "Inside Semmozhi Poonga | Near the Play Area",
    fullLocation: "Inside Semmozhi Poonga, Coimbatore, Near the Play Area",
    city: "Coimbatore",
    phone: "9626009779",
    phoneFormatted: "+91 96260 09779",
    phoneTel: "tel:+919626009779",
    whatsapp: "9626009779",
    whatsappUrl: "https://wa.me/919626009779",
    email: "kamathenuunavagham@gmail.com",
    openingHours: "8:00 AM - 8:00 PM",
    openingDays: "Open All Days",
    paymentMethods: "Cash + UPI + Card",
    instagramUrl: "https://www.instagram.com/kamathenuunavagham",
    instagramHandle: "@kamathenuunavagham",
    googleMapsUrl:
      "https://www.google.com/maps/place/Kamathenu+Unavagham/@11.0088818,76.9640715,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba8595911a39f2d:0x846f994e08f4648e!8m2!3d11.0088818!4d76.9666464!16s%2Fg%2F11myg5jw9r",
    logoImage: "image/shops/logo.jpeg",
    heroImage: "image/shops/front-view.jpeg",
    seatingCapacity: "Approx. 100 People"
  },

  // Food discovery categories ("What Are You Craving Today?")
  cravings: [
    {
      id: "meals",
      name: "Meals",
      tag: "Hearty & Filling",
      image: "image/food/meals.jpg",
      targetCategory: "Meals"
    },
    {
      id: "fried-chicken",
      name: "Fried Chicken",
      tag: "Crispy & Juicy",
      image: "image/food/fried-chicken.jpg",
      targetCategory: "Fried Chicken"
    },
    {
      id: "burgers",
      name: "Burgers",
      tag: "Loaded Gourmet",
      image: "image/food/burgers.jpg",
      targetCategory: "Burgers"
    },
    {
      id: "sandwiches",
      name: "Sandwiches",
      tag: "Toasted & Cheesy",
      image: "image/food/sandwiches.jpg",
      targetCategory: "Sandwiches"
    },
    {
      id: "momos",
      name: "Momos",
      tag: "Steamed & Schezwan",
      image: "image/food/momos.jpg",
      targetCategory: "Momos"
    },
    {
      id: "ice-pops",
      name: "Ice Pops",
      tag: "Natural Fruit Sticks",
      image: "image/food/ice-pops.jpg",
      targetCategory: "Ice Pops"
    },
    {
      id: "waffles",
      name: "Waffles",
      tag: "Belgian & Chocolatey",
      image: "image/food/waffles.jpg",
      targetCategory: "Waffles"
    },
    {
      id: "drinks",
      name: "Drinks",
      tag: "Juices & Mojitos",
      image: "image/food/drinks.jpg",
      targetCategory: "Drinks"
    },
    {
      id: "natural-soups",
      name: "Natural Soups",
      tag: "Authentic Herbal",
      image: "image/food/natural-soups.jpg",
      targetCategory: "Soups"
    },
    {
      id: "popcorn",
      name: "Popcorn",
      tag: "Crunchy & Fresh",
      image: "image/food/popcorn.jpg",
      targetCategory: "Snacks"
    },
    {
      id: "chats",
      name: "Chats",
      tag: "Crisp & Tangy",
      image: "image/food/chats.jpg",
      targetCategory: "Chats"
    },
    {
      id: "potato-rolls",
      name: "Potato Rolls",
      tag: "Spiral & Seasoned",
      image: "image/food/potato-rolls.jpg",
      targetCategory: "Other"
    }
  ],

  // Multiple Food Stalls & Services
  stalls: [
    {
      id: "kamathenu-restaurant",
      name: "Kamathenu Restaurant",
      badge: "Hearty Meals & Specials",
      image: "image/shops/kamathenu-restaurant.jpeg",
      description:
        "Authentic South Indian & Indo-Chinese specials including Biryani, Fried Rice, Noodles, Manchurian and Chettinadu delights.",
      specialties: ["Chicken Biryani", "Egg Fried Rice", "Chicken Pallipalayam", "Gobi Manchurian"],
      categoryTag: "Meals"
    },
    {
      id: "fryzo",
      name: "Fryzo",
      badge: "Crispy Bites & Burgers",
      image: "image/shops/fryzo.jpeg",
      description:
        "Crispy fried chicken wings, juicy burgers, loaded fries, cheesy potato shots, seafood favorites, spring rolls and momos.",
      specialties: ["Fryzo Chicken Burger", "Fried Wings", "Peri Peri Fries", "Chicken Schezwan Momos"],
      categoryTag: "Fried Chicken"
    },
    {
      id: "guru-cool-hub",
      name: "Guru Cool Hub",
      badge: "Waffles, Juices & Icewiches",
      image: "image/shops/guru-cool-hub.jpeg",
      description:
        "Freshly made Belgian waffles loaded with chocolate, refreshing natural fruit juices, cool mojitos, premium icewiches and toasted sandwiches.",
      specialties: ["Death by Chocolate Waffle", "Choco Icewich", "ABC Juice", "Watermelon Mojito"],
      categoryTag: "Waffles"
    },
    {
      id: "a2a-ice-popsticks",
      name: "A2A Ice Popsticks & Icecreams",
      badge: "100% Real Fruit Ice",
      image: "image/shops/a2a-ice-cream.jpeg",
      description:
        "Chilled, refreshing fruit-based natural ice popsticks crafted from seasonal fruits including kiwi, dragon fruit, mango, and guava.",
      specialties: ["Dragon Fruit Ice", "Kiwi Ice", "Watermelon Ice", "Mango Ice"],
      categoryTag: "Ice Pops"
    },
    {
      id: "lazza-ice-cream-premium-gold",
      name: "Lazza Ice Cream Premium Gold",
      badge: "Premium Gold · Classic · Silver",
      image: "image/shops/lazza-premium-gold.jpeg",
      description:
        "Explore Lazza ice creams across the Premium Gold, Classic, and Silver ranges, from kulfis and bars to cones and classic scoops.",
      specialties: ["Butterscotch Capri Cone", "Matka Kulfi", "Deluxe Cassata Cone", "Red Velvet", "Mango in Mango"],
      categoryTag: "Ice Creams"
    },
    {
      id: "thattu-vadai-settu",
      name: "A2A Salem Thattuvadai Settu",
      badge: "Salem Street Food Icon",
      image: "image/shops/thattu-vadai-settu.jpeg",
      description:
        "The beloved Salem street delicacy made with crispy thattuvadai, shredded beetroot, carrots, zesty chutneys, cucumber and cheese twists.",
      specialties: ["Pineapple Set", "Murukku Cheese Set", "Norukkal Set", "Mixed Set"],
      categoryTag: "Chats"
    },
    {
      id: "bombay-chats",
      name: "Bombay Chats",
      badge: "Chaats & Hot Snacks",
      image: "image/shops/bombay-chats.jpeg",
      description:
        "Crisp, spicy, and tangy street chaats including Pani Puri, Masala Puri, Bhel Puri, Dahi Puri, Sev Puri, and hot snacks.",
      specialties: ["Veg Puffs", "Egg Puffs", "Mushroom Puffs", "Kalan", "Bhel Puri", "Pani Puri", "Bread Omelette", "Pav Bhaji", "Dahi Puri", "Masala Puri"],
      categoryTag: "Chats"
    },
    {
      id: "hot-spring",
      name: "Hot Spring",
      badge: "Spiral Potato Rolls",
      image: "image/shops/hot-spring.jpeg",
      description:
        "Golden crispy spiral potato rolls tossed in irresistible flavors from Chilli Cheese and Tandoori to Peri Peri and Mint Mayonnaise.",
      specialties: ["Chilli Cheese Roll", "Peri Peri Roll", "Tandoori Roll", "Lemon Tadka Roll"],
      categoryTag: "Other"
    },
    {
      id: "natural-soups",
      name: "Natural Soups",
      badge: "Authentic Herbal Wellness",
      image: "image/shops/natural-soup.jpeg",
      description:
        "A wholesome selection of traditional South Indian natural herbal soups prepared from time-honored herbs and botanical leaves.",
      specialties: ["Mudakathan Soup", "Thuthuvalai Soup", "Vallarai Soup", "Murungai Keerai Soup"],
      categoryTag: "Soups"
    },
    {
      id: "sr-popcorn",
      name: "SR Popcorn",
      badge: "Fresh Popped & Brewed",
      image: "image/shops/sr-pop-corn.jpeg",
      description:
        "Crisp, warm popcorn, steamed sweet corn, and freshly brewed hot coffee - the perfect companion for a stroll inside the park.",
      specialties: ["Butter Popcorn", "Steamed Corn", "Fresh Coffee"],
      categoryTag: "Snacks"
    },
    {
      id: "delhi-appalam",
      name: "Delhi Appalam",
      badge: "Giant Crisp Appalam",
      image: "image/shops/delhi-appalam.jpeg",
      description:
        "Traditional giant Delhi Appalam, freshly fried to airy golden perfection with authentic seasoning for an irresistible crunch.",
      specialties: ["Giant Delhi Appalam"],
      categoryTag: "Snacks"
    },
    {
      id: "indhra-cotton-candies",
      name: "Indhra Cotton Candies",
      badge: "Fluffy Sweet Magic",
      image: "image/shops/cotton-candy.jpeg",
      description:
        "Delightful, fluffy spun cotton candy in vibrant sweet clouds that bring smiles to kids and adults enjoying their day at the park.",
      specialties: ["Classic Spun Cotton Candy"],
      categoryTag: "Desserts"
    },
    {
      id: "massage-center",
      name: "Massage Center",
      badge: "Relaxation & Wellness",
      image: "image/shops/massage-center.jpeg",
      description:
        "Take a relaxing break with rejuvenating massage services at Kamathenu Relax Lounge.",
      specialties: ["Foot Massage", "Leg and Foot Massage", "Kansya Thali Foot Massage", "Full Body Relaxation", "Thai Massage", "Luxury Combo Massage"],
      categoryTag: "Other"
    }
  ],

  // Complete Menu Categories for Filter Tabs
  menuCategories: [
    "All",
    "Meals",
    "Fried Chicken",
    "Burgers",
    "Sandwiches",
    "Momos",
    "Snacks",
    "Chats",
    "Desserts",
    "Drinks",
    "Ice Creams",
    "Ice Pops",
    "Soups",
    "Waffles",
    "Other"
  ],

  // Master Menu Items (No Prices, 100% compliant with specifications)
  menuItems: [
    // --- LAZZA ICE CREAM PREMIUM GOLD ---
    ...[
      ["Premium Gold", ["Butterscotch Capri Cone", "Spanish Delight Capri Cone", "Strawberry Capri Cone", "Vanilla Capri Cone", "Matka Kulfi", "Badam Kulfi", "Turkish Delight Kulfi", "American Bar", "Avocado Bar", "Strawberry Fruit Bar", "Deluxe Cassata Cone", "Madagascar Vanilla", "Strawberry Excess", "Natural Blueberry", "Natural Avocado", "Musk Melon", "Natural Tender Coconut", "Nut Butterscotch", "Spanish Delight", "Biscuit Rocky", "Gajar Halwa"]],
      ["Classic", ["Rocket Kulfi", "Max Chocobar", "American Nutty Bar", "Fruit Fundae", "Sundae", "Chocolate Passion", "Strawberry Dessert Mist", "Red Velvet", "Magnum Mango", "Raspberry Extra", "Green Apple Extra", "Unicone Chocolate", "Sugar-Free Butterscotch", "Sugar-Free Strawberry", "Strawberry Plain", "Cookies & Cream", "Sugar-Free Vanilla"]],
      ["Silver", ["Redberry", "Mango in Mango", "Gud Bud", "Swirl Mango", "Vanilla Ball"]]
    ].flatMap(([tier, names], tierIndex) => names.map((name, itemIndex) => ({
      id: `lazza-${tier.toLowerCase().replace(/ /g, "-")}-${String(itemIndex + 1).padStart(2, "0")}`,
      name,
      stall: "Lazza Ice Cream Premium Gold",
      category: "Ice Creams",
      type: "veg",
      tier: `Lazza ${tier}`,
      description: `From the Lazza ${tier} range.`
    }))),

    // --- KAMATHENU RESTAURANT: MEALS & RICE ---
    {
      id: "m-01",
      name: "Chicken Biryani",
      stall: "Kamathenu Restaurant",
      category: "Meals",
      type: "non-veg",
      description: "Fragrant spiced basmati rice slow-cooked with tender chicken and aromatic herbs."
    },
    {
      id: "m-02",
      name: "Egg Biryani",
      stall: "Kamathenu Restaurant",
      category: "Meals",
      type: "egg",
      description: "Flavourful biryani rice served with golden roasted eggs and spicy salna."
    },
    {
      id: "m-03",
      name: "Fried Rice - Veg / Paneer / Mushroom",
      stall: "Kamathenu Restaurant",
      category: "Meals",
      type: "veg",
      description: "Wok-tossed aromatic rice with choice of fresh vegetables, soft paneer, or savory mushrooms."
    },
    {
      id: "m-04",
      name: "Egg Fried Rice",
      stall: "Kamathenu Restaurant",
      category: "Meals",
      type: "egg",
      description: "Classic street-style wok-tossed fried rice with scrambled eggs and spring onions."
    },
    {
      id: "m-05",
      name: "Chicken Fried Rice",
      stall: "Kamathenu Restaurant",
      category: "Meals",
      type: "non-veg",
      description: "Savory wok-fried rice tossed with succulent chicken cubes, vegetables, and seasonings."
    },
    {
      id: "m-06",
      name: "Noodles - Veg / Paneer / Mushroom",
      stall: "Kamathenu Restaurant",
      category: "Meals",
      type: "veg",
      description: "Long hakka noodles tossed in a sizzling wok with crunchy vegetables, paneer or mushrooms."
    },
    {
      id: "m-07",
      name: "Egg Noodles",
      stall: "Kamathenu Restaurant",
      category: "Meals",
      type: "egg",
      description: "Stir-fried noodles with egg strands, peppers, and oriental spices."
    },
    {
      id: "m-08",
      name: "Chicken Noodles",
      stall: "Kamathenu Restaurant",
      category: "Meals",
      type: "non-veg",
      description: "Wok-tossed noodles loaded with seasoned chicken shreds and crisp garden veggies."
    },

    // --- KAMATHENU RESTAURANT: MANCHURIAN & SPECIALS ---
    {
      id: "m-09",
      name: "Gobi Manchurian - Chilli / Pepper",
      stall: "Kamathenu Restaurant",
      category: "Meals",
      type: "veg",
      description: "Crispy cauliflower florets glazed in savory Indo-Chinese chilli or crushed black pepper sauce."
    },
    {
      id: "m-10",
      name: "Mushroom Manchurian - Chilli / Pepper",
      stall: "Kamathenu Restaurant",
      category: "Meals",
      type: "veg",
      description: "Button mushrooms batter-fried and tossed in a zesty spicy gravy or dry pepper mix."
    },
    {
      id: "m-11",
      name: "Baby Corn Manchurian - Chilli / Pepper",
      stall: "Kamathenu Restaurant",
      category: "Meals",
      type: "veg",
      description: "Crunchy golden baby corn tossed in fragrant garlic, green chillies, and soy reduction."
    },
    {
      id: "m-12",
      name: "Paneer Manchurian - Chilli / Pepper",
      stall: "Kamathenu Restaurant",
      category: "Meals",
      type: "veg",
      description: "Soft cottage cheese cubes tossed in spicy chilli garlic sauce with crunchy capsicum."
    },
    {
      id: "m-13",
      name: "Chicken Manchurian - Chilli / Pepper",
      stall: "Kamathenu Restaurant",
      category: "Meals",
      type: "non-veg",
      description: "Tender chicken chunks stir-fried with hot green chillies, ginger, and garlic glaze."
    },
    {
      id: "m-14",
      name: "Chicken Pallipalayam",
      stall: "Kamathenu Restaurant",
      category: "Fried Chicken",
      type: "non-veg",
      description: "Kongu region signature dry chicken cooked with small shallots, dried red chillies, and coconut."
    },
    {
      id: "m-15",
      name: "Chettinadu Chicken",
      stall: "Kamathenu Restaurant",
      category: "Fried Chicken",
      type: "non-veg",
      description: "Traditional spicy Chettinadu recipe bursting with freshly roasted whole spices and curry leaves."
    },
    {
      id: "m-16",
      name: "Dragon Chicken",
      stall: "Kamathenu Restaurant",
      category: "Fried Chicken",
      type: "non-veg",
      description: "Crispy chicken strips tossed in a fiery sweet-and-spicy dragon sauce with cashews and peppers."
    },
    {
      id: "m-17",
      name: "Lemon Chicken",
      stall: "Kamathenu Restaurant",
      category: "Fried Chicken",
      type: "non-veg",
      description: "Succulent chicken morsels infused with fresh lemon zest and mild aromatic spices."
    },
    {
      id: "m-18",
      name: "Honey Chicken",
      stall: "Kamathenu Restaurant",
      category: "Fried Chicken",
      type: "non-veg",
      description: "Golden fried chicken glazed in luscious natural honey and toasted sesame."
    },
    {
      id: "m-19",
      name: "Chicken 65",
      stall: "Kamathenu Restaurant",
      category: "Fried Chicken",
      type: "non-veg",
      description: "Deep-fried spicy chicken bites seasoned with curry leaves and crushed spices."
    },
    {
      id: "m-20",
      name: "Chicken Lollipop",
      stall: "Kamathenu Restaurant",
      category: "Fried Chicken",
      type: "non-veg",
      description: "Crispy frenched chicken winglets coated in spicy red batter and fried to perfection."
    },
    {
      id: "m-21",
      name: "Double Omelette",
      stall: "Kamathenu Restaurant",
      category: "Meals",
      type: "egg",
      description: "Freshly beaten farm-fresh two-egg omelette with onions, green chillies, and black pepper."
    },

    // --- FRYZO: FRIED CHICKEN, BUCKET & FISH ---
    {
      id: "fz-01",
      name: "Fryzo Fried Wings",
      stall: "Fryzo",
      category: "Fried Chicken",
      type: "non-veg",
      description: "Ultra-crispy coated chicken wings with signature herb seasoning and house dip."
    },
    {
      id: "fz-02",
      name: "Chicken Pop Shot",
      stall: "Fryzo",
      category: "Fried Chicken",
      type: "non-veg",
      description: "Bite-sized crunchy chicken poppers seasoned with zesty spice blend."
    },
    {
      id: "fz-03",
      name: "Chicken Bone Shot",
      stall: "Fryzo",
      category: "Fried Chicken",
      type: "non-veg",
      description: "Marinated bone-in chicken cuts coated in extra-crispy batter."
    },
    {
      id: "fz-04",
      name: "Fried Chicken Mixed Bucket",
      stall: "Fryzo",
      category: "Fried Chicken",
      type: "non-veg",
      description: "Family-size sharing bucket loaded with crispy fried chicken wings, shots, and strips."
    },
    {
      id: "fz-05",
      name: "Fish Finger",
      stall: "Fryzo",
      category: "Snacks",
      type: "non-veg",
      description: "Tender white fish fillet batons coated in golden breadcrumbs, served with tartar dip."
    },
    {
      id: "fz-06",
      name: "Crab Lollipop",
      stall: "Fryzo",
      category: "Snacks",
      type: "non-veg",
      description: "Spiced minced crab meat claw lollipops fried until crispy and golden brown."
    },
    {
      id: "fz-07",
      name: "Spicy Prawns",
      stall: "Fryzo",
      category: "Snacks",
      type: "non-veg",
      description: "Crisp batter-fried juicy prawns tossed with hot spice seasoning."
    },

    // --- FRYZO: BURGERS ---
    {
      id: "bg-01",
      name: "Classic Veg Burger",
      stall: "Fryzo",
      category: "Burgers",
      type: "veg",
      description: "Crispy seasoned vegetable patty with fresh lettuce, sliced tomatoes, and creamy sauce in soft toasted bun."
    },
    {
      id: "bg-02",
      name: "Indian Paneer Burger",
      stall: "Fryzo",
      category: "Burgers",
      type: "veg",
      description: "Spiced paneer patty grilled golden with tandoori mayo and crisp garden vegetables."
    },
    {
      id: "bg-03",
      name: "Fryzo Chicken Burger",
      stall: "Fryzo",
      category: "Burgers",
      type: "non-veg",
      description: "Tender chicken patty topped with melted cheese, house sauce, and crunchy pickles."
    },
    {
      id: "bg-04",
      name: "Fryzo Zinger Burger",
      stall: "Fryzo",
      category: "Burgers",
      type: "non-veg",
      description: "Spicy double-breaded crispy chicken fillet stacked with shredded lettuce and creamy garlic mayo."
    },

    // --- FRYZO: SANDWICHES ---
    {
      id: "sw-01",
      name: "Chicken Sandwich",
      stall: "Fryzo",
      category: "Sandwiches",
      type: "non-veg",
      description: "Shredded spiced chicken with crisp vegetables pressed between golden toasted bread slices."
    },
    {
      id: "sw-02",
      name: "Chicken Cheese Sandwich",
      stall: "Fryzo",
      category: "Sandwiches",
      type: "non-veg",
      description: "Succulent chicken layered with gooey melted cheddar cheese in grilled artisan bread."
    },

    // --- GURU COOL HUB: SANDWICHES ---
    {
      id: "sw-03",
      name: "Veg Sandwich",
      stall: "Guru Cool Hub",
      category: "Sandwiches",
      type: "veg",
      description: "Fresh cucumbers, tomatoes, bell peppers, and mint spread toasted to a crunchy perfection."
    },
    {
      id: "sw-04",
      name: "Corn & Cheese Sandwich",
      stall: "Guru Cool Hub",
      category: "Sandwiches",
      type: "veg",
      description: "Sweet golden American corn smothered in rich melted mozzarella and herb seasoning."
    },
    {
      id: "sw-05",
      name: "Paneer Sandwich",
      stall: "Guru Cool Hub",
      category: "Sandwiches",
      type: "veg",
      description: "Marinated spiced cottage cheese slices grilled between herb-buttered toast."
    },

    // --- FRYZO: MOMOS ---
    {
      id: "mo-01",
      name: "Veg Momos",
      stall: "Fryzo",
      category: "Momos",
      type: "veg",
      description: "Steamed thin-wrapper dumplings filled with finely chopped seasoned garden vegetables and garlic sauce."
    },
    {
      id: "mo-02",
      name: "Cheese Corn Momos",
      stall: "Fryzo",
      category: "Momos",
      type: "veg",
      description: "Mouth-melting molten cheese and sweet corn kernels encased in delicate steamed pastry."
    },
    {
      id: "mo-03",
      name: "Paneer Momos",
      stall: "Fryzo",
      category: "Momos",
      type: "veg",
      description: "Steamed dumplings stuffed with seasoned crushed paneer and fresh herbs."
    },
    {
      id: "mo-04",
      name: "Chicken Momos",
      stall: "Fryzo",
      category: "Momos",
      type: "non-veg",
      description: "Juicy minced chicken dumplings seasoned with Himalayan spices, served with fiery red chutney."
    },
    {
      id: "mo-05",
      name: "Chicken Schezwan Momos",
      stall: "Fryzo",
      category: "Momos",
      type: "non-veg",
      description: "Chicken dumplings tossed in spicy, tangy Schezwan red pepper sauce."
    },

    // --- FRYZO: FRIES & SNACKS ---
    {
      id: "fr-01",
      name: "Peri Peri Fries",
      stall: "Fryzo",
      category: "Snacks",
      type: "veg",
      description: "Crispy golden shoestring fries tossed in fiery African peri peri spice dust."
    },
    {
      id: "fr-02",
      name: "Cheese Seasoned Fries",
      stall: "Fryzo",
      category: "Snacks",
      type: "veg",
      description: "Hot crisp french fries dusted generously with savory cheddar cheese powder."
    },
    {
      id: "fr-03",
      name: "Chicken Loaded Fries",
      stall: "Fryzo",
      category: "Snacks",
      type: "non-veg",
      description: "A decadent mountain of crispy fries topped with shredded spiced chicken and zesty sauces."
    },
    {
      id: "fr-04",
      name: "Chicken Cheese Loaded Fries",
      stall: "Fryzo",
      category: "Snacks",
      type: "non-veg",
      description: "Crisp fries layered with tender chicken pieces, gooey melted cheese sauce, and jalapeno hints."
    },
    {
      id: "sn-01",
      name: "Veg Spring Roll",
      stall: "Fryzo",
      category: "Snacks",
      type: "veg",
      description: "Crispy golden rolls packed with shredded cabbage, carrots, and glass noodles."
    },
    {
      id: "sn-02",
      name: "Paneer Spring Roll",
      stall: "Fryzo",
      category: "Snacks",
      type: "veg",
      description: "Crispy rolls stuffed with seasoned spiced cottage cheese and peppers."
    },
    {
      id: "sn-03",
      name: "Chicken Spring Roll",
      stall: "Fryzo",
      category: "Snacks",
      type: "non-veg",
      description: "Crisp wrapper bursting with savory shredded chicken and Asian herbs."
    },
    {
      id: "sn-04",
      name: "Veg Finger",
      stall: "Fryzo",
      category: "Snacks",
      type: "veg",
      description: "Crispy crumb-coated vegetable fingers served piping hot with tangy dip."
    },
    {
      id: "sn-05",
      name: "Onion Rings",
      stall: "Fryzo",
      category: "Snacks",
      type: "veg",
      description: "Thick-cut fresh sweet onion rings coated in seasoned batter and fried until crunchy."
    },
    {
      id: "sn-06",
      name: "Cheese Potato Shots",
      stall: "Fryzo",
      category: "Snacks",
      type: "veg",
      description: "Crispy potato nuggets filled with warm melting cheddar cheese."
    },
    {
      id: "sn-07",
      name: "Veg Nuggets",
      stall: "Fryzo",
      category: "Snacks",
      type: "veg",
      description: "Golden fried vegetable nuggets with light crunchy coating."
    },
    {
      id: "sn-08",
      name: "Cheese Corn Nuggets",
      stall: "Fryzo",
      category: "Snacks",
      type: "veg",
      description: "Creamy cheese and sweet corn balls encased in a crunchy crumb shell."
    },
    {
      id: "sn-09",
      name: "Chicken Nuggets",
      stall: "Fryzo",
      category: "Snacks",
      type: "non-veg",
      description: "Tender white meat chicken nuggets in a crispy golden batter."
    },
    {
      id: "sn-10",
      name: "Cheese Jalapeno Samosa",
      stall: "Fryzo",
      category: "Snacks",
      type: "veg",
      description: "Bite-sized cocktail samosas stuffed with gooey cheese and pickled jalapeno peppers."
    },

    // --- DELHI APPALAM & SR POPCORN ---
    {
      id: "sn-11",
      name: "Delhi Appalam",
      stall: "Delhi Appalam",
      category: "Snacks",
      type: "veg",
      description: "Classic jumbo Delhi appalam fried crispy and seasoned with authentic spices."
    },
    {
      id: "sn-12",
      name: "Popcorn",
      stall: "SR Popcorn",
      category: "Snacks",
      type: "veg",
      description: "Warm, freshly popped buttery kernels served fresh."
    },
    {
      id: "sn-13",
      name: "Corn",
      stall: "SR Popcorn",
      category: "Snacks",
      type: "veg",
      description: "Steamed sweet corn kernels tossed with butter, salt, and pepper."
    },
    {
      id: "sn-14",
      name: "Coffee",
      stall: "SR Popcorn",
      category: "Drinks",
      type: "veg",
      description: "Freshly brewed aromatic hot coffee."
    },

    // --- A2A SALEM THATTUVADAI SETTU ---
    {
      id: "tv-01",
      name: "Pineapple Set",
      stall: "A2A Salem Thattuvadai Settu",
      category: "Chats",
      type: "veg",
      description: "Crispy thattuvadais sandwiched with grated veggies, zesty chutneys, and sweet pineapple slice."
    },
    {
      id: "tv-02",
      name: "Norukkal Set",
      stall: "A2A Salem Thattuvadai Settu",
      category: "Chats",
      type: "veg",
      description: "Crushed thattuvadais mixed with fresh carrots, beetroot, roasted peanuts, and spicy tangy chutney."
    },
    {
      id: "tv-03",
      name: "Murukku Set",
      stall: "A2A Salem Thattuvadai Settu",
      category: "Chats",
      type: "veg",
      description: "Crunchy murukku layers stuffed with spicy vegetable mixture and coriander chutney."
    },
    {
      id: "tv-04",
      name: "Mango Set",
      stall: "A2A Salem Thattuvadai Settu",
      category: "Chats",
      type: "veg",
      description: "Crispy thattuvadai sandwiches layered with shredded raw mango and spicy red chutney."
    },
    {
      id: "tv-05",
      name: "Cucumber Set",
      stall: "A2A Salem Thattuvadai Settu",
      category: "Chats",
      type: "veg",
      description: "Cool refreshing cucumber slices stuffed between crispy thattuvadais with spicy podi."
    },
    {
      id: "tv-06",
      name: "Cheese Set",
      stall: "A2A Salem Thattuvadai Settu",
      category: "Chats",
      type: "veg",
      description: "Rich grated cheese topping over the authentic Salem thattuvadai vegetable stuffing."
    },
    {
      id: "tv-07",
      name: "Mayonnaise Set",
      stall: "A2A Salem Thattuvadai Settu",
      category: "Chats",
      type: "veg",
      description: "Creamy mayonnaise blend added to the traditional spicy vegetable thattuvadai."
    },
    {
      id: "tv-08",
      name: "Mixed Set",
      stall: "A2A Salem Thattuvadai Settu",
      category: "Chats",
      type: "veg",
      description: "The ultimate combo plate featuring a curated assortment of signature thattuvadai sets."
    },
    {
      id: "tv-09",
      name: "Murukku Cheese Set",
      stall: "A2A Salem Thattuvadai Settu",
      category: "Chats",
      type: "veg",
      description: "Crispy murukku stuffed with spiced veggies and smothered with grated cheese."
    },

    // --- BOMBAY CHATS ---
    {
      id: "bc-01",
      name: "Pani Puri",
      stall: "Bombay Chats",
      category: "Chats",
      type: "veg",
      description: "Crisp hollow puris stuffed with potato-chickpea mash, sweet dates chutney, and chilled mint water."
    },
    {
      id: "bc-02",
      name: "Masala Puri",
      stall: "Bombay Chats",
      category: "Chats",
      type: "veg",
      description: "Crushed puris drenched in steaming hot spiced green peas curry, garnished with onions and sev."
    },
    {
      id: "bc-03",
      name: "Bhel Puri",
      stall: "Bombay Chats",
      category: "Chats",
      type: "veg",
      description: "Puffed rice tossed with chopped tomatoes, onions, crisp papdis, coriander, and sweet-sour tamarind sauce."
    },
    {
      id: "bc-04",
      name: "Dahi Puri",
      stall: "Bombay Chats",
      category: "Chats",
      type: "veg",
      description: "Crisp puris filled with spiced potatoes, topped with sweetened creamy yoghurt, tamarind chutney, and crunchy sev."
    },
    {
      id: "bc-05",
      name: "Sev Puri",
      stall: "Bombay Chats",
      category: "Chats",
      type: "veg",
      description: "Flat crisp papdis topped with seasoned diced potatoes, three signature chutneys, and fine nylon sev."
    },
    {
      id: "bc-06",
      name: "Samosa",
      stall: "Bombay Chats",
      category: "Chats",
      type: "veg",
      isSample: true,
      description: "Crispy golden pyramid pastry loaded with spiced potato and green peas filling."
    },
    {
      id: "bc-07",
      name: "Kalan",
      stall: "Bombay Chats",
      category: "Chats",
      type: "veg",
      description: "Popular Coimbatore street-style shredded mushroom and cabbage stir-fry in a rich, tangy gravy."
    },
    {
      id: "bc-08",
      name: "Aloo Tikki",
      stall: "Bombay Chats",
      category: "Chats",
      type: "veg",
      isSample: true,
      description: "Pan-grilled spiced potato patties served with sweet curd, mint chutney, and tamarind glaze."
    },
    {
      id: "bc-09",
      name: "Veg Puffs",
      stall: "Bombay Chats",
      category: "Snacks",
      type: "veg",
      description: "Flaky golden pastry filled with a spiced vegetable filling."
    },
    {
      id: "bc-10",
      name: "Egg Puffs",
      stall: "Bombay Chats",
      category: "Snacks",
      type: "egg",
      description: "Flaky golden pastry filled with egg and spices."
    },
    {
      id: "bc-11",
      name: "Mushroom Puffs",
      stall: "Bombay Chats",
      category: "Snacks",
      type: "veg",
      description: "Flaky golden pastry filled with seasoned mushrooms."
    },
    {
      id: "bc-12",
      name: "Bread Omelette",
      stall: "Bombay Chats",
      category: "Snacks",
      type: "egg",
      description: "A savory omelette served with bread."
    },
    {
      id: "bc-13",
      name: "Pav Bhaji",
      stall: "Bombay Chats",
      category: "Snacks",
      type: "veg",
      description: "Spiced vegetable bhaji served with soft pav."
    },

    // --- GURU COOL HUB: WAFFLES & EXOTIC FLAVOURS ---
    {
      id: "wf-01",
      name: "Death by Chocolate",
      stall: "Guru Cool Hub",
      category: "Waffles",
      type: "veg",
      description: "Warm crisp Belgian waffle drenched in dark chocolate sauce, chocolate fudge, and chocolate chips."
    },
    {
      id: "wf-02",
      name: "Milk Choco",
      stall: "Guru Cool Hub",
      category: "Waffles",
      type: "veg",
      description: "Golden waffle drizzled with creamy, smooth European milk chocolate."
    },
    {
      id: "wf-03",
      name: "White Choco",
      stall: "Guru Cool Hub",
      category: "Waffles",
      type: "veg",
      description: "Crispy waffle smothered in velvety melted white chocolate glaze."
    },
    {
      id: "wf-04",
      name: "Peanut Fantasy",
      stall: "Guru Cool Hub",
      category: "Waffles",
      type: "veg",
      description: "Rich crunchy peanut butter swirled with warm milk chocolate over fresh waffle."
    },
    {
      id: "wf-05",
      name: "Coffee Break",
      stall: "Guru Cool Hub",
      category: "Waffles",
      type: "veg",
      description: "Mocha-infused coffee chocolate spread over golden freshly baked waffle."
    },
    {
      id: "wf-06",
      name: "Strawberry Surprise",
      stall: "Guru Cool Hub",
      category: "Waffles",
      type: "veg",
      description: "Sweet strawberry compote and white chocolate spread over a warm waffle."
    },
    {
      id: "wf-07",
      name: "Naughty Nutella",
      stall: "Guru Cool Hub",
      category: "Waffles",
      type: "veg",
      description: "Generous slather of authentic hazelnut Nutella over hot, fluffy waffle."
    },
    {
      id: "wf-08",
      name: "Choco Strawberry",
      stall: "Guru Cool Hub",
      category: "Waffles",
      type: "veg",
      description: "Harmonious blend of rich dark chocolate and tangy strawberry compote."
    },
    {
      id: "wf-09",
      name: "Cookies and Cream",
      stall: "Guru Cool Hub",
      category: "Waffles",
      type: "veg",
      description: "White chocolate spread generously covered in crushed Oreo biscuit crumbles."
    },
    {
      id: "wf-10",
      name: "Dark Choco",
      stall: "Guru Cool Hub",
      category: "Waffles",
      type: "veg",
      description: "Intense, rich bittersweet 70% cocoa dark chocolate ganache over waffle."
    },
    {
      id: "wf-11",
      name: "Butterscotch",
      stall: "Guru Cool Hub",
      category: "Waffles",
      type: "veg",
      description: "Golden butterscotch caramel crunch spread over hot crisp waffle."
    },
    {
      id: "wf-12",
      name: "Bubblegum",
      stall: "Guru Cool Hub",
      category: "Waffles",
      type: "veg",
      description: "Playful, colorful bubblegum flavored sweet spread loved by youngsters."
    },
    {
      id: "wf-13",
      name: "Dark White Choco",
      stall: "Guru Cool Hub",
      category: "Waffles",
      type: "veg",
      description: "Twin combination of premium dark chocolate and creamy white chocolate sauces."
    },
    {
      id: "wf-14",
      name: "Gems Magic",
      stall: "Guru Cool Hub",
      category: "Waffles",
      type: "veg",
      description: "Chocolate waffle loaded with colorful crunchy Cadbury Gems candies."
    },
    {
      id: "wf-15",
      name: "Mango Mania",
      stall: "Guru Cool Hub",
      category: "Waffles",
      type: "veg",
      description: "Lush tropical mango compote with creamy white chocolate drizzle."
    },
    {
      id: "wf-16",
      name: "Only Oreo",
      stall: "Guru Cool Hub",
      category: "Waffles",
      type: "veg",
      description: "Double chocolate spread loaded with whole and crushed Oreo cookies."
    },
    {
      id: "wf-17",
      name: "Krazy KitKat",
      stall: "Guru Cool Hub",
      category: "Waffles",
      type: "veg",
      description: "Warm waffle topped with crunchy KitKat wafer bars and chocolate syrup."
    },
    {
      id: "wf-18",
      name: "Cotton Candy Waffle",
      stall: "Guru Cool Hub",
      category: "Waffles",
      type: "veg",
      description: "Sweet pastel cotton candy flavored cream topped on freshly baked waffle."
    },
    {
      id: "wf-19",
      name: "Triple Choco (Exotic)",
      stall: "Guru Cool Hub",
      category: "Waffles",
      type: "veg",
      description: "The ultimate trio of dark chocolate, milk chocolate, and white chocolate sauces."
    },
    {
      id: "wf-20",
      name: "Malai Choco (Exotic)",
      stall: "Guru Cool Hub",
      category: "Waffles",
      type: "veg",
      description: "Rich Indian malai cream blended with smooth melted chocolate on hot waffle."
    },
    {
      id: "wf-21",
      name: "Blue Mint Cookies (Exotic)",
      stall: "Guru Cool Hub",
      category: "Waffles",
      type: "veg",
      description: "Refreshing cool blue mint glaze paired with dark chocolate cookie crumbles."
    },
    {
      id: "wf-22",
      name: "Crunchy Almond Butter (Exotic)",
      stall: "Guru Cool Hub",
      category: "Waffles",
      type: "veg",
      description: "Artisanal roasted almond butter spread sprinkled with toasted almond flakes."
    },
    {
      id: "wf-23",
      name: "Red Velvet Cheesecake (Exotic)",
      stall: "Guru Cool Hub",
      category: "Waffles",
      type: "veg",
      description: "Red velvet infused waffle topped with luscious cream cheese glaze."
    },
    {
      id: "wf-24",
      name: "Biscoff (Exotic)",
      stall: "Guru Cool Hub",
      category: "Waffles",
      type: "veg",
      description: "Caramelized Lotus Biscoff spread and crushed spiced speculoos biscuits."
    },

    // --- GURU COOL HUB: ICEWICHES & DESSERTS ---
    {
      id: "iw-01",
      name: "Choco Icewich",
      stall: "Guru Cool Hub",
      category: "Desserts",
      type: "veg",
      description: "Creamy chocolate ice cream slab sandwiched between fresh waffle biscuits."
    },
    {
      id: "iw-02",
      name: "Vanilla Icewich",
      stall: "Guru Cool Hub",
      category: "Desserts",
      type: "veg",
      description: "Classic rich vanilla bean ice cream sandwiched in crisp waffle crust."
    },
    {
      id: "iw-03",
      name: "Strawberry Icewich",
      stall: "Guru Cool Hub",
      category: "Desserts",
      type: "veg",
      description: "Chilled strawberry fruit ice cream packed between golden waffle wafers."
    },
    {
      id: "iw-04",
      name: "Choco Vanilla Icewich",
      stall: "Guru Cool Hub",
      category: "Desserts",
      type: "veg",
      description: "Dual swirl of velvety chocolate and vanilla ice cream in a waffle sandwich."
    },
    {
      id: "ds-01",
      name: "Cotton Candy",
      stall: "Indhra Cotton Candies",
      category: "Desserts",
      type: "veg",
      description: "Freshly spun, cloud-soft pink and blue cotton candy on a stick."
    },

    // --- GURU COOL HUB: JUICES & DRINKS ---
    {
      id: "dk-01",
      name: "Fresh Lemon Juice",
      stall: "Guru Cool Hub",
      category: "Drinks",
      type: "veg",
      description: "Freshly squeezed zesty lemon cooler, served sweet, salted, or mixed."
    },
    {
      id: "dk-02",
      name: "Butter Milk",
      stall: "Guru Cool Hub",
      category: "Drinks",
      type: "veg",
      description: "Traditional chilled spiced buttermilk with curry leaves, ginger, and green chillies."
    },
    {
      id: "dk-03",
      name: "Muskmelon Juice",
      stall: "Guru Cool Hub",
      category: "Drinks",
      type: "veg",
      description: "Naturally sweet, aromatic muskmelon juice prepared fresh to order."
    },
    {
      id: "dk-04",
      name: "Mosambi Juice",
      stall: "Guru Cool Hub",
      category: "Drinks",
      type: "veg",
      description: "Sweet lime freshly cold-pressed for maximum Vitamin C and natural flavor."
    },
    {
      id: "dk-05",
      name: "Watermelon Juice",
      stall: "Guru Cool Hub",
      category: "Drinks",
      type: "veg",
      description: "Hydrating pure ruby watermelon juice served chilled without artificial additives."
    },
    {
      id: "dk-06",
      name: "Mojito",
      stall: "Guru Cool Hub",
      category: "Drinks",
      type: "veg",
      description: "Sparkling cooler muddled with fresh mint leaves, lime wedges, and crushed ice."
    },
    {
      id: "dk-07",
      name: "Pineapple Juice",
      stall: "Guru Cool Hub",
      category: "Drinks",
      type: "veg",
      description: "Sweet and tangy ripe pineapple freshly blended into an energizing drink."
    },
    {
      id: "dk-08",
      name: "Orange Juice",
      stall: "Guru Cool Hub",
      category: "Drinks",
      type: "veg",
      description: "Freshly squeezed citrus orange juice bursting with natural brightness."
    },
    {
      id: "dk-09",
      name: "ABC Juice (Apple, Beetroot, Carrot)",
      stall: "Guru Cool Hub",
      category: "Drinks",
      type: "veg",
      description: "The miracle health detox drink loaded with antioxidants and nutrients."
    },
    {
      id: "dk-10",
      name: "Apple Juice",
      stall: "Guru Cool Hub",
      category: "Drinks",
      type: "veg",
      description: "Crisp red apples cold-pressed into a naturally refreshing, healthy juice."
    },
    {
      id: "dk-11",
      name: "Pomegranate Juice",
      stall: "Guru Cool Hub",
      category: "Drinks",
      type: "veg",
      description: "Rich ruby-red pomegranate juice packed with healthy vitality."
    },
    {
      id: "dk-12",
      name: "Milk Shake",
      stall: "Guru Cool Hub",
      category: "Drinks",
      type: "veg",
      description: "Thick, creamy dairy milkshake blended with real ice cream and milk."
    },
    {
      id: "dk-13",
      name: "Milk Shake Brownie",
      stall: "Guru Cool Hub",
      category: "Drinks",
      type: "veg",
      description: "Decadent thick chocolate milkshake blended with chocolate fudge."
    },

    // --- A2A ICE POPSTICKS AND ICECREAMS ---
    {
      id: "ip-01",
      name: "Apple Ice",
      stall: "A2A Ice Popsticks and Icecreams",
      category: "Ice Pops",
      type: "veg",
      description: "Crisp natural apple fruit ice popstick frozen fresh on a stick."
    },
    {
      id: "ip-02",
      name: "Mango Ice",
      stall: "A2A Ice Popsticks and Icecreams",
      category: "Ice Pops",
      type: "veg",
      description: "Lush Alphonso mango pulp frozen into a sweet tropical ice pop."
    },
    {
      id: "ip-03",
      name: "Kiwi Ice",
      stall: "A2A Ice Popsticks and Icecreams",
      category: "Ice Pops",
      type: "veg",
      description: "Tangy real green kiwi fruit puree frozen into an invigorating ice treat."
    },
    {
      id: "ip-04",
      name: "Dragon Fruit Ice",
      stall: "A2A Ice Popsticks and Icecreams",
      category: "Ice Pops",
      type: "veg",
      description: "Vibrant exotic magenta dragon fruit ice pop with delicate natural sweetness."
    },
    {
      id: "ip-05",
      name: "Pineapple Ice",
      stall: "A2A Ice Popsticks and Icecreams",
      category: "Ice Pops",
      type: "veg",
      description: "Sweet and tart pineapple fruit popstick that refreshes instantly."
    },
    {
      id: "ip-06",
      name: "Orange Ice",
      stall: "A2A Ice Popsticks and Icecreams",
      category: "Ice Pops",
      type: "veg",
      description: "Zesty sun-ripened orange citrus popstick with nostalgic fruit flavor."
    },
    {
      id: "ip-07",
      name: "Guava Ice",
      stall: "A2A Ice Popsticks and Icecreams",
      category: "Ice Pops",
      type: "veg",
      description: "Country pink guava puree popstick with a subtle touch of mild spice."
    },
    {
      id: "ip-08",
      name: "Watermelon Ice",
      stall: "A2A Ice Popsticks and Icecreams",
      category: "Ice Pops",
      type: "veg",
      description: "Pure watermelon fruit freeze on a stick, ideal for warm park strolls."
    },
    {
      id: "ip-09",
      name: "Muskmelon Ice",
      stall: "A2A Ice Popsticks and Icecreams",
      category: "Ice Pops",
      type: "veg",
      description: "Fragrant cantaloupe muskmelon ice pop packed with genuine fruit sweetness."
    },
    {
      id: "ip-10",
      name: "Grape Ice",
      stall: "A2A Ice Popsticks and Icecreams",
      category: "Ice Pops",
      type: "veg",
      description: "Deep purple grape juice frozen into a delightful tangy-sweet popstick."
    },
    {
      id: "ip-11",
      name: "Pomegranate Ice",
      stall: "A2A Ice Popsticks and Icecreams",
      category: "Ice Pops",
      type: "veg",
      description: "Pure pomegranate ruby extract popstick rich in natural goodness."
    },

    // --- NATURAL SOUPS (HERBAL SELECTION) ---
    {
      id: "sp-01",
      name: "Mudakathan Soup",
      stall: "Natural Soups",
      category: "Soups",
      type: "veg",
      description: "Traditional balloon vine greens soup, cherished in Tamil heritage."
    },
    {
      id: "sp-02",
      name: "Thuthuvalai Soup",
      stall: "Natural Soups",
      category: "Soups",
      type: "veg",
      description: "Authentic climbing brinjal herb soup, renowned for warmth and respiratory comfort."
    },
    {
      id: "sp-03",
      name: "Vallarai Soup",
      stall: "Natural Soups",
      category: "Soups",
      type: "veg",
      description: "Brahmi / Indian pennywort leaves gently simmered with cumin and crushed pepper."
    },
    {
      id: "sp-04",
      name: "Murungai Keerai Soup",
      stall: "Natural Soups",
      category: "Soups",
      type: "veg",
      description: "Nutritious drumstick leaves herbal broth simmered with garlic and shallots."
    },
    {
      id: "sp-05",
      name: "Ponnanganni Keerai Soup",
      stall: "Natural Soups",
      category: "Soups",
      type: "veg",
      description: "Sessile joyweed herbal soup revered in South Indian culinary tradition."
    },
    {
      id: "sp-06",
      name: "Avaram Poo Soup",
      stall: "Natural Soups",
      category: "Soups",
      type: "veg",
      description: "Golden Tanner's Cassia flower brew with soothing botanical goodness."
    },
    {
      id: "sp-07",
      name: "Vazhaithandu Soup",
      stall: "Natural Soups",
      category: "Soups",
      type: "veg",
      description: "Fresh banana stem clear soup with light peppery tempering."
    },
    {
      id: "sp-08",
      name: "Arugampul Soup",
      stall: "Natural Soups",
      category: "Soups",
      type: "veg",
      description: "Bermuda grass botanical soup offering soothing traditional wellness."
    },
    {
      id: "sp-09",
      name: "Hibiscus (Chembaruthi) Soup",
      stall: "Natural Soups",
      category: "Soups",
      type: "veg",
      description: "Vibrant red hibiscus flower petals gently brewed with mild herbs."
    },
    {
      id: "sp-10",
      name: "Curry Leaves (Karuveppilai) Soup",
      stall: "Natural Soups",
      category: "Soups",
      type: "veg",
      description: "Freshly roasted curry leaves extract infused with garlic, cumin, and pepper."
    },
    {
      id: "sp-11",
      name: "Thulasi Soup",
      stall: "Natural Soups",
      category: "Soups",
      type: "veg",
      description: "Holy basil herbal infusion simmered with crushed black pepper and ginger."
    },
    {
      id: "sp-12",
      name: "Kollu (Horsegram) Soup",
      stall: "Natural Soups",
      category: "Soups",
      type: "veg",
      description: "Hearty horsegram broth seasoned with garlic, shallots, and crushed spices."
    },
    {
      id: "sp-13",
      name: "Pirandai Soup",
      stall: "Natural Soups",
      category: "Soups",
      type: "veg",
      description: "Veldt grape stem decoction simmered with traditional tempering spices."
    },
    {
      id: "sp-14",
      name: "Nellikkai (Amla) Soup",
      stall: "Natural Soups",
      category: "Soups",
      type: "veg",
      description: "Tangy Indian gooseberry broth rich in natural Vitamin C and warmth."
    },

    // --- HOT SPRING: POTATO ROLLS (OTHER) ---
    {
      id: "pr-01",
      name: "Potato Roll - Chilli Cheese",
      stall: "Hot Spring",
      category: "Other",
      type: "veg",
      description: "Crispy spiral fried whole potato skewer dusted with spicy chilli and cheddar cheese seasoning."
    },
    {
      id: "pr-02",
      name: "Potato Roll - Peri Peri",
      stall: "Hot Spring",
      category: "Other",
      type: "veg",
      description: "Tornado potato roll coated in fiery African peri peri spice blend."
    },
    {
      id: "pr-03",
      name: "Potato Roll - Pepper Cheese",
      stall: "Hot Spring",
      category: "Other",
      type: "veg",
      description: "Crispy spiral roll dusted with cracked black pepper and rich cheese blend."
    },
    {
      id: "pr-04",
      name: "Potato Roll - Mint Mayonnaise",
      stall: "Hot Spring",
      category: "Other",
      type: "veg",
      description: "Golden potato spiral finished with refreshing cool mint mayo drizzle."
    },
    {
      id: "pr-05",
      name: "Potato Roll - Thousand Island",
      stall: "Hot Spring",
      category: "Other",
      type: "veg",
      description: "Crunchy potato twist drizzled with tangy-sweet thousand island dressing."
    },
    {
      id: "pr-06",
      name: "Potato Roll - Schezwan",
      stall: "Hot Spring",
      category: "Other",
      type: "veg",
      description: "Fiery Schezwan chili garlic oil and spice seasoning over crispy spiral potato."
    },
    {
      id: "pr-07",
      name: "Potato Roll - Tandoori",
      stall: "Hot Spring",
      category: "Other",
      type: "veg",
      description: "Smoky tandoori masala seasoning tossed on freshly fried golden potato rolls."
    },
    {
      id: "pr-08",
      name: "Potato Roll - Lemon Tadka",
      stall: "Hot Spring",
      category: "Other",
      type: "veg",
      description: "Tangy lemon zest with aromatic tempered cumin and mustard notes."
    },
    {
      id: "pr-09",
      name: "Potato Roll - Mexican",
      stall: "Hot Spring",
      category: "Other",
      type: "veg",
      description: "Zesty Mexican salsa seasoning with paprika, cumin, and onion powder."
    },
    {
      id: "pr-10",
      name: "Potato Roll - Classic Salt",
      stall: "Hot Spring",
      category: "Other",
      type: "veg",
      description: "Simplicity at its best - hot crispy potato twists with sea salt."
    },

    // --- MASSAGE CENTER SERVICES (OTHER) ---
    {
      id: "ms-01",
      name: "Foot Massage",
      stall: "Massage Center",
      category: "Other",
      type: "service",
      description: "Soothing foot relaxation massage to refresh tired feet after exploring Semmozhi Poonga."
    },
    {
      id: "ms-02",
      name: "Leg and Foot Massage",
      stall: "Massage Center",
      category: "Other",
      type: "service",
      description: "Relaxing massage for the legs and feet."
    },
    {
      id: "ms-03",
      name: "Kansya Thali Foot Massage",
      stall: "Massage Center",
      category: "Other",
      type: "service",
      description: "Traditional Kansya Thali foot massage."
    },
    {
      id: "ms-04",
      name: "Full Body Relaxation",
      stall: "Massage Center",
      category: "Other",
      type: "service",
      description: "A full body relaxation massage."
    },
    {
      id: "ms-05",
      name: "Thai Massage",
      stall: "Massage Center",
      category: "Other",
      type: "service",
      description: "Traditional Thai massage."
    },
    {
      id: "ms-06",
      name: "Luxury Combo Massage",
      stall: "Massage Center",
      category: "Other",
      type: "service",
      description: "A luxurious combination massage experience."
    }
  ],

  // Why Visit Feature Cards (clean iconKey mapped to SVGs)
  whyVisit: [
    {
      iconKey: "destination",
      title: "Different Tastes, One Destination",
      description:
        "Explore a wide variety of food and refreshments in one convenient location without having to hop between different places."
    },
    {
      iconKey: "family",
      title: "Family-Friendly Experience",
      description:
        "Enjoy food and quality time with family in a comfortable, spacious park environment designed for every generation."
    },
    {
      iconKey: "park",
      title: "Inside Semmozhi Poonga",
      description:
        "Combine your refreshing garden stroll and kids play time with a convenient, delicious food break right inside the park."
    },
    {
      iconKey: "cravings",
      title: "Something for Every Craving",
      description:
        "From hearty meals and crispy fried chicken to street chaats, desserts, fresh fruit ice pops, waffles, and herbal soups."
    }
  ],

  // Gallery / Atmosphere Images
  atmosphereGallery: [
    {
      src: "image/atmosphere/gallery-01.jpeg",
      title: "Kamathenu Atmosphere",
      subtitle: "A warm and welcoming dining experience",
      category: "Ambience"
    },
    {
      src: "image/atmosphere/gallery-02.jpeg",
      title: "Dining Area",
      subtitle: "Comfortable seating for families and groups",
      category: "Seating"
    },
    {
      src: "image/atmosphere/gallery-03.jpeg",
      title: "Food Court Vibes",
      subtitle: "Vibrant surroundings inside Semmozhi Poonga",
      category: "Ambience"
    },
    {
      src: "image/atmosphere/gallery-04.jpeg",
      title: "Family Dining",
      subtitle: "A perfect spot for family outings",
      category: "Family"
    },
    {
      src: "image/atmosphere/gallery-05.jpeg",
      title: "Fresh & Tasty",
      subtitle: "Delicious food served fresh every day",
      category: "Food"
    },
    {
      src: "image/atmosphere/gallery-06.jpeg",
      title: "Green Surroundings",
      subtitle: "Dine amidst the lush greenery of the park",
      category: "Environment"
    },
    {
      src: "image/atmosphere/gallery-07.jpeg",
      title: "Stall Variety",
      subtitle: "Multiple food stalls with diverse cuisine",
      category: "Stalls"
    },
    {
      src: "image/atmosphere/gallery-08.jpeg",
      title: "Outdoor Dining",
      subtitle: "Enjoy open-air dining in a park setting",
      category: "Ambience"
    },
    {
      src: "image/atmosphere/gallery-09.jpeg",
      title: "Cozy Corners",
      subtitle: "Relaxed seating corners for every group",
      category: "Seating"
    },
    {
      src: "image/atmosphere/gallery-10.jpeg",
      title: "Park Atmosphere",
      subtitle: "Surrounded by nature and good company",
      category: "Environment"
    },
    {
      src: "image/atmosphere/gallery-11.jpeg",
      title: "Evening Dining",
      subtitle: "A pleasant evening at Kamathenu Unavagham",
      category: "Ambience"
    },
    {
      src: "image/atmosphere/gallery-12.jpeg",
      title: "Food Preparations",
      subtitle: "Fresh preparations served with care",
      category: "Food"
    },
    {
      src: "image/atmosphere/gallery-13.jpeg",
      title: "Clean & Organized",
      subtitle: "Well-maintained and hygienic premises",
      category: "Facilities"
    },
    {
      src: "image/atmosphere/gallery-14.jpeg",
      title: "Group Seating",
      subtitle: "Spacious seating for large groups and families",
      category: "Seating"
    },
    {
      src: "image/atmosphere/gallery-15.jpeg",
      title: "Parkside View",
      subtitle: "Beautiful views from our dining area",
      category: "Environment"
    },
    {
      src: "image/atmosphere/gallery-16.jpeg",
      title: "Happy Dining",
      subtitle: "Creating memories over great food",
      category: "Family"
    },
    {
      src: "image/atmosphere/gallery-17.jpeg",
      title: "Kamathenu Spread",
      subtitle: "A wide spread of traditional and modern dishes",
      category: "Food"
    },
    {
      src: "image/atmosphere/gallery-18.jpeg",
      title: "Our Ambience",
      subtitle: "The perfect atmosphere for a complete dining experience",
      category: "Ambience"
    }
  ],

  // Facilities (clean iconKey mapped to SVGs)
  facilities: [
    {
      iconKey: "family",
      title: "Family Seating",
      desc: "Ample comfortable seating with ~100 people capacity for families and groups."
    },
    {
      iconKey: "child",
      title: "Near Play Area",
      desc: "Situated right next to the Semmozhi Poonga kids play area for easy family fun."
    },
    {
      iconKey: "water",
      title: "Drinking Water",
      desc: "Hygienic and clean purified drinking water facilities readily accessible."
    },
    {
      iconKey: "restroom",
      title: "Clean Restrooms",
      desc: "Maintained park restroom facilities nearby for visitor convenience."
    },
    {
      iconKey: "car",
      title: "Car Parking",
      desc: "Spacious official park parking available for four-wheelers."
    },
    {
      iconKey: "bike",
      title: "Two-Wheeler Parking",
      desc: "Dedicated and convenient parking slots for two-wheelers."
    },
    {
      iconKey: "chair",
      title: "Common Seating",
      desc: "Open, shaded common food court dining tables free for all visitors."
    },
    {
      iconKey: "card",
      title: "Cash + UPI + Card",
      desc: "Seamless digital payments accepted alongside cash across all stalls."
    }
  ],

  // Park Entry Information (clean iconKey mapped to SVGs)
  parkEntry: {
    title: "Planning Your Visit?",
    description:
      "Kamathenu Unavagham is located inside Semmozhi Poonga. Park entry is required to access the food area.",
    points: [
      {
        iconKey: "ticket",
        title: "Park entry ticket required",
        desc: "Visitors must obtain an entry ticket to enter Semmozhi Poonga."
      },
      {
        iconKey: "utensils",
        title: "Food area available after park entry",
        desc: "Once inside, all food stalls and seating areas are easily accessible near the play area."
      },
      {
        iconKey: "car",
        title: "Parking available",
        desc: "Convenient vehicle parking is provided at the park premises for cars and two-wheelers."
      },
      {
        iconKey: "family",
        title: "Family-friendly environment",
        desc: "A safe, green, and spacious setting suited for children, elders, and families."
      }
    ]
  },

  // Instagram showcase items (Visual grid)
  instagramFeed: [
    {
      image: "image/shops/front-view.jpeg",
      caption: "Welcome to Kamathenu Unavagham inside Semmozhi Poonga! Different tastes, one destination.",
      likes: "542"
    },
    {
      image: "image/shops/fryzo.jpeg",
      caption: "Crispy fried chicken & burgers from Fryzo! Weekend cravings sorted.",
      likes: "419"
    },
    {
      image: "image/shops/guru-cool-hub.jpeg",
      caption: "Warm Belgian waffles loaded with chocolate & chilled juices at Guru Cool Hub.",
      likes: "612"
    },
    {
      image: "image/atmosphere/atmosphere-05.jpeg",
      caption: "Evening vibes and delightful food moments inside Semmozhi Poonga.",
      likes: "488"
    },
    {
      image: "image/shops/a2a-ice-cream.jpeg",
      caption: "Beat the heat with 100% natural fruit ice popsticks!",
      likes: "376"
    },
    {
      image: "image/shops/thattu-vadai-settu.jpeg",
      caption: "Authentic Salem Thattuvadai Settu! Crunchy, spicy, and unforgettable.",
      likes: "529"
    }
  ],

  // Customer Reviews & Testimonials
  reviews: [
    {
      id: 1,
      name: "Karthik & Family",
      tag: "Family Visitor",
      badge: "Verified Visitor",
      rating: 5,
      text: "Semmozhi Poonga ku family ah vandhom. Kids play area enjoy pannitu, Kamathenu Unavagham la different food try pannom. Fryzo chicken and momos semma taste!"
    },
    {
      id: 2,
      name: "Suresh Kumar",
      tag: "Food Enthusiast",
      badge: "Verified Visitor",
      rating: 5,
      text: "Lots of food options in one place. Chicken biryani, fried rice and chicken 65 try pannom. Taste nalla irundhuchu and family ah sit panni enjoy panna comfortable ah irundhuchu."
    },
    {
      id: 3,
      name: "Priya Mohan",
      tag: "Weekend Visitor",
      badge: "Verified Visitor",
      rating: 5,
      text: "Guru Cool Hub waffles and milkshake romba nice ah irundhuchu. Especially Death by Chocolate waffle super! Kids ku romba pidichirundhuchu."
    },
    {
      id: 4,
      name: "Venkatesh R.",
      tag: "Park Walker",
      badge: "Verified Visitor",
      rating: 5,
      text: "Thattuvadai Settu and Bombay Chats try pannom. Snacks fresh ah and tasty ah irundhuchu. Park visit ku nalla food break spot."
    },
    {
      id: 5,
      name: "Deepa & Friends",
      tag: "College Group",
      badge: "Verified Visitor",
      rating: 5,
      text: "A2A ice pops are really refreshing! Mango and dragon fruit ice especially liked it. Semmozhi Poonga visit pannumbodhu definitely try panna vendiya place."
    },
    {
      id: 6,
      name: "Aravind Swaminathan",
      tag: "Food Explorer",
      badge: "Verified Visitor",
      rating: 5,
      text: "Fryzo la burger, loaded fries and chicken momos try pannom. Portion and taste renduume satisfying ah irundhuchu. Friends kooda enjoy panna nalla place."
    },
    {
      id: 7,
      name: "Dr. Meenakshi",
      tag: "Health Enthusiast",
      badge: "Verified Visitor",
      rating: 5,
      text: "Natural soups la different varieties irukku. Mudakathan and curry leaves soup try pannom. Different and interesting food experience."
    },
    {
      id: 8,
      name: "Anitha & Ramesh",
      tag: "Family Dining",
      badge: "Verified Visitor",
      rating: 5,
      text: "Family oda park ku vandhu, different shops la different foods try pannadhu super experience. Food variety romba nalla irukku and seating also comfortable."
    }
  ]
};

// Export to window for vanilla JS access
if (typeof window !== "undefined") {
  window.restaurantData = restaurantData;
}


