import { Outlet, useLocation } from "react-router-dom"
import { Navbar } from "../components/Shared/Navbar/Navbar"

const Main = () => {
  // return (
  //   <div>
  //     <Navbar></Navbar>
  //     <div className="pt-28 pb-20">
  //       <Outlet />
  //     </div>
  //   </div>
  // )

  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  const isSignUpPage = location.pathname === "/signup"
  const isAuthPage = isLoginPage || isSignUpPage;

  return (
    <div>
      {/* {!isLoginPage && <Navbar />}
      {!isSignUpPage && <Navbar />} */}
      {!isAuthPage && <Navbar />}
      <div className={isAuthPage ? '' : 'pt-28 pb-20'}>
        <Outlet />
      </div>
      {/* {!isLoginPage && <Footer />} */}
    </div>
  );
}

export default Main
