const LoadingNumber = document.querySelector(".Loading-Number");
const BG = document.querySelector(".bg");

let Load = 0;

let int = setInterval(blur, 30);
function blur() {
  Load++;

  if (Load > 99) {
    clearInterval(int);
  }
  LoadingNumber.innerHTML = `${Load}%`;
  LoadingNumber.style.opacity = scale(Load, 0, 100, 1, 0);
  BG.style.filter = `blur(${scale(Load, 0, 100, 30, 0)}px)`;
}

//https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
