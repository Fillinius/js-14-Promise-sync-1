const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";
let isLoading = false;

const createNewPost = async () => {
 try { isLoading = true;
  const response = await fetch(POSTS_URL, {
    method: "POST"
  })
    const post = await response.json()
    console.log("result", post);
   
  } catch(error) {
      console.log("error", error);
    }
    finally {
      isLoading = false;
    };
};
createNewPost();