import { useState, useEffect } from 'react';
import Post from './Post';

function App() {

  console.log('executing App.js');

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const reponseJson = await response.json();
      setPosts(reponseJson);
    }
    fetchPosts();
  }, []);

  return (
    <main>
      <h1>Hello</h1>
      <table>
        <tbody>
          <tr>
            <th>userId</th>
            <th>title</th>
            <th>body</th>
          </tr>
          {posts.map(post => <Post
            key={post.id}
            userId={post.userId}
            title={post.title}
            body={post.body}
          />)}
        </tbody>
      </table>
    </main>
  );
}

export default App;