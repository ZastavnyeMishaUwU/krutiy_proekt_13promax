document.querySelector(".size").addEventListener('click', function(){
    document.querySelector(this).classList.toggle('focus').siblings().classList.remove('focus');
 })


 let counter = 0;
  
const counterValue = document.getElementById('counter-value');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
const resetBtn = document.querySelector('#reset');
  
if(counterValue == 0){
    decrementBtn.disabled = true;
}
else{
    decrementBtn.disabled = false;
}

// To increment the value of counter
incrementBtn.addEventListener('click', () => {
    counter++;
    counterValue.innerHTML = counter;
});
  
// To decrement the value of counter
decrementBtn.addEventListener('click', () => {
    counter--;
    counterValue.innerHTML = counter;
});

function selectSize(button) {
    var buttons = document.querySelectorAll('.size-button');
  
    // Удаление класса 'selected' у всех кнопок
    buttons.forEach(function(btn) {
      btn.classList.remove('selected');
    });
  
    // Добавление класса 'selected' к выбранной кнопке
    button.classList.add('selected');
  }