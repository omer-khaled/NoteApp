import { AiTwotoneDelete  } from "react-icons/ai";
import { RiDeviceRecoverLine  } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { deleterecoveApi,deleteDoneDelApi } from "../Context";
function NoteMakerCompleted({element,id}){
    let dispatch = useDispatch();
    function logic(){
        dispatch(deleterecoveApi(element,element.id));
    }
    function logicDeleted(){
        dispatch(deleteDoneDelApi(element,element.id));
    }
    return(
        <div className='note' key={id} style={{background: element.color}}>
                <div className="heder">
                    <h1>{element.title}</h1>
                    <div id='Reconverd' title="Recover note" onClick={(e)=>{
                        logic(e);
                    }}><RiDeviceRecoverLine  /></div>
                    <div id='Deleteicon' onClick={(e)=>{
                        logicDeleted(e);
                    }}><AiTwotoneDelete  /></div>
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
export default NoteMakerCompleted;