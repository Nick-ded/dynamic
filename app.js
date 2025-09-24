// Game data
const gameData = {
    "featured_games": [
        {
            "id": 1,
            "title": "Counter-Strike 2",
            "price": "Free to Play",
            "original_price": null,
            "discount": 0,
            "rating": 86,
            "platforms": ["Steam"],
            "steam_url": "https://store.steampowered.com/app/730/Counter-Strike_2/",
            "epic_url": null,
            "genre": ["Action", "FPS"],
            "developer": "Valve",
            "publisher": "Valve",
            "release_date": "2023",
            "description": "Counter-Strike 2 marks the largest technical leap forward in Counter-Strike's history, supporting all future updates.",
            "tags": ["Competitive", "Team-Based", "Tactical"],
            "image_url": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/730/header.jpg",
            "screenshots": [],
            "system_requirements": "Windows 10 or later"
        },
        {
            "id": 2,
            "title": "Elden Ring",
            "price": "$59.99",
            "original_price": null,
            "discount": 0,
            "rating": 96,
            "platforms": ["Steam", "Epic Games"],
            "steam_url": "https://store.steampowered.com/app/1245620/ELDEN_RING/",
            "epic_url": "https://www.epicgames.com/store/en-US/p/elden-ring",
            "genre": ["Action RPG", "Souls-like"],
            "developer": "FromSoftware",
            "publisher": "Bandai Namco",
            "release_date": "2022",
            "description": "Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.",
            "tags": ["Open World", "Difficult", "Fantasy"],
            "image_url": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg",
            "screenshots": [],
            "system_requirements": "Windows 10 64-bit"
        },
        {
            "id": 3,
            "title": "Baldur's Gate 3",
            "price": "$59.99",
            "original_price": null,
            "discount": 0,
            "rating": 96,
            "platforms": ["Steam"],
            "steam_url": "https://store.steampowered.com/app/1086940/Baldurs_Gate_3/",
            "epic_url": null,
            "genre": ["RPG", "Turn-Based Strategy"],
            "developer": "Larian Studios",
            "publisher": "Larian Studios",
            "release_date": "2023",
            "description": "Gather your party and return to the Forgotten Realms in a tale of fellowship and betrayal, sacrifice and survival.",
            "tags": ["Story Rich", "Character Customization", "Co-op"],
            "image_url": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1086940/header.jpg",
            "screenshots": [],
            "system_requirements": "Windows 10 64-bit"
        }
    ],
    "popular_games": [
        {
            "id": 4,
            "title": "PUBG: BATTLEGROUNDS",
            "price": "Free to Play",
            "original_price": null,
            "discount": 0,
            "rating": 73,
            "platforms": ["Steam"],
            "steam_url": "https://store.steampowered.com/app/578080/PUBG_BATTLEGROUNDS/",
            "epic_url": null,
            "genre": ["Battle Royale", "Action"],
            "developer": "PUBG Corporation",
            "publisher": "Krafton",
            "release_date": "2017",
            "description": "Play PUBG BATTLEGROUNDS for free. Land on strategic locations, loot weapons and supplies, and be the last team standing.",
            "tags": ["Battle Royale", "Multiplayer", "Survival"],
            "image_url": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/578080/header.jpg"
        },
        {
            "id": 5,
            "title": "Black Myth: Wukong",
            "price": "$59.99",
            "original_price": null,
            "discount": 0,
            "rating": 82,
            "platforms": ["Steam"],
            "steam_url": "https://store.steampowered.com/app/2358720/Black_Myth_Wukong/",
            "epic_url": null,
            "genre": ["Action", "Adventure"],
            "developer": "Game Science",
            "publisher": "Game Science",
            "release_date": "2024",
            "description": "Black Myth: Wukong is an action RPG rooted in Chinese mythology. Play as the Destined One to fight through challenges and uncover the truth.",
            "tags": ["Mythology", "Action RPG", "Chinese"],
            "image_url": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2358720/header.jpg"
        },
        {
            "id": 6,
            "title": "Dota 2",
            "price": "Free to Play",
            "original_price": null,
            "discount": 0,
            "rating": 82,
            "platforms": ["Steam"],
            "steam_url": "https://store.steampowered.com/app/570/Dota_2/",
            "epic_url": null,
            "genre": ["MOBA", "Strategy"],
            "developer": "Valve",
            "publisher": "Valve",
            "release_date": "2013",
            "description": "Dota 2 is a multiplayer online battle arena where two teams of five players compete to destroy the opposing team's Ancient.",
            "tags": ["MOBA", "Competitive", "Free to Play"],
            "image_url": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/570/header.jpg"
        },
        {
            "id": 7,
            "title": "Grand Theft Auto V",
            "price": "$29.99",
            "original_price": "$29.99",
            "discount": 0,
            "rating": 95,
            "platforms": ["Steam", "Epic Games"],
            "steam_url": "https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/",
            "epic_url": "https://www.epicgames.com/store/en-US/p/grand-theft-auto-v",
            "genre": ["Action", "Adventure"],
            "developer": "Rockstar North",
            "publisher": "Rockstar Games",
            "release_date": "2013",
            "description": "Los Santos is a sprawling sun-soaked metropolis full of self-help gurus, starlets and fading celebrities.",
            "tags": ["Open World", "Crime", "Multiplayer"],
            "image_url": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/271590/header.jpg"
        },
        {
            "id": 8,
            "title": "Cyberpunk 2077",
            "price": "$39.99",
            "original_price": "$59.99",
            "discount": 33,
            "rating": 86,
            "platforms": ["Steam", "Epic Games"],
            "steam_url": "https://store.steampowered.com/app/1091500/Cyberpunk_2077/",
            "epic_url": "https://www.epicgames.com/store/en-US/p/cyberpunk-2077",
            "genre": ["Action RPG", "Open World"],
            "developer": "CD Projekt Red",
            "publisher": "CD Projekt",
            "release_date": "2020",
            "description": "Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification.",
            "tags": ["Cyberpunk", "Open World", "RPG"],
            "image_url": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1091500/header.jpg"
        }
    ],
    "new_releases": [
        {
            "id": 9,
            "title": "Hollow Knight: Silksong",
            "price": "$29.99",
            "original_price": null,
            "discount": 0,
            "rating": 90,
            "platforms": ["Steam"],
            "steam_url": "https://store.steampowered.com/app/1030300/Hollow_Knight_Silksong/",
            "epic_url": null,
            "genre": ["Metroidvania", "Indie"],
            "developer": "Team Cherry",
            "publisher": "Team Cherry",
            "release_date": "2025",
            "description": "Discover a vast, haunted kingdom in Hollow Knight: Silksong! The sequel to the award winning action-adventure.",
            "tags": ["Metroidvania", "Indie", "Atmospheric"],
            "image_url": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1030300/header.jpg"
        },
        {
            "id": 10,
            "title": "Monster Hunter Wilds",
            "price": "$69.99",
            "original_price": null,
            "discount": 0,
            "rating": 85,
            "platforms": ["Steam"],
            "steam_url": "https://store.steampowered.com/app/2246340/Monster_Hunter_Wilds/",
            "epic_url": null,
            "genre": ["Action", "Co-op"],
            "developer": "Capcom",
            "publisher": "Capcom",
            "release_date": "2025",
            "description": "Hunt monsters in a living, breathing ecosystem where you can use the environment to your advantage.",
            "tags": ["Co-op", "Action", "Hunting"],
            "image_url": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2246340/header.jpg"
        }
    ],
    "epic_exclusives": [
        {
            "id": 11,
            "title": "Fortnite",
            "price": "Free to Play",
            "original_price": null,
            "discount": 0,
            "rating": 81,
            "platforms": ["Epic Games"],
            "steam_url": null,
            "epic_url": "https://www.epicgames.com/store/en-US/p/fortnite",
            "genre": ["Battle Royale", "Action"],
            "developer": "Epic Games",
            "publisher": "Epic Games",
            "release_date": "2017",
            "description": "Fortnite is the completely free multiplayer game where you and your friends collaborate to create your dream Fortnite world.",
            "tags": ["Battle Royale", "Building", "Free to Play"],
            "image_url": "https://cdn2.unrealengine.com/fortnite-chapter-4-season-2-mega-city-featured-image-1920x1080-b13bb8f93f85.jpg"
        },
        {
            "id": 12,
            "title": "Rocket League",
            "price": "Free to Play",
            "original_price": null,
            "discount": 0,
            "rating": 87,
            "platforms": ["Epic Games"],
            "steam_url": null,
            "epic_url": "https://www.epicgames.com/store/en-US/p/rocket-league",
            "genre": ["Sports", "Action"],
            "developer": "Psyonix",
            "publisher": "Psyonix",
            "release_date": "2015",
            "description": "Rocket League is a high-powered hybrid of arcade-style soccer and vehicular mayhem with easy-to-understand controls.",
            "tags": ["Sports", "Competitive", "Multiplayer"],
            "image_url": "https://cdn2.unrealengine.com/egs-rocketleague-psyonixllc-g1a-03-1920x1080-b25dc1bf52bf.jpg"
        }
    ]
};

// Global variables
let currentHeroSlide = 0;
let filteredGames = [];
let wishlist = [];
let recentlyViewed = [];
let heroInterval;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing app...');
    initializeApp();
});

function initializeApp() {
    console.log('Initializing GameHub Pro...');
    loadWishlist();
    loadRecentlyViewed();
    setupEventListeners();
    initializeHeroCarousel();
    renderAllGames();
    console.log('App initialized successfully');
}

function setupEventListeners() {
    console.log('Setting up event listeners...');
    
    // Hero carousel navigation
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', prevSlide);
        nextBtn.addEventListener('click', nextSlide);
        console.log('Hero navigation buttons configured');
    }
    
    // Search functionality
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
        console.log('Search input configured');
    }
    
    // Filter and sort controls
    const genreFilter = document.getElementById('genre-filter');
    const platformFilter = document.getElementById('platform-filter');
    const priceFilter = document.getElementById('price-filter');
    const sortSelect = document.getElementById('sort-select');
    
    if (genreFilter) genreFilter.addEventListener('change', handleFilters);
    if (platformFilter) platformFilter.addEventListener('change', handleFilters);
    if (priceFilter) priceFilter.addEventListener('change', handleFilters);
    if (sortSelect) sortSelect.addEventListener('change', handleSort);
    
    // Modal controls
    const modalClose = document.getElementById('modal-close');
    const modalBackdrop = document.querySelector('.modal-backdrop');
    
    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);
    
    // Navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', handleNavigation);
    });
    
    // Hero buy buttons
    document.querySelectorAll('.hero-buy-btn').forEach(btn => {
        btn.addEventListener('click', handleHeroBuy);
    });
    
    // Hero wishlist buttons
    document.querySelectorAll('.hero-wishlist-btn').forEach(btn => {
        btn.addEventListener('click', handleHeroWishlist);
    });
    
    console.log('All event listeners configured');
}

// Hero Carousel Functions
function initializeHeroCarousel() {
    console.log('Initializing hero carousel...');
    const slides = document.querySelectorAll('.hero-slide');
    
    if (slides.length === 0) {
        console.error('No hero slides found');
        return;
    }
    
    // Set first slide as active
    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === 0);
    });
    
    currentHeroSlide = 0;
    
    // Auto-rotate hero carousel every 5 seconds
    if (heroInterval) clearInterval(heroInterval);
    heroInterval = setInterval(() => {
        console.log('Auto-advancing hero carousel');
        nextSlide();
    }, 5000);
    
    console.log(`Hero carousel initialized with ${slides.length} slides`);
}

function nextSlide() {
    const slides = document.querySelectorAll('.hero-slide');
    if (slides.length === 0) return;
    
    slides[currentHeroSlide].classList.remove('active');
    currentHeroSlide = (currentHeroSlide + 1) % slides.length;
    slides[currentHeroSlide].classList.add('active');
    console.log(`Advanced to slide ${currentHeroSlide}`);
}

function prevSlide() {
    const slides = document.querySelectorAll('.hero-slide');
    if (slides.length === 0) return;
    
    slides[currentHeroSlide].classList.remove('active');
    currentHeroSlide = (currentHeroSlide - 1 + slides.length) % slides.length;
    slides[currentHeroSlide].classList.add('active');
    console.log(`Went back to slide ${currentHeroSlide}`);
}

// Game Rendering Functions
function renderAllGames() {
    console.log('Rendering all games...');
    renderGameSection('featured-games', gameData.featured_games);
    renderGameSection('popular-games', gameData.popular_games);
    renderGameSection('new-releases-games', gameData.new_releases);
    renderGameSection('epic-exclusives-games', gameData.epic_exclusives);
    
    // Render all games for browse section
    const allGames = [
        ...gameData.featured_games,
        ...gameData.popular_games,
        ...gameData.new_releases,
        ...gameData.epic_exclusives
    ];
    renderGameSection('all-games', allGames);
    filteredGames = allGames;
    console.log(`Rendered ${allGames.length} total games`);
}

function renderGameSection(containerId, games) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.warn(`Container ${containerId} not found`);
        return;
    }
    
    container.innerHTML = games.map(game => createGameCard(game)).join('');
    
    // Add event listeners to game cards
    container.querySelectorAll('.game-card').forEach(card => {
        card.addEventListener('click', (e) => {
            // Don't open modal if clicking on buttons
            if (e.target.closest('button')) return;
            openGameModal(card.dataset.gameId);
        });
    });
    
    // Add event listeners to buy buttons
    container.querySelectorAll('.buy-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            handleBuyClick(btn);
        });
    });
    
    // Add event listeners to wishlist buttons
    container.querySelectorAll('.wishlist-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            handleWishlistClick(btn);
        });
    });
    
    console.log(`Rendered ${games.length} games in ${containerId}`);
}

function createGameCard(game) {
    const isInWishlist = wishlist.includes(game.id);
    const discountBadge = game.discount > 0 ? `<div class="discount-badge">-${game.discount}%</div>` : '';
    const originalPrice = game.original_price && game.discount > 0 ? 
        `<span class="original-price">${game.original_price}</span>` : '';
    
    return `
        <div class="game-card" data-game-id="${game.id}">
            ${discountBadge}
            <div class="game-image">
                <img src="${game.image_url}" alt="${game.title}" loading="lazy">
            </div>
            <div class="game-info">
                <h3 class="game-title">${game.title}</h3>
                <p class="game-developer">${game.developer}</p>
                <div class="game-rating">
                    <span class="rating-score">${game.rating}%</span>
                    <div class="rating-stars">${generateStars(game.rating)}</div>
                </div>
                <div class="game-price">
                    <span class="current-price">${game.price}</span>
                    ${originalPrice}
                </div>
                <div class="game-platforms">
                    ${game.platforms.map(platform => `<span class="platform-badge">${platform}</span>`).join('')}
                </div>
                <div class="game-actions">
                    <button class="btn btn--primary buy-btn" data-steam="${game.steam_url || ''}" data-epic="${game.epic_url || ''}">
                        ${game.price === 'Free to Play' ? 'Play Now' : 'Buy Now'}
                    </button>
                    <button class="btn btn--secondary wishlist-btn" data-game-id="${game.id}" title="${isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}">
                        ${isInWishlist ? '❤️' : '🤍'}
                    </button>
                </div>
            </div>
        </div>
    `;
}

function generateStars(rating) {
    const stars = Math.round(rating / 20); // Convert 100-point scale to 5-star scale
    let starsHtml = '';
    for (let i = 0; i < 5; i++) {
        starsHtml += `<span class="star ${i < stars ? '' : 'empty'}">★</span>`;
    }
    return starsHtml;
}

// Search and Filter Functions
function handleSearch(e) {
    const query = e.target.value.toLowerCase().trim();
    console.log(`Searching for: "${query}"`);
    
    if (!query) {
        // If search is empty, show all games
        const allGames = [
            ...gameData.featured_games,
            ...gameData.popular_games,
            ...gameData.new_releases,
            ...gameData.epic_exclusives
        ];
        renderGameSection('all-games', allGames);
        filteredGames = allGames;
        return;
    }
    
    const allGames = [
        ...gameData.featured_games,
        ...gameData.popular_games,
        ...gameData.new_releases,
        ...gameData.epic_exclusives
    ];
    
    const searchResults = allGames.filter(game => {
        const titleMatch = game.title.toLowerCase().includes(query);
        const developerMatch = game.developer.toLowerCase().includes(query);
        const genreMatch = game.genre.some(g => g.toLowerCase().includes(query));
        const tagMatch = game.tags ? game.tags.some(t => t.toLowerCase().includes(query)) : false;
        const descriptionMatch = game.description.toLowerCase().includes(query);
        
        return titleMatch || developerMatch || genreMatch || tagMatch || descriptionMatch;
    });
    
    console.log(`Found ${searchResults.length} results for "${query}"`);
    renderGameSection('all-games', searchResults);
    filteredGames = searchResults;
    
    // Show browse all section when searching
    if (query) {
        const browseSection = document.getElementById('browse-all');
        if (browseSection) {
            browseSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
}

function handleFilters() {
    const genreFilter = document.getElementById('genre-filter').value;
    const platformFilter = document.getElementById('platform-filter').value;
    const priceFilter = document.getElementById('price-filter').value;
    
    console.log(`Applying filters - Genre: ${genreFilter}, Platform: ${platformFilter}, Price: ${priceFilter}`);
    
    const allGames = [
        ...gameData.featured_games,
        ...gameData.popular_games,
        ...gameData.new_releases,
        ...gameData.epic_exclusives
    ];
    
    let filtered = allGames.filter(game => {
        let matches = true;
        
        if (genreFilter && !game.genre.some(g => g.toLowerCase().includes(genreFilter.toLowerCase()))) {
            matches = false;
        }
        
        if (platformFilter && !game.platforms.includes(platformFilter)) {
            matches = false;
        }
        
        if (priceFilter) {
            const price = parseFloat(game.price.replace('$', '')) || 0;
            switch (priceFilter) {
                case 'free':
                    matches = matches && game.price === 'Free to Play';
                    break;
                case 'under30':
                    matches = matches && price > 0 && price < 30;
                    break;
                case '30to60':
                    matches = matches && price >= 30 && price <= 60;
                    break;
                case 'over60':
                    matches = matches && price > 60;
                    break;
            }
        }
        
        return matches;
    });
    
    console.log(`Filtered to ${filtered.length} games`);
    renderGameSection('all-games', filtered);
    filteredGames = filtered;
}

function handleSort() {
    const sortBy = document.getElementById('sort-select').value;
    console.log(`Sorting by: ${sortBy}`);
    
    let sorted = [...filteredGames];
    
    switch (sortBy) {
        case 'popular':
            sorted.sort((a, b) => b.rating - a.rating);
            break;
        case 'price-low':
            sorted.sort((a, b) => {
                const priceA = parseFloat(a.price.replace('$', '')) || 0;
                const priceB = parseFloat(b.price.replace('$', '')) || 0;
                return priceA - priceB;
            });
            break;
        case 'price-high':
            sorted.sort((a, b) => {
                const priceA = parseFloat(a.price.replace('$', '')) || 0;
                const priceB = parseFloat(b.price.replace('$', '')) || 0;
                return priceB - priceA;
            });
            break;
        case 'rating':
            sorted.sort((a, b) => b.rating - a.rating);
            break;
        case 'release':
            sorted.sort((a, b) => parseInt(b.release_date) - parseInt(a.release_date));
            break;
    }
    
    renderGameSection('all-games', sorted);
}

// Navigation Functions
function handleNavigation(e) {
    e.preventDefault();
    const target = e.target.getAttribute('href');
    
    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
    e.target.classList.add('active');
    
    // Scroll to section
    if (target && target !== '#browse-all') {
        const targetElement = document.querySelector(target);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    } else {
        const browseSection = document.getElementById('browse-all');
        if (browseSection) {
            browseSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
}

// Modal Functions
function openGameModal(gameId) {
    const game = findGameById(parseInt(gameId));
    if (!game) {
        console.error(`Game with ID ${gameId} not found`);
        return;
    }
    
    console.log(`Opening modal for game: ${game.title}`);
    
    // Add to recently viewed
    addToRecentlyViewed(game.id);
    
    // Populate modal content
    document.getElementById('modal-game-title').textContent = game.title;
    document.getElementById('modal-game-image').src = game.image_url;
    document.getElementById('modal-game-image').alt = game.title;
    document.getElementById('modal-rating').textContent = `${game.rating}%`;
    document.getElementById('modal-stars').innerHTML = generateStars(game.rating);
    document.getElementById('modal-platforms').innerHTML = 
        game.platforms.map(platform => `<span class="platform-badge">${platform}</span>`).join('');
    document.getElementById('modal-description').textContent = game.description;
    document.getElementById('modal-developer').textContent = game.developer;
    document.getElementById('modal-publisher').textContent = game.publisher;
    document.getElementById('modal-release').textContent = game.release_date;
    document.getElementById('modal-genre').textContent = game.genre.join(', ');
    document.getElementById('modal-price').textContent = game.price;
    
    if (game.original_price && game.discount > 0) {
        document.getElementById('modal-original-price').textContent = game.original_price;
        document.getElementById('modal-original-price').style.display = 'inline';
    } else {
        document.getElementById('modal-original-price').style.display = 'none';
    }
    
    // Setup buy buttons
    const steamBtn = document.getElementById('modal-steam-btn');
    const epicBtn = document.getElementById('modal-epic-btn');
    
    if (game.steam_url) {
        steamBtn.style.display = 'inline-block';
        steamBtn.onclick = () => {
            console.log(`Opening Steam URL: ${game.steam_url}`);
            window.open(game.steam_url, '_blank');
        };
    } else {
        steamBtn.style.display = 'none';
    }
    
    if (game.epic_url) {
        epicBtn.style.display = 'inline-block';
        epicBtn.onclick = () => {
            console.log(`Opening Epic URL: ${game.epic_url}`);
            window.open(game.epic_url, '_blank');
        };
    } else {
        epicBtn.style.display = 'none';
    }
    
    // Setup wishlist button
    const wishlistBtn = document.getElementById('modal-wishlist');
    const isInWishlist = wishlist.includes(game.id);
    wishlistBtn.textContent = isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist';
    wishlistBtn.onclick = () => toggleWishlist(game.id);
    
    // Show modal
    document.getElementById('game-modal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    console.log('Closing modal');
    document.getElementById('game-modal').classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Buy and Wishlist Functions
function handleBuyClick(btn) {
    const steamUrl = btn.dataset.steam;
    const epicUrl = btn.dataset.epic;
    
    console.log(`Buy button clicked - Steam: ${steamUrl}, Epic: ${epicUrl}`);
    
    if (steamUrl && epicUrl) {
        // Show option to choose platform
        const choice = confirm('Choose platform:\nOK for Steam\nCancel for Epic Games');
        const urlToOpen = choice ? steamUrl : epicUrl;
        console.log(`Opening URL: ${urlToOpen}`);
        window.open(urlToOpen, '_blank');
    } else if (steamUrl) {
        console.log(`Opening Steam URL: ${steamUrl}`);
        window.open(steamUrl, '_blank');
    } else if (epicUrl) {
        console.log(`Opening Epic URL: ${epicUrl}`);
        window.open(epicUrl, '_blank');
    } else {
        console.error('No valid URLs found for purchase');
    }
}

function handleWishlistClick(btn) {
    const gameId = parseInt(btn.dataset.gameId);
    console.log(`Wishlist button clicked for game ID: ${gameId}`);
    toggleWishlist(gameId);
    
    const isInWishlist = wishlist.includes(gameId);
    btn.innerHTML = isInWishlist ? '❤️' : '🤍';
    btn.title = isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist';
}

function handleHeroBuy(e) {
    const steamUrl = e.target.dataset.steam;
    const epicUrl = e.target.dataset.epic;
    
    console.log(`Hero buy button clicked - Steam: ${steamUrl}, Epic: ${epicUrl}`);
    
    if (steamUrl && epicUrl) {
        const choice = confirm('Choose platform:\nOK for Steam\nCancel for Epic Games');
        const urlToOpen = choice ? steamUrl : epicUrl;
        console.log(`Opening URL: ${urlToOpen}`);
        window.open(urlToOpen, '_blank');
    } else if (steamUrl) {
        console.log(`Opening Steam URL: ${steamUrl}`);
        window.open(steamUrl, '_blank');
    } else if (epicUrl) {
        console.log(`Opening Epic URL: ${epicUrl}`);
        window.open(epicUrl, '_blank');
    }
}

function handleHeroWishlist(e) {
    const gameId = parseInt(e.target.dataset.gameId);
    console.log(`Hero wishlist button clicked for game ID: ${gameId}`);
    toggleWishlist(gameId);
}

function toggleWishlist(gameId) {
    const index = wishlist.indexOf(gameId);
    if (index > -1) {
        wishlist.splice(index, 1);
        console.log(`Removed game ${gameId} from wishlist`);
    } else {
        wishlist.push(gameId);
        console.log(`Added game ${gameId} to wishlist`);
    }
    saveWishlist();
    
    // Update all wishlist buttons for this game
    document.querySelectorAll(`[data-game-id="${gameId}"].wishlist-btn`).forEach(btn => {
        const isInWishlist = wishlist.includes(gameId);
        btn.innerHTML = isInWishlist ? '❤️' : '🤍';
        btn.title = isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist';
    });
    
    // Update modal wishlist button if open
    const modalWishlistBtn = document.getElementById('modal-wishlist');
    if (modalWishlistBtn) {
        const isInWishlist = wishlist.includes(gameId);
        modalWishlistBtn.textContent = isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist';
    }
}

// Utility Functions
function findGameById(id) {
    const allGames = [
        ...gameData.featured_games,
        ...gameData.popular_games,
        ...gameData.new_releases,
        ...gameData.epic_exclusives
    ];
    return allGames.find(game => game.id === id);
}

function addToRecentlyViewed(gameId) {
    const index = recentlyViewed.indexOf(gameId);
    if (index > -1) {
        recentlyViewed.splice(index, 1);
    }
    recentlyViewed.unshift(gameId);
    if (recentlyViewed.length > 10) {
        recentlyViewed.pop();
    }
    saveRecentlyViewed();
    console.log(`Added game ${gameId} to recently viewed`);
}

// Storage Functions (with fallback for sandbox environment)
function saveWishlist() {
    try {
        if (typeof Storage !== 'undefined') {
            localStorage.setItem('gamehub-wishlist', JSON.stringify(wishlist));
            console.log('Wishlist saved to localStorage');
        }
    } catch (e) {
        console.log('LocalStorage not available, using memory storage');
    }
}

function loadWishlist() {
    try {
        if (typeof Storage !== 'undefined') {
            const saved = localStorage.getItem('gamehub-wishlist');
            if (saved) {
                wishlist = JSON.parse(saved);
                console.log(`Loaded ${wishlist.length} items from wishlist`);
            }
        }
    } catch (e) {
        console.log('LocalStorage not available, starting with empty wishlist');
        wishlist = [];
    }
}

function saveRecentlyViewed() {
    try {
        if (typeof Storage !== 'undefined') {
            localStorage.setItem('gamehub-recent', JSON.stringify(recentlyViewed));
            console.log('Recently viewed saved to localStorage');
        }
    } catch (e) {
        console.log('LocalStorage not available, using memory storage');
    }
}

function loadRecentlyViewed() {
    try {
        if (typeof Storage !== 'undefined') {
            const saved = localStorage.getItem('gamehub-recent');
            if (saved) {
                recentlyViewed = JSON.parse(saved);
                console.log(`Loaded ${recentlyViewed.length} recently viewed items`);
            }
        }
    } catch (e) {
        console.log('LocalStorage not available, starting with empty recently viewed');
        recentlyViewed = [];
    }
}
