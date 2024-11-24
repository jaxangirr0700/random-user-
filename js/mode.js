const body = document.querySelector("body");
const darkBtn = document.getElementById("dark-btn");
const lightBtn = document.getElementById("light-btn");
const modeLocal =localStorage.getItem('mode')
if(modeLocal){
    body.classList.add('dark-mode')
    darkBtn.classList.toggle("hidden");
    lightBtn.classList.toggle("hidden");
}
const toggleModeBtn = () => {
  darkBtn.classList.toggle("hidden");
  lightBtn.classList.toggle("hidden");
  body.classList.toggle("dark-mode");
};
darkBtn.addEventListener("click", () => {
  //   darkBtn.classList.add("hidden");
  //   lightBtn.classList.remove("hidden");
  //   body.classList.add("dark-mode");
  // /birinchi ishni bajarib keyin funksitada bajardik!
  toggleModeBtn();
  localStorage.setItem("mode", "dark-mode");
});
lightBtn.addEventListener("click", () => {
  //   darkBtn.classList.remove("hidden");
  //   lightBtn.classList.add("hidden");
  //   body.classList.remove("dark-mode");
  // /birinchi ishni bajarib keyin funksitada bajardik!
  toggleModeBtn();
  localStorage.setItem("mode", "");
});
