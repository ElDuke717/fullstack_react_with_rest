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
  //const [errors, setErrors] = useState([]);
  console.log('chicken tenders')
  const change = (event) => {
    const value = event.target.value;
    switch (event.target.firstName) {
      case "firstName":
        setfirstName(value);
        break;
      case "lastName":
        setlastName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        return;
    }
  }  
  
  console.log('chicken fingers')

  // const submit = () => {
  //   //Create user
  //   const user = {
  //     firstName: firstName,
  //     lastName: lastName,
  //     email: email,
  //     password: password,
  //   };


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
            <Form 
              //cancel={cancel}
              //errors={errors}
              //submit={submit}
              submitButtonText="Sign Up"
              elements={() => (
                <React.Fragment>
                  <input 
                    id="firstName" 
                    name="firstName" 
                    type="text"
                    value={firstName} 
                    onChange={change} 
                    placeholder="First Name" />
                    <input 
                    id="lastName" 
                    name="lastName" 
                    type="text"
                    value={lastName} 
                    onChange={change} 
                    placeholder="Last Name" />
                  <input 
                    id="emailAddress" 
                    name="emailAddress" 
                    type="text"
                    value={email}  
                    onChange={change} 
                    placeholder="Email Address" />
                  <input 
                    id="password" 
                    name="password"
                    type="password"
                    value={password} 
                    onChange={change} 
                    placeholder="Password" />
                </React.Fragment>
              )} />
            <p>
              Already have a user account? <Link to="/signin">Click here</Link> to sign in!
            </p>
          </div>
        </div>
      );
}
  