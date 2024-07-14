//   CV navigation script start
document.addEventListener("DOMContentLoaded", function () {
    var buttons = ["profile", "experience", "education", "skills", "hobbies", "about-me"];
  
    buttons.forEach(function (buttonId) {
      var button = document.getElementById(buttonId + "-btn");
      var content = document.getElementById(buttonId);
      button.addEventListener("click", function () {
        var isVisible = content.style.display === "block";
        hideAll();
        if (!isVisible) {
          content.style.display = "block";
        }
      });
    });
  
    function hideAll() {
      buttons.forEach(function (buttonId) {
        var content = document.getElementById(buttonId);
        content.style.display = "none";
      });
    }
  
    hideAll();
  });
//   CV navigation script end

//  Menu buttons script start
function toggleButtonsVisibility() {
    var t = document.getElementById("curriculum-btn"),
      e = document.getElementById("projects-btn"),
      n = document.getElementById("home-btn-back"),
      p = document.querySelector(".new-portfolio-back");
  
    if (t.classList.contains("hidden")) {
      t.classList.remove("hidden");
      e.classList.remove("hidden");
      n.classList.remove("hidden");
      p.classList.remove("hidden");
    } else {
      t.classList.add("hidden");
      e.classList.add("hidden");
      n.classList.add("hidden");
      p.classList.add("hidden");
    }
  }
  
  document.getElementById("menu-btn").addEventListener("click", toggleButtonsVisibility);
  document.getElementById("curriculum-btn").addEventListener("click", toggleButtonsVisibility);
  document.getElementById("projects-btn").addEventListener("click", toggleButtonsVisibility);
  document.getElementById("home-btn-back").addEventListener("click", toggleButtonsVisibility);
  document.querySelector(".new-portfolio-back").addEventListener("click", toggleButtonsVisibility);
  