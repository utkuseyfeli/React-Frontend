import { RouteComponentProps } from '@reach/router';
import React from 'react';
import { Lesson, Student } from '../acces/types';
import {addStudent} from "C:/Users/Utku/react-ts/src/Home/home.api"
import axios from "axios";


interface AddLessonProps extends RouteComponentProps{
    
}

const AddLesson: React.FC<AddLessonProps> = ({}) => {
    return (
        <div>
             <h1>Add Lesson Page</h1>

             <form >
                <label >Name</label>
                <input type="text" id="name"/>
                <br />
                <label >Credit</label>
                <input type="text" id="credit"/>
                <br />
                <label >Hours</label>
                <input type="text" id="hours"/>
                <br />
                <input type="button" value="Add the Lesson" onClick={() => { //cors hatası alıyorum 
                    const lesson = {
                        name: (document.getElementById("name") as HTMLInputElement).value,
                        credit: (document.getElementById("credit") as HTMLInputElement).value,
                        hours: (document.getElementById("hours") as HTMLInputElement).value,
                        teacherIds: []
                    };
                    // console.log((document.getElementById("name") as HTMLInputElement).value);

                    axios.post("http://localhost:6039/createLesson", lesson);
                }}/>
            </form>
        </div>
    );
}

export default AddLesson