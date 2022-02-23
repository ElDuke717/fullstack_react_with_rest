// We will need to use useContext for this component OR convert it to a Class componet.
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Form from './Form';

export default class CreateCourse extends Component {
    
   state = { 
        title:'',
        description:'',
        estimatedTime:'',
        materialsNeeded:'',
        errors:[]
   }

    render() {
        const { 
            title, 
            description,
            estimatedTime,
            materialsNeeded,
            errors} = this.state

    return (
        <div className="wrap">
            <h2>Create Course</h2>
            <Form 
            cancel={this.cancel}
            errors={errors}
            submit={this.submit}
            submitButtonText="Create Course"
            elements={() => (
                <React.Fragment>
                <input 
                    id="title" 
                    name="title" 
                    type="text"
                    value={title} 
                    onChange={this.change} 
                    placeholder="course title" />
                    <input 
                    id="description" 
                    name="description" 
                    type="textarea"
                    value={description} 
                    onChange={this.change} 
                    placeholder="enter a description of the course" />
                <input 
                    id="estimatedTime" 
                    name="estimatedTime" 
                    type="text"
                    value={estimatedTime} 
                    onChange={this.change} 
                    placeholder="estimated course length" />
                <input 
                    id="materialsNeeded" 
                    name="materialsNeeded"
                    type="text"
                    value={materialsNeeded} 
                    onChange={this.change} 
                    placeholder="materials" />
                </React.Fragment>
            )} />
        </div>
        )
    }

    change = (event) => {
        const name = event.target.name;
        const value = event.target.value;
    
        this.setState(() => {
          return {
            [name]: value
          };
        });
      }
    
      submit = () => {
        const { context } = this.props;
        
        const { 
            title, 
            description,
            estimatedTime,
            materialsNeeded
      } = this.state

      //Create a course that will get passed to context.data.createCourse and ultimately to the api.
        const course = { 
            title, 
            description,
            estimatedTime,
            materialsNeeded
        }

        console.log('this.state: ', this.state);
        console.log('course:', course);
        console.log('this.props: ', this.props);
        console.log('context: ', context);
        
   
    
    //Creates a new user using the createUser method in Data.js - user is passed as an argument and is the object  holds 
    //the user's information.

      context.data.createCourse(course)
      .then( errors => {
        if (errors.length) {
          this.setState({ errors });
        } else {
          //If the response from Data.js returns no errors or an empty array, it means the course was created successfully.
          console.log(`Course ${title} has been created!`);
          };
        })
        .catch( err => { //handle rejected promises
          console.log(err);
          this.props.history.push('/error'); //push the error to the history stack and render the error page
        });
      }
    
      cancel = () => {
        this.props.history.push('/'); //push the user back to the home page
      }
}


