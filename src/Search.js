import React,{Component} from 'react';
import axios from 'axios';
import ImageResults from './ImageResults';
class Search extends Component{
    constructor(props){
        super(props);
        /*
        *@Set states for the component
        *@Arsha.S
        *@date
        *@14/05/2021
        */
        this.state={
            searchText:'',
            apiUrl:'https://pixabay.com/api',
            apiKey:'21611879-9ab73ad5aa1b73d6f85b310ba',
            images:[]
    
        };
    }
        /*
        *@Function to change the state
        *@Arsha.S
        *@date
        *@14/05/2021
        */
    onTextChange=e=>{
        const val=e.target.value;
        this.setState({[e.target.name]:val},()=>{
            if(val===''){
                this.setState({images:[]});
            }
            else{
        /*
        *@Calling api using axios
        *@Arsha.S
        *@date
        *@14/05/2021
        */

            
            axios
            .get(
                `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${
                    this.state.searchText
                }&image-type=photo&safesearch=true`
            )
            .then(res=>this.setState({images:res.data.hits}))
            .catch(err=>console.log(err));
            }
        });
    }
    render(){
        console.log(this.state.images);
        return(
            <div>
            <input type="text" style={{backgroundColor:'black',
            color:'white',
        marginLeft:470,
    marginTop:100,
paddingTop:20,
paddingLeft:70,
fontSize:30,
borderRightStyle:"hidden",
borderLeftStyle:"hidden",
borderTopStyle:"hidden",
outline:"none",
borderBottomStyle:"groove"}}
placeholder="Search For Images"
name="searchText"
value={this.state.searchText}
onChange={this.onTextChange}/> 
{this.state.images.length>0?(<ImageResults images={this.state.images}/>):null}   
            </div>
        )
    }
}
export default Search;