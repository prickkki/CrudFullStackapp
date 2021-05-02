import React, { Component } from 'react';
import StudentServices from '../services/StudentServices';

class UpdateStudentComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            id: this.props.match.params.id,
             name: '',
             age: '',
             phone: '',
             collageYear: '',
             collage: ''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeAgeHandler = this.changeAgeHandler.bind(this);
        this.changePhoneHandler = this.changePhoneHandler.bind(this);
        this.changeCollageYearHandler = this.changeCollageYearHandler.bind(this);
        this.changeCollageHandler = this.changeCollageHandler.bind(this);
        this.updateStudent = this.updateStudent.bind(this);
        
        
    }
    componentDidMount(){
        StudentServices.getStudentById(this.state.id).then((res )=>{
            let student = res.data;
            this.setState({name: student.name, phone: student.phone, age: student.age, collageYear: student.collageYear, collage: student.collage});
        });
    }
    updateStudent = (e) => {
        e.preventDefault();
        let student = {name: this.state.name, age: this.state.age, phone: this.state.phone, collageYear: this.state.collageYear, collage: this.state.collage};
        console.log('student => ' + JSON.stringify(student)); 
        StudentServices.updateStudent(student, this.state.id).then( res => {
            this.props.history.push('/Students');
        });
        }
    
    changeNameHandler = (event) =>{
        this.setState({name: event.target.value});
    }
    changeAgeHandler = (event) =>{
        this.setState({age: event.target.value});
    }
    changePhoneHandler = (event) =>{
        this.setState({phone: event.target.value});
    }
    changeCollageYearHandler = (event) =>{
        this.setState({collageYear: event.target.value});
    }
    changeCollageHandler = (event) =>{
        this.setState({collage: event.target.value});
    }
    cancel(){
        this.props.history.push('/Students');
    }
    
   

    render() {
        return (
            <div>
                <div className = "container" >
                    <div className = "row">
                         <div className = "card col-md-6 offset-md-3 offset-md-3">
                             <h3 className = "text-center" >Add Student</h3>
                             <div className = "card-body" >
                                 <form>
                                     <div className = "form-group">
                                         <label> Name: </label>
                                         <input placeholder = "name" name = "name" className = "form-control"
                                         value = {this.state.name} onChange = {this.changeNameHandler} />
                                     </div>
                                     <div className = "form-group">
                                         <label> Age: </label>
                                         <input placeholder = "age" name = "age" className = "form-control"
                                         value = {this.state.age} onChange = {this.changeAgeHandler} />
                                     </div>
                                     <div className = "form-group">
                                         <label> Phone: </label>
                                         <input placeholder = "phone" name = "phone" className = "form-control"
                                         value = {this.state.phone} onChange = {this.changePhoneHandler} />
                                     </div>
                                     <div className = "form-group">
                                         <label> Year: </label>
                                         <input placeholder = "CollageYear" name = "collageYear" className = "form-control"
                                         value = {this.state.collageYear} onChange = {this.changeCollageYearHandler} />
                                     </div>
                                     <div className = "form-group">
                                         <label> Collage: </label>
                                         <input placeholder = "Collage" name = "collage" className = "form-control"
                                         value = {this.state.collage} onChange = {this.changeCollageHandler} />
                                     </div>
    
                                     <button className="btn btn-success" onClick={this.updateStudent} >Save</button>
                                     <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                 </form>
                             </div>
                         </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default UpdateStudentComponent;