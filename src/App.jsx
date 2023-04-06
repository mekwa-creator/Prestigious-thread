import { Routes, Route, } from "react-router-dom";
import Navigation from "./Navigation/Navigation.component";
import Home from "./Routes/Home/Home.component";
import SignIn from "./Routes/Sign-in/Sign-in.component";

const Shop = () => {
  return (
    <h1>i am the shop page</h1>
  )
}

const App =() => {

  
  return (
    <Routes>
      <Route path="/" element={<Navigation/>}> 
      <Route index element={<Home/>}/>
    <Route path='shop' element={<Shop/>}/>
    <Route path='signin' element={<SignIn/>}/>
    </Route>
    
</Routes>
   
    
    

      
  );
};

export default App
