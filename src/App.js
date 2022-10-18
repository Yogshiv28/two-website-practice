import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Feature from "./Feature";
import Touch from "./Touch";
import Footer from "./Footer";

const App = () => {
    return(
        <div>
           
            <Navbar/>
            <Jumbotron/>
            <Feature/>
            <Touch/>
            <Footer/>
        </div>
    );
};

export default App;