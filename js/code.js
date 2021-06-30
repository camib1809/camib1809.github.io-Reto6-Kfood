const btnDarkLight = document.querySelector("#Light-dark-mode");
const favicon = document.querySelector("#favicon");
let x = 0;

    btnDarkLight.addEventListener("click", function (){
        document.body.classList.toggle("dark");
        
        if(x == 0){
            btnDarkLight.src= "Images/icon-sun.svg";
            favicon.href= "Images/favicon.ico";
            x = 1;
        }else{
            btnDarkLight.src= "Images/icon-moon.svg";
            favicon.href= "Images/favicon-light.ico";
            x = 0;
        }
});

//Variables 

const addToShoppingCart = document.querySelectorAll('.Agregar');
const CartContainer = document.querySelector('#shoppingContainer');
const removeAllItems = document.querySelector('#clearAll');
const AlertCart = document.getElementById('textcar');
const productos = document.querySelectorAll('.productos');

// Actualiza el número total de productos en carrito

const totalCarrito = document.querySelector("#items");
totalCarrito.textContent = totalProductos();

// Eventos

addToShoppingCart.forEach(addToCartButton => {
    addToCartButton.addEventListener('click', addToCartClicked);
});
CartContainer.addEventListener('click', removeShoppingCartItem);
removeAllItems.addEventListener("click", clearItems);
VerMas.addEventListener("click", VerTodo);


// Funciones
function addToCartClicked(event){
    const button = event.target;
    const card = button.closest('.card');
    
    const cardTitle = card.querySelector('#title').textContent;
    const cardPrice = card.querySelector('#price').textContent;
    const cardImg = card.querySelector('.prod-img').src;

    addItemToShoppingCart(cardTitle, cardPrice, cardImg);
}

function addItemToShoppingCart(cardTitle, cardPrice, cardImg){
    const shoppingCartRow = document.createElement('div');
    totalCarrito.textContent = totalProductos();
    const shoppingCartContent = 
    
    `<div class="row d-flex flex-row px-5 py-3 border-bottom">
    <div class="col-11 col-sm-11 d-flex flex-column flex-sm-row justify-content-center align-items-center">
        <img src=${cardImg} class="col-11 col-sm-2 mr-0 mr-sm-3">
        <div class="col-12 col-sm-5 text-center d-flex flex-column justify-content-center ml-0 ml-sm-5 mt-2 mt-sm-0">
          <h4>${cardTitle}</h4>
        </div>
        <div class="col-12 col-sm-3 text-center ml-0 ml-sm-5 d-flex align-items-center justify-content-center">
          <h4>${cardPrice}</h4>
        </div>
    </div>
    <div class="d-flex align-items-center cursor-pointer">
        <img src="Images/icon-cross.svg" class="cross">
    </div>
</div>`;

    shoppingCartRow.innerHTML = shoppingCartContent;
    CartContainer.append(shoppingCartRow);

    shoppingCartRow.querySelector('.cross').addEventListener('click', removeShoppingCartItem);

    totalCarrito.textContent = totalProductos();

// Condicional para eliminar 
    AlertCart.classList.add("d-none");
    AlertCart.classList.remove("d-flex");
    
}

function removeShoppingCartItem(event){
    
    if(event.target.classList.contains("cross")){    
        event.target.parentElement.parentElement.parentElement.remove();
        totalCarrito.textContent = totalProductos();
        console.log();
        
    }

    // Condicional para eliminar 

    if(totalProductos() == 0){
        AlertCart.classList.add("d-flex");
        AlertCart.classList.remove("d-none");
    }
}

function clearItems(event){
    const productosCarrito = Array.from(CartContainer.children);
    console.log(productosCarrito);

    let arrayCompleted = productosCarrito;

    arrayCompleted.forEach(function(element, i){
        arrayCompleted[i].remove();
    });

    totalCarrito.textContent = totalProductos();

    // Condicional para eliminar 
    AlertCart.classList.add("d-flex");
    AlertCart.classList.remove("d-none");
}

function totalProductos(){

    const productosCarrito = Array.from(CartContainer.children);
    console.log(productosCarrito);

    let totalProductos = productosCarrito;

    return totalProductos.length;

}

// boton de ver más

function myFunction() {

    var x = document.querySelectorAll(".productos");
    var p = Array.from(x);

    const textbtn = document.querySelector("#mas");
    const imgbtn = document.querySelector("#Img");
    const margen = document.querySelector(".boton");

    p.forEach(function(x, i){
    
    if (x.classList.contains("d-none")) {
        x.classList.add("d-flex");
        x.classList.remove("d-none");
        textbtn.textContent= "Ver menos";
        imgbtn.setAttribute('src', 'Images/menos.png');
        margen.classList.remove("mt-1");
        margen.classList.add("mt-5");

    
    } else {
        x.classList.add("d-none");
        x.classList.remove("d-flex");
        textbtn.textContent= "Ver más";
        imgbtn.setAttribute('src', 'Images/mas.png');
        margen.classList.add("mt-1");
        margen.classList.remove("mt-5");
    
    }

    })
    
}



    