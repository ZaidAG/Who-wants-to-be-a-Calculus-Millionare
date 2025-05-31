const questions = [
  {
        question: "What is the value of the infinite geometric series: 2 + 1 + 1/2 + 1/4 + ...?",
        options: ["A) 3", "B) 4", "C) 5", "D) 6"],
        answer: "B",
        difficulty: "easy"
      },
      {
        question: "What is the common ratio of the geometric series: 5 - 2.5 + 1.25 - 0.625 + ...?",
        options: ["A) -0.5", "B) 0.5", "C) 2", "D) -2"],
        answer: "A",
        difficulty: "easy"
      },
      {
        question: "Does the series Σ(1/2^n) from n=1 to ∞ converge or diverge?",
        options: ["A) Converges", "B) Diverges", "C) Oscillates", "D) None of the Above"],
        answer: "A",
        difficulty: "easy"
      },
      {
        question: "Find the sum of the series Σ(3/4^n) from n=1 to ∞.",
        options: ["A) 1", "B) 3/4", "C) 4/3", "D) 3/3"],
        answer: "A",
        difficulty: "easy"
      },
      {
        question: "For which values of r does the geometric series Σ(ar^n) converge?",
        options: ["A) |r|<1", "B) |r|>1", "C) r=1", "D) All real r"],
        answer: "A",
        difficulty: "easy"
      },
      {
        question: "What is the sum of the first five terms: 1 + 2 + 3 + 4 + 5?",
        options: ["A) 10", "B) 15", "C) 20", "D) 5"],
        answer: "B",
        difficulty: "easy"
      },
      {
        question: "Which test is most appropriate for determining if ∑(1/n²) converges?",
        options: ["A) Ratio Test", "B) Limit Comparison Test", "C) Integral Test", "D) Alternating Series Test"],
        answer: "C",
        difficulty: "medium"
      },
      {
        question: "Does the series ∑((-1)^n)/n converge absolutely, conditionally, or diverge?",
        options: ["A) Absolutely", "B) Conditionally", "C) Diverges", "D) None of these"],
        answer: "B",
        difficulty: "medium"
      },
      {
        question: "Find the radius of convergence for ∑(x^n)/n.",
        options: ["A) 1", "B) 0", "C) ∞", "D) 2"],
        answer: "A",
        difficulty: "medium"
      },
      {
        question: "Which of the following series diverges?",
        options: ["A) ∑(1/n²)", "B) ∑(1/n)", "C) ∑(1/2^n)", "D) ∑((-1)^{n+1}/n)"],
        answer: "B",
        difficulty: "medium"
      },
      {
        question: "If ∑aₙ converges and aₙ > 0, which statement is true?",
        options: ["A) lim aₙ = 0", "B) lim aₙ ≠ 0", "C) ∑aₙ diverges", "D) aₙ must be decreasing"],
        answer: "A",
        difficulty: "medium"
      },
      {
        question: "The power series ∑(x−2)^n converges for which x?",
        options: ["A) |x−2| < 1", "B) |x−2| ≤ 1", "C) |x−2| > 1", "D) All x"],
        answer: "A",
        difficulty: "hard"
      },
      {
        question: "If ∑(n!/n^n) converges, what test best shows this?",
        options: ["A) Ratio Test", "B) Direct Comparison Test", "C) Alternating Series Test", "D) Geometric Series Test"],
        answer: "A",
        difficulty: "hard"
      },
      {
        question: "What is the sum of the series ∑(1/3)^n?",
        options: ["A) 1/2", "B) 1/3", "C) 3/2", "D) 3/4"],
        answer: "C",
        difficulty: "hard"
      },
      {
        question: "What is the interval of convergence for ∑((x−2)^n)/n?",
        options: ["A) 1 < x < 3", "B) x > 2", "C) x < 2", "D) -1 < x < 1"],
        answer: "A",
        difficulty: "hard"
      },
      //Intergrals
      {
        question: "Evaluate ∫2x dx",
        options: ["A) x^2+C", "B) 2x^2+C", "C) x^2", "D) 2x+C"],
        answer: "A",
        difficulty: "easy"
      },
      {
        question: "Evaluate ∫3 dx from 0 to 1",
        options: ["A) 1", "B) 2", "C) 3", "D) 0"],
        answer: "A",
        difficulty: "easy"
      },
      {
        question: "Which of the following is the antiderivative of cos 𝑥?",
        options: ["A) sin x +C", "B) -sin x +C", "C) -cos x +C", "D) tan x + C"],
        answer: "A",
        difficulty: "easy"
      },
      {
        question: "Evaluate ∫x^2 dx",
        options: ["A) 1/2x^2 + C", "B) 1/3x^3 + C", "C) x^3+C", "D) 2x + C"],
        answer: "B",
        difficulty: "easy"
      },
      {
        question: "Evaluate ∫x dx from 1 to 2",
        options: ["A) 3/2", "B) 2", "C) 1", "D) 5/2"],
        answer: "A",
        difficulty: "easy"
      },
      {
        question: "Evaluate ∫4x^3-2x dx",
        options: ["A) x^4 - x^2 + C", "B) x^4 -2x + C", "C) 4x^4 - x^2 + C", "D) x^4 -2x + C"],
        answer: "A",
        difficulty: "Medium"
      },
      {
        question: "If F(x) is the antiderivaive of f(x), then what is d/dx∫f(t)dt from 0 to x?",
        options: ["A) F(x)", "B) f(x)", "C) f(0)", "D) F(0)"],
        answer: "B",
        difficulty: "easy"
      },
      {
        question: "Evaluate ∫sinx dx from 0 to π",
        options: ["A) 0", "B) 2", "C) 1", "D) -2"],
        answer: "D",
        difficulty: "easy"
      },
      {
        question: "The area under 𝑦=𝑥 from 𝑥=2 to 𝑥=5 is what?",
        options: ["A) 9", "B) 21/2", "C) 15/2", "D) 12"],
        answer: "B",
        difficulty: "medium"
      },
      {
        question: "Evaluate ∫1/x dx",
        options: ["A) ln|x| + C", "B) 1/x + C", "C) -1/x + C ","D) e^x + C"],
        answer: "A",
        difficulty: "easy"
      },
      {
        question: "Evaluate ∫(3x^2+2x dx) from 0 to 2",
        options: ["A) 12", "B) 10", "C) 8", "D) 6"],
        answer: "A",
        difficulty: "hard"
      },
      {
        question: "Evaluate ∫e^2x dx from 0 to 1",
        options: ["A) e^2 - 1", "B) 1/2(e^2 - 1)", "C) 2(e^2 - 1)", "D) e - 1"],
        answer: "B",
        difficulty: "medium"
      },
      {
        question: "Evaluate from ∫(1/1+x^2)dx from 0 to 1",
        options: ["A) π/4", "B) π/2", "C) 1", "D) 0"],
        answer: "A",
        difficulty: "hard"
      },
      {
        question: "Evaluate ∫xe^(x^2) dx",
        options: ["A) 1/2e^(x^2) + C", "B) e^(x^2) + C", "C) (x^2)(e^x)+C", "D)1/4(x^2)(e^x)+C "],
        answer: "A",
        difficulty: "hard"
      },
      {
        question: "Evaluate ∫((x^3)cos(x^4))dx from 0 to 1",
        options: ["A) 1/4sin(1)", "B) sin(1)", "C) 1/3sin(1)", "D) 1/4cos(1)"],
        answer: "A",
        difficulty: "hard"
      },
      //Polar/Parametric
      {
          question: "Which of the following is the polar form of the point (2, π/3)?",
          options: ["A) (1, π/6)", "B) (2, π/3)", "C) (2, π/2)", "D) (3, π/4)"],
          answer: "B"
        },
        {
          question: "What is the rectangular (Cartesian) coordinate of the point (4, 0) in polar form?",
          options: ["A) (4, 0)", "B) (0, 4)", "C) (0, -4)", "D) (2, 2)"],
          answer: "A"
        },
        {
          question: "Convert (1, π/2) from polar to rectangular coordinates.",
          options: ["A) (1, 0)", "B) (0, 1)", "C) (-1, 0)", "D) (0, -1)"],
          answer: "B"
        },
        {
          question: "If r = 2, what is the distance from the origin to the point in polar coordinates?",
          options: ["A) 1", "B) 2", "C) 3", "D) 4"],
          answer: "B"
        },
        {
          question: "Which angle corresponds to the positive y-axis in polar coordinates?",
          options: ["A) 0", "B) π/2", "C) π", "D) 3π/2"],
          answer: "B"
        },
        {
          question: "Which polar equation represents a circle centered at the origin with radius 3?",
          options: ["A) r = 3", "B) θ = 3", "C) r = 2", "D) θ = π"],
          answer: "A"
        },
        {
          question: "What is the rectangular form of the polar equation r = 2cos(θ)?",
          options: ["A) x² + y² = 2x", "B) x² + y² = 2y", "C) x² + y² = 4x", "D) x² + y² = 4y"],
          answer: "A"
        },
        {
          question: "Which of the following points is NOT on the polar curve r = 2sin(θ)?",
          options: ["A) (0, 0)", "B) (2, π/2)", "C) (2, 0)", "D) (1, π/6)"],
          answer: "C"
        },
        {
          question: "For r = 3 + 2cos(θ), what is the value of r when θ = 0?",
          options: ["A) 1", "B) 3", "C) 5", "D) 0"],
          answer: "C"
        },
        {
          question: "What is the slope of the tangent line to r = 1 + sin(θ) at θ = π/2?",
          options: ["A) 0", "B) 1", "C) 2", "D) Undefined"],
          answer: "A"
        },
        {
          question: "Which of the following best describes the graph of r = 2sin(θ)?",
          options: ["A) A circle above the origin", "B) A line through the origin", "C) A parabola", "D) A spiral"],
          answer: "A"
        },
        {
          question: "What is the area enclosed by one loop of r = sin(2θ)?",
          options: ["A) π/2", "B) π/4", "C) π/8", "D) π/16"],
          answer: "C"
        },
        {
          question: "If r = 2cos(3θ), how many petals does the rose curve have?",
          options: ["A) 2", "B) 3", "C) 6", "D) 8"],
          answer: "C"
        },
        {
          question: "For the curve r = 1 + 2cos(θ), what is the maximum value of r?",
          options: ["A) 1", "B) 2", "C) 3", "D) 4"],
          answer: "C"
        },
        {
          question: "What is the length of the curve r = 2θ from θ = 0 to θ = π?",
          options: ["A) 2π", "B) π√5", "C) (π²)/2", "D) 2π√2"],
          answer: "B"
        }
];

const categorizedQuestions = {
    series: questions.slice(0, 15),
    integrals: questions.slice(15, 30),
    polar: questions.slice(30, 45)
  };

let currentQuestion = 0;
let questionsInPlay = [];
let score = 0;
let lifelinesUsed = {
  fiftyFifty: false,
  audience: false,
  phone: false
};

const questionMusic = document.getElementById("questionMusic");
const introMusic = document.getElementById("introMusic");
const correctSound = document.getElementById("correctSound");
const wrongSound = document.getElementById("wrongSound");

// New audio elements for winning and losing music
const winMusic = document.getElementById("winMusic");
const loseMusic = document.getElementById("loseMusic");

window.onload = () => {
  introMusic.play();
};

function startGame() {
  currentQuestion = 0;
  score = 0;
  lifelinesUsed = { fiftyFifty: false, audience: false, phone: false };
  window.speechSynthesis.cancel();

  introMusic.pause();
  introMusic.currentTime = 0;
  questionMusic.pause();
  questionMusic.currentTime = 0;
  winMusic.pause();
  winMusic.currentTime = 0;
  loseMusic.pause();
  loseMusic.currentTime = 0;

  document.getElementById("lifelines").style.display = "none";
  document.getElementById("category-selection").style.display = "block";
  document.getElementById("options").innerHTML = "";
  document.getElementById("question").textContent = "Please select a category.";

  document.getElementById("instructions-box").style.display = "none";
  document.getElementById("instructions-button").style.display = "none";
  document.getElementById("start-button").style.display = "none";
}

function toggleInstructions() {
  const instructionsBox = document.getElementById("instructions-box");
  if (instructionsBox.style.display === "block") {
    instructionsBox.style.display = "none";
  } else {
    instructionsBox.style.display = "block";
  }
}

function selectCategory(category) {
  questionsInPlay = categorizedQuestions[category];
  currentQuestion = 0;
  document.getElementById("category-selection").style.display = "none";
  document.getElementById("lifelines").style.display = "block";
  updateQuestionDisplay();
}

function updateQuestionDisplay() {
  const q = questionsInPlay[currentQuestion];
  document.getElementById("question").textContent = q.question;
  const optionsContainer = document.getElementById("options");
  optionsContainer.innerHTML = "";
  q.options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option;
    button.disabled = false;
    button.classList.remove("correct", "incorrect");
    button.onclick = () => handleAnswer(option[0]);
    optionsContainer.appendChild(button);
  });
  document.getElementById("score").textContent = `Score: $${score}`;

  speakText(q.question + ". " + q.options.join(". "));

  if (introMusic && !introMusic.paused) {
    introMusic.pause();
    introMusic.currentTime = 0;
  }
  questionMusic.play();
}

function handleAnswer(answer) {
  window.speechSynthesis.cancel();
  const correct = questionsInPlay[currentQuestion].answer;
  const buttons = document.querySelectorAll("#options button");

  buttons.forEach(btn => {
    btn.disabled = true;
    if (btn.textContent.startsWith(correct)) {
      btn.classList.add("correct");
    }
    if (btn.textContent.startsWith(answer) && answer !== correct) {
      btn.classList.add("incorrect");
    }
  });

  questionMusic.pause();
  questionMusic.currentTime = 0;

  if (answer === correct) {
    correctSound.play();
    score += 100 * (currentQuestion + 1);
    currentQuestion++;

    setTimeout(() => {
      if (currentQuestion < questionsInPlay.length) {
        updateQuestionDisplay();
      } else {
        winMusic.play();
        document.getElementById("question").textContent = `Congratulations! You won $${score}`;
        document.getElementById("options").innerHTML = '<button class="start-button" onclick="startGame()">Play Again</button>';
        speakText(`Congratulations! You won $${score}`);
      }
    }, 1500);
  } else {
    wrongSound.play();
    wrongSound.onended = () => {
      loseMusic.play();
      document.getElementById("question").textContent = `Wrong answer. You walk away with $${score}`;
      document.getElementById("options").innerHTML = '<button class="start-button" onclick="startGame()">Try Again</button>';
      speakText(`Wrong answer. You walk away with $${score}`);
    };
  }
}

function useFiftyFifty() {
  if (lifelinesUsed.fiftyFifty) return;
  lifelinesUsed.fiftyFifty = true;
  const correct = questionsInPlay[currentQuestion].answer;
  const buttons = document.querySelectorAll("#options button");
  let removed = 0;
  buttons.forEach(button => {
    if (!button.textContent.startsWith(correct) && removed < 2) {
      button.disabled = true;
      removed++;
    }
  });
}

function useAskAudience() {
  if (lifelinesUsed.audience) return;
  lifelinesUsed.audience = true;
  const q = questionsInPlay[currentQuestion];
  // For demo: just alert a hint or percentages
  alert(`Audience suggests: ${q.answer} is most likely correct.`);
}

function usePhoneAFriend() {
  if (lifelinesUsed.phone) return;
  lifelinesUsed.phone = true;
  const q = questionsInPlay[currentQuestion];
  alert(`Friend thinks the answer might be: ${q.answer}`);
}

function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1;
    speechSynthesis.speak(utterance);
}

document.getElementById("instructions-btn").addEventListener("click", () => {
    const instructionsText = "Welcome to the math quiz. Choose a category, answer the questions, and try to get the highest score. Good luck!";
    speak(instructionsText);
});
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") {
    introMusic.play().catch(() => {
      // Autoplay might be blocked, ignore errors silently
    });
  } else {
    introMusic.pause();
  }
});
