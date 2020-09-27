import React from "react";
import {PhotosWrapper,
    PhotoImg} from "../StyledComponents/StyledComponents";
const Photos =()=>{    
        return(
            <PhotosWrapper>
                <PhotoImg className="PhotosImg" alt="img1" src="https://cdn.pixabay.com/photo/2017/10/27/09/38/halloween-2893710_1280.jpg"></PhotoImg>
                <PhotoImg className="PhotosImg" alt="img1" src="https://cdn.pixabay.com/photo/2015/11/07/11/34/kitten-1031261__340.jpg"></PhotoImg>
                <PhotoImg className="PhotosImg" alt="img1" src="https://cdn.pixabay.com/photo/2017/12/09/21/33/sunset-3008779__340.jpg"></PhotoImg>
                <PhotoImg className="PhotosImg" alt="img1" src="https://cdn.pixabay.com/photo/2018/05/04/16/50/cat-3374422__340.jpg"></PhotoImg>
                <PhotoImg className="PhotosImg" alt="img1" src="https://cdn.pixabay.com/photo/2018/09/15/08/14/cat-3678858__340.jpg"></PhotoImg>
                <PhotoImg className="PhotosImg" alt="img1" src="https://cdn.pixabay.com/photo/2016/03/28/10/05/kitten-1285341__340.jpg"></PhotoImg>
                <PhotoImg className="PhotosImg" alt="img1" src="https://cdn.pixabay.com/photo/2015/03/27/13/16/cat-694730__340.jpg"></PhotoImg>
                <PhotoImg className="PhotosImg" alt="img1" src="https://cdn.pixabay.com/photo/2016/02/19/10/05/cat-1209067__340.jpg"></PhotoImg>
            </PhotosWrapper>
        )
    }
export default Photos;