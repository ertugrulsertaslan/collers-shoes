import './App.css';
import Menu from './components/Menu.jsx';
import SectionBox from './components/SectionBox.jsx';
import SectionCollectible from './components/SectionCollectible.jsx';
import SectionTheBest from './components/SectionTheBest.jsx';
import SectionWhy from './components/SectionWhy.jsx';
import SectionBecause from './components/SectionBecause.jsx';
import SectionGrow from './components/SectionGrow.jsx';
import SectionShoesCol from './components/SectionShoesCol.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
      <Menu />
      <SectionCollectible />
      <SectionBox />
      <SectionTheBest />
      <SectionWhy />
      <SectionBecause />
      <SectionGrow />
      <SectionShoesCol />
      <Footer />
    </>
  );
}

export default App;
