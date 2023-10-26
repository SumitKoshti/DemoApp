import logo from './logo.svg';
import './App.css';
import Person from './Components/Person';
import Man from './Components/Man';
import Demo from './Components/Demo';

function App() {
  return (
    <div className="App">
      <Demo number= "1"></Demo>
     <Person name="Sumit" age="26"></Person>
     <Demo number= "2"></Demo>
     <Person name="Sushant" age="27"></Person>
     <Demo number= "3"></Demo>
     <Person name="Friend" ></Person>
     <Man></Man> 
    </div>
  );
}

export default App;
