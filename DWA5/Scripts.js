
const form = document.querySelector("[data-form]");

const result = document.querySelector("[data-result]");


form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);

  const { dividend, divider } = Object.fromEntries(entries);

  try {
    if (divider == "" || dividend == ""){  
  throw "Try again ";}

  if (divider <=0 && dividend <=0){
    throw "Invaild number";}

  
result.innerText = dividend / divider;
    }catch(e){
      console.error(e)
   result.innerHTML = e

   }

// function check()
// {
//   const message= document.querySelector("[data-result]");
//   message.innerHTML=""
//   let check = document.querySelector(["dividend"]).value;
//   try{
//     if (check.trim()=="") throw "empty";
//     if (isNaN(check)) throw " not a number";
  
//   }
//   catch(e){
//     message.innerHTML= "try again";
//   }
// }

});




