
// ==========================================
// MOVIE HUB - COMPLETE JAVASCRIPT
// ==========================================

const movies = [
    ["The Avengers", 2012, "action", 8.0],
    ["Avengers: Age of Ultron", 2015, "action", 7.3],
    ["Avengers: Infinity War", 2018, "action", 8.4],
    ["Avengers: Endgame", 2019, "action", 8.4],
    ["Iron Man", 2008, "action", 7.9],
    ["Iron Man 2", 2010, "action", 6.9],
    ["Iron Man 3", 2013, "action", 7.1],
    ["Captain America: The First Avenger", 2011, "action", 6.9],
    ["Captain America: The Winter Soldier", 2014, "action", 7.8],
    ["Captain America: Civil War", 2016, "action", 7.8],
    ["Thor", 2011, "action", 7.0],
    ["Thor: Ragnarok", 2017, "action", 7.9],
    ["Black Panther", 2018, "action", 7.3],
    ["Doctor Strange", 2016, "action", 7.5],
    ["Spider-Man: Homecoming", 2017, "action", 7.4],
    ["Spider-Man: No Way Home", 2021, "action", 8.2],
    ["John Wick", 2014, "action", 7.4],
    ["John Wick: Chapter 2", 2017, "action", 7.5],
    ["John Wick: Chapter 3", 2019, "action", 7.4],
    ["Mad Max: Fury Road", 2015, "action", 8.1],

    ["The Hangover", 2009, "comedy", 7.7],
    ["The Hangover Part II", 2011, "comedy", 6.5],
    ["Home Alone", 1990, "comedy", 7.7],
    ["Home Alone 2", 1992, "comedy", 6.9],
    ["Mr. Bean's Holiday", 2007, "comedy", 6.4],
    ["Johnny English", 2003, "comedy", 6.3],
    ["Johnny English Reborn", 2011, "comedy", 6.3],
    ["The Mask", 1994, "comedy", 6.9],
    ["Jumanji: Welcome to the Jungle", 2017, "comedy", 6.9],
    ["Free Guy", 2021, "comedy", 7.1],

    ["Titanic", 1997, "romance", 7.9],
    ["The Notebook", 2004, "romance", 7.8],
    ["Me Before You", 2016, "romance", 7.4],
    ["La La Land", 2016, "romance", 8.0],
    ["A Walk to Remember", 2002, "romance", 7.3],
    ["The Fault in Our Stars", 2014, "romance", 7.7],
    ["About Time", 2013, "romance", 7.8],
    ["Crazy Rich Asians", 2018, "romance", 6.9],
    ["10 Things I Hate About You", 1999, "romance", 7.3],
    ["The Proposal", 2009, "romance", 6.8],

    ["The Conjuring", 2013, "horror", 7.5],
    ["The Conjuring 2", 2016, "horror", 7.3],
    ["Annabelle", 2014, "horror", 5.4],
    ["Annabelle: Creation", 2017, "horror", 6.5],
    ["Insidious", 2010, "horror", 6.8],
    ["Insidious: Chapter 2", 2013, "horror", 6.6],
    ["The Nun", 2018, "horror", 5.3],
    ["IT", 2017, "horror", 7.3],
    ["A Quiet Place", 2018, "horror", 7.5],
    ["Smile", 2022, "horror", 6.5],

    ["Interstellar", 2014, "sci-fi", 8.7],
    ["Inception", 2010, "sci-fi", 8.8],
    ["The Matrix", 1999, "sci-fi", 8.7],
    ["The Matrix Reloaded", 2003, "sci-fi", 7.2],
    ["Avatar", 2009, "sci-fi", 7.9],
    ["Avatar: The Way of Water", 2022, "sci-fi", 7.5],
    ["Dune", 2021, "sci-fi", 8.0],
    ["Dune: Part Two", 2024, "sci-fi", 8.5],
    ["The Martian", 2015, "sci-fi", 8.0],
    ["Ready Player One", 2018, "sci-fi", 7.4],

    ["Frozen", 2013, "animation", 7.4],
    ["Frozen II", 2019, "animation", 6.8],
    ["Toy Story", 1995, "animation", 8.3],
    ["Toy Story 2", 1999, "animation", 7.9],
    ["Toy Story 3", 2010, "animation", 8.3],
    ["Finding Nemo", 2003, "animation", 8.2],
    ["Finding Dory", 2016, "animation", 7.2],
    ["Inside Out", 2015, "animation", 8.1],
    ["Inside Out 2", 2024, "animation", 7.6],
    ["Coco", 2017, "animation", 8.4],

    ["The Shawshank Redemption", 1994, "drama", 9.3],
    ["Forrest Gump", 1994, "drama", 8.8],
    ["The Green Mile", 1999, "drama", 8.6],
    ["The Pursuit of Happyness", 2006, "drama", 8.0],
    ["The Social Network", 2010, "drama", 7.8],
    ["The Imitation Game", 2014, "drama", 8.0],
    ["A Beautiful Mind", 2001, "drama", 8.2],
    ["The King's Speech", 2010, "drama", 8.0],
    ["Whiplash", 2014, "drama", 8.5],
    ["The Pianist", 2002, "drama", 8.5],

    ["The Lion King", 1994, "animation", 8.5],
    ["Zootopia", 2016, "animation", 8.0],
    ["Moana", 2016, "animation", 7.6],
    ["Ratatouille", 2007, "animation", 8.1],
    ["Up", 2009, "animation", 8.3],
    ["WALL-E", 2008, "animation", 8.4],
    ["How to Train Your Dragon", 2010, "animation", 8.1],
    ["Kung Fu Panda", 2008, "animation", 7.6],
    ["Despicable Me", 2010, "animation", 7.6],
    ["The Incredibles", 2004, "animation", 8.0],

    ["The Dark Knight", 2008, "action", 9.0],
    ["The Dark Knight Rises", 2012, "action", 8.4],
    ["Gladiator", 2000, "action", 8.5],
    ["Top Gun: Maverick", 2022, "action", 8.2],
    ["Mission: Impossible - Fallout", 2018, "action", 7.7],
    ["The Equalizer", 2014, "action", 7.2],
    ["Nobody", 2021, "action", 7.4],
    ["Edge of Tomorrow", 2014, "sci-fi", 7.9],
    ["Pacific Rim", 2013, "sci-fi", 6.9],
    ["Tenet", 2020, "sci-fi", 7.3]
];

const genreNames = {
    action: "แอ็กชัน",
    comedy: "คอมเมดี้",
    romance: "โรแมนติก",
    horror: "สยองขวัญ",
    "sci-fi": "ไซไฟ",
    animation: "แอนิเมชัน",
    drama: "ดราม่า",
    fantasy: "แฟนตาซี"
};

const genreDescriptions = {
    action: "ภาพยนตร์แนวแอ็กชัน เต็มไปด้วยการผจญภัยและความตื่นเต้น",
    comedy: "ภาพยนตร์แนวตลกและความบันเทิง",
    romance: "ภาพยนตร์เกี่ยวกับความรักและความสัมพันธ์",
    horror: "ภาพยนตร์แนวสยองขวัญและความลึกลับ",
    "sci-fi": "ภาพยนตร์แนววิทยาศาสตร์ เทคโนโลยี และโลกอนาคต",
    animation: "ภาพยนตร์แอนิเมชันและเรื่องราวสร้างสรรค์",
    drama: "ภาพยนตร์แนวดราม่า ถ่ายทอดเรื่องราวและอารมณ์",
    fantasy: "ภาพยนตร์แนวจินตนาการและโลกเหนือจริง"
};

// ==========================================
// INITIAL DATA
// ==========================================

const movieData = movies.map((movie, index) => ({
    id: index + 1,
    title: movie[0],
    year: movie[1],
    genre: movie[2],
    rating: movie[3]
}));

let currentGenre = "all";
let currentSearch = "";
let currentSort = "default";
let favorites = JSON.parse(localStorage.getItem("movieHubFavorites") || "[]");
let currentMovie = null;

// ==========================================
// ELEMENTS
// ==========================================

const movieGrid = document.getElementById("movieGrid");
const favoriteGrid = document.getElementById("favoriteGrid");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const resultTitle = document.getElementById("resultTitle");
const resultCount = document.getElementById("resultCount");
const emptyState = document.getElementById("emptyState");
const favoriteEmpty = document.getElementById("favoriteEmpty");
const movieModal = document.getElementById("movieModal");

// ==========================================
// HELPERS
// ==========================================

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
    })[char]);
}

function saveFavorites() {
    localStorage.setItem("movieHubFavorites", JSON.stringify(favorites));
    updateStats();
}

function getMovieById(id) {
    return movieData.find(movie => movie.id === Number(id));
}

function isFavorite(id) {
    return favorites.includes(Number(id));
}

// ==========================================
// MOVIE CARD
// ==========================================

function createMovieCard(movie) {
    const favorite = isFavorite(movie.id);

    return `
        <article class="movie-card">
            <div class="poster" style="--poster-bg: linear-gradient(145deg, hsl(${movie.id * 37 % 360} 55% 30%), #111)">
                <span class="poster-year">${movie.year}</span>
                <span class="rating">★ ${movie.rating}</span>
                <div class="poster-title">${escapeHTML(movie.title)}</div>
            </div>

            <div class="movie-card-info">
                <p class="movie-genre">${genreNames[movie.genre] || movie.genre}</p>
                <h3>${escapeHTML(movie.title)}</h3>
                <p class="movie-subtitle">${movie.year} · ${genreNames[movie.genre] || movie.genre}</p>

                <div class="card-actions">
                    <button class="details-btn" data-detail="${movie.id}">
                        ดูรายละเอียด
                    </button>

                    <button class="favorite-btn ${favorite ? "is-favorite" : ""}"
                        data-favorite="${movie.id}"
                        aria-label="เพิ่มรายการโปรด">
                        ${favorite ? "♥" : "♡"}
                    </button>
                </div>
            </div>
        </article>
    `;
}

// ==========================================
// RENDER MOVIES
// ==========================================

function getFilteredMovies() {
    let filtered = [...movieData];

    if (currentGenre !== "all") {
        filtered = filtered.filter(movie => movie.genre === currentGenre);
    }

    if (currentSearch.trim()) {
        const keyword = currentSearch.toLowerCase().trim();

        filtered = filtered.filter(movie =>
            movie.title.toLowerCase().includes(keyword) ||
            String(movie.year).includes(keyword) ||
            (genreNames[movie.genre] || "").toLowerCase().includes(keyword)
        );
    }

    switch (currentSort) {
        case "az":
            filtered.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case "za":
            filtered.sort((a, b) => b.title.localeCompare(a.title));
            break;
        case "rating":
            filtered.sort((a, b) => b.rating - a.rating);
            break;
        case "year":
            filtered.sort((a, b) => b.year - a.year);
            break;
    }

    return filtered;
}

function renderMovies() {
    if (!movieGrid) return;

    const filtered = getFilteredMovies();

    movieGrid.innerHTML = filtered.map(createMovieCard).join("");

    if (resultCount) {
        resultCount.textContent = `${filtered.length} เรื่อง`;
    }

    if (resultTitle) {
        resultTitle.textContent =
            currentGenre === "all"
                ? "ภาพยนตร์ทั้งหมด"
                : `หมวด${genreNames[currentGenre] || currentGenre}`;
    }

    if (emptyState) {
        emptyState.hidden = filtered.length !== 0;
    }
}

// ==========================================
// FAVORITES
// ==========================================

function renderFavorites() {
    if (!favoriteGrid) return;

    const favoriteMovies = movieData.filter(movie =>
        isFavorite(movie.id)
    );

    favoriteGrid.innerHTML = favoriteMovies.map(createMovieCard).join("");

    if (favoriteEmpty) {
        favoriteEmpty.hidden = favoriteMovies.length !== 0;
    }
}

function toggleFavorite(id) {
    id = Number(id);

    if (isFavorite(id)) {
        favorites = favorites.filter(item => item !== id);
    } else {
        favorites.push(id);
    }

    saveFavorites();
    renderMovies();
    renderFavorites();

    if (currentMovie && currentMovie.id === id) {
        updateModalFavoriteButton();
    }
}

// ==========================================
// MOVIE DETAILS MODAL
// ==========================================

function openMovieModal(movie) {
    if (!movie || !movieModal) return;

    currentMovie = movie;

    const modalPosterText = document.getElementById("modalPosterText");
    const modalTitle = document.getElementById("modalTitle");
    const modalYear = document.getElementById("modalYear");
    const modalRating = document.getElementById("modalRating");
    const modalDescription = document.getElementById("modalDescription");
    const modalDirector = document.getElementById("modalDirector");
    const modalGenres = document.getElementById("modalGenres");

    if (modalPosterText) {
        modalPosterText.textContent = movie.title;
    }

    if (modalTitle) {
        modalTitle.textContent = movie.title;
    }

    if (modalYear) {
        modalYear.textContent = movie.year;
    }

    if (modalRating) {
        modalRating.textContent = `★ ${movie.rating}`;
    }

    if (modalDescription) {
        modalDescription.textContent =
            genreDescriptions[movie.genre] || "ไม่มีรายละเอียดเพิ่มเติม";
    }

    if (modalDirector) {
        modalDirector.textContent = "ไม่ได้ระบุข้อมูล";
    }

    if (modalGenres) {
        modalGenres.textContent = genreNames[movie.genre] || movie.genre;
    }

    updateModalFavoriteButton();

    movieModal.classList.add("open");
    document.body.style.overflow = "hidden";
}

function closeMovieModal() {
    if (!movieModal) return;

    movieModal.classList.remove("open");
    document.body.style.overflow = "";
    currentMovie = null;
}

function updateModalFavoriteButton() {
    const button = document.getElementById("modalFavoriteBtn");

    if (!button || !currentMovie) return;

    const favorite = isFavorite(currentMovie.id);

    button.textContent = favorite
        ? "♥ อยู่ในรายการโปรด"
        : "♡ เพิ่มรายการโปรด";

    button.classList.toggle("is-favorite", favorite);
}

// ==========================================
// EVENT: MOVIE GRID
// ==========================================

if (movieGrid) {
    movieGrid.addEventListener("click", event => {
        const detailButton = event.target.closest("[data-detail]");
        const favoriteButton = event.target.closest("[data-favorite]");

        if (detailButton) {
            const movie = getMovieById(detailButton.dataset.detail);
            openMovieModal(movie);
            return;
        }

        if (favoriteButton) {
            toggleFavorite(favoriteButton.dataset.favorite);
        }
    });
}

// ==========================================
// EVENT: FAVORITE GRID
// ==========================================

if (favoriteGrid) {
    favoriteGrid.addEventListener("click", event => {
        const detailButton = event.target.closest("[data-detail]");
        const favoriteButton = event.target.closest("[data-favorite]");

        if (detailButton) {
            openMovieModal(getMovieById(detailButton.dataset.detail));
            return;
        }

        if (favoriteButton) {
            toggleFavorite(favoriteButton.dataset.favorite);
        }
    });
}

// ==========================================
// EVENT: SEARCH
// ==========================================

if (searchInput) {
    searchInput.addEventListener("input", event => {
        currentSearch = event.target.value;
        renderMovies();
    });
}

const clearSearch = document.getElementById("clearSearch");

if (clearSearch) {
    clearSearch.addEventListener("click", () => {
        if (searchInput) {
            searchInput.value = "";
        }

        currentSearch = "";
        renderMovies();
    });
}

// ==========================================
// EVENT: SORT
// ==========================================

if (sortSelect) {
    sortSelect.addEventListener("change", event => {
        currentSort = event.target.value;
        renderMovies();
    });
}

// ==========================================
// EVENT: GENRE FILTER
// ==========================================

document.querySelectorAll("[data-genre]").forEach(button => {
    button.addEventListener("click", () => {
        currentGenre = button.dataset.genre;

        document.querySelectorAll("[data-genre]").forEach(item => {
            item.classList.remove("active");
        });

        button.classList.add("active");
        renderMovies();
    });
});

// ==========================================
// EVENT: RESET FILTER
// ==========================================

const resetFilters = document.getElementById("resetFilters");

if (resetFilters) {
    resetFilters.addEventListener("click", () => {
        currentGenre = "all";
        currentSearch = "";
        currentSort = "default";

        if (searchInput) searchInput.value = "";
        if (sortSelect) sortSelect.value = "default";

        document.querySelectorAll("[data-genre]").forEach(button => {
            button.classList.toggle("active", button.dataset.genre === "all");
        });

        renderMovies();
    });
}

// ==========================================
// EVENT: MODAL CLOSE
// ==========================================

const closeModalButton = document.getElementById("closeModal");

if (closeModalButton) {
    closeModalButton.addEventListener("click", closeMovieModal);
}

if (movieModal) {
    movieModal.addEventListener("click", event => {
        if (event.target.matches("[data-close-modal]")) {
            closeMovieModal();
        }
    });
}

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        closeMovieModal();
    }
});

// ==========================================
// EVENT: MODAL FAVORITE
// ==========================================

const modalFavoriteBtn = document.getElementById("modalFavoriteBtn");

if (modalFavoriteBtn) {
    modalFavoriteBtn.addEventListener("click", () => {
        if (currentMovie) {
            toggleFavorite(currentMovie.id);
        }
    });
}

// ==========================================
// EVENT: SHOW ALL MOVIES
// ==========================================

const showAllMovies = document.getElementById("showAllMovies");

if (showAllMovies) {
    showAllMovies.addEventListener("click", () => {
        currentGenre = "all";
        currentSearch = "";

        if (searchInput) searchInput.value = "";

        document.querySelectorAll("[data-genre]").forEach(button => {
            button.classList.toggle("active", button.dataset.genre === "all");
        });

        renderMovies();

        document.getElementById("movies")?.scrollIntoView({
            behavior: "smooth"
        });
    });
}

// ==========================================
// THEME
// ==========================================

const themeSelect = document.getElementById("themeSelect");

function applyTheme(theme) {
    const allowedThemes = ["dark", "light", "green", "purple"];

    if (!allowedThemes.includes(theme)) {
        theme = "dark";
    }

    if (theme === "dark") {
        document.body.removeAttribute("data-theme");
    } else {
        document.body.dataset.theme = theme;
    }

    if (themeSelect) {
        themeSelect.value = theme;
    }

    localStorage.setItem("movieHubTheme", theme);
}

if (themeSelect) {
    themeSelect.addEventListener("change", event => {
        applyTheme(event.target.value);
    });
}

// ==========================================
// STATS
// ==========================================

function updateStats() {
    const totalMovies = document.getElementById("totalMovies");
    const totalGenres = document.getElementById("totalGenres");
    const totalFavorites = document.getElementById("totalFavorites");

    if (totalMovies) {
        totalMovies.textContent = movieData.length;
    }

    if (totalGenres) {
        totalGenres.textContent = Object.keys(genreNames).length;
    }

    if (totalFavorites) {
        totalFavorites.textContent = favorites.length;
    }
}

// ==========================================
// START WEBSITE
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("movieHubTheme") || "dark";

    applyTheme(savedTheme);
    updateStats();
    renderMovies();
    renderFavorites();

    console.log("MOVIE HUB พร้อมใช้งาน!", movieData.length, "เรื่อง");
});
