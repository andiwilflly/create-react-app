import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Components
import Router from "@components/router/Router.component";

function App() {
    return (
        <>
            <Router />
            <div style={{ height: 0 }}>
                <ToastContainer />
            </div>
        </>
    );
}

export default App;
