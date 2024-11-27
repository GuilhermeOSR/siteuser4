import './App.css';
import Header from './Components/Header';
import MainContent from './Components/MainContent';
import ServicesContent from './Components/ServicesContent';
import TransitionContent from './Components/TransitionContent';

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <TransitionContent  />
      <ServicesContent />
    </div>
  );
}

export default App;
