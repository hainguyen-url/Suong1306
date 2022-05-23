import { Menu } from './Menu';
import { Navbar, NavbarBrand} from 'reactstrap';
import {DISHES} from '../shared/dishes'
import React, { useState } from 'react';
import { DishDetail } from './DishdetailComponent';

export function Main(props){
     
    const [dishes, setdishes] = useState(DISHES);
    const [selectedDish, setSelectedDish] = useState(null);
    const onDishSelect = (dish) => {
      //nếu mà 1 dòng thì khỏi viết hàm riêng
      // this.setState({ selectedDish: dish});
      console.log(dish)

      setSelectedDish(dish)
  }

  return (
    <div className="App">
      <Navbar dark color='primary'>
        <div className='grid wide'>
          <NavbarBrand href='/'>Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={dishes}
        onClick={(dish) => onDishSelect(dish)}/>
      <DishDetail dish={selectedDish}/>
    </div>
  );

}


