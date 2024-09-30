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

function showSectionbyId(){
    
}