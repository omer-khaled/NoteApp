import { legacy_createStore,combineReducers,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const AddAction = (obj)=>{
    return{
        type:'Add',
        payload : obj
    }
}
const getAction = (objs)=>{
    return{
        type:'Get',
        payload : objs
    }
}
const AddDoneAction = (obj)=>{
    return{
        type:'AddDone',
        payload : obj
    }
}
const getDoneAction = (objs)=>{
    return{
        type:'GetDone',
        payload : objs
    }
}
const AddDeleteAction = (obj)=>{
    return{
        type:'AddDelete',
        payload : obj
    }
}
const getDeleteAction = (objs)=>{
    return{
        type:'GetDelete',
        payload : objs
    }
}
// after actions
let postApi = (obj)=>{
    return async(dispath)=>{
        await fetch('http://localhost:3004/notes',{
            method:'POST',
            headers:{
                "Content-Type":"Application/json",
            },
            body:JSON.stringify(obj)
        });
        dispath(AddAction(obj));
    }
}
let getApi = ()=>{
    return async(dispath)=>{
        let  fetchData = await fetch('http://localhost:3004/notes');
        let  data=  await fetchData.json();
        dispath(getAction(data));
    }
}
let updateApi = (obj)=>{
    return async(dispath)=>{
        console.log(obj.id);
        await fetch(`http://localhost:3004/notes/${obj.id}`,{
            method:'PUT',
            headers:{
                "Content-Type":"Application/json",
            },
            body:JSON.stringify(obj)
        });
        dispath(getApi());
    }
}
let deleteDoApi = (element,id)=>{
    return async(dispath)=>{
        await fetch(`http://localhost:3004/notes/${id}`,{
            method:'DELETE'
        });
        dispath(postDoneApi(element));
        dispath(getApi());
    }
}
let deleteDelApi = (element,id)=>{
    return async(dispath)=>{
        await fetch(`http://localhost:3004/notes/${id}`,{
            method:'DELETE'
        });
        dispath(postdeleteApi(element));
        dispath(getApi());
    }
}
// 
let postDoneApi = (obj)=>{
    return async(dispath)=>{
        await fetch('http://localhost:3004/Done',{
            method:'POST',
            headers:{
                "Content-Type":"Application/json",
            },
            body:JSON.stringify(obj)
        });
        dispath(AddDoneAction(obj));
    }
}
let getDoneApi = ()=>{
    return async(dispath)=>{
        let  fetchData = await fetch('http://localhost:3004/Done');
        let  data=  await fetchData.json();
        dispath(getDoneAction(data));
    }
}
let deleterecoveApi = (element,id)=>{
    return async(dispath)=>{
        await fetch(`http://localhost:3004/Done/${id}`,{
            method:'DELETE'
        });
        dispath(postApi(element));
        dispath(getDoneApi());
    }
}
let deleteDoneDelApi = (element,id)=>{
    return async(dispath)=>{
        await fetch(`http://localhost:3004/Done/${id}`,{
            method:'DELETE'
        });
        dispath(postdeleteApi(element));
        dispath(getDoneApi());
    }
}
// 
// 
let postdeleteApi = (obj)=>{
    return async(dispath)=>{
        await fetch('http://localhost:3004/delete',{
            method:'POST',
            headers:{
                "Content-Type":"Application/json",
            },
            body:JSON.stringify(obj)
        });
        dispath(AddDeleteAction(obj));
    }
}
let getdeleteApi = ()=>{
    return async(dispath)=>{
        let  fetchData = await fetch('http://localhost:3004/delete');
        let  data=  await fetchData.json();
        dispath(getDeleteAction(data));
    }
}
let deletedeleteApi = (id)=>{
    return async(dispath)=>{
        await fetch(`http://localhost:3004/delete/${id}`,{
            method:'DELETE'
        });
        dispath(getdeleteApi());
    }
}
// 
const reduser1 = (state=[],action)=>{
    switch(action.type){
        case 'Add':
            return [...state,action.payload];
        case 'Get':
            return [...action.payload];
        default:
            return state;
    }
};
const reduser2 = (state=[],action)=>{
    switch(action.type){
        case 'AddDone':
            return [...state,action.payload];
        case 'GetDone':
            return [...action.payload]; 
        default:
            return state;
    }
};
const reduser3 = (state=[],action)=>{
    switch(action.type){
        case 'AddDelete':
            return [...state,action.payload];
        case 'GetDelete':
            return [...action.payload];
        default:
            return state;
    }
};
const reusers = combineReducers({
    'notes':reduser1,
    'done':reduser2,
    'deleted':reduser3,
})
let store = legacy_createStore(reusers,applyMiddleware(thunk));

export {store,deleteDoneDelApi,deleterecoveApi,updateApi,AddAction,postApi,getAction,getApi,deleteDelApi,deleteDoApi,postDoneApi,getDoneApi,postdeleteApi,getdeleteApi,deletedeleteApi};
