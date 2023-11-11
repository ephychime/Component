 import {usestate} from react;

 const Counter = () => {
    const [count, Setcount] = usestate(0) 
     const increase = () => {
        Setcount (count + 1);
        // if (count < 20) {
        //     setCount(count + 1);
        //   }
     }
     const decrease = () => {
        Setcount (count - 1);
        // if (count > 0) {
        //     setCount(count - 1);
        //   }
    return (
        <div>
            <h1> This is  count {count}</h1>
            <button onClick={decrease}>button</button>
        <button onClick={increase}>button</button>
        {/* <button onClick={increaseCount} disabled={count >= 20}>Button1</button> */}
            </div>
            
    );
 }

 export default Counter;
