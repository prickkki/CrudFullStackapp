import React, { Component } from 'react';
import StudentServices from '../services/StudentServices';

class ViewStudentComponent extends Component {
    constructor(props){
        super(props)
        this.state ={
            id: this.props.match.params.id,
            student: {}
        }
        this.studentsView = this.studentsView.bind(this);
    }
    componentDidMount(){
        StudentServices.getStudentById(this.state.id).then(res => {
            this.setState({student: res.data});
        });
    }
    studentsView(){
        this.props.history.push('/Students');
    }
    render() {
        return (
            <div>
                <button className= "btn btn-primary" onClick ={this.studentsView}>Students</button>
                 <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Student Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Student  Name: </label>
                            <div> { this.state.student.name }</div>
                        </div>
                        <div className = "row">
                            <label> Student Phone: </label>
                            <div> { this.state.student.phone }</div>
                        </div>
                        <div className = "row">
                            <label> Student Age : </label>
                            <div> { this.state.student.age }</div>
                        </div>
                        <div className = "row">
                            <label> Student Collage : </label>
                            <div> { this.state.student.collage }</div>
                        </div>
                        <div className = "row">
                            <label> Student Collage year : </label>
                            <div> { this.state.student.collageYear }</div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default ViewStudentComponent;