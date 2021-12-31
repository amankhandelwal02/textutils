import React from 'react'


export default function About(props) {

  // const [myStyle, setMyStyle] = useState(  {
  //   color: "black",
  //   backgroundColor: "white"
  // });

  // const [btnStyle, setbtnStyle] = useState(  {
  //   color: "white",
  //   backgroundColor: "black"
  // });

  // const [btnText, setBtnText] = useState("Enable Dark Mode")

  // const toggleDarkkMode = ()=>{
  //   if(myStyle.color === 'black'){
  //     setMyStyle({

  //         color: "white",
  //         backgroundColor: "black",
  //         transition: "0.9s"

  //     }) 
  //     setbtnStyle({
  //       color: "black",
  //         backgroundColor: "white",
  //         transition: "0.9s"
  //     })
  //     setBtnText("Enable Light Mode")

  //   } else{

  //     setMyStyle({

  //       color: "black",
  //       backgroundColor: "white",
  //       transition: "0.9s"

  //   }) 
  //   setbtnStyle({
  //     color: "white",
  //       backgroundColor: "black",
  //       transition: "0.9s"
  //   })
  //   setBtnText("Enable Dark Mode")

  //   }
  // }

  let myStyle = {
    color: props.mode === 'dark' ? 'white' : 'black',
    backgroundColor: props.mode === 'dark' ? '#212529' : 'white',
    transition: '0.6s'
  }

  return (
    <>
      <div className="container" style={{ color: props.mode === "dark" ? 'white' : 'black' }}>
        <h3>About TextUtils (React Application)</h3>
        <div className="accordion-start" style={myStyle}>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  <strong>Convert To Upper Case</strong>
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                 <p>The upper case transformer will take any text that you have and will generate all the letters into upper case ones. It will essentially make all lower case letters into CAPITALS (as well as keep upper case letters as upper case letters).</p>

                  <p>To do this, you simply have to select the text that you need changing and pasting into the box above and then select the UPPER CASE tab.</p>

                 <p>THIS IS AN EXAMPLE OF UPPER CASE.</p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  <strong>Convert To Lower Case</strong>
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                <p>If you are wondering how to uncapitalize text, this is exactly what the lower case text converter will allow you to do - it transforms all the letters in your text into lowercase letters. Simply copy the text that you need generating into lower case and paste the text into the box above and select the ‘lower case’ tab.</p>

                <p>this is an example of lower case.</p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  <strong>Convert To Title Case</strong>
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                <p>The title case converter will automatically convert the starting letter of every word into an upper case and will leave the remaining letters as lower case ones.</p>

                <p>Simply copy the content that you will like to generate into this format, then paste into the box form above and select the Titled Case tab.</p>

                <p>This Is An Example Of Titled Case.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <button type="button" onClick={toggleDarkkMode} className="btn btn-dark my-3" style={btnStyle}>{btnText}</button> */}
      </div>
    </>
  )
}
