import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function CreateCourse() {
    
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [estimatedTime, setEstimatedTime] = useState('');
    const [materialsNeeded, setMaterialsNeeded] = useState('');
    const [errors, setErrors] = useState([]);
    
    let handleSubmit = async (e) => {
        e.preventDefault();
        console.log('cereal');
        try {
            const response = await fetch('http://localhost:5000/api/courses', {
                method: 'POST',
                body: JSON.stringify({
                    title,
                    description,
                    estimatedTime,
                    materialsNeeded,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log(response);
            console.log(title);
            console.log('sausage');
            const json = await response.json();
            console.log(json);
            console.log(errors);
            if (json.errors) {
                console.log('chicken in a biscuit');
                setErrors(json.errors);
                console.log('oatmeal');
            } else {
                setTitle('');
                setDescription('');
                setEstimatedTime('');
                setMaterialsNeeded('');
                setErrors([]);
            }
        } catch (err) {
            console.error(err);
            console.log('pancakes');
        }
    }

    return (
            <div className="wrap">
                <h2>Create Course</h2>
                    { errors.length > 0 ? 
                    <div className="validation--errors">
                        <h3>Validation Errors</h3>
                        <ul>
                            <li>Please provide a value for "Title"</li>
                            <li>Please provide a value for "Description"</li>
                        </ul> 
                    </div> 
                : null }
                <form >
                    <div className="main--flex">
                        <div>
                            <label htmlFor="courseTitle">Course Title</label>
                            <input 
                            id="courseTitle" 
                            name="courseTitle" 
                            type="text" 
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            />
                            {/* User will have to be added dynamically after authorization is set up. */}
                            <p>By: User</p>

                            <label htmlFor="courseDescription">Course Description</label>
                            <textarea 
                            id="courseDescription" 
                            name="courseDescription"
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            />

                            
                        </div>
                        <div>
                        <label htmlFor="courseEstimatedTime">Estimated Time</label>
                            <input
                            id="courseEstimatedTime"
                            name="courseEstimatedTime"
                            type="text"
                            value={estimatedTime}
                            onChange={(e) => setEstimatedTime(e.target.value)}
                            />

                            <label htmlFor="courseMaterialsNeeded">Materials Needed</label>
                            <input
                            id="courseMaterialsNeeded"
                            name="courseMaterialsNeeded"
                            type="text"
                            value={materialsNeeded}
                            onChange={(e) => setMaterialsNeeded(e.target.value)}
                            />
                        </div>
                    </div>
                    <button className="button" type="submit" onClick={handleSubmit}>Create Course</button>
                    <button className="button button-secondary">
                    <Link to="/">Cancel</Link> </button>
                    </form>  
            </div>
        )
    }


