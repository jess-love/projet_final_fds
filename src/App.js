import "./App.css";
import {Redirect, Route, Switch} from 'react-router-dom';
import Container from '@material-ui/core/Container';
import {SideMenu} from './components/SideMenu';
import {route} from './routes';

function App() {
  return(
    
    <>
    <SideMenu />
<Container >
  <div className="App">
    
      <Switch>  
          {
            route.map((men) => 
             {
               return <Route exact path={men.path} component={men.component}/>
             }
            )
          }      
        <Redirect to="/" />

      </Switch> 
      
  </div>
</Container>
    </>

  );
}

export default App;
