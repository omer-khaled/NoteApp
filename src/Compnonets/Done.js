import NoteMakerCompleted from "./NoteMakerCompleted";
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getDoneApi } from "../Context";
function Done(){
    let notes = useSelector(state=>state.done);
    let dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getDoneApi());
    },[]);
    return(
        <div className="notebody">
            <div className='Allnots'>
                {
                    notes.length!=0 ?
                    <>
                        <span id='style' val={notes.length}>{`(${notes.length}) completed Nosts`}</span>
                        {notes.map((element)=>{
                        return(
                                <NoteMakerCompleted element={element} key={element.id}/>
                            );
                        })}
                    </>
                    :<h1 id="Empty"><span>Please</span> Complete your <span>Notes</span></h1>
                }
            </div>
        </div>
    );
}
export default Done;
