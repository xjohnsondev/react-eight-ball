import React, { useState } from "react";
import "./Eightball.css";

const Eightball = (props) => {
  console.log(props.data);

  const randomText = () => Math.floor(Math.random() * props.data.length);

  const newText = () => {
    let choice = props.data[randomText()];
    setText(choice.msg);
    setColor(choice.color);
    
  };
  const restart = () => {
    setText("Think of a Question");
    setColor("black");
  };

  const [text, setText] = useState("Think of a Question");
  const [color, setColor] = useState("black");

  return (
    <div>
      <button className='ball' style={{backgroundColor: color}} onClick={newText}>
        {text}
      </button>
      <button style={{marginLeft: '5px'}} onClick={restart}>
        Restart
      </button>
    </div>
  );
};

export default Eightball;
