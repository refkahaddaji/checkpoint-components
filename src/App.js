import logo from './logo.svg';
import './App.css';
import ProfilePhoto from './component/profile/ProfilePhoto'
import Address from './component/profile/Address' 
import FullName from './component/profile/FullName' 

function App() {
  return (
    <div className="App">
    
        <ProfilePhoto />
        <FullName/>
        <Address />
      
    </div>
  );
}

export default App;
