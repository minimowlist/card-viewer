document.addEventListener("DOMContentLoaded", () => {

  console.log("SCRIPT LOADED");

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
    },
    {
      question: "Kalau hari ini diulang, bagian mana yang ingin kamu ubah?",
      note: "Jangan buru-buru mengoreksi jawabannya.",
      insight: "Refleksi ringan membantu anak belajar tanpa merasa disalahkan."
    },
    {
      question: "Hal kecil apa yang bikin kamu tersenyum hari ini?",
      note: "Tunjukkan apresiasi meski ceritanya sederhana.",
      insight: "Hal kecil sering jadi sumber rasa aman."
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
      note: "Dengarkan tanpa membandingkan.",
      insight: "Rasa nyaman menunjukkan kebutuhan emosional."
    },
    {
      question: "Ada sesuatu yang ingin kamu lakukan besok?",
      note: "Biarkan anak membayangkan.",
      insight: "Harapan kecil menumbuhkan rasa didukung."
    },
    {
      question: "Hari ini kamu merasa didengarkan atau tidak?",
      note: "Tanggapi dengan empati.",
      insight: "Merasa didengar memperkuat kelekatan."
    }
  ];

  let currentIndex = 0;

  const startScreen = document.getElementById("start-screen");
  const cardScreen = document.getElementById("card-screen");
  const cardQuestion = document.getElementById("card-question");
  const cardNote = document.getElementById("card-note");
  const cardInsight = document.getElementById("card-insight");
  const cardCounter = document.getElementById("card-counter");
  const guideToggle = document.getElementById("guide-toggle");
  const guideContent = document.getElementById("guide-content");

  document.getElementById("start-btn").onclick = () => {
    startScreen.classList.remove("active");
    cardScreen.classList.add("active");
    showCard();
  };

  document.getElementById("next-btn").onclick = () => {
    currentIndex = (currentIndex + 1) % cards.length;
    showCard();
  };

  guideToggle.onclick = () => {
  const isOpen = guideContent.classList.contains("open");

  if (!isOpen) {
    // buka
    guideContent.classList.add("open");

    setTimeout(() => {
      cardNote.classList.add("show");
    }, 60);

    setTimeout(() => {
      cardInsight.classList.add("show");
    }, 140);

    guideToggle.textContent = "▴ Sembunyikan panduan obrolan";
  } else {
    // tutup
    guideContent.classList.remove("open");
    cardNote.classList.remove("show");
    cardInsight.classList.remove("show");

    guideToggle.textContent = "▾ Panduan obrolan";
  }
};

  function showCard() {
  const card = cards[currentIndex];

  cardQuestion.textContent = card.question;
  cardNote.textContent = card.note;
  cardInsight.textContent = card.insight;
  cardCounter.textContent = `Kartu ${currentIndex + 1} dari ${cards.length}`;

  guideContent.classList.remove("open");
  cardNote.classList.remove("show");
  cardInsight.classList.remove("show");
  guideToggle.textContent = "▾ Panduan obrolan";
}

});

