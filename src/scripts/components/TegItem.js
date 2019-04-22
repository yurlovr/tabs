import React from "react";

const TegItem = ({name, color, callback}) => {
console.log({name, color, callback});
    return(
            <span style={{width:15, height:7, backgroundColor:color, cursor:"pointer"}} id={name} onClick={(event)=>callback(event)}>
                {name}
            </span>
    )
};

export default TegItem;