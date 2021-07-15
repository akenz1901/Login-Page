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
        <Input label ="Email" placeholder="Enter Email" id="Email"/>
        <Input label ="Password" placeholder="Password" id="password"/>
        <p className="tag"> <u><a href=''>forgot password</a></u></p>
        <Button Button="LOGIN" backgroundColor="gold"/>
        <p className="or">or</p>
        <Button Button="GOOGLE" backgroundColor="red" height = ""/>
        <Button Button="FACEBOOK" backgroundColor="blue" style=""/>
    </div>
    </div>
  );
}
export default App;
