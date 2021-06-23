const btnDarkLight = document.querySelector("#Light-dark-mode");
let x = 0;

    btnDarkLight.addEventListener("click", function (){
        document.body.classList.toggle("dark");
        
        if(x == 0){
            btnDarkLight.src= "Images/icon-sun.svg";
            x = 1;
        }else{
            btnDarkLight.src= "Images/icon-moon.svg";
            x = 0;
        }
});