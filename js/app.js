function alterarStatus(arg){

    // get "li" element
    var li_Item = document.getElementById("game-"+arg);


    // get both image and href to add/remove class
    var link_Item = li_Item.querySelector('a');
    var image_Item = li_Item.querySelector('div');
    /* 
    var link_Item = li_Item.querySelector('.dashboard__item__button');
    var image_Item = li_Item.querySelector('.dashboard__item__img');
    */
    
    
    // Obtém o texto dentro da tag "a"
    var game_status = link_Item.innerHTML;
    var all_games = document.getElementsByClassName("dashboard__item__button");
    
    
    // check if game needs to be returned or will be rented
    if (game_status == 'Alugar'){

        // add "--return" class
        link_Item.classList.add('dashboard__item__button--return');
        image_Item.classList.add('dashboard__item__img--rented');
        all_games[arg-1].innerHTML = 'Devolver';

    } else {

        // remove "--return" class
        link_Item.classList.remove('dashboard__item__button--return');
        image_Item.classList.remove('dashboard__item__img--rented');
        all_games[arg-1].innerHTML = 'Alugar';

    }
}

/* 
var image_Item = li_Item.querySelector('.dashboard__item__img');

if (image_Item.classList.contains('dashboard__item__img--rented)){
    link_Item.classList.add('dashboard__item__button--return');
    image_Item.classList.add('dashboard__item__img--rented');

} else {
    link_Item.classList.remove('dashboard__item__button--return');
    image_Item.classList.remove('dashboard__item__img--rented');
    
}
*/