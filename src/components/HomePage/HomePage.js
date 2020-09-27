import React from "react";
import {HomePageWrapper,
         HomePageText} 
    from "../StyledComponents/StyledComponents";
import "./homepage.css";

const HomePage =()=>{

    return(        
            <HomePageWrapper>
                <img className="HPImage" alt="cat" src="https://cdn3.vectorstock.com/i/1000x1000/18/32/siluet-branches-tree-with-cat-on-swing-vector-25181832.jpg"></img>
                <HomePageText> Guess, what animal do i like?</HomePageText>
            </HomePageWrapper>            
    )
}

export default HomePage;