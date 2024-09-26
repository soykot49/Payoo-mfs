document.getElementById('login-btn').addEventListener('click',function(event){
    event.preventDefault()
    // console.log("hello moof");
    const phoneNumber=document.getElementById("phone-number").value
    const pinNumber=document.getElementById("pin").value

    // console.log(phoneNumber, pinNumber);
    if(phoneNumber==="5" && pinNumber==="1233"){
        console.log("you are logged");
        window.location.href="./home.html"
        

    }else{
        alert("wrong info here")
    }
    
    
})
