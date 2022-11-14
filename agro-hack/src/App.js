import './App.css';
import { Routes, Route } from "react-router-dom"
import SignUp from './pages/SignUp/SignUp';
import Posts from './pages/Posts/Posts';
import NewProduct from './pages/NewProduct/NewProduct';
import PostItem from './pages/PostItem/PostItem';
import NewPost from './pages/NewPost/NewPost';
import Content from './pages/Content';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Content/> } />
        <Route path="/" element={ <SignUp/> } />
        <Route path="newproduct" element={ <NewProduct/> } />
        <Route path="posts" element={ <Posts/> } />
        <Route path="postitem" element={ <PostItem/> } />
        <Route path="newpost" element={ <NewPost/> } />
        

      </Routes>
      
    </div>
  );
}

export default App;