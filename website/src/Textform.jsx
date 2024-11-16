import React, { useState } from 'react'

export default function Textform() {
    const handleUpClick=()=>{
        console.log("upper case"+text);
        let newText=text.toUpperCase();
        setText(newText)
    }
    const handleloClick=()=>{
        console.log("Lower Case"+text);
        let newText=text.toLocaleLowerCase();
        setText(newText)
    }
    const clear=()=>{
        let newText="";
        setText(newText)
    }
    const handleOnClick=(event)=>{
        console.log("on change")
      setText(event.target.value)
    }
    const [text,setText]=useState('Enetr the data');
  return (
    <div className="main">
    
    <div className="mb-3 mx-5 my-5">
    <h3>Context box Enter the data</h3>
  <textarea className="form-control"  value={text} onChange={handleOnClick} id="mybox" rows="8"></textarea>
  <button className="btn btn-primary my-2" onClick={handleUpClick}>Click Convert Upper</button>
  <button className="btn btn-primary my-2 mx-2" onClick={handleloClick}>Convert Lower</button>
  <button className="btn btn-primary my-2 mx-2" onClick={clear}>Clear all</button>
</div>
<div className="summary mx-5">
    <h2>Summary Data</h2>
    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Word and {text.length} charaters</p>
    <p>{text.split("".length)} Word and {text.length} Charater</p>
    <p>{0.008 * text.split("").length}Minutes</p>
    <h2>Preview</h2>
    <p>{text}</p>

</div>
</div>
  )
}
