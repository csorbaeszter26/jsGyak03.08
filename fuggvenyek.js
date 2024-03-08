export function htmlOsszeAllit(lista) {
    /*itt állítjuk össze a html kódot, stringként*/
    /*listát vár tehát át kell majd neki adni a képek listát */
    /*elérési út, kép címe, annyi elem ahány eleme van a listának (tehát ciklus) */



    let txt = "";
    for (let index = 0; index < lista.length; index++){
        txt += `<div class = "kep"><img src="${lista[index].kep}" alt="${lista[index].cim}"></img></div>`;
    }
    console.log(txt);
    return txt;
}


