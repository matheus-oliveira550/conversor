const convertButton = document.querySelector(".convert-button")
const currencySelect1 = document.querySelector(".currency-select1")
const currencySelect2 = document.querySelector(".currency-select2")


function convertValues() {

    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value-converted")
    const currencySelect1 = document.querySelector(".currency-select1")
    const currencySelect2 = document.querySelector(".currency-select2")

    const dollarToday = 5.54
    const euroToday = 6.2

    if (currencySelect1.value == "real" && currencySelect2.value == "dollar") { //real p dollar
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dollarToday)
    }

    if (currencySelect1.value == "real" && currencySelect2.value == "euro") { //real p euro
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect1.value == "dollar" && currencySelect2.value == "real") { //dollar p real
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)

        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue*5.54)
    }

    if (currencySelect1.value == "dollar" && currencySelect2.value == "euro") { //dollar p euro
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * 0.9)
    }

    if (currencySelect1.value == "euro" && currencySelect2.value == "real") { //euro p real
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)

        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * 6.2)
    }

    if (currencySelect1.value == "euro" && currencySelect2.value == "dollar") { //euro p dollar
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * 1.11)
    }

    
}

/* if (currencySelect2.value =="dollar"){
     currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
         style: "currency",
         currency: "USD"
      }).format(inputCurrencyValue / dollarToday)
 }

 if (currencySelect2.value =="euro"){
     currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
         style: "currency",
         currency: "EUR"
     }).format(inputCurrencyValue / euroToday)
 }

 currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
     style: "currency",
     currency: "BRL"
  }).format(inputCurrencyValue)
} */

function changeCurrency() {
    const currency1 = document.querySelector(".currency-name1")
    const currencyImg1 = document.querySelector(".currency-img1")
    const currency2 = document.querySelector(".currency-name2")
    const currencyImg2 = document.querySelector(".currency-img2")

    if (currencySelect1.value == "euro") {
        currency1.innerHTML = "Euro"
        currencyImg1.src = "./assets/euro.png"
    }

    if (currencySelect1.value == "dollar") {
        currency1.innerHTML = "American Dollar"
        currencyImg1.src = "./assets/dollar.png"
    }

    if (currencySelect1.value == "real") {
        currency1.innerHTML = "Real"
        currencyImg1.src = "./assets/real.png"
    }

    if (currencySelect2.value == "euro") {
        currency2.innerHTML = "Euro"
        currencyImg2.src = "./assets/euro.png"
    }

    if (currencySelect2.value == "dollar") {
        currency2.innerHTML = "American Dollar"
        currencyImg2.src = "./assets/dollar.png"
    }

    if (currencySelect2.value == "real") {
        currency2.innerHTML = "Real"
        currencyImg2.src = "./assets/real.png"
    }

    convertValues()

}

convertButton.addEventListener("click", convertValues)
currencySelect2.addEventListener("change", changeCurrency)
currencySelect1.addEventListener("change", changeCurrency)