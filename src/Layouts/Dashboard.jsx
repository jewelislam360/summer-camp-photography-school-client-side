import { NavLink, Outlet } from "react-router-dom";
import { FaBook, FaSwatchbook, } from "react-icons/fa";
import useAdmin from "../Hooks/useAdmin";
import useInstructor from "../Hooks/useInstructor";



const Dashboard = () => {
    // const isAdmin = true;
    // const isInstructor = true;
   const [isAdmin]=useAdmin();
    const [isInstructor]= useInstructor();
    console.log(isAdmin, isInstructor);
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side bg-sky-700">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full">

                        {
                            isAdmin ?
                                <>
                                    <li><NavLink to="/dashboard/manageusers"><FaBook></FaBook>Manage User</NavLink></li>
                                    <li><NavLink to="/dashboard/manageclasses" ><FaSwatchbook></FaSwatchbook>Manage Class</NavLink></li>
                                    
                                    <div className="divider"></div>
                                    <li><NavLink to="/">Home</NavLink></li>

                                </>
                                :
                                isInstructor ?
                                    <>
                                        <li><NavLink to="/dashboard/addaclass"><FaBook></FaBook>Add A Class</NavLink></li>
                                        <li><NavLink to="/dashboard/myclass"><FaSwatchbook></FaSwatchbook>My Class</NavLink></li>
                                        
                                        <div className="divider"></div>
                                        <li><NavLink to="/">Home</NavLink></li>

                                    </>
                                    :
                                    <>
                                        <li><NavLink to="/myselectedclass"><FaBook></FaBook>My Selected Class</NavLink></li>
                                        <li><NavLink to="myenrollclass"><FaSwatchbook></FaSwatchbook>My Enroll Class</NavLink></li>
                                        <li><NavLink to="payment"><FaSwatchbook></FaSwatchbook>My Enroll Class</NavLink></li>
                                        <li><NavLink to="payment"><FaSwatchbook></FaSwatchbook>Payment</NavLink></li>
                                        <div className="divider"></div>
                                        <li><NavLink to="/">Home</NavLink></li>

                                    </>
                        }




                    </ul>

                </div>
            </div>

        </div>
    );
};

export default Dashboard;