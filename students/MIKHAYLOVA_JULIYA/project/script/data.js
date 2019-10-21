const items = ['Notebook', 'Display', 'Keyboard', 'Mouse', 'Phones', 'Router', 'USB-camera', 'Gamepad']
const prices = [1000, 200, 20, 10, 25, 30, 18, 24]
const ids = [1, 2, 3, 4, 5, 6, 7, 8]
const images = ['images/notebook.png',
  'images/display.png',
  'images/keyboard.png',
  'images/mouse.png',
  'images/iphone.png',
  'images/router.png',
  'images/usb-camera.png',
  'images/gamepad.png'
];


function createProduct(index) {
  return {
    id: ids[index],
    name: items[index],
    price: prices[index],
    img: images[index]
  }
}

function createDTO() {
  let data = []
  for (let i = 0; i < ids.length; i++) {
    data.push(createProduct(i))
  }
  return data
}

let data = createDTO()