import React from "react";
import { Link } from "@reach/router";

class Header extends React.Component<any, any> {
    render() {
        return (
            <header>
                <Link to="/">Home</Link>
                <Link to="/other">Other</Link>
            </header>
        );
    }
}

export default Header;
