import { Link, Outlet } from "react-router-dom";
import { FaBook, FaSwatchbook, } from "react-icons/fa";



const Dashboard = () => {
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li><Link><FaBook></FaBook>My Selected Class</Link></li>
                        <li><Link><FaSwatchbook></FaSwatchbook>My Enroll Class</Link></li>
                        <li><Link><FaSwatchbook></FaSwatchbook>My Enroll Class</Link></li>
                        <li><Link><FaSwatchbook></FaSwatchbook>Payment</Link></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default Dashboard;