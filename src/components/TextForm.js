import React, { useState } from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {

  let handleUpClick = () => {
    console.log("Handle upper case is clicked" + text)
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to upper case", "success");
  }

  let handleLowClick = () => {
    console.log("Handle lower case is clicked" + text)
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lower case", "success");
  }

  const handleTitleCase = () => {
    let newText = text.split(" ").map((currentValue) => {
        let newText = currentValue[0].toUpperCase() + currentValue.slice(1);
        return newText;
    });
    setText(newText.join(" "));
    props.showAlert("Converted to title case", "success");
}

  let handleExtraClick = () => {
    console.log("Handle Extra space is clicked" + text)
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space has been removed", "success");
  }

  
  let handleCopyClick = () => {
    console.log("Handle copy is clicked" + text)
    navigator.clipboard.writeText(text);
    document.getSelection().removeAllRanges();
    alert(`Text Copied To Clipboard - ${text}`)
  }

  let handleClearlick = () => {
    console.log("Handle clear is clicked" + text)
    let newText = "";
    setText(newText)
    props.showAlert("Text cleared", "success");
  }

  let handleOnChange = (event) => {
    console.log("On change")
    setText(event.target.value)
  }

  const [text, setText] = useState('');
  // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state
  return (
    <>
      <div className="container" style={{color : props.mode==="dark"?'white':'black'}}>
          <h3>{props.heading}</h3>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.subheading}</label>
            <textarea className="form-control" value={text} style={{backgroundColor : props.mode==="dark"?'#212529':'white', color : props.mode==="dark"?'white':'black', transition: '0.6s'}} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="6"></textarea>
          </div>
          <div className={`buttom btn btn-primary mx-1 my-1 ${text.length===0?'disabled':''}`} onClick={handleUpClick}>Convert To Uppercase</div>
          <div className={`buttom btn btn-primary mx-1 my-1 ${text.length===0?'disabled':''}`} onClick={handleLowClick}>Convert To Lowercase</div>
          <div className={`buttom btn btn-primary mx-1 my-1 ${text.length===0?'disabled':''}`} onClick={handleTitleCase}>Convert To Titlecase</div>
          <div className={`buttom btn btn-primary mx-1 my-1 ${text.length===0?'disabled':''}`} onClick={handleExtraClick}>Remove Extra Space</div>
          <div className={`buttom btn btn-primary mx-1 my-1 ${text.length===0?'disabled':''}`} onClick={handleCopyClick}>Copy To Clipboard</div>
          <div className={`buttom btn btn-primary mx-1 my-1 ${text.length===0?'disabled':''}`} onClick={handleClearlick}>Clear Text</div>
      </div>

      <div className="container my-3" style={{color : props.mode==="dark"?'white':'black'}}>

        <h3>Here is the text summery</h3>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} charectors</p>
        <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes to read this</p>
        
        <h3>Your Text Preview</h3>
        <p>{text.length>0?text:"Enter something in the text box above to preview it here..."}</p>

      </div>
    </>
  )
}

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired,
}

TextForm.defaultProps = {
  heading: "Here comes a heading",
  subheading: "Here comes a sub-heading"
}
