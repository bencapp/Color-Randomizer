// function returning a randomized rgba value

function getRandomColor() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  let a = Math.random() / 4 + 0.75;
  return `${r}, ${g}, ${b}, ${a}`;
}

// function to create the first randomization
// as well as the div box objects

function createRandomization() {
  for (let i = 0; i < 5000; i++) {
    let color = `rgba(${getRandomColor()})`;
    let div = document.createElement("div");
    div.id = `${i}`;
    document.body.appendChild(div);

    var box = document.getElementById(`${i}`);

    box.style.backgroundColor = color;
  }
}
// function to refresh the color randomization
function refreshRandomization() {
  for (let i = 0; i < 5000; i++) {
    let color = `rgba(${getRandomColor()})`;

    var box = document.getElementById(`${i}`);

    box.style.backgroundColor = color;
  }
}

createRandomization();

window.addEventListener("click", (event) => refreshRandomization());
