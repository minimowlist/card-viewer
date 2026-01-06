document.addEventListener("DOMContentLoaded", () => {

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

  let index = 0;

  const startScreen = document.getElementById("start-screen");
  const cardScreen = document.getElementById("card-screen");
  const startBtn = document.getElementById("start-btn");
  const nextBtn = document.getElementById("next-btn");

  const questionEl = document.getElementById("card-question");
  const noteEl = document.getElementById("card-note");
  const insightEl = document.getElementById("card-insight");
  const counterEl = document.getElementById("card-counter");
  const guideToggle = document.getElementById("guide-toggle");

  // init hidden
  noteEl.classList.add("hidden");
  insightEl.classList.add("hidden");

  startBtn.onclick = () => {
    startScreen.classList.remove("active");
    cardScreen.classList.add("active");
    render();
  };

  nextBtn.onclick = () => {
    index = (index + 1) % cards.length;
    render();
  };

  guideToggle.onclick = () => {
    const isHidden = noteEl.classList.contains("hidden");

    noteEl.classList.toggle("hidden", !isHidden);
    insightEl.classList.toggle("hidden", !isHidden);

    guideToggle.textContent = isHidden
      ? "Sembunyikan panduan obrolan"
      : "Panduan obrolan";
  };

  function render() {
    const c = cards[index];
    questionEl.textContent = c.question;
    noteEl.textContent = c.note;
    insightEl.textContent = c.insight;
    counterEl.textContent = `Kartu ${index + 1} dari ${cards.length}`;

    noteEl.classList.add("hidden");
    insightEl.classList.add("hidden");
    guideToggle.textContent = "Panduan obrolan";
  }

});
