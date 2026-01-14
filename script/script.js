// alert("hello")

// let button = document.getElementById("btn");
// button.addEventListener("click", () => {
//   alert("home");
// });

var first = "Sagar";
var last = "Nepali";
// alert(first +" "+ last)

function alertMessage() {
  alert(`${first} ${last}`);
}

let box = document.getElementById("box");

let gap = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown", (event) => {
  if (event.key.startsWith("Arrow")) {
    // console.log(event.key);
    switch (event.key) {
      case "ArrowUp":
        console.log("Up");
        y -= gap;
        break;
      case "ArrowDown":
        y += gap;
        console.log("Down");
        break;
      case "ArrowRight":
        x += gap;
        console.log("Right");
        break;
      case "ArrowLeft":
        x -= gap;
        console.log("Left");
        break;
    }

    box.style.top = y + "px";
    box.style.left = x + "px";
  }
});
