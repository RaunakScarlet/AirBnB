import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import { userProfile } from "./store/userSlice";

const AppLayout = () => {

    const userInfo = useSelector((store) => store.userInfo);
    const dispatch = useDispatch();
console.log(userInfo);

useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get("/profile");
             console.log(response);
                dispatch(userProfile(response.data));
                console.log("User profile updated:", response.data);
            } catch (error) {
                console.error("Error fetching user profile:", error);
            }
        }
   
    fetchData();
}, []);
  return (
    <div className="p-4">
          <Header />
          <Outlet />
          <Footer/>
        
    </div>
  )
}

export default AppLayout
