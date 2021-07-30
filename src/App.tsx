import React from "react";
import test from "@components/Test.component";

function App() {
    return (
        <div>
            APP {process.env.REACT_APP_NOT_SECRET_CODE} {test}
        </div>
    );
}

export default App;
