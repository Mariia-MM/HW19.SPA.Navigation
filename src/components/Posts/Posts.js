import React from "react";
import Post from "./post";
import myPhoto from "../img/my-photo.jpg";


const MY_IMAGE = myPhoto;



const postArray = [
    {
      authorImage:MY_IMAGE,
      authorName: "Mariia Mytsko",
      authorNickname: "@Mariia_Myt",
      postImage: "https://cdn.pixabay.com/photo/2019/06/06/20/16/cat-4256821_1280.jpg",
      postContent: "I like cats :)",
      postDate: "25 Sept.",
    },
    {
      authorImage:
        "https://cdn.pixabay.com/photo/2020/05/09/13/29/photographer-5149664__340.jpg",
      authorName: "Who Knows",
      authorNickname: "@some-one",
      postImage:
        "https://cdn.pixabay.com/photo/2020/02/11/22/40/sea-4841142__340.jpg",
      postContent: "Sea power",
      postDate: "27 Sept.",
    },
    {
      authorImage:
        "https://cdn.pixabay.com/photo/2020/09/17/13/59/cat-5579221__340.jpg",
      authorName: "Shelena",
      authorNickname: "@cat",
      postImage:
        "https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/globalmeatnews.com/headlines/livestock/red-meat-report-slammed-by-industry/9038653-1-eng-GB/Red-meat-report-slammed-by-industry_wrbm_large.jpg",
      postContent: "Is that for me?",
      postDate: "27 Sept.",
    },
  ];
  
  class Posts extends React.Component {
    state = {};
  
    render() {
      return (
        <div className="posts-wrapper">
          {postArray.map((post) => {
            return (
              <Post
                name={post.authorName}
                photo={post.authorImage}
                nickname={post.authorNickname}
                content={post.postContent}
                image={post.postImage}
                date={post.postDate}
              />
            );
          })}
        </div>
      );
    }
  }
  
  export default Posts;