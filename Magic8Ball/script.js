let message = document.getElementById("result");
function play() {
  let a = Math.floor(Math.random() * 2);
  if (a == 0) {
    message.innerHTML = "Yes";
  } else {
    message.innerHTML = "No";
  }
}
// play();
