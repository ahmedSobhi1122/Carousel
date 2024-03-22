const buttons = document.querySelectorAll(".carousel-btn");
const slides = document.querySelectorAll(".slide");
var index = 0;

buttons.forEach(button => {
  button.addEventListener("click", () => {
    slides[index].className = slides[index].className.replace("active" , "");    
    const offset = button.className == "carousel-btn next" ? 1 : -1;
    index += offset;
    index = index<0?2:(index >= 3)?index%3:index; // index ==> [0:2]
    slides[index].classList.add("active");
  });
});