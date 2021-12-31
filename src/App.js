import './App.css';
// import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const removeBodyClassess = ()=>{
      document.body.classList.remove('bg-light')
      document.body.classList.remove('bg-dark')
      document.body.classList.remove('bg-success')
      document.body.classList.remove('bg-warning')
      document.body.classList.remove('bg-danger')
  }

  const [modeText, setModeText] = useState('Enable Dark Mode')

  const toggleMode = (cls) => {
    removeBodyClassess();
    document.body.classList.add('bg-' +cls)
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#6c757d"
      document.body.style.transition = "0.6s"
      setModeText("Enable Light Mode")
      showAlert("Dark mode has been enabled", "success")
      document.title = 'React App - Dark Mode';

    } else {
      setMode("light")
      document.body.style.backgroundColor = "white"
      document.body.style.transition = "0.6s"
      setModeText("Enable Dark Mode")
      showAlert("Light mode has been enabled", "success")
      document.title = 'React App - Light Mode';
    }
  }
  return (
    <>
      {/* <Router> */}
        <Navbar title="Text Utils" aboutText="About Project" mode={mode} toggleMode={toggleMode} modeText={modeText} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyse below" subheading="Paste the text here to manipulate" mode={mode}/>} /> */}
            <TextForm showAlert={showAlert} heading="Enter the text to analyse below" subheading="Paste the text here to manipulate" mode={mode}/>
            {/* <Route exact path="/About" element={<About  mode={mode}/>} /> */}
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
