import { Link } from "react-router-dom";


export default function BuyButtons() {

    return (
        <div className="buyButtons">
            <Link to='/cart'>
                <button className="buyButtons__goToCart">Ver pedido</button>
            </Link>
            
            <Link to='/'>
                <button className="buyButtons__goToMenu">Seguir comprando</button>
            </Link>
        </div>
    );

}