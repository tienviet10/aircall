import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.jsx';
import ActivityFeed from './pages/ActivityFeed/ActivityFeed.jsx';
import BottomNavigation from './components/BottomNav/BottomNavigation.jsx';
import Profile from './pages/Profile/Profile.jsx';
import Setting from './pages/Setting/Setting.jsx';
import Recording from './pages/Recording/Recording.jsx';
import Contact from './pages/Contact/Contact.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { navIndex: 0 };
    this.handleTabChange = this.handleTabChange.bind(this);
  }

  handleTabChange(index) {
    console.log('index: ', index);
    this.setState({ navIndex: index });
  }

  render() {
    return (
      <div className="container">
        <Header />
        <div className="container-view">
          {this.state.navIndex === 0 && <ActivityFeed />}
          {this.state.navIndex === 1 && <Profile />}
          {this.state.navIndex === 2 && <Contact />}
          {this.state.navIndex === 3 && <Setting />}
          {this.state.navIndex === 4 && <Recording />}
        </div>
        <BottomNavigation handleTabChange={this.handleTabChange} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
