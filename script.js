const cards = [
  {
    question: "Hal apa yang paling kamu ingat dari hari ini?",
    note: "Gunakan nada tenang dan beri jeda saat anak bercerita.",
    insight: "Anak sering mengingat hal yang terlihat sepele bagi orang dewasa. Itu petunjuk tentang apa yang bermakna bagi mereka."
  },
  {
    question: "Ada momen hari ini yang bikin kamu senang?",
    note: "Biarkan anak menyelesaikan ceritanya tanpa disela.",
    insight: "Rasa senang anak sering muncul dari hal kecil yang jarang disadari orang dewasa."
  },
  {
    question: "Ada bagian hari ini yang bikin kamu capek?",
    note: "Tunjukkan bahwa perasaannya wajar, tanpa buru-buru memberi solusi.",
    insight: "Kehadiran dan empati sering kali lebih menenangkan daripada jawaban."
  }
];

let currentIndex = 0;
let guideVisible = false;

// ELEMENTS
const startScreen = document.getElementById("start-screen");
const cardScreen = document.getElementById("card-screen");
const cardQuestion = document.getElementById("card-question");
const cardNote = document.getElementById("card-note");
const cardInsight = document.getElementById("card-insight");
const cardCounter = document.getElementById("card-counter");
const guideToggle = document.getElementById("guide-toggle");

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

// TOGGLE GUIDE
guideToggle.onclick = () => {
  guideVisible = !guideVisible;

  if (guideVisible) {
    // show note first
    cardNote.classList.add("show");

    // then insight (micro-delay)
    setTimeout(() => {
      cardInsight.classList.add("show");
    }, 100);

    guideToggle.textContent = "▴ Sembunyikan panduan obrolan";
  } else {
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

  // reset guide state
  guideVisible = false;
  cardNote.classList.remove("show");
  cardInsight.classList.remove("show");
  guideToggle.textContent = "▾ Panduan obrolan";
}
