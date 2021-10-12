import { Button, IconButton, Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import { RouteComponentProps } from "@reach/router";
import { useEffect, useState } from "react";
import { Lesson, Student } from "../acces/types";
import { getLessonsList, connect1 } from "../Home/home.api";

interface ConnectProps extends RouteComponentProps{
    id?: string;
}

const Connect: React.FC<ConnectProps> = (props: ConnectProps) => {
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
            <h1> Lessons </h1>
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
                               connect1(ids);
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

export default Connect