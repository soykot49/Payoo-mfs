document.getElementById("Addmoney-btn").addEventListener('click',function(event){
    // prevent page reloading while submitting form
    event.preventDefault()
    console.log('clicked');

    const  addMoney=document.getElementById('add-money').value
    console.log(addMoney);

    const pinNum=document.getElementById('pin-input').value
    console.log(pinNum);

    if(pinNum==="1234"){
        console.log('successfully added money');

        const acBalance=document.getElementById('account-bal').innerText
        // console.log(acBalance);

        const addMoneyNumber=parseFloat(addMoney)
        const balanceNumber=parseFloat(acBalance)

        const newBalance=addMoneyNumber+balanceNumber;
        console.log(newBalance);
    

        document.getElementById('account-bal').innerText=newBalance
        
        
    }else{
        alert('failed to add money')
    }
    
    
    
})
