import { Link } from "react-router-dom";

const Card = ({ product }) => {
    const { product_id, product_image, product_title, price } = product || {};

    return (
        <Link to={`product/${product_id}`}>
            <div>
                <div className="card card-compact bg-base-100 w-96 shadow-xl p-3">
                    <figure className="rounded-2xl">
                        <img className="h-[166px]"
                            src={product_image}
                            alt="accessories" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{product_title}</h2>
                        <p>{price}</p>
                        <div className="card-actions justify-start">
                            <Link to={`products/${product_id}`}><button className="btn text-violet-400 bg-white border-violet-500 font-bold rounded-full">View Details</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Card;
