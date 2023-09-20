import React from "react";
// import React, { useState } from "react";

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: 'white',
    //     backgroundColor: 'black'
    // }) 
    
    // const [btnText, setBtnText] = useState("Enable Light Mode")
    
    // const toggleStyle = () => {
    //     if(myStyle.color === 'white'){
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setBtnText("Enable Dark Mode");
    //     }
    //     else{
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: '1px solid white'
    //         })
    //         setBtnText("Enable Light Mode");
    //     }
    // }

    let myStyle = {
      color: props.mode === 'dark'?'white':'#042743',
      backgroundColor: props.mode === 'dark'?'rgb(36 74 104)':'white',
    }
  return (
    <div className="container my-3" style={{color: props.mode === 'dark'?'white':'#042743'}}>
    <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Analyze Your Text
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" 
            data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              TextConverter gives you a way to analyze your text quickly & efficiently. Be it word or character count...
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" style={myStyle}
              data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
              aria-controls="collapseTwo">
              Free To Use
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse"
            data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>            
              TextConverter is a free character counter tool that provides instant character count & word count statistics for a given text. TextConverter reports the number of words & characters. Thus it is suitable for writing text with word or character limit...
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" style={myStyle}
              data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
              aria-controls="collapseThree">
              Browser Compatible
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse"
            data-bs-parent="#accordionExample">
            {/* <div className="accordion-body" style={myStyle}> */}
            <div className="accordion-body" style={myStyle}>
              This word counter software works in any web browsers such as Chrome, FireFox, Internet Explorer, Safari, Opera and so on. It suits to count character in Facebook, Blog, Books, Excel Document, PDF Document, Essays etc....
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container">
        <button type="button" className="btn btn-primary my-3" onClick={toggleStyle}>{btnText}</button>
      </div> */}
    </div>
  );
}
