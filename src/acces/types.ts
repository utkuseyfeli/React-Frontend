export interface Student{
    name: string;
    surname: string;
    studentId: string;
    classes: Lesson[];
}

export interface Teacher{
    name: string;
    surname: string;
    id: string;
    lessonIds: string[];
}

export interface Lesson{
    name: string;
    credit: number;
    hours: number;
    lessonId: string;
    teacherIds: string[];
}