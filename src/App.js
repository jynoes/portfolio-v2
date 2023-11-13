import Topbar from './components/Topbar';
import Midbar from './components/Midbar';
import './App.css';
import './fonts/stretchpro.woff';
import './fonts/stretchpro2.woff2';
import './fonts/BlueAngel.ttf'
import './fonts/PPMonumentExtended-Black.otf'

function App() {
  return (
    <div className="App">
      <Topbar />
      <Midbar />
    </div>
  );
}

export default App;