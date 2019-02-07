import React from "react";
import ReactDOM from "react-dom";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Icon from "@material-ui/core/Icon";
import MyCard from "../MyCard/MyCard";

class MyDialog extends React.Component {
    constructor(props) {
        super(props);
        this.appData={
            appName:'Default App Name',
            appTarget:'Default App Target'
        }
        
        this.setAppName=this.setAppName.bind(this);
        this.setAppTarget=this.setAppTarget.bind(this);


        this.state = {
            open: false,
          };        
      }
      
      setAppTarget(formAppTarget){
        this.appData.appTarget = formAppTarget;
      }

      setAppName(formAppName){
        this.appData.appName = formAppName;
      }

    render(){
        
        return(
            <span>
                <Icon onClick={()=>{
                    this.setState({open:true});
                }}>
                    add_location
                </Icon>
                <Dialog
                    open={this.state.open}
                    onClose={()=>{this.setState({open:false})}}
                    aria-labelledby="form-dialog-title"
                    >
                    <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            To add a new favorite fill in the information
                        </DialogContentText>
                        <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Appliation name"
                        type="text"                        
                        fullWidth
                        onChange={(e)=>{this.setAppName(e.target.value);}}
                        />
                        <TextField                        
                        margin="dense"
                        id="name"
                        label="Application target"
                        type="text"                        
                        fullWidth
                        onChange={(e)=>{this.setAppTarget(e.target.value);}}
                        />                        
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={()=>{this.setState({open:false})}} color="primary">
                        Cancel
                        </Button>
                        <Button onClick={()=>{
                            this.setState({open:false});
                            this.props.addNewApps({
                            "appName":this.appData.appName,
                            "appTarget":this.appData.appTarget,
                            "appColor":"warning",
                            "appIcon":"bookmarks"} );                            
                            }} color="primary">
                        Add
                        </Button>
                    </DialogActions>
                </Dialog>                                
            </span>
        );
    }
}


export default MyDialog;