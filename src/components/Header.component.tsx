import React from "react";
import i18next from "i18next";
import { Link } from "@reach/router";
// Components
import T from "@components/T.component";

class Header extends React.Component<any, any> {
    render() {
        return (
            <header>
                <Link to="/">Home</Link>
                <br />
                <Link to="/other">Other</Link>

                <br />
                <button onClick={() => i18next.changeLanguage("en")}>en</button>
                <button onClick={() => i18next.changeLanguage("ru")}>ru</button>

                <T>hello</T>
            </header>
        );
    }
}

export default Header;
