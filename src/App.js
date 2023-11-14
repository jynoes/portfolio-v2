import Topbar from './components/Topbar';
import Midbar from './components/Midbar';
import Botbar from './components/Botbar';
import './App.css';
import './fonts/stretchpro.woff';
import './fonts/stretchpro2.woff2';
import './fonts/BlueAngel.ttf'
import './fonts/PPMonumentExtended-Black.otf'

function App() {
  return (
    <div className="App" style={{overflow: ""}}>
      <Topbar />
      <Midbar />
      <Botbar />
    </div>
  );
}

export default App;