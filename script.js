const cards = [
  {
    question: "Hal apa yang paling kamu ingat dari hari ini?",
    note: "Gunakan nada tenang dan beri jeda saat anak bercerita.",
    insight: "Anak sering mengingat hal kecil yang bermakna bagi mereka."
  },
  {
    question: "Ada momen hari ini yang bikin kamu senang?",
    note: "Biarkan anak menyelesaikan ceritanya.",
    insight: "Rasa senang sering muncul dari perhatian sederhana."
  },
  {
    question: "Ada bagian hari ini yang bikin kamu capek?",
    note: "Terima perasaannya sebelum memberi tanggapan.",
    insight: "Didengar sering kali lebih menenangkan."
  }
];

let currentIndex = 0;
let guideVisible = false;

// ELEMENTS (INI KRUSIAL)
const startScreen = document.getElementById("start-screen");
const cardScreen = document.getElementById("card-screen");
const cardQuestion = document.getElementById("card-question");
const cardNote = document.getElementById("card-note");
const cardInsight = document.getElementById("card-insight");
const cardCounter = document.getElementById("card-counter");
const guideToggle = document.getElementById("guide-toggle");
const guideContent = document.getElementById("guide-content");

// START
document.getElementById("start-btn").onclick = () => {
  startScreen.classList.remove("active");
  cardScreen.classList.add("active");
  showCard();
};

// NEXT
document.getElementById("next-btn").onclick = () => {
  currentIndex = (currentIndex + 1) % cards.length;
  showCard();
};

// TOGGLE
guideToggle.onclick = () => {
  guideVisible = !guideVisible;

  if (guideVisible) {
    guideContent.classList.add("open");

    setTimeout(() => cardNote.classList.add("show"), 60);
    setTimeout(() => cardInsight.classList.add("show"), 140);

    guideToggle.textContent = "▴ Sembunyikan panduan obrolan";
  } else {
    guideContent.classList.remove("open");
    cardNote.classList.remove("show");
    cardInsight.classList.remove("show");
    guideToggle.textContent = "▾ Panduan obrolan";
  }
};

// RENDER
function showCard() {
  const card = cards[currentIndex];

  cardQuestion.textContent = card.question;
  cardNote.textContent = card.note;
  cardInsight.textContent = card.insight;
  cardCounter.textContent = `Kartu ${currentIndex + 1} dari ${cards.length}`;

  guideVisible = false;
  guideContent.classList.remove("open");
  cardNote.classList.remove("show");
  cardInsight.classList.remove("show");
  guideToggle.textContent = "▾ Panduan obrolan";
}
