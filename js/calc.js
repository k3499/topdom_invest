/*calcul*/

let moneyLabel = document.querySelector("#price-value1")
let moneyInput = document.querySelector("#price1")

let timeLabel = document.querySelector("#period-value")
let timeInput = document.querySelector("#period")
let timeYearName = document.querySelector("#year-name-time")

let finalTime = document.querySelector("#end-year")
let yearName = document.querySelector("#year-name")
let finalMoney = document.querySelector("#profit1")

let buttonNal = document.querySelector("#button-nal")
let buttonbesNal = document.querySelector("#button-besnal")

const priceProgress1 = document.querySelector("#price-progress1")
const priceProgress2 = document.querySelector("#price-progress2")
const priceProgress3 = document.querySelector("#price-progress3")
const periodProgress = document.getElementById("period-progress")

let percent = 25

moneyLabel.innerHTML = moneyInput.value
timeLabel.innerHTML = timeInput.value

function investCalc(money, year, percent) {
  let percentAll = percent * year
  let profit = (money / 100) * percentAll
  let allMoney = parseInt(money) + parseInt(profit)
  return allMoney.toLocaleString("de-DE")
}
function mapRangeSliderWidth(value, min, max) {
  return ((value - min) / (max - min)) * 100 + "%"
}

buttonNal.addEventListener(
  "click",
  function () {
    percent = 25
    buttonNal.classList.add("calc__button_active")
    buttonbesNal.classList.remove("calc__button_active")
    finalMoney.innerHTML = investCalc(
      moneyInput.value,
      timeInput.value,
      percent
    )
  },
  false
)

buttonbesNal.addEventListener(
  "click",
  function () {
    percent = 20
    buttonbesNal.classList.add("calc__button_active")
    buttonNal.classList.remove("calc__button_active")
    finalMoney.innerHTML = investCalc(
      moneyInput.value,
      timeInput.value,
      percent
    )
  },
  false
)

moneyInput.addEventListener(
  "input",
  function () {
    moneyLabel.innerHTML = moneyInput.value
    finalMoney.innerHTML = investCalc(
      moneyInput.value,
      timeInput.value,
      percent
    )
    finalTime.innerHTML = timeInput.value
    priceProgress1.style.width = mapRangeSliderWidth(
      moneyInput.value,
      moneyInput.min,
      moneyInput.max
    )
  },
  false
)

timeInput.addEventListener(
  "input",
  function () {
    timeLabel.innerHTML = timeInput.value
    finalMoney.innerHTML = investCalc(
      moneyInput.value,
      timeInput.value,
      percent
    )
    finalTime.innerHTML = timeInput.value
    let finalTimeNum = parseInt(finalTime.innerText)
    if (finalTimeNum === 1) {
      yearName.innerHTML = "год:"
      timeYearName.innerHTML = " год"
    } else if (finalTimeNum > 1 && finalTimeNum < 5) {
      yearName.innerHTML = "года:"
      timeYearName.innerHTML = " года"
    } else if (finalTimeNum > 4) {
      yearName.innerHTML = "лет:"
      timeYearName.innerHTML = " лет"
    }
    periodProgress.style.width = mapRangeSliderWidth(
      timeInput.value,
      timeInput.min,
      timeInput.max
    )
  },
  false
)
