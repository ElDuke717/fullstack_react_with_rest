import React, { 
  useState 
} from 'react';
import { Link, 
    Navigate
    } from 'react-router-dom';
import Form from './Form';
//import Context from './Context'



export default function UserSignUp() {
    // const context = useContext(Context.Context);
    console.log('chicken hearts')
    // let history = useHistory(); //Navigate is used in place of useHistory() 
  
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);
  console.log('chicken tenders')
  // const change = (event) => {
  //   const value = event.target.value;
  //   switch (event.target.firstName) {
  //     case "firstName":
  //       setfirstName(value);
  //       break;
  //     case "lastName":
  //       setlastName(value);
  //       break;
  //     case "email":
  //       setEmail(value);
  //       break;
  //     case "password":
  //       setPassword(value);
  //       break;
  //     default:
  //       return;
  //   }
  // }
    
  console.log('chicken fingers')

  let handleSubmit = async (e) => {
    e.preventDefault();
    console.log('cereal');
    try {
        const response = await fetch('http://localhost:5000/api/courses', {
            method: 'POST',
            body: JSON.stringify({
                firstName,
                lastName,
                email,
                password,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log(response);
        console.log(firstName);
        console.log('sausage');
        const json = await response.json();
        console.log(json);
        console.log(errors);
        if (json.errors) {
            console.log('chicken in a biscuit');
            setErrors(json.errors);
            console.log('oatmeal');
        } else {
            setfirstName('');
            setlastName('');
            setEmail('');
            setPassword('');
            setErrors([]);
        }
    } catch (err) {
        console.error(err);
        console.log('pancakes');
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
  
    console.log('french fries')
      return (
        <div className="form--centered">
          <div className="grid-33 centered signin">
            <h2>Sign Up</h2>
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
                    value={email}  
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
  