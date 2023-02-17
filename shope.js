let serial = 0;
//first-Card
document.getElementById('first-card').addEventListener('click',function(){
    serial += 1;
    const productFirstName =document.getElementById('first-name').innerText;
    const productFirstPrice =document.getElementById('first-price').innerText;
    const productFirstQuantity =document.getElementById('first-quantity').innerText;
    const productFirstTotalPrice = parseInt(productFirstPrice) * parseInt(productFirstQuantity);
    displayData( productFirstName,productFirstPrice,productFirstQuantity,productFirstTotalPrice );
})
//2
document.getElementById('second-card').addEventListener('click',function(){
    serial += 1;
    const productSecondName =document.getElementById('second-name').innerText;
    const productSecondPrice =document.getElementById('second-price').innerText;
    const productSecondQuantity =document.getElementById('second-quantity').innerText;
    const productSecondTotalPrice = parseInt(productSecondPrice) + parseInt(productSecondQuantity);
    displayData( productSecondName,productSecondPrice, productSecondQuantity,productSecondTotalPrice );
})
//3
document.getElementById('third-card').addEventListener('click',function(){
    serial += 1;
    const productThirdName =document.getElementById('third-title').innerText;
    const productThirdPrice =document.getElementById('third-price').innerText;
    const productThirdQuantity =document.getElementById('third-quantity').innerText;
    const productThirdTotalPrice = parseInt(productThirdPrice) / parseInt(productThirdQuantity);
    displayData( productThirdName,productThirdPrice,productThirdQuantity,productThirdTotalPrice );
})
//4
document.getElementById('second-last').addEventListener('click',function(){
    serial += 1;
    const productThirdName =document.getElementById('fourth-name').innerText;
    const productThirdPrice =document.getElementById('fourth-price').innerText;
    const productFourthQuantity =document.getElementById('fourth-quantity').innerText;
    const productFourthTotalPrice = parseInt(productThirdPrice) ** parseInt(productFourthQuantity);
    displayData( productThirdName,productThirdPrice, productFourthQuantity,productFourthTotalPrice );
})
//5
document.getElementById('last-card').addEventListener('click',function(){
    serial += 1;
    
    const productFiveName =document.getElementById('last-title').innerText;
    const productFivePrice =document.getElementById('fitotal-pricerst-input').value;
    const productFiveQuantity =document.getElementById('second-input').value;
        const productFiveTotalPrice =productFivePrice +productFiveQuantity;
        displayData( productFiveName,productFivePrice, productFiveQuantity,productFiveTotalPrice );
    }
   
)
function displayData(nameOfP,priceOfP,quantityOfp,resultP){
    const container = document.getElementById('table-container');
    const tr =document.createElement('tr');
    tr.innerHTML = `
    <td class='total-serial'>${serial}</td>
    <td>${nameOfP}</td>
    <td>${priceOfP}</td>
    <td class='total-quantity'>${quantityOfp}</td>
    <td class = 'total-price'>${resultP}</td>
    `
    container.appendChild(tr);
   const allQuantity = document.getElementsByClassName('total-quantity');
   const allPrice = document.getElementsByClassName('total-price');
   let quantity = 0;
   let price = 0;
    for(let q of allQuantity){
        
        quantity +=parseFloat(q.innerText);
    }
    for(let p of allPrice){
        price +=parseFloat(p.innerText);
    }

     const totalQuant = document.getElementById('sum-quantity');
     totalQuant.innerText =quantity;
     const totalP = document.getElementById('total-price');
     totalP.innerText =price;
    
//      document.getElementById('total-product').innerText = serial;
// //     document.getElementById('serial-all').innerText = serial;
 }