const App=()=>{

    const [count,setCount]= React.useState(1);
    const handleIncrease =()=> setCount(count+1);
    const handleDecrease =()=> setCount(count-1);


    
return(
    <div>
    <button onclick={handleIncrease}>+</button>
    <span>{count}</span>
    <button onclick={handleDecrease}>-</button>
    
    </div>
    )
}
