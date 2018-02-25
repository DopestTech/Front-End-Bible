////////////////////////////////////////////////////////////////////////////
// A simple konami code event handler, to add extra spice to your website //
//      Live demo: https://codepen.io/Romchy/pen/bLxZEE?editors=1010      //
//       Made by Roman Struna, github: https://github.com/RomchyFCC       //
////////////////////////////////////////////////////////////////////////////

const konami = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let keys = [];
let time;

// event listener for key strokes
window.addEventListener('keyup', (e) => {
  //log the keys in the array
  keys.push(e.key);
  keys.splice(- konami.length - 1, keys.length - konami.length);

  // compare both arrays
  if(keys.join("").includes(konami.join(""))) {
    // do something funky if the code input was successfull
    // example: add a red color to the background
    e.target.style.backgroundColor = 'red';
    e.target.style.height = '100vh';
    e.target.style.width = '100%';
  }

  // clear previous timeout
  if (time) {
    clearTimeout(time)
  };

  // how long a user has in-between strokes, before the entered input is reset
  time = setTimeout(()=>{
    keys = [];
  }, 300)
});