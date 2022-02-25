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
import UserSignUp from './components/UserSignUp';
import UserSignIn from './components/UserSignIn';
import UserSignOut from './components/UserSignOut';
import DeleteCourse from './components/DeleteCourse';
import NotFound from './components/NotFound';

//import withContext function from Context.js
import withContext from './Context';

//import PrivateRoute for protected routes
import PrivateRoute from './PrivateRoute';

//Connect UserSignUp component to Context
const HeaderWithContext = withContext(Header);
const CreateWithAuthentication = withContext(CreateCourse);
const UpdateWithAuthentication = withContext(UpdateCourse);
const UserSignUpWithContext = withContext(UserSignUp);
const UserSignInWithContext = withContext(UserSignIn);
// const CourseWithAuthentication = withContext(Courses);
const UserSignOutWithContext = withContext(UserSignOut);

export default () => (
    <Router>
      <div> 
      <HeaderWithContext />
      
      <Switch>
        <Route exact path="/" component={()=><Courses/>} />
        <Route path="/courses/:id" component={()=><CourseDetail />} />
        <Route path="/courses" component={()=><Courses/>} />        
        <PrivateRoute path="/create" component={CreateWithAuthentication} />
        <Route path="/courses/:id/update" component={UpdateWithAuthentication} />
        <Route exact path="/signin" component={UserSignInWithContext} /> 
         {/* Adding UserSignUpWithContext in the place of <UserSignUp /> allows UserSignUp to use the value passed by Provider */}
        <Route path="/signup" component={UserSignUpWithContext} />
        <Route path="/signout" component={UserSignOutWithContext} />
        <Route path="/deletecourse" component={()=><DeleteCourse/>} />
        <Route path="*" component={()=><NotFound/>} />
      </Switch>  
      </div>
    </Router>
  );



