
//import react from "./React"

//import ReactDOM from "./React-dom.js"

// function MainContent(){
//     return(
//        <h1>Lessson 1 of react</h1> 
//     )
// }
// ReactDOM.render(<h1>
//     Hello Kat
//     <ul><li>React lesson 1</li><li>React Lesson 2</li></ul>
//     <div>
//         <navbar>
//             MainContent
//         </navbar>
//     </div>
// </h1>,document.getElementById('root'))
// ReactDOM.render(
//     Navbar,document.getElementById("root")

const page=(
    <div>
        <h1> This is my first lesson of React</h1>
        <h3>Here are the reason why i love react </h3>
        <ol>
            <li>its fun</li>
            <li> composable</li>
            <li>works faster</li>
        </ol>
     
    
    </div>

)
ReactDOM.render(page,document.getElementById("root"))


// const Navbar=(
//     <nav>
//         <h1> Welcome to React</h1>
//         <ul>
//             <li>Reacr Intro</li>
//             <li>JSX</li>
//             <li>Enjoying React</li>
//         </ul>
//           </nav>
// )

// ReactDOM.createRoot(document.getElementById("root").render(Navbar))
 