/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-pascal-case */
import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import Student from './SampleDemos/Student';
//import Parent from './SampleDemos/ChildProps';
import ClassEvent from './EventHandling/ClassEvent';
import FunctionClick from './EventHandling/functionClick';
import WelcomeMsg from './EventHandling/welcomeMsg';
import MovieDetails from './EventHandling/MovieDetails';
import BindingDemo from './EventHandling/BindingDemo';
import ParentComp from './EventHandling/ParentComp';
import EmployeeList from './ListRenderingAndInlineStyling/EmployeeList';
import LifeCycle from './Form Handling/LifeCycle';
import TableDemo from './FragmentsAndComponents/TableDemo';
import Parent from './FragmentsAndComponents/Parent';
import Check from './FragmentsAndComponents/Check';
import FinalComponent from'./FragmentsAndComponents/ClickCounts'
import FocusParent from './FragmentsAndComponents/FocusParent';
import CallBackRefDemo from './FragmentsAndComponents/CallbackRefs';
import ErrorBoundary from './FragmentsAndComponents/ErrorBoundary';
import Heroname from './FragmentsAndComponents/Heroname';
import FirstContext, { FirstProvider } from './ContextHttp/ContextValue';
import Electrical from './ContextHttp/Electrical';
import RouteDemo from './Routing/RoutingDemo';
import Hook_Counter from './HooksDemos/Hook_Counter';
import Hook_prevState from './HooksDemos/hook_prevState';
import HookCounter_Three from './HooksDemos/Hook_Three';
import HookCounter_Four from './HooksDemos/HookCounter_Four';
import UseEffect_counter from './HooksDemos/UseEffect_counter';
import UseEffectDemo3 from './HooksDemos/UseEffect_demo3';
import DemoContext from './HooksDemos/ContextDemo';
import Main from './Routing/Crud/Main';





function App() {
  return (
    <div className="App">
    {/* <h3>I am in App component using  App Component </h3> */}
    
    {/* <Hello/> */}
    {/* <Student add="Nashik"/> */}
    {/* <ClassEvent/> */}
    {/* <FunctionClick/> */}
    {/* <WelcomeMsg/> */}
    {/* <MovieDetails name="ABC" director="XYZ"/> */}
    {/* <BindingDemo/> */}
    {/* <ParentComp/> */}
    {/* <EmployeeList/> */}
    {/* <LifeCycle/> */}
    {/* <TableDemo/> */}
    {/* <Parent/> */}
    {/* <Check/> */}
    {/* <FinalComponent/> */}
    {/* <FocusParent/> */}
    {/* <CallBackRefDemo/> */}
      {/* <ErrorBoundary>
      <Heroname Heroname="Soham"/>
      </ErrorBoundary>
      <ErrorBoundary>
      <Heroname Heroname="Ram"/>
      </ErrorBoundary>
      <ErrorBoundary>
      <Heroname Heroname="jay"/>
      </ErrorBoundary> */}
      {/* <FirstProvider value="Mr Jog">
      <Electrical/>
    </FirstProvider> */}
    {/* <Data/> */}
    <Main/>
    {/* <Hook_Counter/> */}
    {/* < Hook_prevState/> */}
    {/* <HookCounter_Three/> */}
    {/* <HookCounter_Four/> */}
    {/* <UseEffect_counter/> */}
    {/* <UseEffectDemo3/> */}
    {/* <DemoContext/>  */}
    
       </div>
  );
}

export default App;
