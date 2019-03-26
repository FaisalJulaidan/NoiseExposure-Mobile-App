import React  from 'react';
import Navigator from './src/screens/Navigator'
import IntroSlider from './src/components/IntroSlider/IntroSlider'
import {asyncStorage, MAP_THEME_KEY} from './src/utilities';

class App extends React.Component {


    state = {
        isFirstLaunch: "yes"
    };

  

    render() {
        console.log(this.state);
        return this.state.isFirstLaunch === 'yes' ?
            <IntroSlider onFirstLaunchDone={this.onFirstLaunchDone}/>
                :
            <Navigator/>;
    }
}

export default App
