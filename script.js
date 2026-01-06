const cards = [
  { question: "Hal apa yang paling kamu ingat dari hari ini?", insight: "Hal kecil sering berarti besar." },
  { question: "Ada momen hari ini yang bikin kamu senang?", insight: "Kebahagiaan anak tidak selalu soal prestasi." },
  { question: "Ada bagian hari ini yang bikin kamu capek?", insight: "Didengar lebih penting dari solusi." },
  { question: "Kalau hari ini diulang, apa yang ingin diubah?", insight: "Refleksi tanpa menyalahkan." },
  { question: "Hal kecil apa yang bikin kamu senyum?", insight: "Hal kecil menenangkan." }
];

// SCREEN ELEMENTS
const home = document.getElementById("home-screen");
const list = document.getElementById("list-screen");
const cardScreen = document.getElementById("card-screen");

// CARD ELEMENTS
const cardQuestion = document.getElementById("card-question");
const cardInsight = document.getElementById("card-insight");
const cardCounter = document.getElementById("card-counter");
const infoIcon = document.getElementById("info-icon");
const cardList = document.getElementById("card-list");

let currentIndex = 0;

/* -------- SCREEN SWITCHER -------- */
function showScreen(screen) {
  [home, list, cardScreen].forEach(s => s.classList.remove("active"));
  screen.classList.add("active");
}

/* -------- HOME -------- */
document.getElementById("start-btn").onclick = () => {
  currentIndex = 0;
  showScreen(cardScreen);
  showCard();
};

document.getElementById("list-btn").onclick = () => {
  showScreen(list);
};

/* -------- LIST -------- */
cards.forEach((card, i) => {
  const li = document.createElement("li");
  li.textContent = `Kartu ${i + 1}`;
  li.onclick = () => {
    currentIndex = i;
    showScreen(cardScreen);
    showCard();
  };
  cardList.appendChild(li);
});

document.getElementById("back-home-1").onclick = () => showScreen(home);
document.getElementById("back-home-2").onclick = () => showScreen(home);

/* -------- CARD -------- */
document.getElementById("next-btn").onclick = () => {
  currentIndex = (currentIndex + 1) % cards.length;
  showCard();
};

document.getElementById("shuffle-btn").onclick = () => {
  currentIndex = Math.floor(Math.random() * cards.length);
  showCard();
};

infoIcon.onclick = () => {
  cardInsight.classList.toggle("hidden");
};

function showCard() {
  cardQuestion.textContent = cards[currentIndex].question;
  cardInsight.textContent = cards[currentIndex].insight;
  cardInsight.classList.add("hidden");
  cardCounter.textContent = `Kartu ${currentIndex + 1} dari ${cards.length}`;
}
