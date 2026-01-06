const cards = [
  {
    question: "Hal apa yang paling kamu ingat dari hari ini?",
    note: "Dengarkan tanpa menyela. Respon singkat seperti anggukan sudah cukup.",
    insight: "Anak sering mengingat hal kecil yang terasa bermakna bagi mereka."
  },
  {
    question: "Ada momen hari ini yang bikin kamu senang?",
    note: "Biarkan anak menyebutkan versinya sendiri tanpa diarahkan.",
    insight: "Rasa senang anak sering muncul dari perhatian, bukan pencapaian."
  },
  {
    question: "Ada bagian hari ini yang bikin kamu capek?",
    note: "Tidak perlu langsung memberi solusi atau nasihat.",
    insight: "Didengar dengan tenang sering kali lebih membantu daripada solusi."
  }
];

let currentIndex = 0;
let guideVisible = false;

/* ELEMENTS */
const startScreen = document.getElementById("start-screen");
const cardScreen = document.getElementById("card-screen");
const cardQuestion = document.getElementById("card-question");
const cardNote = document.getElementById("card-note");
const cardInsight = document.getElementById("card-insight");
const cardCounter = document.getElementById("card-counter");
const guideToggle = document.getElementById("guide-toggle");
const guideContent = document.getElementById("guide-content");
const themeToggle = document.getElementById("theme-toggle");

/* START */
document.getElementById("start-btn").onclick = () => {
  startScreen.classList.remove("active");
  cardScreen.classList.add("active");
  showCard();
};

/* NEXT */
document.getElementById("next-btn").onclick = () => {
  currentIndex = (currentIndex + 1) % cards.length;
  showCard();
};

/* GUIDE TOGGLE */
guideToggle.onclick = () => {
  guideVisible = !guideVisible;
  guideContent.classList.toggle("show", guideVisible);
  guideToggle.textContent = guideVisible
    ? "▴ Sembunyikan panduan obrolan"
    : "▾ Panduan obrolan";
};

/* THEME */
themeToggle.onclick = () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
};

/* AUTO DARK FROM SYSTEM */
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  document.body.classList.add("dark");
  themeToggle.textContent = "☀️";
}

/* RENDER */
function showCard() {
  const card = cards[currentIndex];
  cardQuestion.textContent = card.question;
  cardNote.textContent = card.note;
  cardInsight.textContent = card.insight;
  cardCounter.textContent = `Kartu ${currentIndex + 1} dari ${cards.length}`;

  guideVisible = false;
  guideContent.classList.remove("show");
  guideToggle.textContent = "▾ Panduan obrolan";
}
