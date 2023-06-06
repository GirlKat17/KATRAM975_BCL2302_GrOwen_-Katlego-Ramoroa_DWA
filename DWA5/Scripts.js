
const form = document.querySelector("[data-form]");

const result = document.querySelector("[data-result]");


form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);

  const { dividend, divider } = Object.fromEntries(entries);

  try {
    if (divider == "" || dividend == ""){  
  throw "Division not performed. Both values are required in inputs. Try again ";}

  if (divider <=0 && dividend <=0){
    throw "Division not performed. Invalid number provided. Try again";}

  result.innerText = Math.floor (dividend / divider);

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




