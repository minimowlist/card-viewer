const cards = [
  {
    question: "Hal apa yang paling kamu ingat dari hari ini?",
    insight: "Anak sering mengingat hal yang terlihat sepele bagi orang dewasa. Itu petunjuk tentang apa yang bermakna bagi mereka.",
    bridge: "Gunakan nada tenang dan beri jeda saat anak bercerita."
  },
  {
    question: "Ada momen hari ini yang bikin kamu senang?",
    insight: "Rasa senang anak sering muncul dari hal kecil yang jarang disadari orang dewasa.",
    bridge: "Biarkan anak menyelesaikan ceritanya tanpa disela."
  },
  {
    question: "Ada bagian hari ini yang bikin kamu capek?",
    insight: "Capek tidak selalu perlu solusi. Kehadiran dan empati sering kali sudah cukup.",
    bridge: "Tunjukkan bahwa perasaannya wajar."
  }
];

let currentIndex = 0;
let guideVisible = false;

// ELEMENTS
const startScreen = document.getElementById("start-screen");
const cardScreen = document.getElementById("card-screen");
const cardQuestion = document.getElementById("card-question");
const cardInsight = document.getElementById("card-insight");
const cardBridge = document.getElementById("card-bridge");
const cardCounter = document.getElementById("card-counter");
const guideToggle = document.getElementById("guide-toggle");
const guideContent = document.getElementById("guide-content");

// START
document.getElementById("start-btn").onclick = () => {
  startScreen.classList.remove("active");
  cardScreen.classList.add("active");
  showCard();
};

// NEXT ONLY
document.getElementById("next-btn").onclick = () => {
  currentIndex = (currentIndex + 1) % cards.length;
  showCard();
};

// TOGGLE GUIDE
guideToggle.onclick = () => {
  guideVisible = !guideVisible;

  if (guideVisible) {
    guideContent.classList.add("show");
    guideToggle.textContent = "▴ Sembunyikan panduan obrolan";
  } else {
    guideContent.classList.remove("show");
    guideToggle.textContent = "▾ Panduan obrolan";
  }
};

// RENDER
function showCard() {
  const card = cards[currentIndex];

  cardQuestion.textContent = card.question;
  cardInsight.textContent = card.insight;
  cardBridge.textContent = card.bridge;

  cardCounter.textContent = `Kartu ${currentIndex + 1} dari ${cards.length}`;

  // reset guide
  guideVisible = false;
  guideContent.classList.remove("show");
  guideToggle.textContent = "▾ Panduan obrolan";
}
