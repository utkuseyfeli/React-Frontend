import { RouteComponentProps } from '@reach/router';
import React from 'react';
import { Lesson, Student } from '../acces/types';
import {addStudent} from "C:/Users/Utku/react-ts/src/Home/home.api"
import axios from "axios";


interface AddTeacherProps extends RouteComponentProps{
    
}

const AddTeacher: React.FC<AddTeacherProps> = ({}) => {
    return (
        <div>
             <h1>Add Teacher Page</h1>

             <form >
                <label >Name</label>
                <input type="text" id="name"/>
                <br />
                <label >Surname</label>
                <input type="text" id="surname"/>
                <br />
                <input type="button" value="Add the Teacher" onClick={() => { //cors hatası alıyorum 
                    const teacher = {
                        name: (document.getElementById("name") as HTMLInputElement).value,
                        surname: (document.getElementById("surname") as HTMLInputElement).value,
                        lessonIds: []
                    };
                    console.log((document.getElementById("name") as HTMLInputElement).value);

                    axios.post("http://localhost:6039/createTeacher", teacher);
                }}/>
            </form>
        </div>
    );
}

export default AddTeacher