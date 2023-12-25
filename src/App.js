import logo from './logo.svg';
import './App.css';
import { Hero } from './components/hero/hero';
import { ItemFilter } from './components/item-filter/item-filter';
import { JewelryList } from './components/jewelry-list/jewelry-list';
import FooterComponent from './components/footer/footer.component';
import FeaturesComponent from './components/features/features.component';
import MenuComponent from './components/menu/menu.component';

function App() {
  return (
    <div className="App">
      <Hero />
      <FeaturesComponent/>
      <MenuComponent/>
      <FooterComponent/>
    </div>
  );
}

export default App;
