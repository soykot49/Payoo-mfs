// function getInputbyId(){
//    const addMoney=document.getElementById('add-money').value
//    return addMoney


    
// }
 

function getInputbyId(id){
    const inputValue=document.getElementById(id).value
    const inputNumber=parseFloat(inputValue)
    // console.log(id, inputValue, inputNumber);
    

    return inputNumber;

}

function getTextfieldvalueById(id){
    const textValue=document.getElementById(id).innerText
    const textNumber=parseFloat(textValue)
    return  textNumber
}

function showSectionbyId(id){
    document.getElementById('addmoney-form').classList.add('hidden')
    document.getElementById('cashout-form').classList.add('hidden')
    document.getElementById('transection-section').classList.add('hidden')

    document.getElementById(id).classList.remove('hidden')

}