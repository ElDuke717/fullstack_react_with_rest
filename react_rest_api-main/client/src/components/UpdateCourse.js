import React, { Component } from 'react';
import axios from 'axios';
import Form from './Form';

export default class UpdateCourse extends Component {
   
   state = { 
        title:'',
        description:'',
        estimatedTime:'',
        materialsNeeded:'',
        userId: this.props.context.authenticatedUser.id,
        errors:[]
   }

    //componentDidMount is called after the component is rendered and allows the axios fetch request to complete before it proceeds. 
    componentDidMount() {
        this.getData();
    }

     //`http://localhost:5000/api/courses/${id}` pulls in the course id from the URL and uses it to pull the course information from the server.
     getData = () => {
        axios.get(`http://localhost:5000/api/courses/${this.courseId}`)
        //The response from axios request is saved into the state, pushed into the array, and then the array is returned.
        .then(response => {
             console.log(response.data)}
            )
        .catch(error => {
            console.log(error.message)
        });    
        }

    render() {
        
    //Context is pulled from props via destructuring so that it's properties can be used. 
    const { context } = this.props;
    const authUser = context.authenticatedUser;

    //determine the length of the URL route for the course
    const courseRouteLength = this.props.location.pathname.length;
    //initialize the variable to hold the course route:
    let courseId;
    
    //determine the courseId from the URL route based on the length of the route
    if (courseRouteLength === 17) {
        courseId = +this.props.location.pathname.substring(9, 10);
    }
    if (courseRouteLength === 18) {
        courseId = +this.props.location.pathname.substring(9, 11);
    } else if (courseRouteLength > 18) { 
        courseId = +this.props.location.pathname.substring(9, 12);}
    console.log(courseRouteLength);
    console.log(courseId);

        const { 
            title, 
            description,
            estimatedTime,
            materialsNeeded,
            userId,
            errors} = this.state

            console.log(this.state);

    return (
        <div className="wrap">
            <h2>Update Course</h2>
            <Form 
            cancel={this.cancel}
            errors={errors}
            submit={this.submit}
            submitButtonText="Update Course"
            elements={() => (
                <React.Fragment>
                <div className="main--flex">
                    <div>
                        <label htmlFor="courseTitle">Course Title</label>
                        <input 
                            id="courseTitle" 
                            name="title" 
                            type="text"
                            value={title} 
                            onChange={this.change} 
                            placeholder={title} />
                        <p>By {`${authUser.firstName} ${authUser.lastName}`}</p>
                        <label htmlFor="courseDescription">Course Description</label>
                        <textarea 
                            id="courseDescription" 
                            name="description" 
                            type="textarea"
                            value={description} 
                            onChange={this.change} 
                            placeholder={description} />
                        </div>
                        <div>
                            <label htmlFor="estimatedTime">Estimated Time</label>
                            <input 
                                id="estimatedTime" 
                                name="estimatedTime" 
                                type="text"
                                value={estimatedTime} 
                                onChange={this.change} 
                                placeholder={estimatedTime} />
                            <label htmlFor="materialsNeeded">Materials Needed</label>
                            <textarea 
                                id="materialsNeeded" 
                                name="materialsNeeded"
                                type="text"
                                value={materialsNeeded} 
                                onChange={this.change} 
                                placeholder={materialsNeeded} />
                    </div>    
                </div>
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
            materialsNeeded,
            userId: context.authenticatedUser.id,
            emailAddress: context.authenticatedUser.emailAddress, 
            password: context.authenticatedUser.password
        }

        console.log('this.state: ', this.state);
        console.log('course:', course);
        console.log('this.props: ', this.props);
        console.log('context: ', context);
        
   
    
    //Creates a new user using the createUser method in Data.js - user is passed as an argument and is the object  holds 
    //the user's information.

      context.data.updateCourse(course)
      .then( errors => {
        if (errors.length) {
          this.setState({ errors });
        } else {
          //If the response from Data.js returns no errors or an empty array, it means the course was created successfully.
          console.log(`Course ${title} has been updated!`);
            this.props.history.push('/');
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


