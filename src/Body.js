import { Children } from "react";

function Body(props){
    return(
        <div className="body">
            {props.children}
        </div>
    );
}
export default Body;