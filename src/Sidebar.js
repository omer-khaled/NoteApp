import { IoMdAddCircle  } from "react-icons/io";
import { MdEventNote  } from "react-icons/md";
import { AiOutlineFileDone  } from "react-icons/ai";
import { AiFillDelete  } from "react-icons/ai";
import { Link , Outlet} from 'react-router-dom'
function Sidebar(){
    return(
        <div className="side">
            <ul>
                <li>
                    <Link to="/" className="link">
                            <MdEventNote className="icon" />
                            <span>Notes</span>
                    </Link>
                </li>
                <li>
                    <Link to="add" className="link">
                        <IoMdAddCircle className="icon"  />
                        <span>Create</span>
                    </Link>
                </li>
                <li>
                    <Link to="Done" className="link">
                        <AiOutlineFileDone className="icon" />
                        <span>Done</span>
                    </Link>
                </li>
                <li>
                    <Link to="Deleted" className="link">
                        <AiFillDelete className="icon" />
                        <span>Deleted</span>
                    </Link>
                </li>
                {/* <Outlet /> */}
            </ul>
        </div>
    );
}
export default Sidebar;