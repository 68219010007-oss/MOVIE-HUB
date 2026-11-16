
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

// ชื่อประเภทภาษาไทย
const genreNames = {
    action: "แอ็กชัน",
    comedy: "ตลก",
    romance: "โรแมนติก",
    horror: "สยองขวัญ",
    animation: "แอนิเมชัน",
    "sci-fi": "ไซไฟ",
    drama: "ดราม่า",
    fantasy: "แฟนตาซี"
};

// คำอธิบายประเภทภาพยนตร์
const genreDescriptions = {
    action: "ภาพยนตร์แนวแอ็กชัน เน้นการผจญภัยและเหตุการณ์ที่ตื่นเต้น",
    comedy: "ภาพยนตร์แนวตลกที่เน้นความสนุกสนานและเสียงหัวเราะ",
    romance: "ภาพยนตร์แนวโรแมนติกที่เกี่ยวข้องกับความรักและความสัมพันธ์",
    horror: "ภาพยนตร์แนวสยองขวัญที่สร้างบรรยากาศลึกลับและระทึกขวัญ",
    animation: "ภาพยนตร์แอนิเมชันที่เล่าเรื่องผ่านงานภาพและตัวละคร",
    "sci-fi": "ภาพยนตร์แนววิทยาศาสตร์ที่เกี่ยวข้องกับเทคโนโลยีและจินตนาการ",
    drama: "ภาพยนตร์แนวดราม่าที่เน้นเรื่องราวและอารมณ์ของตัวละคร",
    fantasy: "ภาพยนตร์แนวแฟนตาซีที่เต็มไปด้วยโลกและจินตนาการ"
};

const movieGrid = document.getElementById("movieGrid");
const favoriteGrid = document.getElementById("favoriteGrid");
const searchInput = document.getElementById("searchInput");
const genreFilter = document.getElementById("genreFilter");
const sortFilter = document.getElementById("sortFilter");
const resultCount = document.getElementById("resultCount");
const favoriteCount = document.getElementById("favoriteCount");
const totalMovies = document.getElementById("totalMovies");
const modal = document.getElementById("movieModal");
const modalBody = document.getElementById("modalBody");

let currentGenre = "all";

let favorites = JSON.parse(
    localStorage.getItem("movieHubFavorites") || "[]"
);

// แปลงข้อมูลเป็น Object
const movieData = movies.map((movie, index) => ({
    id: index + 1,
    title: movie[0],
    year: movie[1],
    genre: movie[2],
    rating: movie[3]
}));

// ป้องกัน HTML ที่แสดงจากชื่อหนัง
function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[char]);
}

// สร้างตัวเลือกประเภท
function createGenreOptions() {
    Object.entries(genreNames).forEach(([key, name]) => {
        const option = document.createElement("option");
        option.value = key;
        option.textContent = name;
        genreFilter.appendChild(option);
    });
}

// สร้างการ์ดหนัง
function createMovieCard(movie) {
    const isFavorite = favorites.includes(movie.id);

    return `
        <article class="movie-card">
            <div class="poster-fallback">
                <span>${escapeHTML(movie.title)}</span>
            </div>

            <div class="movie-info">
                <h3 class="movie-title">
                    ${escapeHTML(movie.title)}
                </h3>

                <div class="movie-meta">
                    <span>${movie.year}</span>
                    <span class="rating">★ ${movie.rating.toFixed(1)}</span>
                </div>

                <div class="card-actions">
                    <button
                        class="detail-btn"
                        onclick="showDetails(${movie.id})">
                        ดูรายละเอียด
                    </button>

                    <button
                        class="favorite-btn ${isFavorite ? "active" : ""}"
                        onclick="toggleFavorite(${movie.id})"
                        aria-label="เพิ่มหรือลบรายการโปรด">
                        ${isFavorite ? "♥" : "♡"}
                    </button>
                </div>
            </div>
        </article>
    `;
}

// แสดงหนังทั้งหมด
function renderMovies() {
    let filtered = [...movieData];

    const keyword = searchInput.value
        .trim()
        .toLowerCase();

    // ค้นหาชื่อ
    if (keyword) {
        filtered = filtered.filter(movie =>
            movie.title.toLowerCase().includes(keyword)
        );
    }

    // กรองประเภท
    if (currentGenre !== "all") {
        filtered = filtered.filter(movie =>
            movie.genre === currentGenre
        );
    }

    // เรียงลำดับ
    if (sortFilter.value === "popular") {
        filtered.sort((a, b) => b.rating - a.rating);
    } else if (sortFilter.value === "title") {
        filtered.sort((a, b) =>
            a.title.localeCompare(b.title)
        );
    } else if (sortFilter.value === "year") {
        filtered.sort((a, b) => b.year - a.year);
    }

    movieGrid.innerHTML = filtered.length
        ? filtered.map(createMovieCard).join("")
        : `<p class="empty-message">ไม่พบภาพยนตร์ที่ค้นหา</p>`;

    resultCount.textContent =
        `แสดงภาพยนตร์ ${filtered.length} เรื่อง`;

    totalMovies.textContent = movieData.length;

    renderFavorites();
}

// แสดงรายการโปรด
function renderFavorites() {
    const favoriteMovies = movieData.filter(movie =>
        favorites.includes(movie.id)
    );

    favoriteCount.textContent = favoriteMovies.length;

    favoriteGrid.innerHTML = favoriteMovies.length
        ? favoriteMovies.map(createMovieCard).join("")
        : `<p class="empty-message">
            ยังไม่มีภาพยนตร์ในรายการโปรด
           </p>`;
}

// เพิ่ม / ลบรายการโปรด
function toggleFavorite(id) {
    if (favorites.includes(id)) {
        favorites = favorites.filter(item => item !== id);
    } else {
        favorites.push(id);
    }

    localStorage.setItem(
        "movieHubFavorites",
        JSON.stringify(favorites)
    );

    renderMovies();
}

// ดูรายละเอียด
function showDetails(id) {
    const movie = movieData.find(item => item.id === id);

    if (!movie) return;

    modalBody.innerHTML = `
        <div class="modal-layout">
            <div>
                <div class="poster-fallback modal-poster">
                    ${escapeHTML(movie.title)}
                </div>
            </div>

            <div class="modal-info">
                <p class="section-label">MOVIE DETAILS</p>

                <h2>${escapeHTML(movie.title)}</h2>

                <div class="modal-rating">
                    ★ ${movie.rating.toFixed(1)} / 10
                </div>

                <p><strong>ปีที่ฉาย:</strong> ${movie.year}</p>

                <p><strong>ประเภท:</strong>
                    ${genreNames[movie.genre]}
                </p>

                <p><strong>เรื่องย่อประเภท:</strong><br>
                    ${genreDescriptions[movie.genre]}
                </p>

                <p class="description-note">
                    คะแนนและข้อมูลเบื้องต้นใช้เพื่อประกอบการศึกษา
                </p>
            </div>
        </div>
    `;

    modal.classList.add("show");
}

// ปิดหน้าต่างรายละเอียด
document.getElementById("closeModal").addEventListener(
    "click",
    () => modal.classList.remove("show")
);

modal.addEventListener("click", event => {
    if (event.target === modal) {
        modal.classList.remove("show");
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        modal.classList.remove("show");
    }
});

// ปุ่มกรองประเภท
document.querySelectorAll(".filter-btn").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelectorAll(".filter-btn")
            .forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        currentGenre = button.dataset.filter;
        genreFilter.value = currentGenre;

        renderMovies();
    });
});

// ค้นหา
searchInput.addEventListener("input", renderMovies);

// เลือกประเภทจาก Select
genreFilter.addEventListener("change", () => {
    currentGenre = genreFilter.value;

    document.querySelectorAll(".filter-btn")
        .forEach(btn => {
            btn.classList.toggle(
                "active",
                btn.dataset.filter === currentGenre
            );
        });

    renderMovies();
});

// เรียงลำดับ
sortFilter.addEventListener("change", renderMovies);

// เปลี่ยนธีม
const themeBtn = document.getElementById("themeBtn");

function applyTheme(theme) {
    document.body.classList.toggle(
        "light-theme",
        theme === "light"
    );

    themeBtn.textContent =
        theme === "light" ? "ธีมมืด" : "ธีมสว่าง";
}

let savedTheme = localStorage.getItem("movieHubTheme") || "dark";

applyTheme(savedTheme);

themeBtn.addEventListener("click", () => {
    savedTheme = savedTheme === "dark" ? "light" : "dark";

    localStorage.setItem("movieHubTheme", savedTheme);
    applyTheme(savedTheme);
});

// เริ่มต้นเว็บไซต์
createGenreOptions();
renderMovies();
