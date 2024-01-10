import React, { useState } from "react";
import "./Eightball.css";

const Eightball = () => {
  const props = [
    { msg: "It is certain.", color: "green" },
    { msg: "It is decidedly so.", color: "green" },
    { msg: "Without a doubt.", color: "green" },
    { msg: "Yes - definitely.", color: "green" },
    { msg: "You may rely on it.", color: "green" },
    { msg: "As I see it, yes.", color: "green" },
    { msg: "Most likely.", color: "green" },
    { msg: "Outlook good.", color: "green" },
    { msg: "Yes.", color: "green" },
    { msg: "Signs point to yes.", color: "goldenrod" },
    { msg: "Reply hazy, try again.", color: "goldenrod" },
    { msg: "Ask again later.", color: "goldenrod" },
    { msg: "Better not tell you now.", color: "goldenrod" },
    { msg: "Cannot predict now.", color: "goldenrod" },
    { msg: "Concentrate and ask again.", color: "goldenrod" },
    { msg: "Don't count on it.", color: "red" },
    { msg: "My reply is no.", color: "red" },
    { msg: "My sources say no.", color: "red" },
    { msg: "Outlook not so good.", color: "red" },
    { msg: "Very doubtful.", color: "red" },
  ];

  const randomText = () => Math.floor(Math.random() * props.length);

  const newText = () => {
    let choice = props[randomText()];
    setText(choice.msg);
    setColor(choice.color);
    
  };
  const restart = () => {
    setText("Think of a Question");
    setColor("btn-start")
  };

  const [text, setText] = useState("Think of a Question");
  const [color, setColor] = useState("black");

  return (
    <div>
      <button className='button' style={{backgroundColor: color}} onClick={newText}>
        {text}
      </button>
      <button style={{marginLeft: '5px'}} onClick={restart}>
        Restart
      </button>
    </div>
  );
};

export default Eightball;
