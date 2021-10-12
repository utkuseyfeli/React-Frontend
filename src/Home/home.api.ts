import axios from "axios";
import Api from "../acces/api";
import { Lesson, Student, Teacher } from "../acces/types";


const getStudentsList = async () => {
    const response = await Api.get<Student[]>('/getStudents');
    return response.data;
}

const getLessonsList = async () => {
    const response = await Api.get<Lesson[]>('/getLessons');
    return response.data;
}

const getTeachersList = async () => {
    const response = await Api.get<Teacher[]>('/getTeachers');
    return response.data;
}

const deleteStudent = async (studentId: string) => {
    
    let path: string = "/deleteStudent/" + studentId;
    await Api.delete(path);
}

const deleteTeacher = async (teacherId: string) => {
    let path: string = "/deleteTeacher/" + teacherId;
    await Api.delete(path);
}

const deleteLesson = async (lessonId: string) => {
    let path: string = "/deleteLesson/" + lessonId;
    await Api.delete(path);
}

const addStudent = async (student: Student)=>{
    await Api.post('/createStudent', student);
    
}

const connect1 = async (ids: string)=>{
    await Api.post('/connectService', ids);
}

const connect2 = async (ids:string)=>{
    await Api.post('/connectComplex', ids)
}

const getTeacher = async (id: string) => {
    let path: string = "/getTeacher/" + id;
    const response = await Api.get<Teacher>(id);
    
    return response.data;
}

export {getStudentsList, getLessonsList, deleteStudent, addStudent, connect1, getTeacher, deleteLesson, deleteTeacher, connect2};
export {getTeachersList};