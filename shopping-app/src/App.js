
import './App1.css';
import { useState } from 'react';
import { Switch, Route } from "react-router-dom";
import { AddColor} from './AddColor';
import { AddMovie } from './AddMovie';
import { MovieList } from './MovieList';
import { Redirect } from 'react-router';
import { EditMovie } from './EditMovie';
import { MovieDetails } from './MovieDetails';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import { Tictactoe } from './Tictactoe';
import Toolbar from '@mui/material/Toolbar';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';


function App() {
  const history = useHistory();
 
  const [themeMode,setTheme] = useState('light');
  const theme = createTheme({
    palette: {
      mode: themeMode,
    },
  });


  return (
  

    <ThemeProvider theme={theme}>
    <div className="App">
      <div>
      <AppBar style={{marginBottom:'24px'}} position="static">
  <Toolbar variant="dense">
  <Button onClick={()=> history.push('/') } variant="text" color='inherit'>Home</Button>
  <Button onClick={()=> history.push('/addMovie') } variant="text" color='inherit'>Add Movie</Button>
  <Button onClick={()=> history.push('/movieList') } variant="text" color='inherit'>Movie List</Button>
  <Button onClick={()=> history.push('/addColor') } variant="text" color='inherit'>Color Box</Button>
  <Button onClick={()=> history.push('/tictactoe') } variant="text" color='inherit'>Tic-Tac-Toe</Button>
  <Button 
  startIcon = {themeMode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}    //toggle icon for theme
  style={{marginLeft: 'auto'}} 
  onClick={()=> setTheme(themeMode==='dark' ? 'light':'dark') } variant="text" color='inherit'>{themeMode==='light' ? 'Dark' : 'Light'} Mode</Button>

  </Toolbar>
</AppBar>
       
      </div>
 
      <Switch>
        <Route path="/addMovie">
          <AddMovie />
        </Route>
        <Route exact path="/movieList">
        <MovieList />
        </Route>
        <Route path="/addColor">
        <AddColor />
        </Route>
        <Route path="/movieList/:id">
        <MovieDetails />
        </Route>
        <Route path="/editMovie/:id">
        <EditMovie/>
        </Route>
        <Route path="/tictactoe">
        <Tictactoe />
        </Route>
        {/* <Route path='**'>
          <NotFound />
        </Route> */}
          <Route path="/">
        <Redirect to='/movieList' />
        </Route>
        
      </Switch>
  
    </div>
    </ThemeProvider>
  
  );
}

// function NotFound(){
//   return (
//     <div>
//       <h2>Not Found 404</h2>
    
//         <img src='https://freefrontend.com/assets/img/html-funny-404-pages/CodePen-404-Page.gif' alt='Not Found 404' />
//     </div>
//   )
// }

export default App;