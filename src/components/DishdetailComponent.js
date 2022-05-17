import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap'; 
    
export const DishDetail = ({ dish }) => {
    console.log("dishes---", dish)
    const renderdishes = (dish) => {
         return dish != null
        ? <Card>
        <CardImg width="50%" object src={dish.image} alt={dish.name} />
        <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
        </CardBody>
        </Card>
        :<div></div>;
    }  
    const renderComments = ({comments}) => {
        console.log("comments", dish.comments)
        const showComments = dish.comments.map((cmnt) => {
            return(
                <li key={cmnt.id}>
                    <p>{cmnt.comment}</p>
                    <p>--{cmnt.author},{cmnt.date}</p>
                </li>
            )
        });
        return dish.comments != null
            ?<div className="col-12 col-md-5 m-1">
                <h3>Comments</h3>
            {showComments}
            </div>
            :<div></div>;
    
    };
    return dish != null && dish.comments !== null
    ?<div className='container'>
        {renderdishes(dish)}
        {renderComments(dish.comments)}
    </div>
    :<div></div>
          
}
