import React from "react";
// Components
import Header from "@components/Header.component";
import Footer from "@components/Footer.component";

class Layout extends React.Component<any, any> {
    render() {
        return (
            <article>
                <Header />
                <main>{this.props.children}</main>
                <Footer />
            </article>
        );
    }
}

export default Layout;
