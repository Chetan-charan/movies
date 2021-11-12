import { useContext, useState, createContext } from "react";
import "./styles.css";

// creating context
const Context = createContext({ background: "black" })

export default function ButtonTheme() {
    const [styles,setStyles] = useState({ background: "black" });
    return (
        <Context.Provider value={[styles,setStyles]}>
      <div className="App" style={ styles }>
        <List />
      </div>
      </Context.Provider>
    );
  }
  
  const List = () => (
    <ul>
      <ListItem value="light" />
      <ListItem value="dark" />
    </ul>
  );
  
  function ListItem ({ value }){
    const [color,setColor] = useState(true);
    
    return <li>
        {console.log(color)}
    <Button style={{backgroundColor: {color} ? 'black': 'white' }} value={value} setColor={setColor} />
  </li>
  }
      
   
  
  function Button({ value,setColor}) {
    let [state, setState] = useContext(Context);
    console.log(state);
   
    const styles = {color: 'black', backgroundColor: 'white'}
    return <button style={styles} onClick={()=> {
       if( value === 'light' ){
        setState({backgroundColor: 'white'});
        setColor(true);
        
       }
       else if(value === 'dark'){
        setState({backgroundColor: 'black'});
        setColor(false);
        
       }
       
    }} >{value}</button>;
    
  };