document.addEventListener('DOMContentLoaded', (event) => {
    const markAsDeliveredBtn = document.getElementById('markAsDeliveredBtn');
    const deliveryNotification = document.getElementById('deliveryNotification');
    const closeBtn = document.getElementById('closeBtn');

    markAsDeliveredBtn.addEventListener('click', () => {
        deliveryNotification.classList.remove('hide');
    });

    closeBtn.addEventListener('click', () => {
        deliveryNotification.classList.add('hide');
    });
    
   
});


let deliveryBtn= document.querySelector("#markAsDeliveredBtn");

deliveryBtn.addEventListener("click",()=>{
   
    currDelivery="green";
    document.querySelector("body").style.backgroundColor ="green";
   
   console.log(currDelivery);
});



let modeBtn = document.querySelector("#closeBtn");

modeBtn.addEventListener("click",()=>{
   
    currMode="aqua";
    document.querySelector("body").style.backgroundColor ="aqua";
   
   console.log(currMode);
});