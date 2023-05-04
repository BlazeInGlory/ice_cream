const icecreams = [
  {
  name: 'Strawberry Supreme',
  price: 6,
  quantity: 0
  },
  {
    name: 'Caramel Madness',
    price: 7,
    quantity: 0
  },
  {
    name: 'Confetti Confessions',
    price: 6,
    quantity: 0
  },
  {
    name: 'Vanilla Boring Bean',
    price: 5,
    quantity: 0
  },
  {
    name: 'Chocolate Cheers',
    price: 5,
    quantity: 0
  },
  {
    name: 'Radiating Rainbows',
    price: 6,
    quantity: 0
  },
  {
    name: 'Ridiculous Rasberries',
    price: 7,
    quantity: 0
  },
  {
    name: 'Huckleberry Hunks',
    price: 7,
    quantity: 0
  },
  {
    name: 'Cherry Garcia',
    price: 7,
    quantity: 0
  },
  {
    name: 'Cookie Wooks',
    price: 8,
    quantity: 0
  },
  {
    name: 'Cotton Creations',
    price: 8,
    quantity: 0
  }
]

function buyStrawberry() {
  let foundIceCream = icecreams[0]
  foundIceCream.quantity++
  console.log(foundIceCream)
}
function buyCaramel() {
  let foundIceCream = icecreams[1]
  foundIceCream.quantity++
  console.log(foundIceCream)
}
function buyConfetti() {
  let foundIceCream = icecreams[2]
  foundIceCream.quantity++
  console.log(foundIceCream)
}
function buyVanilla() {
  let foundIceCream = icecreams[3]
  foundIceCream.quantity++
  console.log(foundIceCream)
}
function buyChocolate() {
  let foundIceCream = icecreams[4]
  foundIceCream.quantity++
  console.log(foundIceCream)
}
function buyRainbows() {
  let foundIceCream = icecreams[5]
  foundIceCream.quantity++
  console.log(foundIceCream)
}
function buyRasberry() {
  let foundIceCream = icecreams[6]
  foundIceCream.quantity++
  console.log(foundIceCream)
}
function buyHuckleberry() {
  let foundIceCream = icecreams[7]
  foundIceCream.quantity++
  console.log(foundIceCream)
}
function buyCherry() {
  let foundIceCream = icecreams[8]
  foundIceCream.quantity++
  console.log(foundIceCream)
}
function buyCookie() {
  let foundIceCream = icecreams[9]
  foundIceCream.quantity++
  console.log(foundIceCream)
}
function buyCotton() {
  let foundIceCream = icecreams[10]
  foundIceCream.quantity++
  console.log(foundIceCream)
}

function buyIceCream(iceCreamName) {
  console.log('buying Ice Cream', iceCreamName)
  let foundIceCream = icecreams.find(icecreams => icecreams.name == iceCreamName)
  foundIceCream.quantity++
  console.log(foundIceCream)
  drawCart()
}

function drawCart() {
  let template = ''
  icecreams.forEach(i => {
    if (i.quantity > 0) {
      template += `
                  <div class="d-flex justify-content-around align-items-baseline">
                  <p>${i.name}</p>
                  <p>x${i.quantity}</p>
                  <p>$${i.price}</p>
                  <button onclick="removeItem('${i.name}')" class="btn text-danger"><i class="mdi mdi-delete"></i></button></div>`
    }
  })
  document.getElementById('cart').innerHTML = template
  drawTotal()
}

function drawTotal() {
  let total = 0
  icecreams.forEach(s => s.quantity > 0 ? total +- s.quantity * s.price : total += 0)
  console.log(total, 'total');

  document.getElementById('total').innerText = total.toString()
}

function checkout() {
  if (window.confirm("Are you done?")) {
    icecreams.forEach(s => {
      s.quantity = 0
    })
    drawCart()
  }
}

function removeItem(iceCreamName) {
  console.log('removing item', iceCreamName)
  let foundIceCream = icecreams.find(s => s.name == iceCreamName)
  foundIceCream.quantity--
  console.log(foundIceCream);
  drawCart()
}