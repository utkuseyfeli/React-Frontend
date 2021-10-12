/* eslint-disable react/style-prop-object */
import { IconButton, Table, TableBody, TableCell, TableHead, TableRow, Button } from '@material-ui/core';
import { Link, navigate, RouteComponentProps } from '@reach/router';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Lesson, Student, Teacher } from '../acces/types';
import { deleteLesson, deleteTeacher, getStudentsList, getTeacher} from './home.api';
import { getTeachersList, getLessonsList, deleteStudent } from './home.api';
import DeleteIcon from '@material-ui/icons/Delete';


interface HomeProps extends RouteComponentProps{

}

const Home: React.FC<HomeProps> = ({}) => {

    const [students, setStudents] = useState<Student[] | null>(null)
    const [teachers, setTeachers] = useState<Teacher[] | null>(null)
    const [lessons, setLessons] = useState<Lesson[] | null>(null)

    function fetchLessons(std: Student){
        var lsns:string[];
        lsns = [];

        if(typeof std.classes !=="undefined" && std.classes.length > 0){
            std.classes.forEach( (les) => {
                lsns.push(les.name);
                lsns.push(", ");
           });
        }
        // console.log(lsns);
        return lsns;
    }
    
    // function fetchTeachers(lsn: Lesson){
    //     var tchrs:string[];
    //     tchrs = [];
        
    //     if(typeof lsn.teachers !== 'undefined' && lsn.teachers.length > 0){
    //         lsn.teachers.forEach((tcr) =>{
    //             tchrs.push(tcr.name);
    //             tchrs.push(" ");
    //             tchrs.push(tcr.surname);
    //             tchrs.push(", ");
    //         });
    //     }
    //     return tchrs;
    // }

    

    // function fetchLessonsFromTeacher(tch: Teacher){
    //     var lssns:string[];
    //     lssns =[];

    //     if(typeof tch.lessons !== 'undefined' && tch.lessons.length > 0){
    //         tch.lessons.forEach((lsn) =>{
    //             lssns.push(lsn.name);
    //             lssns.push(", ");
    //         });
    //     }

    //     return lssns;
    // }

    useEffect(() => {
        const fetchStudentsList = async () => {
            const studentsList = await getStudentsList();
            //console.log(studentsList);
            setStudents(studentsList);
        }
        
        const fetchTeachersList = async() => {
            const teachersList = await getTeachersList();
            //console.log(teachersList)
            setTeachers(teachersList);
        }

        const fetchLessonsList = async() =>{
            const lessonsList = await getLessonsList();
            setLessons(lessonsList)
        }
        
        fetchStudentsList();
        fetchTeachersList();
        fetchLessonsList();
        
    }, [])

    function fetchTeachers1(lsn: Lesson){
        var tchrs:string[];
        tchrs = [];

        if(typeof lsn.teacherIds !== 'undefined' && lsn.teacherIds.length > 0){
            lsn.teacherIds.forEach((tcr) =>{
                // var tcr1 = getTeacher(tcr);
                // console.log(tcr1);
                // console.log(tcr)
                // tchrs.push(tcr);
                teachers?.forEach((teacher) =>{
                    if(teacher.id === tcr){
                        tchrs.push(teacher.name);
                        tchrs.push(" ");
                        tchrs.push(teacher.surname);
                        tchrs.push(", ");
                    }
                });
            });
        }
        return tchrs;
    }

    function fetchLessonsFromTeacher(tch: Teacher) {
        var lssns: string[];
        lssns = [];

        if (typeof tch.lessonIds !== 'undefined' && tch.lessonIds.length > 0) {
            tch.lessonIds.forEach((lsn) => {
                lessons?.forEach((lesson)=>{
                    if(lesson.lessonId === lsn){
                        lssns.push(lesson.name);
                        lssns.push(", ");
                    }
                });
            });
        }

        return lssns;
    }

    return (
    <div> 
        <h1> Students </h1>
        <hr />
        <Table>
           <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Surname</TableCell>
                    <TableCell>ID</TableCell>
                    <TableCell>Lessons</TableCell>
                    <TableCell></TableCell>        
                </TableRow>
           </TableHead>
           <TableBody>
               {students && students.map(student =>(
                   <TableRow /*key={student.studentId}*/>
                       <TableCell>
                           {student.name}
                       </TableCell>
                       <TableCell>
                           {student.surname}
                       </TableCell>
                       <TableCell>
                           {student.studentId}
                       </TableCell>
                       <TableCell>
                            {fetchLessons(student)}
                       </TableCell>
                       <TableCell>
                           <IconButton value={student.studentId} onClick={() => {
                               deleteStudent(student.studentId);
                                window.location.reload();
                            }}>
                               <DeleteIcon></DeleteIcon>
                           </IconButton>
                        <Button variant="contained" onClick={() => {var x: string = student.studentId; console.log(x); var url: string = "/connect/" + x;navigate(url);}}>Add a class </Button>
                       </TableCell>
                   </TableRow>
               ))}
           </TableBody>
        </Table>
        
        <Link to="/addStudent"> Add a Student </Link>
        
        
        <hr />

        <h1>Teachers</h1>
        <hr />
        <table>
            <tr>
                <th>Name</th>
                <th>Surname</th>
                <th>id</th>
                <th>Lessons</th>
                <th></th>
            </tr>
            
            {teachers && teachers.map(teacher =>(
                <tr>
                    <td>{teacher.name}</td>
                    <td>{teacher.surname}</td>
                    <td>{teacher.id}</td>
                    <td>{fetchLessonsFromTeacher(teacher)}</td>
                    <td>
                        <IconButton onClick={()=> {
                            deleteTeacher(teacher.id);
                            window.location.reload();
                        }}>
                            <DeleteIcon></DeleteIcon>
                        </IconButton>
                        <Button variant="contained" onClick={() => {
                            var x: string=teacher.id; var url: string = "/connectTeacher/" + x; navigate(url);
                        }}>Add Lesson</Button>
                    </td>
                </tr>
            ))}
        </table>
        <Link to="/addTeacher"> Add a Teacher </Link>
        <hr />

        <h1> Lessons </h1>
        <hr />
        <Table>
           <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Credit</TableCell>
                    <TableCell>Hours</TableCell>
                    <TableCell>Id</TableCell>
                    <TableCell>Teachers</TableCell>  
                    <TableCell>Actions</TableCell>      
                </TableRow>
           </TableHead>
           <TableBody>
               {lessons && lessons.map(lesson =>(
                   <TableRow /*key={student.studentId}*/>
                       <TableCell>
                           {lesson.name}
                       </TableCell>
                       <TableCell>
                           {lesson.credit}
                       </TableCell>
                       <TableCell>
                           {lesson.hours}
                       </TableCell>
                       <TableCell>
                           {lesson.lessonId}
                       </TableCell>
                       <TableCell>
                            {fetchTeachers1(lesson)}
                       </TableCell>
                       <TableCell>
                           <IconButton onClick={() => {
                               deleteLesson(lesson.lessonId);
                               window.location.reload();
                           }}>
                               <DeleteIcon></DeleteIcon>
                           </IconButton>
                           <Button variant="contained" onClick={()=> {
                               var x: string=lesson.lessonId; var url: string = "/connectLesson/" + x; navigate(url);
                               }}>Add Teacher</Button>
                       </TableCell>
                   </TableRow>
               ))}
           </TableBody>
        </Table>
        <Link to="/addLesson"> Add a Lesson </Link>
        <hr />
        
    </div>);
}

export default Home;

//{JSON.stringify(students)}