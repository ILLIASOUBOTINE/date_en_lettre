



function month(num) {
  
    let nomMois;
    switch (num) {
        case 1:
            nomMois = "janvier"
            break;
        case 2:
            nomMois = "février"
            break;   
        case 3:
            nomMois = "mars"
            break;                
        case 4:
            nomMois = "avril"
            break;       

        case 5:
            nomMois = "mai"
            break;       
        case 6:
            nomMois = "juin"
            break;       
        case 7:
            nomMois = "juillet"
            break;       
        case 8:
            nomMois = "août"
            break;       
        case 9:
            nomMois = "septembre"
            break;       
        case 10:
            nomMois = "octobre"
            break;       
        case 11:
            nomMois = "novembre"
            break;       
        case 12:
            nomMois =" décembre"
            break;
        default:
            nomMois = "le chifre incorrecte"
            break;
    }

    return nomMois;
   
    
    
}

console.log(month(14));


function day(num) {
    let nomDay;
    switch (num) {
        case 0:
            nomDay = "Dimanche"
            break;
        case 1:
            nomDay = "Lundi"
            break;   
        case 2:
            nomDay = "Mardi"
            break;                
        case 3:
            nomDay = "Mercredi"
            break;       

        case 4:
            nomDay = "Jeudi"
            break;       
        case 5:
            nomDay = "Vendredi"
            break;       
        case 6:
            nomDay= "Samedi"
            break;       
      
        default:
            nomDay = "le chifre incorrecte"
            break;
    }

    return nomDay;
}





function aujourdhui() {
    let dateToday = new Date();
    
  

  return `${day(dateToday.getDay())} ${ dateToday.getDate()} ${ month(dateToday.getMonth() + 1)}  ${ dateToday.getFullYear()};`

}

console.log(aujourdhui());