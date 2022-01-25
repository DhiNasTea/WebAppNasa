const BlogList = ({ posts }) => {
  const link = "https://cdn.vox-cdn.com/thumbor/Pkmq1nm3skO0-j693JTMd7RL0Zk=/0x0:2012x1341/1200x800/filters:focal(0x0:2012x1341)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg"
  
  
  console.log("posts in bloglist:", posts)
  return (
    <div className="blog-list">
      {posts.map(blog => (
        <div className="blog-preview" key={getId(blog.url)} >
          <img src={blog.url} width={550}/>
          <h2>{ blog.title } - {blog.date}</h2>
          <p>{ blog.explanation }</p>
          <br></br>
          <a href=""  style={{  
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px',
          padding: '8px',
          paddingLeft: '20px',
          paddingRight: '20px'
 
        }}>Like</a>
        </div>
      ))}
    </div>
  );
}
 
function getId (url) {
  return `${ url }_${ new Date().getTime() }`;
}

export default BlogList;