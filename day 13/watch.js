let timesE1 = document.getElementById('time'),
    greetE1 = document.getElementById('greet'),
    addTaskBtn = document.querySelector('.add_task'),
    closeTask = document.querySelector('.close_task')
    // viewTask = document.querySelector('.view_task')
    thirdSec = document.querySelector('.third')
    addBtn = document.querySelector('.add-task')
    inputBox = document.querySelector('.input')
    textNot = document.querySelector('.text')
    U1E1 = document.querySelector('.U1E1')
    secondSec = document.querySelector('.second');


    let result = [];
function add(){
    input = inputBox.value;
    result.push(input);

    console.log(result)
}

// for (let i = 0;i>result.length; i++)
// console.log(result[i]);
// if(result=0){
//   textNot.innerHTML = "nothing here"
// }


   function addZero (value){
    return value < 10 ? `0${value}` : value
   };


    function displayTime(){


        let dateTime = new Date();

        let hrs = dateTime.getHours();
        let minutes  = dateTime.getMinutes();
        let seconds = dateTime.getSeconds();
        let amPm = hrs >= 12 ? "PM" : "AM";
        hrs = hrs > 12 ? hrs %12 :hrs;

       timesE1.innerHTML = `${addZero(hrs)} : ${addZero(minutes)} : ${addZero(seconds)} ${amPm}`;
      
       let newHrs = dateTime.getHours();
       if (newHrs > 12  && newHrs < 17) {
        greetE1.innerHTML = "Good Afternoon";
    
       }
       else if (newHrs = 24 && newHrs <13){
        greetE1.innerHTML = "Good Morning"
       }else{
       greetE1.innerHTML= "Good Evening";
    }
};


setInterval(displayTime, 1000); 


function add_task(){
    secondSec.style.display = "block";
};
function close_task(){
    secondSec.style.display = "none";
};
function view_task(){
    thirdSec.style.display = "block";
    // let result = [];
    // function add(){
    //     input = inputBox.value;
    //     result.push(input);
    
    //     console.log(result)
    // }
    
    for (let i = 0;i>result.length; i++){
   
    if(result.length){
      textNot.innerHTML = "nothing here"
    }else{textNot.innerHTML = "result"


    }}
};
