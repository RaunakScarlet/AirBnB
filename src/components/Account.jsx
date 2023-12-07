import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link, Navigate, useParams } from "react-router-dom";
import { userProfile } from "../store/userSlice";
import PlacesPage from "./PlacesPage";


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
        let classes = "py-2 px-6 flex gap-1 text-center justify-center rounded-full";
        if (subpages == type || (subpages == undefined && type=='profile')) {
            classes += " bg-primary text-white";
        } else {
            classes += " bg-gray-200 text-black";
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
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                  >
                      <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                  </svg>
                  My Account
              </Link>
              <Link className={applyClasses("bookings")} to="/account/bookings">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                  >
                      <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                      />
                  </svg>
                  My Bookings
              </Link>
              <Link className={applyClasses("places")} to={"/account/places"}>
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                  >
                      <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525"
                      />
                  </svg>
                  My Accomodations
              </Link>
          </nav>
          {subpages == undefined && (
              <div className="w-full-lg text-center mx-auto ">
                  Logged in as {userInfo?.user?.name}
                  <br />
                  <br />
                  <button className="primary max-w-sm" onClick={logout}>
                      logout
                  </button>
              </div>
          )}
          {subpages == "places" && <PlacesPage />}
      </div>
  );
}

export default Account
