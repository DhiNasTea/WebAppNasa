import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [request, setRequest] = useState('https://api.nasa.gov/planetary/apod?api_key=fwa5UvpIxLLUa9c7KkqeoIJah4csTEzhNKxe6ai6')
  const [newPost, setNewPost] = useState(true)

  const [posts, setPosts] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);


  
  function getPostFromUrl(url, count) {

    // create url with "&[count] appended at the end"
    const newUrl = url + '&count=' + count;
    console.log(newUrl)
  


    return fetch(newUrl)
    .then((response) => response.json())
    .then((responseJson) => {
      if (newPost) {
        console.log("success")
        console.log(responseJson.url)
        
        // setPosts(posts => [...posts, {imagePath : responseJson.url, author: responseJson.copyright, title: responseJson.title, id: 5, new: true}])
          setPosts(posts => [...posts, ...responseJson])
      

        console.log("posts in home: ", posts)
        setNewPost(false)
      }
      return;
      
    })
    .catch((error) => {
      console.error(error);
    });
 }



  // useEffect here, calling for a new post only if newPost is true
  useEffect(() => {
    if (newPost) {
      getPostFromUrl(request, 10)
      setIsPending(false)
    }
    
      
  }, [])

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { posts.length !== 0 && <BlogList posts={posts} /> }
    </div>
  );
}
 
export default Home;
