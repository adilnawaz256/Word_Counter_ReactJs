import React, { useState } from 'react'

export default function Text() {
    const [text , setText] = useState('Developed By Adil Nawaz 👋')

    function handleToUppercase(){
        let newText = text.toUpperCase();
        setText(newText)
    }
    function handleTolowercase(){
        let newText = text.toLowerCase();
        setText(newText)
    }
    function handleTochange(event){
        setText(event.target.value);
    }

    return(
<>
<div className="container my-12">
    <h2 className="flex text-center py-8 font-weight-bold">Word Here ✌</h2>
   <p className="flex text-center font-weight-light">{text.split(" ").length} word and {text.length} Charcater here</p>
   <p className="flex text-center">{0.008 * text.split(" ").length}  Minutes to read this characters</p>
</div>
<div className="container">
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={text} onChange={handleTochange} ></textarea>
    <button className="btn btn-primary" onClick={handleToUppercase}>Change To Uppercase</button>
    <button className="btn btn-primary" onClick={handleTolowercase}>Change To Lowercase</button>
</div>
<div className="container">
<h2 className="flex text-center">Preview</h2>
<p className="preview">{text}</p>
</div>

</>
    );



}





