function earth() {
  let water = true;
  let gravity = 10;

  return (value) => [water, gravity];
}

const ufo = earth();

ufo(false);

const button = document.querySelector('button');

const handleClick = (() => {
  let clicked = false;

  return () => {
    if (!clicked) {
      document.body.style.backgroundColor = 'dodgerblue';
    } else {
      document.body.style.backgroundColor = 'white';
    }
    clicked = !clicked;
  };
})();
button.addEventListener('click', handleClick);

function useState(init) {
  let value = init;

  function read() {
    return value;
  }

  function write(newValue) {
    value = newValue;
  }

  return [read, write];
}

const [number, setNumber] = new useState(10);
