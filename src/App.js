import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import './App.css';
import FooterPage from "./components/FooterPage";

function App() {
  return(
      <div className="wrapper">
         <BrowserRouter>
            <NavBar/>
            <div className="content"> <AppRouter/> </div>
            <div className="footer"> <FooterPage/> </div>
         </BrowserRouter>
      </div>

  );
}
export default App;
