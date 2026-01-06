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
      note: "Biarkan anak menyelesaikan ceritanya tanpa disela.",
      insight: "Rasa senang sering muncul dari perhatian sederhana."
    },
    {
      question: "Ada bagian hari ini yang bikin kamu capek?",
      note: "Terima perasaannya sebelum memberi tanggapan.",
      insight: "Didengar sering kali lebih menenangkan daripada solusi."
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
      insight: "Rasa nyaman menunjukkan kebutuhan emosional anak."
    },
    {
      question: "Ada sesuatu yang ingin kamu lakukan besok?",
      note: "Biarkan anak membayangkan tanpa diarahkan.",
      insight: "Harapan kecil menumbuhkan rasa didukung."
    },
    {
      question: "Hari ini kamu merasa didengarkan atau tidak?",
      note: "Tanggapi dengan empati, bukan pembelaan.",
      insight: "Merasa didengar memperkuat kelekatan."
    }
  ];

  let currentIndex = 0;

  // ELEMENTS
  const startScreen = document.getElementById("start-screen");
  const cardScreen = document.getElementById("card-screen");
  const cardQuestion = document.getElementById("card-question");
  const cardNote = document.getElementById("card-note");
  const cardInsight = document.getElementById("card-insight");
  const cardCounter = document.getElementById("card-counter");
  const guideToggle = document.getElementById("guide-toggle");
  const guideContent = document.getElementById("guide-content");
  const startBtn = document.getElementById("start-btn");
  const nextBtn = document.getElementById("next-btn");

  // START
  startBtn.onclick = () => {
    startScreen.classList.remove("active");
    cardScreen.classList.add("active");
    showCard();
  };

  // NEXT
  nextBtn.onclick = () => {
    currentIndex = (currentIndex + 1) % cards.length;
    showCard();
  };

  // TOGGLE GUIDE (STATELESS, AMAN)
  guideToggle.onclick = () => {
    const isOpen = guideContent.classList.contains("open");

    if (!isOpen) {
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
      guideContent.classList.remove("open");
      cardNote.classList.remove("show");
      cardInsight.classList.remove("show");

      guideToggle.textContent = "▾ Panduan obrolan";
    }
  };

  // RENDER CARD
  function showCard() {
    const card = cards[currentIndex];

    cardQuestion.textContent = card.question;
    cardNote.textContent = card.note;
    cardInsight.textContent = card.insight;
    cardCounter.textContent = `Kartu ${currentIndex + 1} dari ${cards.length}`;

    // reset panduan setiap ganti kartu
    guideContent.classList.remove("open");
    cardNote.classList.remove("show");
    cardInsight.classList.remove("show");
    guideToggle.textContent = "▾ Panduan obrolan";
  }

});
