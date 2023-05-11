import { useState } from 'react';
import './Cal.css';

const Cal = ()=> {
  const [result,setresult]=useState("");

  const handelClick=(e)=>{
       setresult(result.concat(e.target.name));
  }
  const Clear=()=>{
    setresult("");
    // console.log(1);
  }
  
  const backspace=()=>{
    // setresult(result.slice(0 ,result.length -1)); // same as 
    setresult(result.slice(0 ,-1));

  }
  const calculate =()=>{
    try{
        setresult(eval(result.toString()));

    }catch(err) {
        setresult("Error");
    }
  }
  return (
   <>
  <div className="container">
    <form>
      <input type="text" value={result} />
    </form>
    <div className="keypad">
      <button id="clear" onClick={Clear} className="highlight">Clear</button>
      <button id="backspace" onClick={backspace} className="highlight">C</button>
      <button name="/" onClick={handelClick} className="highlight">&divide;</button>
      <button name="7"  onClick={handelClick}>7</button>
      <button name="8"  onClick={handelClick}>8</button>
      <button name="9"  onClick={handelClick}>9</button>
      <button name="*" onClick={handelClick} className="highlight">&times;</button>
      <button name="4" onClick={handelClick}>4</button>
      <button name="5" onClick={handelClick}>5</button>
      <button name="6" onClick={handelClick}>6</button>
      <button name="+" onClick={handelClick} className="highlight">+</button>
      <button name="1" onClick={handelClick}>1</button>
      <button name="2" onClick={handelClick}>2</button>
      <button name="3" onClick={handelClick}>3</button>
      <button name="-" onClick={handelClick} className="highlight">&ndash;</button>
      <button name="0" onClick={handelClick}>0</button>
      <button name="." onClick={handelClick}>.</button>
      <button id="result" onClick={calculate} className="highlight">=</button>
    </div>
  </div>
   </>
  );
}

export default Cal;