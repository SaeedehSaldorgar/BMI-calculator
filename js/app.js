let $ = document

const weightInput = $.querySelector('#weight')
const heightInput = $.querySelector('#height')
const weightElem = $.querySelector('#weight-kg')
const heightElem = $.querySelector('#height-cm')
const bmiElem = $.querySelector('#BMI')
const categoryElem = $.querySelector('#category')


function bmiCalculator (){
    
  let weightInputValue = weightInput.value 
  let heightInputValue = heightInput.value
  
  weightElem.innerHTML = weightInputValue
  heightElem.innerHTML = heightInputValue

  let bmiValue = (weightInputValue / (Math.pow(heightInputValue/100 , 2))).toFixed(1)

  bmiElem.innerHTML = bmiValue

  if (bmiValue < 18.5){
    categoryElem.innerHTML = 'UnderWeight'
    bmiElem.style.color = '#ffc44d'

  }else if (bmiValue >= 18.5 && bmiValue <= 24.9){
    categoryElem.innerHTML = 'Normal Weight'
    bmiElem.style.color = '#0be881'

  }else if (bmiValue >= 25 && bmiValue <= 29.9){
    categoryElem.innerHTML = 'OverWeight'
    bmiElem.style.color = '#ff884d'
  }else {

    categoryElem.innerHTML = 'Obese'
    bmiElem.style.color = '#ff5e4d'
  }



}


weightInput.addEventListener('input' , bmiCalculator)
heightInput.addEventListener('input' , bmiCalculator)