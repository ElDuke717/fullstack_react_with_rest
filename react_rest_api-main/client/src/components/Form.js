import React from 'react';
import { Navigate } from 'react-router-dom';

const Form = (props) => {
  const {
    cancel,
    errors,
    submit,
    submitButtonText,
    elements,
  } = props;

  function handleSubmit(event) {
    event.preventDefault();
    submit();
  }

  function handleCancel(event) {
    // event.preventDefault();
    // cancel();
    console.log('garbage');
  }

  return (
    <div>
      {/* <ErrorsDisplay errors={errors} /> */}
      <form >
      {/* Elements are passed through props and are used to add the input fields */}
        {elements()}
        <div className="pad-bottom">
          {/* I changed onSubmit for the form to onClick for handleSubmit below */}
          <button className="button" type="submit" onClick={handleSubmit}>{submitButtonText}</button>
          {/* This is where the CANCEL button is on the FORM.  We need to figure out how to connect it with handleCancel and ultimately with the cancel feature. i
          In the Authorization project, cancel is a function passed through props to handleCancel and it pushes routing to the history object.*/}
          <button className="button button-secondary" onClick={ console.log('CANCEL!')          }
          >Cancel</button>
        </div>
      </form>
    </div>
  );
}

// function ErrorsDisplay({ errors }) {
//   let errorsDisplay = null;

//   if (errors.length) {
//     errorsDisplay = (
//       <div>
//         <h2 className="validation--errors--label">Validation errors</h2>
//         <div className="validation-errors">
//           <ul>
//             {errors.map((error, i) => <li key={i}>{error}</li>)}
//           </ul>
//         </div>
//       </div>
//     );
//   }

//   return errorsDisplay;
// }

export default Form;