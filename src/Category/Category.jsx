import { useEffect, useState } from "react";
import { useLoaderData, useLocation, useParams } from "react-router-dom";
import Card from "../Component/Card";

const Category = () => {
    const data = useLoaderData();
    const {pathname} = useLocation();
    console.log(data);
    const {category} = useParams();
    const [products,setProducts] = useState([])
    useEffect(()=>{
       if(category){
        const filteredByCategory = [...data].filter(product=>product.category==category)
       setProducts(filteredByCategory)
       }
       else if(pathname==="/products"){
        setProducts(data)
       }
       else{
        setProducts(data.slice(0,6))
       }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[category,data])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                products.map(product=> <Card product={product} key={product.product_id}></Card>)
            }
            </div>
            
    );
};

export default Category;