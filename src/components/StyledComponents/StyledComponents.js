import styled from "styled-components";

const HomePageWrapper=styled.div`
padding-top:80px;
display:flex;
 position: relative;
text-align: center;
align-items: center;
align-content: center;
`
const HomePageText=styled.span`

font-size:20px;
color:white;
position: absolute;
top: 90%;
left: 50%;
transform: translate(-50%, 100%);
`
const PhotosWrapper=styled.div`
display:flex;
flex-wrap:wrap;
flex-direction:row;
justify-content: space-around;
`
const PhotoImg=styled.img`
padding:10px;
width:300px;
height:auto;
`
const PostsWrapper=styled.div`
display:flex;
background-color:green;
`

export {HomePageWrapper,HomePageText,PhotosWrapper,PhotoImg, PostsWrapper,};