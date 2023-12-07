import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link, Navigate, useParams } from "react-router-dom";
import { userProfile } from "../store/userSlice";


const Account = () => {

    const userInfo = useSelector(store => store.userInfo);
    const [redirect, setRedirect] = useState(false);
    const dispatch = useDispatch();

    // console.log(userInfo.user.name);
    if (!userInfo.user.name) return <Navigate to={'/'} />
    let { subpages } = useParams();
  
    async function logout(){
        await axios.post('/logout')
        setRedirect(true);
        dispatch(userProfile({userInfo:{}}))
    }

    function applyClasses(type) {
        let classes = "py-2 px-6";
        if (subpages == type || (subpages == undefined && type=='profile')) {
            classes+= " bg-primary text-white rounded-full";
        }
        return classes;
    }

    if (redirect) {
    return <Navigate to="/" />;
}

  return (
      <div>
          <nav className="w-full flex justify-center mt-8 gap-2 mb-8">
              <Link className={applyClasses("profile")} to="/account">
                  My Account
              </Link>
              <Link className={applyClasses("bookings")} to="/account/bookings">
                  My Bookings
              </Link>
              <Link className={applyClasses("places")} to={"/account/places"}>
                  My Accomodations
              </Link>
          </nav >
          {subpages == undefined && (
              <div className="w-full-lg text-center mx-auto ">Logged in as {userInfo?.user?.name}
                  <br />
                  <br />
                  <button className="primary max-w-sm" onClick={logout}>logout</button>
              </div>
          )}
      </div>
  );
}

export default Account
