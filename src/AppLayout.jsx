import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"

const AppLayout = () => {
  return (
    <div className="p-4">
          <Header />
          <Outlet />
          <Footer/>
        
    </div>
  )
}

export default AppLayout
