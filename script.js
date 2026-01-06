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
    note: "Tunjukkan bahwa perasaannya wajar sebelum memberi tanggapan.",
    insight: "Didengar sering kali lebih menenangkan daripada diberi solusi."
  },
  {
    question: "Kalau hari ini diulang, bagian mana yang ingin kamu ubah?",
    note: "Jangan buru-buru mengoreksi jawabannya.",
    insight: "Refleksi ringan membantu anak belajar tanpa merasa disalahkan."
  },
  {
    question: "Hal kecil apa yang bikin kamu tersenyum hari ini?",
    note: "Tunjukkan apresiasi meski ceritanya sederhana.",
    insight: "Mengenali hal kecil yang baik menumbuhkan rasa aman dan syukur."
  },
  {
    question: "Hari ini kamu lebih merasa senang atau capek?",
    note: "Terima jawabannya apa adanya.",
    insight: "Perasaan anak bisa campur dan itu normal."
  },
  {
    question: "Ada hal yang ingin kamu ceritakan tapi belum sempat?",
    note: "Berikan ruang tanpa memaksa.",
    insight: "Ruang aman membuat anak lebih terbuka."
  },
  {
    question: "Kapan kamu merasa paling nyaman hari ini?",
    note: "Dengarkan tanpa membandingkan dengan pengalaman sendiri.",
    insight: "Rasa nyaman memberi petunjuk tentang kebutuhan emosional anak."
  },
  {
    question: "Ada sesuatu yang ingin kamu lakukan besok?",
    note: "Biarkan anak membayangkan tanpa diarahkan.",
    insight: "Harapan kecil membantu anak merasa didukung."
  },
  {
    question: "Hari ini kamu merasa didengarkan atau tidak?",
    note: "Tanggapi dengan empati, bukan pembelaan.",
    insight: "Perasaan didengar memperkuat kelekatan anak dengan orang tua."
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

// TOGGLE GUIDE
guideToggle.onclick = () => {
  guideVisible = !guideVisible;

  if (guideVisible) {
    guideContent.classList.add("open");

    // catatan muncul dulu
    setTimeout(() => {
      cardNote.classList.add("show");
    }, 60);

    // insight menyusul
    setTimeout(() => {
      cardInsight.classList.add("show");
    }, 140);

    guideToggle.textContent = "▴ Sembunyikan panduan obrolan";
  } else {
    cardNote.classList.remove("show");
    cardInsight.classList.remove("show");
    guideContent.classList.remove("open");

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

  // RESET GUIDE STATE
  guideVisible = false;
  guideContent.classList.remove("open");
  cardNote.classList.remove("show");
  cardInsight.classList.remove("show");
  guideToggle.textContent = "▾ Panduan obrolan";
}
