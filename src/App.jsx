import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.jsx';
import ActivityFeed from './pages/ActivityFeed/ActivityFeed.jsx';
import BottomNavigation from './components/BottomNav/BottomNavigation.jsx';

const App = () => {
  return (
    <div className="container">
      <Header />
      <div className="container-view">
        <ActivityFeed />
      </div>
      <BottomNavigation />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
