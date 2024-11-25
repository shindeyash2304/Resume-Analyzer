document.addEventListener("DOMContentLoaded", () => {
    const uploadInput = document.getElementById("resume-upload");
    const feedback = document.getElementById("upload-feedback");
    const scoreSection = document.querySelector(".score-section");
    const progressCircle = document.getElementById("score-value");
    const analysisFeedback = document.getElementById("analysis-feedback");
  
    // File Upload Handler
    uploadInput.addEventListener("change", (event) => {
      const file = event.target.files[0];
      if (!file || file.type !== "application/pdf") {
        feedback.textContent = "Only PDF files are allowed.";
        feedback.style.color = "red";
        return;
      }
  
      feedback.textContent = "File uploaded successfully!";
      feedback.style.color = "#00ff7f";
  
      // Simulate scoring
      simulateScore();
    });
  
    function simulateScore() {
      scoreSection.classList.remove("hidden");
      const fakeScore = Math.floor(Math.random() * 101);
      const feedbackText =
        fakeScore > 75
          ? "Your resume is highly relevant and well-structured."
          : "Consider improving your formatting and details.";
  
      setTimeout(() => {
        progressCircle.textContent = fakeScore;
        analysisFeedback.textContent = feedbackText;
      }, 1000);
    }
  });
  