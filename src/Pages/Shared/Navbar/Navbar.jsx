import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/Authprovider";
import logo from '../../../assets/img/benner/logop.png'

const Navbar = () => {
  const {user, logOut}=useContext(AuthContext);
  const handelLogout=()=>{
    logOut()
    .then(()=>{})
    .catch((error)=>{
      console.log(error);
    })
  }


  const navOption = <>
    
   
   <li><Link to="/">Home</Link></li>
    <li><Link to="/allclass">All Class</Link></li>
    <li><Link to="/allinstructor">Instructors</Link></li>
    <li><Link to="/dashboard">Dashboard</Link></li>
   


  </>

  return (
    <>
      <div className="navbar fixed top-0 z-50 text-white  bg-slate-700 bg-blend-overlay mx-auto max-w-7xl font-bold font-serif">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {navOption}

            </ul>
          </div>
          <Link to='/'><img className="w-20" src={logo} alt="" /></Link>
          <Link className="btn btn-ghost normal-case text-xl">Photography School</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navOption}
          </ul>
        </div>
        <div className="navbar-end">
         {
                        user ?

                            <div className="flex align-middle">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={`${user.photoURL}`} />
                                    </div>
                                    </label>
                                    <div>
                                        <Link onClick={handelLogout}>Logout</Link>
                                    </div>
                                

                            </div>

                            :

                            <div>
                                <Link to="/login">Login</Link>
                            </div>


                    }
        </div>
      </div>

    </>
  );
};

export default Navbar;