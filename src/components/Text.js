import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function Text(props) {
    const [text , setText] = useState('Developed By Adil Nawaz 👋')

    function handleToUppercase(){
        let newText = text.toUpperCase();
        setText(newText)
    }
    function handleTolowercase(){
        let newText = text.toLowerCase();
        setText(newText)
    }
    function handleToclear(){
        let newText = ' ';
        setText(newText);
    }
    function handleTochange(event){
        setText(event.target.value);
    }
    let ansStyle={
        marginTop: '20px',
        border: '2px solid grey'
    }

    return(
        <div className="container">
<div className="container my-12">
    <h2 className="flex text-center py-8 font-weight-bold">{props.heading} ✌</h2>
   <p className="flex text-center font-weight-light">{text.split(" ").length} word and {text.length} Charcater here</p>
   <p className={`flex text-center text-${props.mode==='light'?'dark':'light'}`}>{0.008 * text.split(" ").length}  Minutes to read this characters</p>
</div>
<div className="container">
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={text} onChange={handleTochange} ></textarea>
    <button className="btn btn-primary" onClick={handleToUppercase}>Change To Uppercase</button>
    <button className="btn btn-danger" onClick={handleTolowercase}>Change To Lowercase</button>
    <button className="btn btn-secondary" onClick={handleToclear}>{props.clear}</button>
</div>
<div className="container">
<h2 className="flex text-center " id="prev">Preview</h2>
<p id="ans" style={ansStyle}>{text}</p>
</div>
</div>
    );
}
Text.propTypes={
    heading:PropTypes.string.isRequired,
    clear:PropTypes.string.isRequired
}
Text.defaultProps={
    clear:"Clear Text"
}


