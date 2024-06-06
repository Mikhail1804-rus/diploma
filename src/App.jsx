import {Route, Routes} from "react-router-dom";
import Layout from "./components/Laoyut/Layout.jsx";
import Home from "./pages/Home/Home.jsx";
import Contacts from "./pages/Contacts/Contacts.jsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                {/*<Route*/}
                {/*    path=""*/}
                {/*    element={<Home />}*/}
                {/*/>*/}
                <Route path="contacts" element={<Contacts />} />
            </Route>
        </Routes>
    );
}

export default App
