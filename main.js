import { KEPEK } from "./adatok.js";
import { htmlOsszeAllit } from "./fuggvenyek.js";

/*1. feladat:  galéria kisképeinek elhelyezése */
/* fogd meg a .galeria elemet */

/* írd bele az összeálíltott html képsorozatot */
htmlOsszeAllit(KEPEK);
const galeriaElem = document.getElementsByClassName("galeria");
galeriaElem[0].innerHTML = htmlOsszeAllit(KEPEK);


/*2. feladat  A .nagykep divben lévő img elem megfogása */
const nagykepELEM = document.querySelector(".nagykep img")


/* A .nagykep div megfogása */
const nagykepDIVELEM = document.querySelector(".nagykep div");


/*3. feladat-  eseménykezelő hozzáadása a kisképekhez  */
/* Az előzőekben létrehozott kisképek megfogása (querySelectorAll) - ez egy lista lesz */
const galeriaKEPEK = document.querySelectorAll(".kep img")

/* eseménykezelő hozzáadása a kisképekhez, ciklussal */
for (let index = 0; index < galeriaKEPEK.length; index++) {
    galeriaKEPEK[index].addEventListener("click", function (event){
        nagykepELEM.src=event.target.src;
        aktIndex = index;
        
    });
    
}


/* Az eseménykezelő függvényében: ha a kisképre kattintunk, akkor a nagykép src attribútumát le kell cserélni a kiskép src attribútumában megadott elérési útvonalra  */





/* 4. feladat .bal és a .jobb gombokra kattintva léptessük a galériát */

let aktIndex = 0;

const BALGOMB = document.querySelector(".bal");
const JOBBGOMB = document.querySelector(".jobb");

JOBBGOMB.addEventListener("click", function () {
    aktIndex++
    /*if (aktIndex > KEPEK.length-1){
            aktIndex = 0
        }*/
    aktIndex = aktIndex % KEPEK.length;

    nagykepELEM.src = KEPEK[aktIndex].kep;
})

BALGOMB.addEventListener("click", function () {
    aktIndex--;
    aktIndex = aktIndex % KEPEK.length;

    nagykepELEM.src = KEPEK[aktIndex].kep;
})
