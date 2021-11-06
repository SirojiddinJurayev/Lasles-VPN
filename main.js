const menuBtn =document.querySelector(".mob_nav-text");
const dropDownMenu =document.querySelector(".mob_nav-inners");
menuBtn.addEventListener("click", () =>{
dropDownMenu.classList.toggle('active');
});