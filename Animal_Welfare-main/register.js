function submit(){
    const data1 = document.getElementById("first-name").value;
    const data2 = document.getElementById("pet-name").value;
    const data3 = document.getElementById("pet-type").value;
    const data4 = document.getElementById("pet-age").value;
    const data5 = document.getElementById("mobile").value;
    const data6 = document.getElementById("days").value;
    const data7 = document.getElementById("message").value;
    localStorage.setItem("first-name",data1);
    localStorage.setItem("pet-name",data2);
    localStorage.setItem("pet-type",data3);
    localStorage.setItem("pet-age",data4);
    localStorage.setItem("mobile",data5);
    localStorage.setItem("days",data6);
    localStorage.setItem("message",data7);

}