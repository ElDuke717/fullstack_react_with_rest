import React from 'react';


import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

//import app elements
import Header from './components/Header';
import Courses from './components/Courses';
import CourseDetail from './components/CourseDetail';
import CreateCourse from './components/CreateCourse';
import UpdateCourse from './components/UpdateCourse';
//import UserSignIn from './components/UserSignIn';
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
      <Switch>
        <Route exact path="/" render={()=><Courses/>} />
        <Route path="/courses" render={()=><Courses/>} />
        <Route path="/courses/:id" render={()=><CourseDetail />} />
        <Route path="/create" render={()=><CreateCourse/>} />
        <Route path="/courses/:id/update" render={()=><UpdateCourse/>} />
        {/* Adding UserSignUpWithContext in the place of <UserSignUp /> allows UserSignUp to use the value passed by Provider */}
        <Route path="/signin" render={()=>UserSignUpWithContext} />
        <Route path="/signup" render={()=><UserSignUp/>} />
        <Route path="/signout" render={()=><UserSignOut/>} />
        <Route path="/deletecourse" render={()=><DeleteCourse/>} />
        <Route path="*" render={()=><NotFound/>} />
      </Switch>  
      </div>
    </Router>
  );
}

export default App;
