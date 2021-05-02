import React, { Component } from 'react';
import StudentServices from '../services/StudentServices';

   
class ListStudentComponents extends Component {
     constructor(props){
        super(props)
        this.state ={
            students: []
        }
        this.addStudent = this.addStudent.bind(this);
        this.editStudent= this.editStudent.bind(this);
        this.deleteStudent= this.deleteStudent.bind(this);
    }
    componentDidMount(){
        StudentServices.getStudents().then((res) => {
             this.setState({students: res.data})
        });
    }
    addStudent(){
        this.props.history.push("/addStudent")
    }
    editStudent(id){
        this.props.history.push(`/update/${id}`);
    }
    deleteStudent(id){
        StudentServices.deleteStudent(id).then( res =>{
            this.setState({students: this.state.students.filter(student => student.id !==id)});
        });
    }
        viewStudent(id){
            this.props.history.push(`/viewStudent/${id}`);
        }
    
    render() {
        return (
            <div>
                <h2 className="text-center">Students List</h2>
            <div className="row">
                <button className= "btn btn-primary" onClick ={this.addStudent}>Add Student</button>
            </div>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Student Name</th>
                                    <th> Student Age</th>
                                    <th> Student Phone Id</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.students.map(
                                        student => 
                                        <tr key = {student.id}>
                                             <td> {student.name} </td>   
                                             <td> {student.age}</td>
                                             <td> {student.phone}</td>
                                             <td>
                                             <button onClick = { () => this.editStudent(student.id) } className="btn btn-info">Update</button>
                                             <button style={{marginLeft: "10px"}} onClick = { () => this.deleteStudent(student.id) } className="btn btn-danger">Delete</button>
                                             <button style={{marginLeft: "10px"}} onClick={ () => this.viewStudent(student.id)} className="btn btn-info">View </button>
                                             </td>
                                              </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>
            </div>
        );
    }
}

export default ListStudentComponents;