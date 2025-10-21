import logo from './logo.svg';
import './App.css';
import Student from './student'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <h1>Welcome to Fullstack Development</h1>
        <h3>React JS Programming Week07 Lab excercise</h3>
        <p>101511541</p>
        <p>Karen Amadi</p>
        <p>George Brown College, Toronto</p>
        </header>

        <div className="student-box">
          <Student sid={101} fnm="Karen" lnm="Amadi" result="Pass" city="Toronto" />
        </div>
    </div>
  );
}
export default App;
