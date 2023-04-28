import React from "react";

const Clips = (clip, imgsrc) => {
    return (
        <>
        <div className="relative h-28 w-32 rounded-xl overflow-hidden">
            <img
            src={imgsrc}
            alt="img/clips"
            className=" inset-0 w-full h-full object-cover absolute
            top-0 left-0 right-0 rounded-xl opacity-100 z-10"/>
            <video>
                <source type="video/mp4" src={clip}/>
            </video>
        </div>
        </>
    )
}

export default Clips;