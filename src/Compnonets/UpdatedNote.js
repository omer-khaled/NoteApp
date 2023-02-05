import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateApi } from "../Context";

function UpdatedNote(){
    let {id} = useParams();
    let [note,Setnote]= useState({});
    const navigate = useNavigate();
    let dispath = useDispatch();
    let [color,setColor] = useState('red');
    let [title,setTitle] = useState('');
    let [content,setContent] = useState('');
    let colors = ['red','#e91e63','#3f51b5','#ff6600'];
    useEffect(()=>{
        getNot();
    },[]);
    let getNot = async()=>{
        let data = await fetch(`http://localhost:3004/notes/${id}`);
        let res = await data.json();
        setTitle(res.title);
        setContent(res.content);
        setColor(res.color);
        Setnote({...res});
    }
    // http://localhost:3004/notes/1
    return(
        <>
            {note &&
                <div className="notebody">
                    <div className="left">
                        <input type='text' value={title} id="title" placeholder="Title" onInput={(e)=>{
                            setTitle(e.target.value);
                        }} />
                        <textarea type="text" value={content} id="contnet" placeholder="Content" onInput={(e)=>{
                            setContent(e.target.value);
                        }}/>
                        <button className="btn" onClick={(e)=>{
                            let obj = {
                                "color":color,
                                "title":title,
                                "id":note.id,
                                "content":content,
                                'Time':`${((new Date()).getHours())<10 ? `0${(new Date()).getHours()}`:(new Date()).getHours()}:${((new Date()).getMinutes())<10 ? `0${(new Date()).getMinutes()}`:(new Date()).getMinutes()} PM`,
                                "Date":`${((new Date()).getDate())<10 ? `0${(new Date()).getDate()}`:(new Date()).getDate()}-${ (((new Date()).getMonth()) + 1)<10 ? `0${((new Date()).getMonth()) + 1}`: ((new Date()).getMonth()) + 1}-${(new Date()).getFullYear()}`
                            }
                            dispath(updateApi(obj));
                            navigate('/');
                        }}>update</button>
                    </div>
                    <div className="right">
                        {colors.map((divcolo,index)=>{
                            return((color===divcolo)?<div key={index} className="colo-block" style={{background:`${divcolo}`,border:'1px solid #fff'}} onClick={(e)=>{
                                setColor(`${divcolo}`);
                            }}></div>:<div key={index} className="colo-block" style={{background:`${divcolo}`,border:'none'}} onClick={(e)=>{
                                setColor(`${divcolo}`);
                            }}></div>
                            );
                        })}
                    </div>
                </div>                
            }
        </>
    );
}
export default UpdatedNote;