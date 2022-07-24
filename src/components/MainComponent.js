import { Routes, Route, useParams } from 'react-router-dom';
import  {Menu}  from './Menu';
import Home from './HomeComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import {DISHES} from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import React, { useState } from 'react';
import  {DishDetail}  from './DishdetailComponent';
import {Header} from './HeaderComponent';
import {Footer} from './FooterCompopnent';

export function Main(props){
     
    const [dishes, setdishes] = useState(DISHES);
    // const [selectedDish, setSelectedDish] = useState(null);
    const [comments, setcomments] = useState(COMMENTS);
    const [promotions, setpromotins] = useState(PROMOTIONS);
    const [leaders, setleaders ] = useState(LEADERS);

    
   
  //   const onDishSelect = (dish) => {
  //     //nếu mà 1 dòng thì khỏi viết hàm riêng
  //     // this.setState({ selectedDish: dish});
  //     console.log(dish)

  //     setSelectedDish(dish)
  // }
  const HomePage = () =>{
    return(
      <Home  dish={dishes.filter((dish) => dish.featured)[0]}
      promotion={promotions.filter((promo) => promo.featured)[0]}
      leader={leaders.filter((leader) => leader.featured)[0]}/>
    )
  };
  const DishWithId = ({match}) => {
    const { dishId } = useParams();
    return(
      <DishDetail dish={dishes.filter((dish) => dish.id === dishId)} 
        comments={comments.filter((comment) => comment.dishId === dishId)} />
      );
  };
  console.log(DishWithId);
 
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route exact path="/aboutus" element={<About leaders={leaders} />} />
        <Route exact path='/menu' element={<Menu dishes={dishes} />} />
        <Route exact path="/menu/:dishId" element={<DishWithId comments={comments}/>} />
        <Route exact path='/contactus' element={<Contact/>}/>
        {/* <Navigate to="/home" /> */}
      </Routes>
      {/* <Menu dishes={dishes}
        onClick={(dish) => onDishSelect(dish)}/> */}
      {/* <DishDetail dish={selectedDish}/> */}
      <Footer/>
    </div>
  );

}


