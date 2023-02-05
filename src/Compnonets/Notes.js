import {getApi} from '../Context'
import {useDispatch,useSelector} from 'react-redux'
import { useEffect } from 'react';
import NoteMaker from './NoteMaker';
import { Outlet } from 'react-router-dom';
function Notes(){
    let notes = useSelector((state) => state.notes);
    let dispath = useDispatch();
    useEffect(()=>{
        dispath(getApi());
    },[]);
    return(
        <div className="notebody">
            <div className='Allnots'>
                    {
                    notes.length!=0 ?
                    <>
                        <span id='style' val={notes.length}>{`(${(notes).length}) Nosts`}</span>
                        {notes.map((element)=>{
                        return(
                                <NoteMaker element={element} key={element.id}/>
                            );
                        })}
                        {/* <Outlet/> */}
                    </>
                    :<h1 id="Empty"><span>Please</span> add your <span>Notes</span></h1>
                    }
            </div>
        </div>
    );
}
export default Notes;