import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import Student from './SampleDemos/Student';
import Parent from './SampleDemos/ChildProps';
import ClassEvent from './EventHandling/ClassEvent';
import FunctionClick from './EventHandling/functionClick';
import WelcomeMsg from './EventHandling/welcomeMsg';
import MovieDetails from './EventHandling/MovieDetails';
import BindingDemo from './EventHandling/BindingDemo';
import ParentComp from './EventHandling/ParentComp';
import EmployeeList from './ListRenderingAndInlineStyling/EmployeeList';
import LifeCycle from './Form Handling/LifeCycle';


function App() {
  return (
    <div className="App">
    <h3>I am in App component using  App Component </h3>
    
    {/* <Hello/> */}
    {/* <Student add="Nashik"/> */}
    {/* <ClassEvent/> */}
    {/* <FunctionClick/> */}
    {/* <WelcomeMsg/> */}
    {/* <MovieDetails name="ABC" director="XYZ"/> */}
    {/* <BindingDemo/> */}
    {/* <ParentComp/> */}
    {/* <EmployeeList/> */}
    <LifeCycle/>
    </div>
  );
}

export default App;
