import React, { Component } from 'react';
import Topbar from './Topbar/Topbar';
import { Route, Switch } from 'react-router-dom';
import Guide from './Guide/Guide';
import Photo from './Photo/Photo';
import Menu from './Menu/Menu';
import Kos from './GuidePhoto/Kos';
import Albania from './GuidePhoto/Albania';
import Mediolan from './GuidePhoto/Mediolan';

class App extends Component {

  render() {
    return (
      <>
        <Topbar />

        <Switch>
          <Route exact path="/" component={Menu} />
          <Route exact path="/Guide" component={Guide} />
          <Route exact path="/Photo" component={Photo} />
          <Route exact path="/Kos" component={Kos} />
          <Route exact path="/Albania" component={Albania} />
          <Route exact path="/Mediolan" component={Mediolan} />


        </Switch>
      </>


    )
  }




}


export default App;
