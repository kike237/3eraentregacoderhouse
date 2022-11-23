class Producto {
  constructor(nombre, precio, id) {
    this.nombre = nombre;
    this.precio = precio;
    this.id = id;
  }
}

const itemsOncart = [];

const toallas = new Producto("Toallas Microfibra", 19.99, 0);
const wax = new Producto("Spray Wax", 24.95, 1);
const fqc = new Producto("Fortify Quick Coat", 15.95, 2);
const ptg = new Producto("Pristine Tire Gel", 19.99, 3);

const products = [toallas, wax, fqc, ptg];

let botonCarritoComprarYa = document.getElementById("compraryacarrito");
let botonCarritoAgregarMas = document.getElementById("agregarmascarrito");
let botonAplicarDescuento = document.getElementById("aplicardescuentoboton");
let botonAgregarWax = document.getElementById("botonagregarwax");
let botonAgregarFqc = document.getElementById("botonagregarfqc");
let botonAgregarPtg = document.getElementById("botonagregarptg");
let botonAgregarMain = document.getElementById("agregarcarritomain");
let subtotal = document.getElementById("subtotal");

function toggleCart() {
  let element = document.getElementById("CarritoImprovisado");
  element.classList.toggle("show");
}

// Lista de productos en el carrito por ID

function addToCart(id) {
  itemsOncart.push(id);
  localStorage.setItem("itemsOncart",JSON.stringify(itemsOncart));
  printCart();
}

function printCart() {
  let element = document.getElementById("element-list");
  element.innerHTML = "";
  itemsOncart.forEach((product) => {
    let currentProduct = products.find((x) => x.id == product);
    console.log(currentProduct);
    element.innerHTML =
      element.innerHTML +
      "<div class='element'><div class='info'><h3>" +
      currentProduct.nombre +
      "</h3><p>" +
      currentProduct.precio +
      "</p></div></div><hr>";
  });
}

function handleClick(id) {
    addToCart(id);
    
  toggleCart();
}

document.addEventListener("DOMContentLoaded", function() {
    let caca = localStorage.getItem("itemsOncart");
    itemsOncart.push(...JSON.parse(caca));
    printCart();
});