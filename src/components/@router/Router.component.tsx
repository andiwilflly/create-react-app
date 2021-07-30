import { Router } from "@reach/router";
// Components
import Layout from "@components/Layout.component";
import HomePage from "@components/pages/HomePage.component";
import OtherPage from "@components/pages/OtherPage.component";
import Page404 from "@components/pages/Page404.component";

export default function RouterComponent() {
    return (
        <Router>
            <Layout path="/">
                <HomePage path="/" />
                <OtherPage path="/other" />
                <Page404 path="*" />
            </Layout>
        </Router>
    );
}
