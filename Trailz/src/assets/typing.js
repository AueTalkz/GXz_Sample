// ---------- Typing Effect ----------
const typingElement = document.getElementById("typing");
const textArray = ["Web Development", "UI/UX Design", "Digital Marketing", "SEO Optimization", "Content Creation", "Social Media Management"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentText = textArray[textIndex];
  typingElement.textContent = currentText.substring(0, charIndex);

  if (!isDeleting && charIndex < currentText.length) {
    charIndex++;
    setTimeout(typeEffect, 100);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, 50);
  } else {
    if (!isDeleting) {
      isDeleting = true;
      setTimeout(typeEffect, 1000);
    } else {
      isDeleting = false;
      textIndex = (textIndex + 1) % textArray.length;
      setTimeout(typeEffect, 200);
    }
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);

// ---------- Staggered Card Animation ----------
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Add a small delay for staggered animation
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, index * 150); // delay = 150ms between cards
      }
    });
  },
  {
    threshold: 0.2, // trigger when 20% of the card is visible
  }
);

cards.forEach((card) => {
  observer.observe(card);
});

// ---------- Contact Form Validation ----------

  function newFunction() {
    const btn = document.querySelector(".BTN");
    const clearForm = () => {
      const inputs = document.querySelectorAll(".form .inputBx input, .form .inputBx textarea");
      inputs.forEach(input => input.value = "");
    };

    if (!btn) return;

    btn.addEventListener("click", () => {
      const inputs = document.querySelectorAll(".form .inputBx input, .form .inputBx textarea");
      const hasEmpty = Array.from(inputs).some(i => i.value.trim() === "");
      if (hasEmpty) {
        alert("Please fill in all required fields.");
      } else {
        alert("Message Sent!");
        clearForm();
      }
    });
  }
  document.addEventListener("DOMContentLoaded", newFunction);

