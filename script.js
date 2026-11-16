document.addEventListener("DOMContentLoaded", () => {

    // รายการภาพยนตร์ตัวอย่าง
    const movies = [
        {
            id: 1,
            title: "Avengers: Endgame",
            year: 2019,
            rating: 8.4,
            duration: "181 นาที",
            genre: ["action", "sci-fi"],
            director: "Anthony Russo, Joe Russo",
            description: "เหล่าอเวนเจอร์สที่เหลืออยู่ต้องร่วมมือกันเพื่อหาทางแก้ไขเหตุการณ์ครั้งใหญ่ และพยายามนำความสมดุลกลับคืนสู่จักรวาล",
            poster: "AVENGERS",
            color: "linear-gradient(145deg,#501014,#111827)"
        },
        {
            id: 2,
            title: "Spider-Man: No Way Home",
            year: 2021,
            rating: 8.2,
            duration: "148 นาที",
            genre: ["action", "sci-fi"],
            director: "Jon Watts",
            description: "ชีวิตของปีเตอร์ ปาร์กเกอร์เปลี่ยนไปเมื่อความลับเรื่องตัวตนถูกเปิดเผย เขาจึงต้องหาทางแก้ไขสถานการณ์ที่เกินควบคุม",
            poster: "SPIDER-MAN",
            color: "linear-gradient(145deg,#8d101e,#122b51)"
        },
        {
            id: 3,
            title: "The Batman",
            year: 2022,
            rating: 7.8,
            duration: "176 นาที",
            genre: ["action", "drama"],
            director: "Matt Reeves",
            description: "แบทแมนออกสืบสวนคดีปริศนาในเมืองก็อตแธม และค้นพบความลับที่เชื่อมโยงกับผู้มีอำนาจในเมือง",
            poster: "THE BATMAN",
            color: "linear-gradient(145deg,#242424,#751c20)"
        },
        {
            id: 4,
            title: "Joker",
            year: 2019,
            rating: 8.4,
            duration: "122 นาที",
            genre: ["drama", "thriller"],
            director: "Todd Phillips",
            description: "เรื่องราวของชายคนหนึ่งที่ต้องเผชิญกับปัญหาในชีวิตและสังคม จนนำไปสู่การเปลี่ยนแปลงครั้งสำคัญ",
            poster: "JOKER",
            color: "linear-gradient(145deg,#285b3a,#161616)"
        },
        {
            id: 5,
            title: "Interstellar",
            year: 2014,
            rating: 8.7,
            duration: "169 นาที",
            genre: ["sci-fi", "drama"],
            director: "Christopher Nolan",
            description: "กลุ่มนักบินอวกาศออกเดินทางผ่านอวกาศเพื่อค้นหาดาวเคราะห์ที่มนุษย์สามารถอาศัยอยู่ได้",
            poster: "INTERSTELLAR",
            color: "linear-gradient(145deg,#173c63,#090b18)"
        },
        {
            id: 6,
            title: "Inception",
            year: 2010,
            rating: 8.8,
            duration: "148 นาที",
            genre: ["sci-fi", "action"],
            director: "Christopher Nolan",
            description: "ทีมผู้เชี่ยวชาญมีภารกิจเข้าไปในความฝันของเป้าหมายเพื่อทำภารกิจที่ซับซ้อนและท้าทาย",
            poster: "INCEPTION",
            color: "linear-gradient(145deg,#75502b,#151515)"
        },
        {
            id: 7,
            title: "The Conjuring",
            year: 2013,
            rating: 7.5,
            duration: "112 นาที",
            genre: ["horror"],
            director: "James Wan",
            description: "คู่สามีภรรยานักสืบเรื่องเหนือธรรมชาติเข้าไปช่วยครอบครัวหนึ่งที่กำลังเผชิญเหตุการณ์ลึกลับในบ้าน",
            poster: "THE CONJURING",
            color: "linear-gradient(145deg,#24243b,#08080d)"
        },
        {
            id: 8,
            title: "A Quiet Place",
            year: 2018,
            rating: 7.5,
            duration: "90 นาที",
            genre: ["horror", "sci-fi"],
            director: "John Krasinski",
            description: "ครอบครัวหนึ่งต้องใช้ชีวิตอย่างระมัดระวังในโลกที่เสียงเพียงเล็กน้อยอาจนำอันตรายมาสู่พวกเขา",
            poster: "A QUIET PLACE",
            color: "linear-gradient(145deg,#34442a,#101510)"
        },
        {
            id: 9,
            title: "The Hangover",
            year: 2009,
            rating: 7.7,
            duration: "100 นาที",
            genre: ["comedy"],
            director: "Todd Phillips",
            description: "กลุ่มเพื่อนตื่นขึ้นมาหลังคืนที่เต็มไปด้วยเรื่องวุ่นวาย และต้องช่วยกันตามหาสิ่งที่หายไป",
            poster: "THE HANGOVER",
            color: "linear-gradient(145deg,#a17b36,#34200d)"
        },
        {
            id: 10,
            title: "Home Alone",
            year: 1990,
            rating: 7.7,
            duration: "103 นาที",
            genre: ["comedy"],
            director: "Chris Columbus",
            description: "เด็กชายคนหนึ่งถูกทิ้งให้อยู่บ้านตามลำพังในช่วงวันหยุด และต้องรับมือกับโจรสองคนที่พยายามเข้ามาในบ้าน",
            poster: "HOME ALONE",
            color: "linear-gradient(145deg,#8e2630,#253e5c)"
        },
        {
            id: 11,
            title: "The Notebook",
            year: 2004,
            rating: 7.8,
            duration: "123 นาที",
            genre: ["romance", "drama"],
            director: "Nick Cassavetes",
            description: "เรื่องราวความรักของคนสองคนที่ต้องผ่านช่วงเวลาและอุปสรรคมากมายในชีวิต",
            poster: "THE NOTEBOOK",
            color: "linear-gradient(145deg,#825b65,#302331)"
        },
        {
            id: 12,
            title: "La La Land",
            year: 2016,
            rating: 8.0,
            duration: "128 นาที",
            genre: ["romance", "drama"],
            director: "Damien Chazelle",
            description: "นักดนตรีแจ๊สและนักแสดงสาวได้พบกันในลอสแอนเจลิส พร้อมกับความฝันและความสัมพันธ์ที่เติบโตขึ้น",
            poster: "LA LA LAND",
            color: "linear-gradient(145deg,#9b633d,#2d2855)"
        },
        {
            id: 13,
            title: "Your Name",
            year: 2016,
            rating: 8.4,
            duration: "106 นาที",
            genre: ["animation", "romance"],
            director: "Makoto Shinkai",
            description: "วัยรุ่นสองคนที่ไม่เคยพบกันกลับสามารถสลับร่างกันได้อย่างลึกลับ และพยายามตามหากัน",
            poster: "YOUR NAME",
            color: "linear-gradient(145deg,#416b9a,#7a426d)"
        },
        {
            id: 14,
            title: "Inside Out",
            year: 2015,
            rating: 8.1,
            duration: "95 นาที",
            genre: ["animation", "comedy"],
            director: "Pete Docter",
            description: "พาไปรู้จักกับอารมณ์ต่าง ๆ ที่ทำงานอยู่ในจิตใจของเด็กหญิงคนหนึ่ง ขณะที่เธอกำลังปรับตัวกับชีวิตใหม่",
            poster: "INSIDE OUT",
            color: "linear-gradient(145deg,#346ca8,#753b8c)"
        },
        {
            id: 15,
            title: "Coco",
            year: 2017,
            rating: 8.4,
            duration: "105 นาที",
            genre: ["animation", "drama"],
            director: "Lee Unkrich",
            description: "เด็กชายผู้รักเสียงดนตรีเดินทางเข้าสู่โลกแห่งความทรงจำและค้นพบความสำคัญของครอบครัว",
            poster: "COCO",
            color: "linear-gradient(145deg,#a94c2c,#38204e)"
        },
        {
            id: 16,
            title: "The Pursuit of Happyness",
            year: 2006,
            rating: 8.0,
            duration: "117 นาที",
            genre: ["drama"],
            director: "Gabriele Muccino",
            description: "ชายคนหนึ่งพยายามสร้างชีวิตที่ดีขึ้นให้กับตัวเองและลูกชาย แม้ต้องเผชิญกับอุปสรรคมากมาย",
            poster: "HAPPINESS",
            color: "linear-gradient(145deg,#566a7d,#1a2633)"
        }
    ];

    const genreNames = {
        action: "แอ็กชัน",
        comedy: "ตลก",
        romance: "โรแมนติก",
        horror: "สยองขวัญ",
        "sci-fi": "ไซไฟ",
        animation: "แอนิเมชัน",
        drama: "ดราม่า",
        thriller: "ระทึกขวัญ"
    };

    // HTML elements
    const movieGrid = document.getElementById("movieGrid");
    const favoriteGrid = document.getElementById("favoriteGrid");
    const searchInput = document.getElementById("searchInput");
    const clearSearch = document.getElementById("clearSearch");
    const sortSelect = document.getElementById("sortSelect");
    const filterButtons = document.querySelectorAll(".filter-btn");
    const emptyState = document.getElementById("emptyState");
    const favoriteEmpty = document.getElementById("favoriteEmpty");
    const resultTitle = document.getElementById("resultTitle");
    const resultCount = document.getElementById("resultCount");
    const themeSelect = document.getElementById("themeSelect");

    const modal = document.getElementById("movieModal");
    const closeModalBtn = document.getElementById("closeModal");
    const modalFavoriteBtn = document.getElementById("modalFavoriteBtn");

    let activeGenre = "all";
    let currentMovieId = null;
    let showFavoritesOnly = false;

    // Read saved data safely
    function readStorage(key, fallback) {
        try {
            const value = localStorage.getItem(key);
            return value ? JSON.parse(value) : fallback;
        } catch (error) {
            return fallback;
        }
    }

    let favorites = readStorage("movieHubFavorites", []);

    if (!Array.isArray(favorites)) {
        favorites = [];
    }

    // Theme
    const savedTheme = localStorage.getItem("movieHubTheme") || "dark";
    const allowedThemes = ["dark", "light", "green", "purple"];
    const initialTheme = allowedThemes.includes(savedTheme) ? savedTheme : "dark";

    document.body.dataset.theme = initialTheme;
    themeSelect.value = initialTheme;

    themeSelect.addEventListener("change", () => {
        const theme = themeSelect.value;

        if (!allowedThemes.includes(theme)) return;

        document.body.dataset.theme = theme;
        localStorage.setItem("movieHubTheme", theme);
    });

    // Save favorites
    function saveFavorites() {
        localStorage.setItem("movieHubFavorites", JSON.stringify(favorites));
        updateStats();
    }

    function isFavorite(id) {
        return favorites.includes(id);
    }

    function toggleFavorite(id) {
        if (isFavorite(id)) {
            favorites = favorites.filter(item => item !== id);
        } else {
            favorites.push(id);
        }

        saveFavorites();
        renderMovies();
        renderFavorites();

        if (currentMovieId === id && modal.classList.contains("open")) {
            updateModalFavoriteButton();
        }
    }

    // Create a movie card
    function createMovieCard(movie) {
        const card = document.createElement("article");
        card.className = "movie-card";

        const genres = movie.genre
            .map(genre => genreNames[genre] || genre)
            .join(" / ");

        card.innerHTML = `
            <div class="poster" style="--poster-bg: ${movie.color}">
                <span class="poster-year">${movie.year}</span>
                <span class="rating">★ ${movie.rating.toFixed(1)}</span>
                <span class="poster-title"></span>
            </div>

            <div class="movie-card-info">
                <p class="movie-genre"></p>
                <h3></h3>
                <p class="movie-subtitle">${movie.year} · ${movie.duration}</p>

                <div class="card-actions">
                    <button class="details-btn" type="button" data-action="details">
                        ดูรายละเอียด
                    </button>
                    <button
                        class="favorite-btn ${isFavorite(movie.id) ? "is-favorite" : ""}"
                        type="button"
                        data-action="favorite"
                        aria-label="เพิ่มหรือนำออกจากรายการโปรด"
                        aria-pressed="${isFavorite(movie.id)}"
                    >${isFavorite(movie.id) ? "♥" : "♡"}</button>
                </div>
            </div>
        `;

        card.querySelector(".poster-title").textContent = movie.poster;
        card.querySelector(".movie-genre").textContent = genres;
        card.querySelector("h3").textContent = movie.title;

        card.querySelector('[data-action="details"]').addEventListener("click", () => {
            openModal(movie.id);
        });

        card.querySelector('[data-action="favorite"]').addEventListener("click", () => {
            toggleFavorite(movie.id);
        });

        return card;
    }

    // Search, filter and sort
    function getFilteredMovies() {
        const keyword = searchInput.value.trim().toLowerCase();

        let list = movies.filter(movie => {
            const matchesGenre =
                activeGenre === "all" || movie.genre.includes(activeGenre);

            const searchableText = [
                movie.title,
                movie.description,
                movie.director,
                movie.year.toString(),
                movie.genre.map(genre => genreNames[genre]).join(" ")
            ].join(" ").toLowerCase();

            const matchesSearch = searchableText.includes(keyword);
            const matchesFavorite = !showFavoritesOnly || isFavorite(movie.id);

            return matchesGenre && matchesSearch && matchesFavorite;
        });

        const sort = sortSelect.value;

        if (sort === "az") {
            list.sort((a, b) => a.title.localeCompare(b.title));
        } else if (sort === "za") {
            list.sort((a, b) => b.title.localeCompare(a.title));
        } else if (sort === "rating") {
            list.sort((a, b) => b.rating - a.rating);
        } else if (sort === "year") {
            list.sort((a, b) => b.year - a.year);
        }

        return list;
    }

    // Render main movie list
    function renderMovies() {
        const list = getFilteredMovies();

        movieGrid.innerHTML = "";

        list.forEach(movie => {
            movieGrid.appendChild(createMovieCard(movie));
        });

        resultCount.textContent = `${list.length} เรื่อง`;
        resultTitle.textContent = showFavoritesOnly
            ? "ภาพยนตร์รายการโปรด"
            : activeGenre === "all"
                ? "ภาพยนตร์ทั้งหมด"
                : genreNames[activeGenre] || "ภาพยนตร์";

        emptyState.hidden = list.length !== 0;
    }

    // Render favorites section
    function renderFavorites() {
        const favoriteMovies = movies.filter(movie => isFavorite(movie.id));

        favoriteGrid.innerHTML = "";

        favoriteMovies.forEach(movie => {
            favoriteGrid.appendChild(createMovieCard(movie));
        });

        favoriteEmpty.hidden = favoriteMovies.length !== 0;
    }

    // Statistics
    function updateStats() {
        document.getElementById("totalMovies").textContent = movies.length;

        const uniqueGenres = new Set(movies.flatMap(movie => movie.genre));
        document.getElementById("totalGenres").textContent = uniqueGenres.size;

        document.getElementById("totalFavorites").textContent = favorites.length;
    }

    // Filter buttons
    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            filterButtons.forEach(item => item.classList.remove("active"));
            button.classList.add("active");

            activeGenre = button.dataset.genre;
            showFavoritesOnly = false;

            renderMovies();
        });
    });

    // Search
    searchInput.addEventListener("input", renderMovies);

    clearSearch.addEventListener("click", () => {
        searchInput.value = "";
        renderMovies();
        searchInput.focus();
    });

    // Sort
    sortSelect.addEventListener("change", renderMovies);

    // Reset filters
    document.getElementById("resetFilters").addEventListener("click", () => {
        activeGenre = "all";
        showFavoritesOnly = false;
        searchInput.value = "";
        sortSelect.value = "default";

        filterButtons.forEach(button => {
            button.classList.toggle("active", button.dataset.genre === "all");
        });

        renderMovies();
    });

    // Show all movies
    document.getElementById("showAllMovies").addEventListener("click", () => {
        activeGenre = "all";
        showFavoritesOnly = false;
        searchInput.value = "";
        sortSelect.value = "default";

        filterButtons.forEach(button => {
            button.classList.toggle("active", button.dataset.genre === "all");
        });

        renderMovies();
        document.getElementById("movies").scrollIntoView({ behavior: "smooth" });
    });

    // Open movie detail
    function openModal(id) {
        const movie = movies.find(item => item.id === id);
        if (!movie) return;

        currentMovieId = id;

        document.getElementById("modalTitle").textContent = movie.title;
        document.getElementById("modalYear").textContent = movie.year;
        document.getElementById("modalRating").textContent = `★ ${movie.rating.toFixed(1)}`;
        document.getElementById("modalDuration").textContent = movie.duration;
        document.getElementById("modalDescription").textContent = movie.description;
        document.getElementById("modalDirector").textContent = movie.director;

        document.getElementById("modalGenres").textContent =
            movie.genre.map(genre => genreNames[genre] || genre).join(", ");

        document.getElementById("modalGenre").textContent =
            movie.genre.map(genre => genreNames[genre] || genre).join(" / ");

        const modalPoster = document.getElementById("modalPoster");
        modalPoster.style.background = movie.color;
        document.getElementById("modalPosterText").textContent = movie.poster;

        updateModalFavoriteButton();

        modal.classList.add("open");
        modal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
        closeModalBtn.focus();
    }

    // Modal favorite button
    function updateModalFavoriteButton() {
        if (currentMovieId === null) return;

        modalFavoriteBtn.textContent = isFavorite(currentMovieId)
            ? "♥ นำออกจากรายการโปรด"
            : "♡ เพิ่มรายการโปรด";
    }

    modalFavoriteBtn.addEventListener("click", () => {
        if (currentMovieId !== null) {
            toggleFavorite(currentMovieId);
        }
    });

    // Close modal
    function closeModal() {
        modal.classList.remove("open");
        modal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
        currentMovieId = null;
    }

    closeModalBtn.addEventListener("click", closeModal);

    modal.addEventListener("click", event => {
        if (event.target.hasAttribute("data-close-modal")) {
            closeModal();
        }
    });

    document.addEventListener("keydown", event => {
        if (event.key === "Escape" && modal.classList.contains("open")) {
            closeModal();
        }
    });

    // Initial render
    updateStats();
    renderMovies();
    renderFavorites();

});
