function BmiClick(){
    var height = parseInt(document.getElementById("txtHeight").value);
    var weight = parseInt(document.getElementById("txtWeight").value);
    var bmi = weight/(height / 100 * height / 100);
  document.getElementById("result").innerHTML = `BMI Result : ${bmi.toFixed(1)}`;
  
   var status=document.getElementById("status");
   if(bmi>0 && bmi<18.5){
          status.innerHTML="Under Weight".fontcolor("white");
          status.className="red p-2";
          }else if(bmi>18.5 && bmi<24.9){
              status.innerHTML="Normal Weight".fontcolor("white");
              status.className="green p-2";
              
          }else if(bmi>24.5 && bmi<29.9){
              status.innerHTML="Over Weight".fontcolor("white");
              status.className="yellow p-2";
          }else if(bmi>30 && bmi<34.9){
              status.innerHTML="Obses Weight".fontcolor("white");
              status.className="blue p-2";
          }
              else if(bmi>35){
              status.innerHTML="Extremly Obses Weight".fontcolor("whitesmoke");
              status.className="darkred p-2";
         }
   }
   function BmiClear() {
      parseInt(document.getElementById("txtAge").value = "");
      parseInt(document.getElementById("txtHeight").value = "");
      parseInt(document.getElementById("txtWeight").value = "");
      document.getElementById("clear").innerHTML = `Cleared : `;
      clear.innerHTML = "";
  }