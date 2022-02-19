import React from 'react';


import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

//import app elements
import Header from './components/Header';
import Courses from './components/Courses';
import CourseDetail from './components/CourseDetail';
import CreateCourse from './components/CreateCourse';
import UpdateCourse from './components/UpdateCourse';
import UserSignIn from './components/UserSignIn';
import UserSignUp from './components/UserSignUp';
import UserSignOut from './components/UserSignOut';
import DeleteCourse from './components/DeleteCourse';
import NotFound from './components/NotFound';

//import withContext function from Context.js
import withContext from './Context';

//Connect UserSignUp component to Context
const UserSignUpWithContext = withContext(UserSignUp);

function App() {

  return (
    <Router>
      <div> 
      <Header />
      <Routes>
        <Route exact path="/" element={<Courses/>} />
        <Route path="/courses" element={<Courses/>} />
        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="/create" element={<CreateCourse/>} />
        <Route path="/courses/:id/update" element={<UpdateCourse/>} />
        {/* Adding UserSignUpWithContext in the place of <UserSignUp /> allows UserSignUp to use the value passed by Provider */}
        <Route path="/signin" element={UserSignUpWithContext} />
        <Route path="/signup" element={<UserSignUp/>} />
        <Route path="/signout" element={<UserSignOut/>} />
        <Route path="/deletecourse" element={<DeleteCourse/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>  
      </div>
    </Router>
  );
}

export default App;
