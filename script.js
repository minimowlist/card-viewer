const cards = [
  {
    question: "Hal apa yang paling kamu ingat dari hari ini?",
    insight: "Anak sering mengingat hal yang terlihat sepele bagi orang dewasa. Itu petunjuk penting.",
    bridge: "Kalau kamu mau cerita, aku dengerin."
  },
  {
    question: "Ada momen hari ini yang bikin kamu senang?",
    insight: "Momen senang anak tidak selalu tentang prestasi.",
    bridge: "Ceritain dong, aku penasaran."
  },
  {
    question: "Ada bagian hari ini yang bikin kamu capek?",
    insight: "Capek tidak selalu butuh solusi. Didengar saja sudah cukup.",
    bridge: "Pelan-pelan juga nggak apa-apa."
  },
  {
    question: "Kalau hari ini diulang, bagian mana yang pengen kamu ubah?",
    insight: "Pertanyaan ini melatih refleksi tanpa menyalahkan.",
    bridge: "Nggak harus benar ya."
  },
  {
    question: "Hal kecil apa yang bikin kamu senyum hari ini?",
    insight: "Hal kecil sering lebih bermakna daripada yang terlihat.",
    bridge: "Hal kecil juga penting."
  },
  {
    question: "Hari ini kamu lebih banyak senang atau capek?",
    insight: "Perasaan bisa campur, dan itu wajar.",
    bridge: "Campur juga nggak masalah."
  },
  {
    question: "Kalau perasaan kamu hari ini punya warna, warnanya apa?",
    insight: "Metafora membantu anak bicara tanpa tekanan.",
    bridge: "Warnanya bebas kok."
  },
  {
    question: "Ada hal yang pengen kamu ceritain tapi belum sempat?",
    insight: "Ruang aman membuat anak mau membuka diri.",
    bridge: "Kalau belum siap juga nggak apa-apa."
  },
  {
    question: "Hal apa yang bikin kamu ngerasa aman?",
    insight: "Rasa aman datang dari kehadiran, bukan ceramah.",
    bridge: "Aku pengen tau versi kamu."
  },
  {
    question: "Kapan kamu paling ngerasa jadi diri sendiri?",
    insight: "Jawaban ini memberi sinyal di mana anak merasa diterima.",
    bridge: "Aku dengerin tanpa komentar."
  }
];

const themes = [
  { bg: "#f6f7f4", card: "#ffffff" },
  { bg: "#f0f4ff", card: "#ffffff" },
  { bg: "#fff7ed", card: "#ffffff" },
  { bg: "#eefcf4", card: "#ffffff" },
  { bg: "#fdf2f8", card: "#ffffff" }
];

let currentIndex = 0;

// ELEMENTS
const startScreen = document.getElementById("start-screen");
const cardScreen = document.getElementById("card-screen");
const cardQuestion = document.getElementById("card-question");
const cardInsight = document.getElementById("card-insight");
const cardCounter = document.getElementById("card-counter");

// BRIDGE ELEMENT (dynamic)
const bridgeEl = document.createElement("p");
bridgeEl.id = "card-bridge";
cardInsight.after(bridgeEl);

// EVENTS
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

// RENDER
function showCard() {
  const card = cards[currentIndex];
  const theme = themes[Math.floor(Math.random() * themes.length)];

  document.body.style.setProperty("--bg", theme.bg);
  document.body.style.setProperty("--card", theme.card);

  cardQuestion.textContent = card.question;
  cardInsight.textContent = "Catatan untuk orang tua: " + card.insight;
  bridgeEl.textContent = "Kalimat pembuka: “" + card.bridge + "”";

  cardCounter.textContent = `Kartu ${currentIndex + 1} dari ${cards.length}`;
}
