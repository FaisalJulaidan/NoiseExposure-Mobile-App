import React  from 'react';
import Navigator from './src/screens/Navigator'
import IntroSlider from './src/components/IntroSlider/IntroSlider'
import {asyncStorage, MAP_THEME_KEY} from './src/utilities';
import {queryAllNoise} from "./src/database/schemas";

class App extends React.Component {


    state = {
        isFirstLaunch: "yes",
        noiseList: []
    };

    componentWillMount() {
        asyncStorage.retrieveData('isFirstLaunch').then((value) => {
          this.setState({isFirstLaunch: value })
        }).catch(error => {
            // if error, it means this key doesn't exist so we set it for the first time below
            // Note: asyncStorage only takes string
            asyncStorage.storeData('isFirstLaunch', 'yes').then(value => value)
                .catch(error => console.log("Couldn't set isFirstLaunch key in AsyncStorage"))
        });

    }

    reloadNoiseData = () => {
        queryAllNoise().then((noiseList) => {
            this.setState({noiseList})
        }).catch(error => {
            console.log("error in reloading noise history list", error);
        });
        console.log('reloadData')
    };

    onFirstLaunchDone = () => {
        console.log("onFirstLaunchDone");
        asyncStorage.storeData('isFirstLaunch', 'no')
            .then(value => this.setState({isFirstLaunch: value}))
            .catch(error => console.log("Couldn't set isFirstLaunch key in AsyncStorage"))
    };

    render() {
        console.log(this.state);
        return this.state.isFirstLaunch === 'yes' ?
            <IntroSlider onFirstLaunchDone={this.onFirstLaunchDone}/>
                :
            <Navigator
                screenProps={{
                    reloadNoiseData:() => this.reloadNoiseData(),
                    noiseList:this.state.noiseList,
                }}
              />;
    }
}

export default App
