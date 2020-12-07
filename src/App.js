import './App.css';
import Header from './Header';
import Newsfeed from './Newsfeed';

function App() {
  return (
    <div className="App">
        <div className="app__header">
          <Header />
        </div>
        <div className="app__body">
          <div className="app__container">
            <Newsfeed />
          </div>
        </div>
    </div>
  );
}

export default App;
