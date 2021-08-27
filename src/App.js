import Button from './Button';
import Input from  './Input'
import './App.css'
import './Input.css'
import './Button.css'
function App() {
  return (
    <div className = 'main'>
    <div className ="login">
        <h3>Welcome <br/> Back!</h3>
        <Input label ="Email" placeholder="Enter Email" className="email" width="90px"/>
        <Input label ="Password" placeholder="Password" className="password" width="90px"/>
        <p className="tag"> <u><a href='./App.css'>forgot password</a></u></p>
        <Button Button="LOGIN" backgroundColor="black" width="4.78cm" color="white"/>
        <p className="or">or</p>
        <Button Button="GOOGLE" backgroundColor="white" height = "25px" width="90px" fontSize="10px" />
        <Button Button="FACEBOOK" backgroundColor="white" height= "25px" style="" width="90px" fontSize="10px" marginLeft='5px'/>
    </div>
    </div>
  );
}
export default App;
