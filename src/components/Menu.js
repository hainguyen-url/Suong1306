import React, { useState } from 'react';
import { Card, CardImg, CardImgOverlay,
    CardTitle } from 'reactstrap';


export const Menu = (props) => {
    
    const menu = props.dishes.map((dish) => {
        
        return (
            <div  className="col l-5 c-12 m-5">
            <Card key={dish.id}
                onClick={(dishes) => props.onClick(dish)}>
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
                </div>
            </div>
        </div>
    );
}