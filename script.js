const cards = [
  {
    question: "Hal apa yang paling kamu ingat dari hari ini?",
    insight: "Anak sering mengingat hal yang terlihat sepele bagi orang dewasa. Itu petunjuk tentang apa yang bermakna bagi mereka.",
    bridge: "Kamu bisa mulai dengan nada yang tenang dan terbuka."
  },
  {
    question: "Ada momen hari ini yang bikin kamu senang?",
    insight: "Kebahagiaan anak tidak selalu datang dari pencapaian. Kadang dari rasa diperhatikan.",
    bridge: "Biarkan anak menyelesaikan ceritanya tanpa dipotong."
  },
  {
    question: "Ada bagian hari ini yang bikin kamu capek?",
    insight: "Capek tidak selalu perlu solusi. Didengar dengan empati sering kali sudah cukup.",
    bridge: "Tunjukkan bahwa perasaannya masuk akal."
  },
  {
    question: "Kalau hari ini diulang, bagian mana yang ingin kamu ubah?",
    insight: "Pertanyaan reflektif membantu anak belajar tanpa merasa disalahkan.",
    bridge: "Tidak perlu diarahkan ke jawaban tertentu."
  },
  {
    question: "Hal kecil apa yang bikin kamu senyum hari ini?",
    insight: "Melatih anak mengenali hal kecil yang baik menumbuhkan rasa syukur.",
    bridge: "Apresiasi ceritanya, sekecil apa pun."
  }
];

let currentIndex = 0;

// ELEMENTS
const startScreen = document.getElementById("start-screen");
const cardScreen = document.getElementById("card-screen");
const cardQuestion = document.getElementById("card-question");
const cardInsight = document.getElementById("card-insight");
const cardBridge = document.getElementById("card-bridge");
const cardCounter = document.getElementById("card-counter");

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

// SHUFFLE
document.getElementById("shuffle-btn").onclick = () => {
  currentIndex = Math.floor(Math.random() * cards.length);
  showCard();
};

// RENDER
function showCard() {
  const card = cards[currentIndex];

  cardQuestion.textContent = card.question;
  cardInsight.textContent = card.insight;
  cardBridge.textContent = card.bridge;

  cardCounter.textContent = `Kartu ${currentIndex + 1} dari ${cards.length}`;
}
