import { Menu } from './components/Menu';
import './grid.css';
import { Navbar, NavbarBrand} from 'reactstrap';
import {DISHES} from './shared/dishes'
import { useState } from 'react';

function App(props){
     
    const [dishes, setdishes] = useState(DISHES)
  

  return (
    <div className="App">
      <Navbar dark color='primary'>
        <div className='grid wide'>
          <NavbarBrand href='/'>Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={dishes}/>
    </div>
  );

}
export default App;

