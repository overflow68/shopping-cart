import jeans from './images/jeans.jpeg';
import jacket from './images/jacket.png';
import sporting from './images/sporting.jpg';
import sweater from './images/sweater.jpg';
import airForce from './images/airForce.jpeg';
import airJordan from './images/airJordan.jpeg';
import blazerMid from './images/blazerMid.jpeg';
import jordanLow from './images/jordanLow.jpeg';
import reactVision from './images/reactVision.jpeg';
import airMaxPlus from './images/airMaxPlus.jpeg';
var uniqid = require('uniqid');


let items = [
    {id: uniqid(), picture:jacket, price:69.99, description:"Leather Jacket", quantity:1},
    {id: uniqid(), picture:jeans, price:39.99, description:"Blue Jeans", quantity:1},
    {id: uniqid(), picture:sporting, price:49.99, description:"2020/2021 SCP Jersey", quantity:1},
    {id: uniqid(), picture:sweater, price:59.99, description:"Nike Sweater", quantity:1},
    {id: uniqid(), picture:airForce, price:129.99, description:"Nike Air Force", quantity:1},
    {id: uniqid(), picture:airJordan, price:139.99, description:"Air Jordan 1 Mid", quantity:1},
    {id: uniqid(), picture:blazerMid, price:119.99, description:"Blazer Mid '77", quantity:1},
    {id: uniqid(), picture:jordanLow, price:109.99, description:"Green Jordan Low", quantity:1},
    {id: uniqid(), picture:reactVision, price:799.99, description:"React Vision", quantity:1},
    {id: uniqid(), picture:airMaxPlus, price:99.99, description:"Air Max plus 270", quantity:1}
]


export default items;





