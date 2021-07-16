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
        <Input label ="Email" placeholder="Enter Email" className="email"/>
        <Input label ="Password" placeholder="Password" className="password"/>
        <p className="tag"> <u><a href=''>forgot password</a></u></p>
        <Button Button="LOGIN" backgroundColor="gold" width="4.87m"/>
        <p className="or">or</p>
        <Button Button="GOOGLE" backgroundColor="white" height = "25px" width="90px" fontSize="10px" />
        <Button Button="FACEBOOK" backgroundColor="white" height= "25px" style="" width="90px" fontSize="10px" marginLeft='5px'/>
    </div>
    </div>
  );
}
export default App;
