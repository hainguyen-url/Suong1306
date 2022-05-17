import React, { useState } from 'react';
import { Card, CardImg, CardImgOverlay,
    CardTitle } from 'reactstrap';
import { DishDetail } from './DishdetailComponent';

export const Menu = (props) => {
    
    const [selectedDish, setSelectedDish] = useState(null);

    const onDishSelect = (dish) => {
        //nếu mà 1 dòng thì khỏi viết hàm riêng
        // this.setState({ selectedDish: dish});
        console.log("dish", dish)

        setSelectedDish(dish)
    }

    const menu = props.dishes.map((dish) => {
        
        return (
            <div  className="col l-5 c-12 m-5">
            <Card key={dish.id}
                onClick={() => onDishSelect(dish)}>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Card>
            </div>
        )
    });

    return (
        <div className="grid wide">
            <div className="row">
                {menu}
            </div>
            <div className="row">
                <div  className="col l-5 c-12 m-5">
                    <DishDetail dish={selectedDish}/>
                </div>
            </div>
        </div>
    );
}