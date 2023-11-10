let menu = document.querySelector('#menu-icon');

let navlist = document.querySelector('.navli');


menu.onclick = () => {

    menu.classList.toggle('bx-x');

    navlist.classList.toggle('open');

}


function review() {

    var review = document.getElementById("review").value;

    alert("Review submitted : " + review);

}
