import React,{Component} from 'react';
import PropTypes from 'prop-types';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import IconButton from '@material-ui/core/IconButton';
import Zoom from '@material-ui/core/Zoom';
//import Dialog from '@material-ui/core/Dialog';
//import FlatButton from '@material-ui/core/FlatButton';
class ImageResults extends Component{
    render(){
        let imageList;
        const {images}=this.props
        if(images)
        {
            imageList=(
                <GridList cols={4}>
                    {
                        images.map(img=>(
                            <GridListTile title={img.tags} key={img.id}
                            action={
                                  <IconButton>
                                   <Zoom color="white"/>
                                 </IconButton> 
                                   }> 
                                <img src={img.largeImageURL} alt=""/>
                            </GridListTile>
                        ))
                    }
                </GridList>
            )
        }
        else{
            imageList=null;
        }
        return(
            <div>
                {imageList}

            </div>
        )
    }

}
ImageResults.propTypes={
    images:PropTypes.array.isRequired
}
export default ImageResults;