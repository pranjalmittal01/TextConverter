import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked: " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text has been converted into UpperCase!", "success");
  }

  const handleLoClick = () => {
    // console.log("Uppercase was clicked: " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text has been converted into LowerCase!", "success");
  }

  const handleClearClick = () => {
    // console.log("Uppercase was clicked: " + text);
    let newText = "";
    setText(newText);
    props.showAlert("Text has been Cleared!", "success");
  }

  const handleCopy = () => {
    // var text = document.getElementById('myBox');
    // text.select();
    // document.getSelection().removeAllRanges();
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard!", "success");
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces has been removed!", "success");
  }

  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  }

  const [text, setText] = useState("")
  // text = "hcdskjfhksdfkjs";  Wrong way to change the state.
  // setText("new text"); correct way to change the state.
  return (
  <> 
    <div>
        <div className="container my-3" style={{color: props.mode === 'dark'?'white':'#042743'}}>
            <h1 className='mb-4'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'#13466e':'white', color: props.mode === 'dark'?'white':'#042743'}} id="myBox" rows="10"></textarea>
                </div>
                <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleLoClick}>Convert to LowerCase</button> 
                <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
    </div>
    
    <div className="container my-3" style={{color: props.mode === 'dark'?'white':'#042743'}}>
      <h2>Your Text Summary</h2>
      {/* <p>{text.split(" ").length>1?text.split(" ").length-1:0} Words and {text.length} Characters</p> */}

      {/* by filter method we can remove the counting of spaces in word section */}
      <p>{text.split(/\s+/).filter((element) => {return element.length!==0}).length} Words and {text.length} Characters</p>
      <p>{0.008 * text.split(" ").filter((element) => {return element.length!==0}).length} Minutes to Read Only</p>
      <h2>Preview</h2>
      <p>{text.length>0 ? text : "Nothing to Preview!"}</p>
    </div>
  </>
  )
}
// .length>1 ? text.split(" ").length - 1: 0