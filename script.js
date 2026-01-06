const cards = [
  {
    question: "Hal apa yang paling kamu ingat dari hari ini?",
    insight: "Kadang anak butuh waktu untuk mengingat. Tunggu sebentar sebelum menanggapi."
  },
  {
    question: "Ada momen hari ini yang bikin kamu senang?",
    insight: "Respon sederhana seperti 'oh iya?' bikin anak mau lanjut cerita."
  },
  {
    question: "Ada bagian hari ini yang bikin kamu capek?",
    insight: "Capek tidak selalu perlu solusi. Didengar saja sudah cukup."
  },
  {
    question: "Kalau hari ini diulang, bagian mana yang pengen kamu ubah?",
    insight: "Jangan buru-buru menasihati. Biarkan anak menyimpulkan sendiri."
  },
  {
    question: "Hal kecil apa yang bikin kamu senyum hari ini?",
    insight: "Hal kecil sering lebih bermakna daripada pencapaian besar."
  },
  {
    question: "Hari ini kamu lebih banyak senang atau capek?",
    insight: "Tidak apa-apa kalau jawabannya campur. Perasaan boleh tumpang tindih."
  },
  {
    question: "Kalau perasaan kamu hari ini punya warna, warnanya apa?",
    insight: "Metafora membantu anak bicara tanpa harus menjelaskan panjang."
  },
  {
    question: "Ada hal yang pengen kamu ceritain tapi belum sempat?",
    insight: "Jawaban 'tidak' juga valid. Jangan dipaksa."
  },
  {
    question: "Hal apa yang bikin kamu ngerasa aman?",
    insight: "Rasa aman sering datang dari hal sederhana, bukan dari kata-kata besar."
  },
  {
    question: "Kapan kamu paling ngerasa jadi diri sendiri?",
    insight: "Perhatikan konteksnya, bukan menghakimi pilihannya."
  }
];

const themes = [
  { bg: "#f7f6f3", card: "#ffffff" },
  { bg: "#f0f4ff", card: "#ffffff" },
  { bg: "#fff7ed", card: "#ffffff" },
  { bg: "#eefcf4", card: "#ffffff" },
  { bg: "#fdf2f8", card: "#ffffff" }
];

let currentIndex = 0;

const startScreen = document.getElementById("start-screen");
const cardScreen = document.getElementById("card-screen");
const cardQuestion = document.getElementById("card-question");
const cardInsight = document.getElementById("card-insight");

document.getElementById("start-btn").addEventListener("click", () => {
  startScreen.classList.remove("active");
  cardScreen.classList.add("active");
  showCard();
});

document.getElementById("next-btn").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % cards.length;
  showCard();
});

document.getElementById("shuffle-btn").addEventListener("click", () => {
  currentIndex = Math.floor(Math.random() * cards.length);
  showCard();
});

function showCard() {
  const card = cards[currentIndex];
  const theme = themes[Math.floor(Math.random() * themes.length)];

  document.body.style.setProperty("--bg", theme.bg);
  document.body.style.setProperty("--card", theme.card);

  cardQuestion.textContent = card.question;
  cardInsight.textContent = "Catatan untuk orang tua: " + card.insight;
}
