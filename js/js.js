

// her er min oversættelse

let Da = function(){
	velkommen.innerHTML = "Velkommen til restaurantens selvbetjening"
  tryk.innerHTML = "Tryk på billederne for at bestille retterne ned i indkøbskurven"
  bestillingstekst.innerHTML = "Her er dine bestillinger"
  slet.innerHTML = "Slet vare"
  betal.innerHTML = "Betal"
  
}

let En = function(){
	velkommen.innerHTML = "Welcome to the restuarants self-service"
  tryk.innerHTML = "Press on the pictures to order a dish down into the cart"
  bestillingstekst.innerHTML = "Here is your order"
  slet.innerHTML = "Delete item"
  betal.innerHTML = "Pay"
}







// Her vises bestilling og regner pris

sum = 0


test1.addEventListener('click',
  function(){
    bestillinger.innerHTML += menu1.innerHTML
    sum = sum + 100
    total.innerHTML = sum;
})

test2.addEventListener('click',
  function(){
    bestillinger.innerHTML += menu2.innerHTML
    sum = sum + 80
    total.innerHTML = sum;
})

test3.addEventListener('click',
  function(){
    bestillinger.innerHTML += menu3.innerHTML
    sum = sum + 120
    total.innerHTML = sum;
})

test4.addEventListener('click',
  function(){
    bestillinger.innerHTML += menu4.innerHTML
    sum = sum + 50
    total.innerHTML = sum;
})

test5.addEventListener('click',
  function(){
    bestillinger.innerHTML += menu5.innerHTML
    sum = sum + 70
    total.innerHTML = sum;
})

test6.addEventListener('click',
  function(){
    bestillinger.innerHTML += menu6.innerHTML
    sum = sum + 70
    total.innerHTML = sum;
})

test7.addEventListener('click',
  function(){
    bestillinger.innerHTML += menu7.innerHTML
    sum = sum + 30
    total.innerHTML = sum;
})

// Betalknap - her hentes bestillingen ind i en anden browser (kvitteringen)

betal.addEventListener('click', function(){
  localStorage.setItem("liste",bestillinger.innerHTML)
})


// Sletknap

slet.addEventListener('click', function(){
  bestillinger.innerHTML = " ";
  total.innerHTML = " ";
})



