import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, {useState} from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const [btnText, setBtnText] = useState("Enable Dark Mode");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      typ: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      setBtnText("Disable Dark Mode");
      showAlert("Dark Mode has been enabled", "success");
      document.title = "TextConverter - Dark Mode";

      // it is doing by the developer to confuse user & install their app in your system
      // setInterval(() => {
      //   document.title = "may some virus is here!";
      // }, 2000);

      // setInterval(() => {
      //   document.title = "Install our app to remove!";
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      setBtnText("Enable Dark Mode");
      showAlert("Light Mode has been enabled", "success");
      document.title = "TextConverter - Light Mode";
    }
  }
  return (
    <>

      {/* it is used when we use react router */}
      <BrowserRouter>
        <Navbar title="TextConverter" about="About Us" mode={mode} toggleMode={toggleMode} btnText={btnText}/>
        <Alert alertBox={alert} />

        <Routes>
          <Route exact path="/about" element={<About />}>
          </Route>
          
          <Route exact path="/" element={<TextForm heading="Enter Your Text to Modify..." mode={mode} showAlert={showAlert} />}>
          </Route>
        </Routes>
      </BrowserRouter>

      {/* <Navbar title="TextConverter" about="About Us" mode={mode} toggleMode={toggleMode} btnText={btnText}/>
      <Alert alertBox={alert} />
      <TextForm heading="Enter Your Text to Modify..." mode={mode} showAlert={showAlert} /> */}
      {/* <About /> */}
    </>
  );
}

export default App;
