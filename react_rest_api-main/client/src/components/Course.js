import React from 'react';
import { Link } from "react-router-dom";


//This component is used to populate the Courses component's list of courses. Props are passed from Courses
const Course = (props) => {
//     Renders the course cards in Courses, they are links and pass props to the URL that are used by useParams and ultimately CourseDetail
    return(
            <Link className="course--module course--link" to={`/courses/${props.id}`} >
                    <h2 className="course--label">Course</h2>
                    <h3 className="course--title">{props.title}</h3>
            </Link>

    )
}

export default Course;