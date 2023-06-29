import {html,LitElement,css} from './lit-html.js';

const MAX_NUMBER = 20;
const MIN_NUMBER = -5;
const STEP_AMOUNT = 5;

/**
 * 
 * 
 */




// const createView = (name)=>{
//   return html`
//   <aside class="controls">
//         <label>
//             <span>Display</span>
//             <select>
//                 <option>Single</option>
//                 <option>Multiple</option>
//             </select>
//             <select>
//                 <span>Counter</span>
//                 <option>Counter 1</option>
//                 <option>Counter 2</option>
//                 <option>Counter 3</option>
//             </select>
//         </label>
//         <sl-button>Settings</sl-button>
       

//     </aside>
//     <main class="counter">
//         <input class="counter_value" data-key="number" readonly value="0" />
//         <div class="counter_actions">
//             <button data-key="subtract" class="counter_button counter_button_first">-</button>
//             <button data-key="add" class="counter_button">+</button>
//         </div>
//     </main>`;
//   }
  
  

// const number = document.querySelector('[data-key="number"]');
// const subtract = document.querySelector('[data-key="subtract"]');
// const add = document.querySelector('[data-key="add"]');
// const reset= document.querySelector('[data-key=reset]');

// // function for substraction
// const subtractHandler = () => {
//   const newValue = parseInt(number.value) - 1;
//   number.value = newValue;

  
//   if (add.disabled === true) {
//     add.disabled = false;
//   }
//   if (newValue <= MIN_NUMBER) {
//     subtract.disabled = true;
//   }
 
// };
// // function for addition

// const addHandler = () => {
//   const newValue = parseInt(number.value) + 1;
//   number.value = newValue;

//   if (subtract.disabled === true) {
//     subtract.disabled = false;
//   }
//   if (newValue >= MAX_NUMBER) {
//     add.disabled = true;
//   }
//   console.log(newValue)
// };





// subtract.addEventListener('click', subtractHandler);
// add.addEventListener('click', addHandler);

// // reset button

// function addReset(){
//     alert("Are you sure you want to reset");
// number.value=0


// }
// reset.addEventListener('click', addReset);



class MyElement extends LitElement {
  static styles = css`
  :root {
    --color-green: #31C48D;
    --color-white: #FFFFFF;
    --color-dark-grey: #33333D;
    --color-medium-grey: hsl(240, 10%, 29%);
    --color-light-grey: #9ca3ae;
}

* {
    box-sizing: border-box;
}

html {
    height: 100vh;
}

body {
    margin: 0;
    background: var(--color-medium-grey);
    color: var(--color-white);
    font-family: roboto, Arial, Helvetica, sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
}

/* header*/
.header {
    text-align: center;
}

.header_title {
    font-size: 3rem;
    font-weight: 900;
    color: var(--color-light-grey);
}

/*control*/
.controls {
    background:rgb(157, 204, 38);
}

/*counter*/
.counter {
    background: var(--color-dark-grey);
}

.counter_value {
    width: 100%;
    height: 15rem;
    text-align: center;
    font-size: 6rem;
    font-weight: 900;
    background: no-repeat;
    color: var(--color-white);
    border-width: 0;
    border-bottom: 1px solid var(--color-light-grey);
}

.counter_actions {
    display: flex;
}

.counter_button {
    background: none;
    width: 50%;
    border-width: 0;
    color: var(--color-white);
    font-size: 3rem;
    height: 10rem;
    border-bottom: 1px solid var(--color-light-grey);
    transition: transform 0. 3s;
    transform: translateY(0);
}

.counter_button:disabled {
    opacity: 0.2
}

.counter_button:active {
    background: var(--color-medium-grey);
    transform: translateY(2%);
}

.counter_button_first {
    border-right: 3px solid var(--color-light-grey);
}

/*footer*/
.footer {
    background: var(--color-dark-grey);
    color: var(--color-light-grey);
    padding: 2rem;
    font-size: 0, 8rem;
    text-align: center;
}

.footer_link P {
    color: var(--color-white);
}
  
  `

constructor(){
  super()
  this.value = 0
 
}


  render() {
    
    
    return html`
    
    <aside class="controls">
        <label>
            <span>Display</span>
            <select>
                <option>Single</option>
                <option>Multiple</option>
            </select>
            <select>
                <span>Counter</span>
                <option>Counter 1</option>
                <option>Counter 2</option>
                <option>Counter 3</option>
            </select>
        </label>
        <button>Settings</button>
       

    </aside>
    <main class="counter">
        <input class="counter_value"  readonly value="${this.value}" />
        <div class="counter_actions">
            <button data-key="subtract" class="counter_button counter_button_first" @click="${this.subtractHandler}">-</button>
            <button data-key="add" class="counter_button" @click="${this.addHandler}">+</button>
        </div>
    </main> 
    
    `;
  }

   subtractHandler () {
    this.value--
    console.log(this.value)
    
  };

   addHandler ()  {
  this.value++
  console.log(this.value)

 };

 
 
}
customElements.define('my-element', MyElement);