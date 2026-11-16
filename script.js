
"use strict";

/* =========================================
   MOVIE HUB - DATABASE (100 MOVIES)
========================================= */

const movies = [
    ["The Shawshank Redemption",1994,"drama",9.3],
    ["The Godfather",1972,"drama",9.2],
    ["The Dark Knight",2008,"action",9.0],
    ["The Godfather Part II",1974,"drama",9.0],
    ["12 Angry Men",1957,"drama",9.0],
    ["The Lord of the Rings: The Return of the King",2003,"fantasy",9.0],
    ["Schindler's List",1993,"drama",9.0],
    ["Pulp Fiction",1994,"drama",8.9],
    ["The Lord of the Rings: The Fellowship of the Ring",2001,"fantasy",8.9],
    ["The Good, the Bad and the Ugly",1966,"action",8.8],
    ["Forrest Gump",1994,"drama",8.8],
    ["Fight Club",1999,"drama",8.8],
    ["Inception",2010,"sci-fi",8.8],
    ["The Lord of the Rings: The Two Towers",2002,"fantasy",8.8],
    ["Star Wars: The Empire Strikes Back",1980,"sci-fi",8.7],
    ["The Matrix",1999,"sci-fi",8.7],
    ["Goodfellas",1990,"drama",8.7],
    ["One Flew Over the Cuckoo's Nest",1975,"drama",8.7],
    ["Interstellar",2014,"sci-fi",8.7],
    ["Seven Samurai",1954,"action",8.6],
    ["Saving Private Ryan",1998,"action",8.6],
    ["City of God",2002,"drama",8.6],
    ["The Green Mile",1999,"drama",8.6],
    ["Life Is Beautiful",1997,"comedy",8.6],
    ["Terminator 2: Judgment Day",1991,"action",8.6],
    ["Spirited Away",2001,"animation",8.6],
    ["Psycho",1960,"horror",8.5],
    ["The Pianist",2002,"drama",8.5],
    ["Parasite",2019,"drama",8.5],
    ["Gladiator",2000,"action",8.5],
    ["The Lion King",1994,"animation",8.5],
    ["Back to the Future",1985,"sci-fi",8.5],
    ["Whiplash",2014,"drama",8.5],
    ["The Prestige",2006,"drama",8.5],
    ["The Departed",2006,"drama",8.5],
    ["Alien",1979,"horror",8.5],
    ["Apocalypse Now",1979,"drama",8.4],
    ["Memento",2000,"drama",8.4],
    ["Django Unchained",2012,"action",8.4],
    ["WALL-E",2008,"animation",8.4],
    ["Coco",2017,"animation",8.4],
    ["Joker",2019,"drama",8.4],
    ["Avengers: Infinity War",2018,"action",8.4],
    ["Avengers: Endgame",2019,"action",8.3],
    ["Toy Story",1995,"animation",8.3],
    ["Up",2009,"animation",8.3],
    ["Your Name",2016,"romance",8.4],
    ["Grave of the Fireflies",1988,"animation",8.5],
    ["Princess Mononoke",1997,"animation",8.3],
    ["Howl's Moving Castle",2004,"animation",8.2],
    ["The Truman Show",1998,"comedy",8.2],
    ["Eternal Sunshine of the Spotless Mind",2004,"romance",8.3],
    ["Amélie",2001,"romance",8.3],
    ["La La Land",2016,"romance",8.0],
    ["Titanic",1997,"romance",7.9],
    ["The Notebook",2004,"romance",7.8],
    ["Pride & Prejudice",2005,"romance",7.8],
    ["About Time",2013,"romance",7.8],
    ["Before Sunrise",1995,"romance",8.1],
    ["10 Things I Hate About You",1999,"romance",7.3],
    ["The Conjuring",2013,"horror",7.5],
    ["Get Out",2017,"horror",7.8],
    ["A Quiet Place",2018,"horror",7.5],
    ["Hereditary",2018,"horror",7.3],
    ["The Shining",1980,"horror",8.4],
    ["It",2017,"horror",7.3],
    ["The Exorcist",1973,"horror",8.1],
    ["Train to Busan",2016,"horror",7.6],
    ["A Nightmare on Elm Street",1984,"horror",7.4],
    ["Scream",1996,"horror",7.4],
    ["Home Alone",1990,"comedy",7.7],
    ["The Grand Budapest Hotel",2014,"comedy",8.1],
    ["The Intouchables",2011,"comedy",8.5],
    ["Groundhog Day",1993,"comedy",8.0],
    ["The Mask",1994,"comedy",6.9],
    ["Mean Girls",2004,"comedy",7.1],
    ["Superbad",2007,"comedy",7.6],
    ["Mr. Bean's Holiday",2007,"comedy",6.4],
    ["Rush Hour",1998,"comedy",7.0],
    ["21 Jump Street",2012,"comedy",7.2],
    ["Mad Max: Fury Road",2015,"action",8.1],
    ["John Wick",2014,"action",7.4],
    ["Mission: Impossible - Fallout",2018,"action",7.7],
    ["Top Gun: Maverick",2022,"action",8.2],
    ["The Avengers",2012,"action",8.0],
    ["Iron Man",2008,"action",7.9],
    ["Spider-Man: No Way Home",2021,"action",8.2],
    ["Black Panther",2018,"action",7.3],
    ["The Batman",2022,"action",7.8],
    ["Jurassic Park",1993,"sci-fi",8.2],
    ["Blade Runner 2049",2017,"sci-fi",8.0],
    ["Dune",2021,"sci-fi",8.0],
    ["Arrival",2016,"sci-fi",7.9],
    ["The Martian",2015,"sci-fi",8.0],
    ["Avatar",2009,"sci-fi",7.9],
    ["Ready Player One",2018,"sci-fi",7.4],
    ["The Fifth Element",1997,"sci-fi",7.6],
    ["Edge of Tomorrow",2014,"sci-fi",7.9],
    ["Everything Everywhere All at Once",2022,"sci-fi",7.8],
    ["The Terminator",1984,"sci-fi",8.1]
];

/* =========================================
   GENRE INFORMATION
========================================= */

const genreNames = {
    action: "แอ็กชัน",
    comedy: "ตลก",
    romance: "โรแมนติก",
    horror: "สยองขวัญ",
    "sci-fi": "ไซไฟ",
    animation: "แอนิเมชัน",
    drama: "ดราม่า",
    fantasy: "แฟนตาซี"
};

const genreDescriptions = {
    action: "ภาพยนตร์แนวแอ็กชัน เน้นการผจญภัยและเหตุการณ์ที่ตื่นเต้น",
    comedy: "ภาพยนตร์แนวตลก เน้นความสนุกสนานและเสียงหัวเราะ",
    romance: "ภาพยนตร์แนวโรแมนติกเกี่ยวกับความรักและความสัมพันธ์",
    horror: "ภาพยนตร์แนวสยองขวัญและระทึกขวัญ",
    "sci-fi": "ภาพยนตร์แนววิทยาศาสตร์และจินตนาการ",
    animation: "ภาพยนตร์แอนิเมชันที่เล่าเรื่องผ่านงานภาพและตัวละคร",
    drama: "ภาพยนตร์แนวดราม่าที่เน้นเรื่องราวและอารมณ์",
    fantasy: "ภาพยนตร์แนวแฟนตาซีที่เต็มไปด้วยจินตนาการ"
};

/* =========================================
   HTML ELEMENTS
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const $ = id => document.getElementById(id);

    const movieGrid = $("movieGrid");
    const favoriteGrid = $("favoriteGrid");
    const searchInput = $("searchInput");
    const sortSelect = $("sortSelect");
    const clearSearch = $("clearSearch");

    const totalMovies = $("totalMovies");
    const totalGenres = $("totalGenres");
    const totalFavorites = $("totalFavorites");

    const resultTitle = $("resultTitle");
    const resultCount = $("resultCount");
    const emptyState = $("emptyState");
    const favoriteEmpty = $("favoriteEmpty");

    const themeSelect = $("themeSelect");

    const modal = $("movieModal");
    const closeModal = $("closeModal");
    const modalPoster = $("modalPoster");
    const modalPosterText = $("modalPosterText");
    const modalGenre = $("modalGenre");
    const modalTitle = $("modalTitle");
    const modalYear = $("modalYear");
    const modalRating = $("modalRating");
    const modalDuration = $("modalDuration");
    const modalDescription = $("modalDescription");
    const modalDirector = $("modalDirector");
    const modalGenres = $("modalGenres");
    const modalFavoriteBtn = $("modalFavoriteBtn");

    /* =====================================
       MOVIE OBJECTS
    ===================================== */

    const movieData = movies.map((item, index) => ({
        id: index + 1,
        title: item[0],
        year: item[1],
        genre: item[2],
        rating: item[3],
        description: genreDescriptions[item[2]]
    }));

    let activeGenre = "all";
    let currentMovieId = null;

    /* =====================================
       FAVORITES STORAGE
    ===================================== */

    let favorites = [];

    try {
        const saved = JSON.parse(
            localStorage.getItem("movieHubFavorites") || "[]"
        );

        favorites = Array.isArray(saved) ? saved : [];
    } catch (error) {
        favorites = [];
    }

    function saveFavorites() {
        try {
            localStorage.setItem(
                "movieHubFavorites",
                JSON.stringify(favorites)
            );
        } catch (error) {
            console.warn("ไม่สามารถบันทึกรายการโปรดได้", error);
        }
    }

    /* =====================================
       HELPER FUNCTIONS
    ===================================== */

    function escapeHTML(value) {
        return String(value).replace(/[&<>"']/g, char => ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        })[char]);
    }

    function getInitials(title) {
        return title
            .split(" ")
            .filter(Boolean)
            .slice(0, 2)
            .map(word => word[0])
            .join("")
            .toUpperCase();
    }

    /* =====================================
       MOVIE CARD
    ===================================== */

    function createMovieCard(movie) {
        const isFavorite = favorites.includes(movie.id);

        return `
            <article class="movie-card">

                <div class="poster-fallback movie-poster">
                    <span>${escapeHTML(getInitials(movie.title))}</span>
                </div>

                <div class="movie-info">

                    <h3 class="movie-title">
                        ${escapeHTML(movie.title)}
                    </h3>

                    <div class="movie-meta">
                        <span>${movie.year}</span>
                        <span class="rating">
                            ★ ${movie.rating.toFixed(1)}
                        </span>
                    </div>

                    <div class="card-actions">

                        <button
                            class="detail-btn"
                            type="button"
                            data-detail="${movie.id}">
                            ดูรายละเอียด
                        </button>

                        <button
                            class="favorite-btn ${isFavorite ? "active" : ""}"
                            type="button"
                            data-favorite="${movie.id}"
                            aria-label="เพิ่มหรือลบรายการโปรด">
                            ${isFavorite ? "♥" : "♡"}
                        </button>

                    </div>
                </div>
            </article>
        `;
    }

    /* =====================================
       RENDER MOVIES
    ===================================== */

    function renderMovies() {

        if (!movieGrid) return;

        let filtered = [...movieData];

        const keyword = searchInput
            ? searchInput.value.trim().toLowerCase()
            : "";

        // ค้นหาชื่อเรื่อง
        if (keyword) {
            filtered = filtered.filter(movie =>
                movie.title.toLowerCase().includes(keyword)
            );
        }

        // กรองประเภท
        if (activeGenre !== "all") {
            filtered = filtered.filter(movie =>
                movie.genre === activeGenre
            );
        }

        // เรียงลำดับ
        const sortValue = sortSelect
            ? sortSelect.value
            : "default";

        switch (sortValue) {
            case "az":
                filtered.sort((a, b) =>
                    a.title.localeCompare(b.title)
                );
                break;

            case "za":
                filtered.sort((a, b) =>
                    b.title.localeCompare(a.title)
                );
                break;

            case "rating":
                filtered.sort((a, b) =>
                    b.rating - a.rating
                );
                break;

            case "year":
                filtered.sort((a, b) =>
                    b.year - a.year
                );
                break;
        }

        movieGrid.innerHTML = filtered.length
            ? filtered.map(createMovieCard).join("")
            : "";

        if (resultTitle) {
            resultTitle.textContent = activeGenre === "all"
                ? "ภาพยนตร์ทั้งหมด"
                : "ภาพยนตร์ประเภท " + genreNames[activeGenre];
        }

        if (resultCount) {
            resultCount.textContent = `${filtered.length} เรื่อง`;
        }

        if (emptyState) {
            emptyState.hidden = filtered.length !== 0;
        }

        updateStats();
        renderFavorites();
    }

    /* =====================================
       RENDER FAVORITES
    ===================================== */

    function renderFavorites() {

        if (!favoriteGrid) return;

        const favoriteMovies = movieData.filter(movie =>
            favorites.includes(movie.id)
        );

        favoriteGrid.innerHTML = favoriteMovies.length
            ? favoriteMovies.map(createMovieCard).join("")
            : "";

        if (favoriteEmpty) {
            favoriteEmpty.hidden = favoriteMovies.length !== 0;
        }

        if (totalFavorites) {
            totalFavorites.textContent = favoriteMovies.length;
        }
    }

    /* =====================================
       UPDATE STATISTICS
    ===================================== */

    function updateStats() {

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

    /* =====================================
       TOGGLE FAVORITES
    ===================================== */

    function toggleFavorite(id) {

        if (favorites.includes(id)) {
            favorites = favorites.filter(item => item !== id);
        } else {
            favorites.push(id);
        }

        saveFavorites();
        renderMovies();

        // อัปเดตปุ่มในหน้ารายละเอียด
        if (currentMovieId === id && modal) {
            updateModalFavoriteButton();
        }
    }

    /* =====================================
       MOVIE DETAILS
    ===================================== */

    function showDetails(id) {

        const movie = movieData.find(item => item.id === id);

        if (!movie || !modal) return;

        currentMovieId = id;

        if (modalPosterText) {
            modalPosterText.textContent = getInitials(movie.title);
        }

        if (modalGenre) {
            modalGenre.textContent = "MOVIE DETAILS";
        }

        if (modalTitle) {
            modalTitle.textContent = movie.title;
        }

        if (modalYear) {
            modalYear.textContent = movie.year;
        }

        if (modalRating) {
            modalRating.textContent = "★ " + movie.rating.toFixed(1);
        }

        if (modalDuration) {
            modalDuration.textContent = "ภาพยนตร์";
        }

        if (modalDescription) {
            modalDescription.textContent = movie.description;
        }

        if (modalDirector) {
            modalDirector.textContent = "ไม่ได้ระบุในชุดข้อมูล";
        }

        if (modalGenres) {
            modalGenres.textContent = genreNames[movie.genre];
        }

        updateModalFavoriteButton();

        modal.classList.add("show");
        modal.setAttribute("aria-hidden", "false");

        document.body.style.overflow = "hidden";
    }

    function updateModalFavoriteButton() {

        if (!modalFavoriteBtn || currentMovieId === null) return;

        const isFavorite = favorites.includes(currentMovieId);

        modalFavoriteBtn.textContent = isFavorite
            ? "♥ ลบออกจากรายการโปรด"
            : "♡ เพิ่มรายการโปรด";
    }

    function hideModal() {

        if (!modal) return;

        modal.classList.remove("show");
        modal.setAttribute("aria-hidden", "true");

        document.body.style.overflow = "";

        currentMovieId = null;
    }

    /* =====================================
       CARD BUTTON EVENTS
    ===================================== */

    document.addEventListener("click", event => {

        const detailButton = event.target.closest("[data-detail]");
        const favoriteButton = event.target.closest("[data-favorite]");
        const closeButton = event.target.closest("[data-close-modal]");

        if (detailButton) {
            showDetails(Number(detailButton.dataset.detail));
        }

        if (favoriteButton) {
            toggleFavorite(Number(favoriteButton.dataset.favorite));
        }

        if (closeButton) {
            hideModal();
        }
    });

    /* =====================================
       MODAL BUTTONS
    ===================================== */

    if (closeModal) {
        closeModal.addEventListener("click", hideModal);
    }

    if (modalFavoriteBtn) {
        modalFavoriteBtn.addEventListener("click", () => {
            if (currentMovieId !== null) {
                toggleFavorite(currentMovieId);
            }
        });
    }

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            hideModal();
        }
    });

    /* =====================================
       GENRE FILTER BUTTONS
    ===================================== */

    document.querySelectorAll(".filter-btn").forEach(button => {

        button.addEventListener("click", () => {

            document.querySelectorAll(".filter-btn")
                .forEach(btn => btn.classList.remove("active"));

            button.classList.add("active");

            activeGenre = button.dataset.genre || "all";

            renderMovies();
        });
    });

    /* =====================================
       SEARCH
    ===================================== */

    if (searchInput) {
        searchInput.addEventListener("input", () => {
            renderMovies();
        });
    }

    /* =====================================
       CLEAR SEARCH
    ===================================== */

    if (clearSearch) {
        clearSearch.addEventListener("click", () => {

            if (searchInput) {
                searchInput.value = "";
                searchInput.focus();
            }

            renderMovies();
        });
    }

    /* =====================================
       SORT
    ===================================== */

    if (sortSelect) {
        sortSelect.addEventListener("change", renderMovies);
    }

    /* =====================================
       RESET FILTERS
    ===================================== */

    const resetFilters = $("resetFilters");

    if (resetFilters) {
        resetFilters.addEventListener("click", () => {

            activeGenre = "all";

            if (searchInput) {
                searchInput.value = "";
            }

            if (sortSelect) {
                sortSelect.value = "default";
            }

            document.querySelectorAll(".filter-btn")
                .forEach(button => {
                    button.classList.toggle(
                        "active",
                        button.dataset.genre === "all"
                    );
                });

            renderMovies();
        });
    }

    /* =====================================
       SHOW ALL MOVIES
    ===================================== */

    const showAllMovies = $("showAllMovies");

    if (showAllMovies) {
        showAllMovies.addEventListener("click", () => {

            activeGenre = "all";

            if (searchInput) {
                searchInput.value = "";
            }

            if (sortSelect) {
                sortSelect.value = "default";
            }

            document.querySelectorAll(".filter-btn")
                .forEach(button => {
                    button.classList.toggle(
                        "active",
                        button.dataset.genre === "all"
                    );
                });

            renderMovies();

            $("movies")?.scrollIntoView({
                behavior: "smooth"
            });
        });
    }

    /* =====================================
       THEME SELECTOR
    ===================================== */

    function applyTheme(theme) {

        const allowedThemes = ["dark", "light", "green", "purple"];

        if (!allowedThemes.includes(theme)) {
            theme = "dark";
        }

        document.body.dataset.theme = theme;

        document.body.classList.remove(
            "theme-dark",
            "theme-light",
            "theme-green",
            "theme-purple"
        );

        document.body.classList.add("theme-" + theme);

        if (themeSelect) {
            themeSelect.value = theme;
        }
    }

    let savedTheme = "dark";

    try {
        savedTheme = localStorage.getItem("movieHubTheme") || "dark";
    } catch (error) {
        savedTheme = "dark";
    }

    applyTheme(savedTheme);

    if (themeSelect) {
        themeSelect.addEventListener("change", () => {

            const selectedTheme = themeSelect.value;

            applyTheme(selectedTheme);

            try {
                localStorage.setItem("movieHubTheme", selectedTheme);
            } catch (error) {
                console.warn("ไม่สามารถบันทึกธีมได้", error);
            }
        });
    }

    /* =====================================
       INITIALIZE
    ===================================== */

    updateStats();
    renderMovies();

    console.log(
        "MOVIE HUB พร้อมใช้งาน!",
        movieData.length,
        "เรื่อง"
    );

});
