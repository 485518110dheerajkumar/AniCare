function add(){
     
    const username1 = document.getElementById('User').value;
    const Password1 = document.getElementById('Pass').value;   
    var x = localStorage.getItem('password');
    var y = localStorage.getItem('firstname');
     
    
    if(Password1 != x){
        alert("invalide password");
    }
    else{
        window.open('index.html');
    }
    

    
}