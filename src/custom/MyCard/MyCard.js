import React from "react";
import PropTypes from "prop-types";
import GridItem from "../../components/Grid/GridItem.jsx";
import GridContainer from "../../components/Grid/GridContainer.jsx";
import Card from "../../components/Card/Card";
import CardHeader from "../../components/Card/CardHeader.jsx";
import CardIcon from "../../components/Card/CardIcon.jsx";
import Icon from "@material-ui/core/Icon";


// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

const styles = {
    textBlack: {
        "&, & *": {
            color: "#121212",
            textAlign: "left",
            fontSize: "30px"
          }
    },
    hPointer:{
        "&:hover":{
            cursor:"pointer"
        }
    },
    lh:{
        "&, & *":{
            lineHeight:"35px"
        }
    }
  };

class MyCard extends React.Component {
  
    render(){
        const { classes } = this.props;

        return(
              <GridItem xs={12} sm={6} md={3} onClick={()=>window.location.href=this.props.appTarget}>
                <Card className={classes.hPointer}>
                  <CardHeader color={this.props.appColor} stats icon className={classes.textBlack}>
                    <CardIcon color={this.props.appColor}>
                      <Icon>{this.props.appIcon}</Icon>
                    </CardIcon>
                    <p className={classes.lh}>{this.props.appName}</p>
                  </CardHeader>
                </Card>
              </GridItem>
        );
    }

}

export default withStyles(styles)(MyCard);