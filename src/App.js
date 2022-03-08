import "./App.css";
import Login from './user_auth/Login';
// import {Signup} from './../user_auth/Signup';
import {Signup} from './../src/user_auth/Signup';
import {Route, Switch} from 'react-router-dom';
import Container from '@material-ui/core/Container';

function App() {
  return(
    
    <>
    <Container maxWidth='md'>
    <div className="App">
      <Switch>
        <Route path="/signup" exact component={Signup}/>
        <Route path="/login" exact component={Login}/>
      </Switch>
    </div>
    </Container>
    </>

  );
}

export default App;
