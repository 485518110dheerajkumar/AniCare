function submit(){
    const data1 = document.getElementById("firstname").value;
    const data2 = document.getElementById("lastname").value;
    const data3 = document.getElementById("number").value;
    const data4 = document.getElementById("password").value;
    const data5 = document.getElementById("confirm").value;
    localStorage.setItem("firstname ",data1);
    localStorage.setItem("lastname",data2);
    localStorage.setItem("phonenumber",data3);
    localStorage.setItem("password",data4);
    if(data1==""){
        alert("Enter the first name");
    }
    else if(data2==""){
        alert("enter the last name");
    }
    else if(data3==""){
        alert("enter your phone number");
    }
    else if(data4==""){
        alert("enter the password");
    }
    else if(data4!=data5){
        alert("invalid password");
    }
    else{
        window.open('login.html');
    }
    
}
 