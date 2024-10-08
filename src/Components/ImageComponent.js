import React from "react";

const ImageComponent =({src,alt})=>{
    return(
        <div>
            <img src={src} alt={alt} style={{width:'100%'}} />
        </div>
    )
}

export default ImageComponent;