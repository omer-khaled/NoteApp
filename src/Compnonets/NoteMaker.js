import { MdDoneAll  } from "react-icons/md";
import { AiTwotoneDelete  } from "react-icons/ai";
import { MdOutlineSystemUpdateAlt  } from "react-icons/md";
import { deleteDoApi,deleteDelApi } from "../Context";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
function NoteMaker({element,id}){
    let dispatch = useDispatch()
    async function logic(e){
        dispatch(deleteDoApi(element,element.id));
        // dispatch(postDoneApi(element));
    }
    async function logicDeleted(e){
        dispatch(deleteDelApi(element,element.id));
        // dispatch(postdeleteApi(element));
    }
    return(
        <div className='note' key={id} style={{background: element.color}}>
                <div className="heder">
                    <h1>{element.title}</h1>
                    <div id="Updated">
                        <Link title="update note" className="link" to={`/${element.id}`}>
                            <MdOutlineSystemUpdateAlt/>
                        </Link>
                    </div>
                    <div  id='Doneicon' onClick={(e)=>{
                        logic(e);
                    }}><MdDoneAll /></div>
                    <div  id='Deleteicon' onClick={(e)=>{
                        logicDeleted(e);
                    }}>
                        <AiTwotoneDelete />
                    </div>
                </div>
                <div className="content">
                    <p>{element.content}</p>
                </div>
                <div className="footer">
                    <span>{element.Time}</span>
                    <span>{element.Date}</span>
                </div>
        </div>
    );
}
export default NoteMaker;