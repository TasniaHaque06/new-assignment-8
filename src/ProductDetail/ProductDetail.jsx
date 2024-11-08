import { useLoaderData, useParams } from "react-router-dom";

const ProductDetail = () => {
    const { product_id } = useParams();
    console.log(product_id);
    const data = useLoaderData()
    console.log(data);
    const product = data.find(product => product.product_id === product_id)
    const { product_image, product_title, price, category, specification, description, rating } = product;
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <img
                    src={product_image}
                    className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">{product_title}</h1>
                    <p className="text-2xl font-thin">price:{price}</p>
                    <p className="text-2xl font-thin">{category}</p>
                    <h1 className="text-2xl font-thin">specification:</h1>
                    <ul className="text-xl ml-12">
                        {
                            specification && specification?.map((n, i) => <li className="list-disc" key={i}>{n.key}:{n.value}</li>)

                        }
                    </ul>
                    <p>{description}</p>
                    <div className="rating gap-5"> Rating: {rating}
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-100" />
                    </div>
                    <br />
                    <div className="flex gap-5">
                        <button className="btn bg-violet-500 mt-5 rounded-full">Add to Cart</button>
                        <i className="fa-regular fa-heart bg-white text-purple-800 rounded-full p-2"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;