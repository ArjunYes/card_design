console.log("Loaded js file")

let cards = document.querySelectorAll('.card')
cards.forEach((card)=>{
    card.addEventListener('click',()=>{
        console.log("Click")
        removeClass();
        card.classList.add('active')
    })
})


function removeClass(){
    cards.forEach((card)=>{
       card.classList.remove('active')
    })  
}
console.log(cards)