import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link, useHistory } from "react-router-dom";
import { Context } from "../Context";
import axios from "axios";

const DeleteCourse = () => {
    //Get context to verity the authenticatedUser
    const context = useContext(Context);
    //useParams is a hook that returns an object with the id of the course from the URL - it will be used in the deleteCourse function
    let { id } = useParams();
    const [ course, setCourse ] = useState([])
   //React router's useHistory is used to access the history object.  We have to use useHistory since this is a functional component.
    const history = useHistory();
    
    console.log(context)
    console.log(id)
    
    //getCourseData pulls in the most up-to-date information from the server for the course.  It is called in the useEffect hook below.
    const getCourseData = () => {
        axios.get(`http://localhost:5000/api/courses/${id}`)
        //The response from axios request is saved into the state, pushed into the array, and then the array is returned.
        .then(response => setCourse(response.data))
            .catch(error => {
                console.log(error.message)
            });    
        }
        
    //useEffect is called after the component is rendered and allows the axios fetch request to complete before it proceeds.  It replaces componentDidMount and componentDidMount
        useEffect(() => {
            getCourseData();
        },[]);

    //Cancel uses history to redirect the user to the specific course page.  
        const cancel = () =>  {
            history.push(`/courses/${id}`);
        };
    
    return(
        <div className='delete--message'>
            <h1>Are you sure that you want to delete</h1>
            <h2>{course.title}?</h2>
            <button className="button">Yes, Delete It!</button>
            <button className="button button-secondary" onClick={cancel} >Cancel</button>
        </div>        
    )
}

export default  DeleteCourse;