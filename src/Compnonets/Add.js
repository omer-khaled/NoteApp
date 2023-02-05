import { useEffect, useState } from "react";
import {postApi,AddAction} from '../Context'
import {useDispatch,useSelector} from 'react-redux'
function Add(){
    let dispath = useDispatch();
    let [color,setColor] = useState('red');
    let [title,setTitle] = useState('');
    let [content,setContent] = useState('');
    let colors = ['red','#e91e63','#3f51b5','#ff6600'];
    return(
        <div className="notebody">
            <div className="left">
                <input type='text' id="title"placeholder="Title" onInput={(e)=>{
                    setTitle(e.target.value);
                }} />
                <textarea type="text" id="contnet" placeholder="Content" onInput={(e)=>{
                    setContent(e.target.value);
                }}/>
                <button className="btn" onClick={(e)=>{
                    let obj = {
                        "color":color,
                        "title":title,
                        "content":content,
                        'Time':`${((new Date()).getHours())<10 ? `0${(new Date()).getHours()}`:(new Date()).getHours()}:${((new Date()).getMinutes())<10 ? `0${(new Date()).getMinutes()}`:(new Date()).getMinutes()} PM`,
                        "Date":`${((new Date()).getDate())<10 ? `0${(new Date()).getDate()}`:(new Date()).getDate()}-${ (((new Date()).getMonth()) + 1)<10 ? `0${((new Date()).getMonth()) + 1}`: ((new Date()).getMonth()) + 1}-${(new Date()).getFullYear()}`
                    }
                    dispath(postApi(obj));
                    document.getElementById('title').value = '';
                    document.getElementById('contnet').value = '';
                    let blocks=Array.from(document.getElementsByClassName('colo-block'));
                    blocks.map((element)=>{
                        element.style = 'border:none';
                    });
                }}>ADD</button>
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
    );
}
export default Add;