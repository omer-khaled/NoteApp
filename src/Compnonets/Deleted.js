import NoteMakerDeleted from './NoteMakerDeleted';
import { useEffect, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {getdeleteApi } from '../Context';
function Deleted(){
    let notes = useSelector(state=>state.deleted);
    let dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getdeleteApi('http://localhost:3004/delete'));
    },[]);
    return(
        <div className="notebody">
            <div className='Allnots'>
                {
                    notes.length!=0 ?
                    <>
                        <span id='style' val={notes.length}>{`(${notes.length}) Deleted Nosts`}</span>
                        {notes.map((element)=>{
                        return(
                                <NoteMakerDeleted element={element} key={element.id}/>
                            );
                        })}
                    </>
                    :<h1 id="Empty"><span>Please</span> Delete your <span>Notes</span></h1>
                    
                }
            </div>
        </div>
    );
}
export default Deleted;
