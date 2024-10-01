document.getElementById('cashout-btn').addEventListener('click',function(event){
   event.preventDefault()

   // const cashOut=document.getElementById('cash-out').value
   // const cashoutPin=document.getElementById('cashout-pin').value
   // console.log(cashOut, cashoutPin);

   const cashOut=getInputbyId('cash-out')
   const cashoutPin=getInputbyId('cashout-pin')
   console.log(cashOut, cashoutPin);

   if(isNaN(cashOut)){
      alert('failed to cash out')
      return

   }
   

   if(cashoutPin===1234 ){
    // console.log("successfully cash out");

   //  const balance=document.getElementById("account-bal").innerText
   //  const balanceAmount=parseFloat(balance)
   //  const cashoutAmount=parseFloat(cashOut)

   //  const remainAmount=balanceAmount-cashoutAmount
   //  // console.log(remainAmount);
    
   //  document.getElementById('account-bal').innerText=remainAmount;
    

   const balanceAmount=getTextfieldvalueById('account-bal')

   if(cashOut>balanceAmount){
      alert('Insufficient balance')
      return

   }
   const remainAmount=balanceAmount-cashOut
   document.getElementById('account-bal').innerText=remainAmount

   // transection history part added

   const div=document.createElement('div')
   div.classList.add('bg-blue-400');
   div.innerHTML=`<h3>Cash out</h3>
   <p>withdraw ${cashOut} Tk  ${remainAmount}</p>`

document.getElementById('history-container').appendChild(div);
    
    
   }else{
    alert("invalid input")
   }
   

    
})