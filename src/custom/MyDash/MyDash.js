import React from "react";
import GridItem from "../../components/Grid/GridItem.jsx";
import GridContainer from "../../components/Grid/GridContainer.jsx";
import Icon from "@material-ui/core/Icon";
import MyCards from "../MyCards/MyCards";
import MyDialog from "../MyDialog/MyDialog";


class MyDash extends React.Component {
    constructor(props) {
        super(props);

        this.updateMyApps = this.updateMyApps.bind(this);

        this.settings={
            sectionOneUnfoldIcon:'unfold_more',
            sectionOneFoldIcon:'unfold_less',
            sectionTwoUnfoldIcon:'unfold_more',
            sectionTwoFoldIcon:'unfold_less'             
        };

        this.state = {
            visibilitySectionOne:'block',
            visibilitySectionTwo:'block',
            sectionOneCheck:false,
            sectionTwoCheck:false,
            sectionOneFoldUnfoldIcon: this.settings.sectionOneFoldIcon,
            sectionTwoFoldUnfoldIcon: this.settings.sectionTwoFoldIcon,
            hideDialog:true,
            darkMode:false,
            apps:[
                {"appName":"An- und Abwesenheiten",
                "appTarget":"https://notesapps.test.sp.ppro.bgnet.de/websites/mipo/_layouts/15/appredirect.aspx?instance_id=%7b9912BEC12E-E9C7-444A-8121-6B72881BFE01%7d&quick_launch=1",
                "appColor":"primary",
                "appIcon":"work"},
                {"appName":"Marktplatz",
                "appTarget":"https://bgnmarktplatz.test.notes-phas.ppro.bgnet.de/?SPHostUrl=https%12A%2F%2Fnotesapps%2Etest%2Esp%2Eppro%2Ebgnet%2Ede%2Fwebsites%2Fbgnmarktplatz&SPLanguage=de%2DDE&SPClientTag=0&SPProductNumber=16%2E0%2E4588%2E1000",
                "appColor":"primary",
                "appIcon":"work"},
                {"appName":"Meldungsdatenbank",
                "appTarget":"https://notesapps.test.sp.ppro.bgnet.de/websites/meld",
                "appColor":"primary",
                "appIcon":"work"},
                {"appName":"Notfallmanager",
                "appTarget":"https://notesapps.test.sp.ppro.bgnet.de/websites/nfmg/SitePages/Kalender.aspx",
                "appColor":"primary",
                "appIcon":"work"},
                {"appName":"Rundschreiben",
                "appTarget":"https://rundschreiben.test.notes-phas.ppro.bgnet.de/?SPHostUrl=https%12A%2F%2Fnotesapps%2Etest%2Esp%2Eppro%2Ebgnet%2Ede%2Fwebsites%2Frund&SPLanguage=de%2DDE&SPClientTag=0&SPProductNumber=16%2E0%2E4588%2E1000",
                "appColor":"primary",
                "appIcon":"work"},                        
              ],
              myApps:[
                {"appName":"Brain",
                "appTarget":"https://brain.ms.bgnet.de",
                "appColor":"success",
                "appIcon":"bookmark"},
                {"appName":"Meine Anwendung 1",
                "appTarget":"https://www.example.com",
                "appColor":"success",
                "appIcon":"bookmark"},
                {"appName":"Meine Anwendung 2",
                "appTarget":"https://www.example.com",
                "appColor":"success",
                "appIcon":"bookmark"},
                {"appName":"Meine Anwendung 3",
                "appTarget":"https://www.example.com",
                "appColor":"success",
                "appIcon":"bookmark"}           
              ]
                  
          };        
      }    

    updateMyApps(myNewApp){
        let myNewApps = this.state.myApps.slice();
        myNewApps.push(myNewApp);
        this.setState({myApps:myNewApps});
    }
    
    render(){
        return(
            <div>
            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <h1>Deine Anwendungen</h1>
                </GridItem>
            </GridContainer>
            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <h2>Empfohlene Anwendungen
                        <span>
                            <Icon   onClick={() => this.setState({ 
                                    visibilitySectionOne: (this.state.visibilitySectionOne === 'none') ? 'block' : 'none',
                                    sectionOneCheck: (this.state.sectionOneCheck) ? false : true,
                                    sectionOneFoldUnfoldIcon: (this.state.sectionOneCheck) ? this.settings.sectionOneFoldIcon : this.settings.sectionOneUnfoldIcon
                                    })}>
                                    {(this.state.sectionOneCheck) ? this.settings.sectionOneFoldIcon : this.settings.sectionOneUnfoldIcon}
                            </Icon>
                        </span>
                    </h2>
                </GridItem>
            </GridContainer>
            <div style={{display:this.state.visibilitySectionOne}}>
                <MyCards apps={this.state.apps}/>
            </div>
            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <h2>Eigene Anwendungen
                        <span>
                            <Icon   onClick={() => this.setState({ 
                                    visibilitySectionTwo: (this.state.visibilitySectionTwo === 'none') ? 'block' : 'none',
                                    sectionTwoCheck: (this.state.sectionTwoCheck) ? false : true,
                                    sectionTwoFoldUnfoldIcon: (this.state.sectionTwoCheck) ? this.settings.sectionTwoFoldIcon : this.settings.sectionTwoUnfoldIcon
                                    })}>
                                    {(this.state.sectionTwoCheck) ? this.settings.sectionTwoFoldIcon : this.settings.sectionTwoUnfoldIcon}
                            </Icon>
                            <MyDialog addNewApps={this.updateMyApps}/>
                        </span>
                    </h2>
                </GridItem>
            </GridContainer>
            <div id="myFavorites" style={{display:this.state.visibilitySectionTwo}}>
                <MyCards apps={this.state.myApps}/>
            </div>                        
              </div>
        );
    }
}

export default MyDash;
