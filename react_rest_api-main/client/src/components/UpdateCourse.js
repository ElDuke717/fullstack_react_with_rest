import React, { Component } from 'react';
import { Link }from 'react-router-dom';
export default class UpdateCourse extends Component {
    state = { 
        title: '',
        description: '',
        estimatedTime: '',
        materialsNeeded: '',
        errors: []
    }
    
    render() {
        const {
            title,
            description,
            estimatedTime,
            materialsNeeded,
            //errors,
        } = this.state;

    return (
            <div className="wrap">
                <h2>Update Course</h2>
                {/* <div className="validation--errors">
                    <h3>Validation Errors</h3>
                    <ul>
                        <li>Please provide a value for "Title"</li>
                        <li>Please provide a value for "Description"</li>
                    </ul>
                </div> */}
                <form>
                    <div className="main--flex">
                        <div>
                            <label htmlFor="courseTitle">Course Title</label>
                            <input 
                            id="courseTitle" 
                            name="courseTitle" 
                            type="text" 
                            value={title}
                            onChange={this.change}
                            />

                            <p>By: User</p>

                            <label htmlFor="courseDescription">Course Description</label>
                            <textarea 
                            id="courseDescription" 
                            name="courseDescription"
                            type="text"
                            value={description}
                            onChange={this.change}
                            />

                            
                        </div>
                        <div>
                        <label htmlFor="courseEstimatedTime">Estimated Time</label>
                            <input
                            id="courseEstimatedTime"
                            name="courseEstimatedTime"
                            type="text"
                            value={estimatedTime}
                            onChange={this.change}
                            />

                            <label htmlFor="courseMaterialsNeeded">Materials Needed</label>
                            <textarea
                            id="courseMaterialsNeeded"
                            name="courseMaterialsNeeded"
                            type="text"
                            value={materialsNeeded}
                            onChange={this.change}
                            />
                        </div>
                    </div>
                    <button className="button" type="submit">Update Course</button>
                    <button className="button button-secondary" 
                    // onClick={e.preventDefault()} 
                    href='/'><Link to="/">Cancel</Link></button>
                    </form>
            </div>
        )
    }
}

