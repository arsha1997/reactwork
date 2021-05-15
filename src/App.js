import React,{Component} from 'react';
import Search from './Search';
import './App.css';
//import MuiThemeProvider from 'material-ui/core/styles/MuiThemeProvider';
class App extends Component{
  constructor(props){
    super(props);
    this.state={

    };
}
  render(){
    return(
      //<MultiThemeProvider>
      <div>
        <Search/>
      </div>
      //</MultiThemeProvider>
    )
  }
}



export default App;
