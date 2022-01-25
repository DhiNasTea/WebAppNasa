import { useState } from "react";

const BlogList = ({ posts }) => {
const [isActive, setActive] = useState(true);
const toggleClass = (e) => {
    e.preventDefault();
    setActive(!isActive);
};
  
  console.log("posts in bloglist:", posts)
  return (
    <div className="blog-list">
      {posts.map((blog, i) => (
        <div className="blog-preview" key={getId(blog.url)} >
          <img src={blog.url} width={550}/>
          <h2>{ blog.title } - {blog.date}</h2>
          <p>{ blog.explanation }</p>
          <br></br>
          <a href="" className={isActive ? "likes" : "likesClicked"} onClick={toggleClass}>Like</a>
        </div>
      ))}
    </div>
  );
}
 
function getId (url) {
  return `${ url }_${ new Date().getTime() }`;
}


// for the a tag: style={{  color: 'white', backgroundColor: '#f1356d',borderRadius: '8px',padding: '8px',paddingLeft: '20px',paddingRight: '20px'}}

export default BlogList;