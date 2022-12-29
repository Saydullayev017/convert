//obj 3-valuta
const rates = {};

//informer valuat ni korstadi
const elementUSD = document.querySelector('[data-value="USD"]');
const elementEUR = document.querySelector('[data-value="EUR"]');
const elementGBP = document.querySelector('[data-value="GBP"]');


const input = document.querySelector('#input');
const result = document.querySelector('#result');
const select = document.querySelector('#select');


// asinxron fun ochamz 
async function getCurrencies(){
    //json object qvolamz
    const respons = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');// otvetni kutib kegin davom etadi
    const data = await respons.json();
    const result = await data;
    
    //wu objectdan kerakni ovolamz
    rates.USD = result.Valute.USD
    rates.EUR = result.Valute.EUR
    rates.GBP = result.Valute.GBP
    console.log(rates)

    //ekranga chqarib beramz
    elementUSD.textContent = rates.USD.Value.toFixed(2); //toFixed orqadagi 2 son qoldrd
    elementEUR.textContent = rates.EUR.Value.toFixed(2);
    elementGBP.textContent = rates.GBP.Value.toFixed(2);

    //rang informer USD
    if(rates.USD.Value > rates.USD.Previous)
        elementUSD.classList.add('top')
    else
        elementUSD.classList.add('bottom')

    //rang informer EUR
    if(rates.EUR.Value > rates.EUR.Previous)
        elementEUR.classList.add('top')
    else
        elementEUR.classList.add('bottom')

    //rang informer GBP
    if(rates.GBP.Value > rates.GBP.Previous)
        elementGBP.classList.add('top')
    else
        elementGBP.classList.add('bottom')

}

getCurrencies()


//input ni ichidagi kursni ozgartirw
input.oninput = function(){
    console.log('chenged');
    result.value = (parseFloat(input.value) / rates[select.value].Value).toFixed(2);
}

select.oninput = function(){
    console.log('chenged');
    result.value = (parseFloat(input.value) / rates[select.value].Value).toFixed(2);
}


export default main;