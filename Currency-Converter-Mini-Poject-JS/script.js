const baseURL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/";  //Current Currency value 
//https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/jpy.json

const dropDownSelect = document.querySelectorAll('.dropdown select');

const btn = document.querySelector("form button");

const fromCurr = document.querySelector(".from select"); 
const toCurr = document.querySelector(".to select"); 

const msg = document.querySelector(".msg");

window.addEventListener('load', (e)=>{
    e.preventDefault();
    updateCurrValue();
})

// for(let code in countryList){
//     console.log(code, countryList[code])
// }

for(let select of dropDownSelect){
    for(let currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        // console.log(newOption)
        newOption.value = currCode;
        // console.log(newOption)

        if(select.name === "from" && currCode ==="USD"){
            newOption.selected = "selected";
        } else if(select.name === "to" && currCode === "INR"){
            newOption.selected = "selected";
        }

        select.append(newOption);
    }

    select.addEventListener("change", (e)=>{
        updateFlag(e.target);
    })
}

//changing selected flag--country

const updateFlag = (element)=>{
    let currCode = element.value;
    // console.log(currCode);
    let countryCode = countryList[currCode]  //array index
    // console.log(countryCode);
    let imgSource = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let updateImg = element.parentElement.querySelector('img')     //selecting img tag in html (element=select);
    updateImg.src = imgSource;
}

btn.addEventListener("click", (e)=>{
    e.preventDefault();
    updateCurrValue();
})

const updateCurrValue = ()=>{
    let amount = document.querySelector(".amount input");
    let amountVal = amount.value;
    // console.log(amountVal);
    if(amountVal === "" || amountVal <1){
        amount.value = "1"
    }

    // console.log(fromCurr.value, toCurr.value);
    const URL = `${baseURL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
    let response = fetch(URL);
    response.then((res)=>{
        return res.json();
    })
    .then((data)=>{
        // console.log(data);
        let exchRate = data[toCurr.value.toLowerCase()];
        // console.log(exchRate);
        finalVal = amount.value * exchRate; //convert 1 amount to user input
        msg.innerText = `${amountVal} ${fromCurr.value} = ${finalVal} ${toCurr.value} `; //1USD = 83INR
    })
}