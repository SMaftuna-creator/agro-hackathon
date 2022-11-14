import './App.css';
import { Routes, Route } from "react-router-dom"
import SignUp from './pages/SignUp/SignUp';
import Posts from './pages/Posts/Posts';
import NewProduct from './pages/NewProduct/NewProduct';
import PostItem from './pages/PostItem/PostItem';
import NewPost from './pages/NewPost/NewPost';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Posts/>} />
        <Route path="/signup" element={ <SignUp/> } />
        <Route path="newproduct" element={ <NewProduct/> } />
        <Route path="postitem" element={ <PostItem/> } />
        <Route path="newpost" element={ <NewPost/> } />
      </Routes>
      
    </div>
  );
}

export default App;