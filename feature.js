// show cashout form
document.getElementById('show-cout-button').addEventListener('click',function(){
    
     document.getElementById('cashout-form').classList.remove('hidden')

    //  hide the addMoney form while clicked

    document.getElementById('addmoney-form').classList.add('hidden')
})

// add money switch 

document.getElementById('show-aMoney-button').addEventListener('click',function(){
    document.getElementById('addmoney-form').classList.remove('hidden')
    document.getElementById('cashout-form').classList.add('hidden')
})
