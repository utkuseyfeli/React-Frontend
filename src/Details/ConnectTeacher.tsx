import { Button, IconButton, Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import { navigate, RouteComponentProps } from "@reach/router";
import { useEffect, useState } from "react";
import { Lesson } from "../acces/types";
import { connect2, getLessonsList } from "../Home/home.api";

interface ConnectTeacherProps extends RouteComponentProps{
    id?: string;
}

const ConnectTeacher: React.FC<ConnectTeacherProps> = (props: ConnectTeacherProps) => {
    
    const [lessons, setLessons] = useState<Lesson[] | null>(null)
    useEffect(() => {
        const fetchLessonsList = async() =>{
            const lessonsList = await getLessonsList();
            setLessons(lessonsList)
        }

        fetchLessonsList();
        
    }, [])
    
    return(
        <div>
           <h1>{props.id}</h1>
           <hr />
        <Table>
           <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Credit</TableCell>
                    <TableCell>Hours</TableCell>
                    <TableCell>Id</TableCell>
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
                           <Button variant="contained" onClick={() => {
                               const ids: string = props.id + "-" + lesson.lessonId + "-";// boşluğa artı sona = ekliyordu böyle çözdüm
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