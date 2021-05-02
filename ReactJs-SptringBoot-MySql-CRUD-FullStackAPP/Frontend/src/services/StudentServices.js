import axios from 'axios';

const STUDENT_API_BASE_URL = "http://localhost:9191/Students";
const STUDENT_POST_API_URL = "http://localhost:9191/addStudent";
const STUDENT_GET_ID_API_URL ="http://localhost:9191/StudentById";
const STUDENT_UPDATE_API_URL ="http://localhost:9191/update";
const STUDENT_DELETE_API_URL ="http://localhost:9191/delete";

class StudentService {

    getStudents(){
        return axios.get(STUDENT_API_BASE_URL);
    
    }
    createStudent(student){
        return axios.post(STUDENT_POST_API_URL,student);
    }
    getStudentById(studentId){
      return axios.get(STUDENT_GET_ID_API_URL + '/' + studentId)
    }
    updateStudent(student, studentId){
        return axios.put(STUDENT_UPDATE_API_URL + '/' + studentId, student);
    }
    deleteStudent(studentId){
        return axios.delete(STUDENT_DELETE_API_URL + '/' + studentId);
    }
}
    
export default new StudentService()