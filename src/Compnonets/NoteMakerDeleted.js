import { AiTwotoneDelete  } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deletedeleteApi } from "../Context";
function NoteMakerDeleted({element,id}){
    let dispatch = useDispatch();
    function logicDeleted(e){
        dispatch(deletedeleteApi(element.id));
    }
    return(
        <div className='note' key={id} style={{background: element.color}}>
                <div className="heder">
                    <h1>{element.title}</h1>
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
export default NoteMakerDeleted;