import React, { 
  useState,
  // useEffect 
} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
//import Context from './Context'



export default function UserSignUp() {
    // const context = useContext(Context.Context);
    // let history = useHistory(); //Navigate is used in place of useHistory() 
  
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [emailAddress, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  let handleSubmit = async (e) => {
    e.preventDefault();   
        const userData = {
          firstName,
          lastName,
          emailAddress,
          password,            
        }
        console.log(userData);   
        try {
          await axios.post('http://localhost:5000/api/users', userData)
          .then(response => {
            console.log(response.status);
          })
          } catch (error) {
            console.log(error.message)
            //console.log('Here are the errors: ' + error.response.data.errors)
            //Errors are provided by the API and via the response.data.errors object.  setErrors pushes them onto the state.
            setErrors(error.response.data.errors)
          }         
  }
    

    // context.data.createUser(user)
    //   .then( errors => {
    //     if (errors.length) {
    //       setErrors(errors);
    //     } else {
    //       context.actions.signIn(email, password)
    //       .then(() => {
    //       history.push('/authenticated');
    //     });
    //   }
    // })
    // .catch((err) => {
    //   console.log(err);
    //  // context.history.push('/error');
    // });

    // const cancel = () => {
    //   context.history.push('/');
    //  }
  
  
      return (
        <div className="form--centered">
          <div className="grid-33 centered signin">
            <h2>Sign Up</h2>
               {/* Conditional logic that displays errors. Errors are passed in from state and map is used to print them to the screen */}
              { errors.length > 0 && (
                <div className="validation--errors">
                  <h3>Validation Errors</h3>
                  <ul>
                    {errors.map((error, i) => {
                      return <li key={i}>{error}</li>
                    })}
                    </ul>
                </div>)}
            <form>
              {/* //cancel={cancel}
              //errors={errors}
              //submit={submit}
              submitButtonText="Sign Up" */}
              
              
                  <label htmlFor="firstName">First Name</label>
                  <input 
                    id="firstName" 
                    name="firstName" 
                    type="text"
                    value={firstName} 
                    onChange={(e) => setfirstName(e.target.value)}
                    placeholder="First Name" />
                    
                  <label htmlFor="lastName">Last Name</label>
                    <input 
                    id="lastName" 
                    name="lastName" 
                    type="text"
                    value={lastName} 
                    onChange={(e) => setlastName(e.target.value)}
                    placeholder="Last Name" />
                  
                  <label htmlFor="email">Email</label>
                  <input 
                    id="emailAddress" 
                    name="emailAddress" 
                    type="text"
                    value={emailAddress}  
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address" />
                  
                  <label htmlFor="password">Password</label>
                  <input 
                    id="password" 
                    name="password"
                    type="password"
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password" />
                <button className="button" type="submit" onClick={handleSubmit}>Sign Up</button>
                <button className="button button-secondary">
                    <Link to="/">Cancel</Link> </button>
            
              </form>
            <p>
              Already have a user account? <Link to="/signin">Click here</Link> to sign in!
            </p>
          </div>
        </div>
      );
}
  