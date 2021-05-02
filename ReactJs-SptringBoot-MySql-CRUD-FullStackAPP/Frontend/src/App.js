import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ListStudentComponents from './components/ListStudentComponents';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateStudentComponent from './components/CreateStudentComponent';
import UpdateStudentComponent from './components/UpdateStudentComponent';
import ViewStudentComponent from './components/ViewStudentComponent';

function App() {
  return (
    <div>
    <Router>
          <HeaderComponent />
            <div className="container">
                <Switch> 
                      <Route path = "/" exact component = {ListStudentComponents}></Route>
                      <Route path = "/Students" component = {ListStudentComponents}></Route>  
                      <Route path = "/addStudent" component = {CreateStudentComponent}></Route>
                      <Route path = "/update/:id" component = {UpdateStudentComponent}></Route>  
                      <Route path = "/viewStudent/:id" component = {ViewStudentComponent}></Route>    
                </Switch>
            </div>
          <FooterComponent />
    </Router>
</div>
  );
}
export default App;
