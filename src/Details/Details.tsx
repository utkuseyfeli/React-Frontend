import { RouteComponentProps } from '@reach/router';
import React from 'react';
import { Lesson, Student } from '../acces/types';
import {addStudent} from "C:/Users/Utku/react-ts/src/Home/home.api"
import axios from "axios";


interface DetailsProps extends RouteComponentProps{
    
}

const Details: React.FC<DetailsProps> = ({}) => {
    return (
        <div>
             <h1>Add Student Page</h1>

             <form >
                <label >Name</label>
                <input type="text" id="name"/>
                <br />
                <label >Surname</label>
                <input type="text" id="surname"/>
                <br />
                <input type="button" value="Add the Student" onClick={() => { //cors hatası alıyorum 
                    const student = {
                        name: (document.getElementById("name") as HTMLInputElement).value,
                        surname: (document.getElementById("surname") as HTMLInputElement).value,
                        classes: []
                    };
                    console.log((document.getElementById("name") as HTMLInputElement).value);

                    axios.post("http://localhost:6039/createStudent", student);
                }}/>
            </form>
        </div>
    );
}

export default Details