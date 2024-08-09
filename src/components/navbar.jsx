import { Outlet } from "react-router-dom";
import { RiseOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom'

const Navbar = () => {
    return <>
        <nav >
            <div className="h-[100px] bg-black flex items-center justify-between px-10">
                <div className="flex  items-center gap-2">
                    <h1 className="font-bold text-white text-[30px]">TUF</h1>
                    <div className="bg-[#4096ff] w-[8px] h-[40px] "></div>
                </div>

                <div>
                    <Link to="https://takeuforward.org/plus">
                        <RiseOutlined className="text-white text-[40px]" />
                    </Link>
                </div>

            </div>
        </nav>

        <Outlet />
    </>
}

export default Navbar;