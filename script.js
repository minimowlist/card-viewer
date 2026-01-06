const cards = [
  {
    question: "Hal apa yang paling kamu ingat dari hari ini?",
    insight: "Anak sering mengingat hal yang menurut orang dewasa terlihat sepele. Itu justru petunjuk apa yang penting buat mereka.",
    bridge: "Kalau kamu mau cerita, aku dengerin."
  },
  {
    question: "Ada momen hari ini yang bikin kamu senang?",
    insight: "Momen senang anak tidak selalu tentang prestasi. Kadang hanya merasa diperhatikan.",
    bridge: "Aku penasaran, ceritain dong."
  },
  {
    question: "Ada bagian hari ini yang bikin kamu capek?",
    insight: "Capek tidak selalu butuh solusi. Didengar tanpa dihakimi sudah sangat membantu.",
    bridge: "Nggak apa-apa kalau mau cerita pelan-pelan."
  },
  {
    question: "Kalau hari ini diulang, bagian mana yang pengen kamu ubah?",
    insight: "Pertanyaan ini membantu anak belajar refleksi tanpa merasa disalahkan.",
    bridge: "Bukan harus benar ya, aku cuma pengen tau."
  },
  {
    question: "Hal kecil apa yang bikin kamu senyum hari ini?",
    insight: "Melatih anak mengenali hal kecil yang baik membantu rasa syukur tanpa dipaksa.",
    bridge: "Hal kecil juga nggak apa-apa."
  },
  {
    question: "Hari ini kamu lebih banyak senang atau capek?",
    insight: "Perasaan bisa campur. Anak perlu tahu itu wajar.",
    bridge: "Kalau campur juga nggak masalah."
  },
  {
    question: "Kalau perasaan kamu hari ini punya warna, warnanya apa?",
    insight: "Metafora membantu anak bicara tanpa harus menjelaskan secara logis.",
    bridge: "Warnanya bebas kok."
  },
  {
    question: "Ada hal yang pengen kamu ceritain tapi belum sempat?",
    insight: "Anak butuh ruang aman untuk bicara tanpa dituntut.",
    bridge: "Kalau belum siap juga nggak apa-apa."
  },
  {
    question: "Hal apa yang bikin kamu ngerasa aman?",
    insight: "Rasa aman anak sering datang dari kehadiran, bukan kata-kata.",
    bridge: "Aku pengen tau versi kamu."
  },
  {
    question: "Kapan kamu paling ngerasa jadi diri sendiri?",
    insight: "Jawaban anak memberi sinyal di mana mereka merasa diterima.",
    bridge: "Aku dengerin tanpa komentar."
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

// Elements
const startScreen = document.getElementById("start-screen");
const cardScreen = document.getElementById("card-screen");
const cardQuestion = document.getElementById("card-question");
const cardInsight = document.getElementById("card-insight");

// Tambahan element bridge (kalimat pengantar)
const bridgeEl = document.createElement("p");
bridgeEl.id = "card-bridge";
bridgeEl.style.fontSize = "14px";
bridgeEl.style.color = "#555";
bridgeEl.style.marginTop = "6px";
cardInsight.after(bridgeEl);

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
  bridgeEl.textContent = "Kalimat pembuka: “" + card.bridge + "”";
}
