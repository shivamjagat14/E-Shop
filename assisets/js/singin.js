 let emailinput=document.getElementById("floatingInput");
let inputpassword=document.getElementById("floatingPassword");
let continewbtn=document.getElementById("continewbtn");

continewbtn.addEventListener('click',(event)=>{
    event.preventDefault();
    let userEmail=localStorage.getItem("Email"); 
    let userpassword=localStorage.getItem("Confirmpassword"); 
    if(emailinput.value==userEmail){
    console.log("yess");
    if(inputpassword.value==userpassword){
        console.log("password yess");
        location.replace("/Project_02/index.html");
    }
    else{
        alert("enter valid password!"); 
    }
    }
    else{
        console.log("No have account ");
    }
    location.reload();
})
