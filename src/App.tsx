import * as React from 'react';
import Profile from './components/Profile';
import Counter from './components/Counter';

class App extends React.Component {
  render() {
    return (
      <div>
        <Profile 
          name="test"
          job="백수"
        />
        <Counter />
      </div>
    );
  }
}

export default App;
