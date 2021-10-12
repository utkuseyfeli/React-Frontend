import { Button, IconButton, Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import { navigate, RouteComponentProps } from "@reach/router";
import { useEffect, useState } from "react";
import { Lesson, Teacher } from "../acces/types";
import { connect2, getLessonsList, getTeachersList } from "../Home/home.api";

interface ConnectTeacherProps extends RouteComponentProps{
    id?: string;
}

const ConnectTeacher: React.FC<ConnectTeacherProps> = (props: ConnectTeacherProps) => {
    
    const [teachers, setTeachers] = useState<Teacher[] | null>(null)
    useEffect(() => {
        const fetchTeachersList = async() => {
            const teachersList = await getTeachersList();
            //console.log(teachersList)
            setTeachers(teachersList);
        }

        fetchTeachersList();
        
    }, [])
    
    return(
        <div>
           <h1>{props.id}</h1>
           <hr />
        <Table>
           <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Surname</TableCell>
                    <TableCell>Id</TableCell>
                    <TableCell>Actions</TableCell>      
                </TableRow>
           </TableHead>
           <TableBody>
               {teachers && teachers.map(teacher =>(
                   <TableRow /*key={student.studentId}*/>
                       <TableCell>
                           {teacher.name}
                       </TableCell>
                       <TableCell>
                           {teacher.surname}
                       </TableCell>
                       <TableCell>
                           {teacher.id}
                       </TableCell>
                       <TableCell>
                           <Button variant="contained" onClick={() => {
                               const ids: string = teacher.id + "-" + props.id + "-";// boşluğa artı sona = ekliyordu böyle çözdüm
                               console.log(ids);
                               connect2(ids);
                               navigate("/");
                           }}>Add</Button>
                       </TableCell>
                   </TableRow>
               ))}
           </TableBody>
        </Table>
        <hr />
        </div>
    );
}

export default ConnectTeacher