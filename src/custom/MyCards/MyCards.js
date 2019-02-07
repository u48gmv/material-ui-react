import React from "react";
import GridContainer from "../../components/Grid/GridContainer.jsx";

import MyCard from "../MyCard/MyCard";


class MyCards extends React.Component {

    render(){
        const apps = this.props.apps;
        
        return(
            <GridContainer>
            {apps.map((app) =>                
                <MyCard appName={app.appName} 
                            appTarget={app.appTarget}                            
                            appColor={app.appColor}
                            appIcon={app.appIcon}
                            />
                
              )}
            </GridContainer>            
        );
    }
}


export default MyCards;