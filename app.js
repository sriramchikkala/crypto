const hamMenu = document.querySelector('.homeburger');
const offScreenMenu = document.querySelector('.home-menu');
 hamMenu.addEventListener('click', ()=> {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('home-menu1');
 })


 const button = document.querySelector(".bn");
 const form1 = document.querySelector(".form1");
 
 button.addEventListener('click',()=>{
     form1.classList.toggle('fo');
 });

 let bitCoinBtn = document.querySelector("#bitCoin")
let ethereumEle = document.querySelector("#ethereum")
let xrpEle = document.querySelector("#xrp")
let bCost = document.querySelector("#bitCoinCost")
let eCost = document.querySelector("#ethereumCost")
let xCost = document.querySelector("#xmrCost")
let coinBox = document.querySelector("#coinBox")
let totalBtn = document.querySelector("#total")
let totalCost = document.querySelector("#totalCost")
let gst = 0.18
let coinsArray = []
bitCoinBtn.addEventListener("click", () => {
    console.log(bitCoinBtn.textContent)
    let coin1 = document.createElement("div")
    coin1.classList.add("coinBox")
    let coinOneInput = document.createElement("input")
    coinOneInput.classList.add("inputStyle")
    coinOneInput.value = bitCoinBtn.textContent
    coin1.appendChild(coinOneInput)
    let coinOneCost = document.createElement("input")
    coinOneCost.classList.add("inputStyle")
    coinOneCost.value = bCost.textContent
    coin1.appendChild(coinOneCost)
    coinsArray.push(bCost.textContent)
    coinBox.appendChild(coin1)
});
ethereumEle.addEventListener("click", () => {
    console.log(ethereumEle.text)
    let coin2 = document.createElement("div")
    coin2.classList.add("coinBox")
    let coinTwoInput = document.createElement("input")
    coinTwoInput.classList.add("inputStyle")
    coinTwoInput.value = ethereumEle.textContent
    coin2.appendChild(coinTwoInput)
    let coinTwoCost = document.createElement("input")
    coinTwoCost.classList.add("inputStyle")
    coinTwoCost.value = eCost.textContent
    coin2.appendChild(coinTwoCost)
    coinsArray.push(eCost.textContent)
    console.log(coinsArray)
    coinBox.appendChild(coin2)
});
xrpEle.addEventListener("click", () => {
    console.log(xrpEle.text)
    let coin3 = document.createElement("div")
    coin3.classList.add("coinBox")
    let coinThreeInput = document.createElement("input")
    coinThreeInput.classList.add("inputStyle")
    coinThreeInput.value = xrpEle.textContent
    coin3.appendChild(coinThreeInput)
    let coinThreeCost = document.createElement("input")
    coinThreeCost.classList.add("inputStyle")
    coinThreeCost.value = xCost.textContent
    coin3.appendChild(coinThreeCost)
    coinsArray.push(xCost.textContent)
    coinBox.appendChild(coin3)
    console.log(coinsArray)
});
totalBtn.addEventListener("click", () => {
    let totalSum = coinsArray.reduce((accumulator, currentValue) => accumulator + parseInt(currentValue), 0);

    totalCost.value = totalSum + totalSum * gst
});