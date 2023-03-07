
import React,{useEffect,createContext,useReducer,useContext} from 'react'
import './App.css';
import NavBar from './components/NavBar';
import About from './screens/About';
import Contact from './screens/Contact';
import {BrowserRouter as Router,Routes,Route ,useNavigate} from "react-router-dom"
import Home from './screens/Home';
import Footer from './components/Footer';
import AllPosts from './screens/AllPosts';
import PostDetail from './screens/PostDetail';
import CreatePost from './screens/CreatePost';
import Signup from './screens/Signup';
import Login from './screens/Login';
import {initialUserState,userReducer} from "./reducers/userReducers"
import MyAllPosts from './screens/MyAllPosts';

export const UserContext=createContext();

function DynamicRoutes(){ 

  const navigate=useNavigate();
  const {state,dispatch}=useContext(UserContext);

  useEffect(()=>{
    const token=localStorage.getItem("token");
    if(token){   // user is logedin
      const user=JSON.parse(localStorage.getItem("user"));
      const userState={'token':token,'user':user};
      const action={type:'LOGIN', payload:userState};
      dispatch(action);
      navigate('/posts');

    }
    else{
      navigate('/login');
    }

  },[])

  return (
    <Routes>
    <Route exact path="/" element={<Home/>} />
    <Route exact path="/posts" element={<AllPosts/>} />
    <Route exact path="/myallposts" element={<MyAllPosts/>} />
    <Route exact path="/signup" element={<Signup/>} />
    <Route exact path="/login" element={<Login/>} />
    <Route exact path="/posts/:postId/:userId" element={<PostDetail/>} />
    <Route exact path="/create" element={<CreatePost/>} />
    <Route exact path="/create/:postId/:userId" element={<CreatePost/>} />
    <Route exact path="/about" element={ <About/>} />
    <Route exact path="/contact" element={<Contact/>} />
    
    </Routes>
  )

  
}

function App() {

  const[state,dispatch]=useReducer(userReducer,initialUserState);

  return (
    <UserContext.Provider value={{state:state,dispatch:dispatch}}>
    <Router>
    <div >
    <NavBar/>
   <DynamicRoutes/>
   
    <Footer/>
    </div>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
