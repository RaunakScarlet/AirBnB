import { Route, Routes } from "react-router-dom";


import Login from "./components/Login";
import AppLayout from "./AppLayout";
import IndexPage from "./components/IndexPage";
import Register from "./components/Register";
import axios from "axios";
import { Provider} from "react-redux";
import AppStore from "./store/AppStore";
import Account from "./components/Account";



axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials = 'true';
function App() {

    

    return (
        <Provider store={AppStore}>
            <Routes>
                <Route path="/" element={<AppLayout />}>
                    <Route index element={<IndexPage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/account" element={<Account />} />
                    <Route path="/account/:subpages" element={<Account />} />
                    
                </Route>
            </Routes>
        </Provider>
    );
}

export default App;
