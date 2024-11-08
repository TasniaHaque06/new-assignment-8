import { NavLink } from "react-router-dom";
const GadgetsCard = () => {
    return (
        <div >
            <div className="flex flex-col gap-4 p-4 mb-6">
                <NavLink to="/product" className={({ isActive }) => `btn font-bold ${isActive ? 'bg-violet-600' : 'bg-slate-400'}`}>All Products</NavLink>
                <NavLink to="/products/Laptop" className={({ isActive }) => `btn font-bold ${isActive ? 'bg-violet-600' : 'bg-slate-400'}`}>Laptops</NavLink>
                <NavLink to="/products/Phone" className={({ isActive }) => `btn font-bold ${isActive ? 'bg-violet-600' : 'bg-slate-400'}`}>Phones</NavLink>
                <NavLink to="/products/Accessory" className={({ isActive }) => `btn font-bold ${isActive ? 'bg-violet-600' : 'bg-slate-400'}`}>Accessories</NavLink>
                <NavLink to="/products/Smart Watch" className={({ isActive }) => `btn font-bold ${isActive ? 'bg-violet-600' : 'bg-slate-400'}`}>Smart Watches</NavLink>
                <NavLink to="/products/MacBook" className={({ isActive }) => `btn font-bold ${isActive ? 'bg-violet-600' : 'bg-slate-400'}`}>MacBook</NavLink>
                <NavLink to="/products/iPhone" className={({ isActive }) => `btn font-bold ${isActive ? 'bg-violet-600' : 'bg-slate-400'}`}>iPhone</NavLink>
            </div> 
        </div>
    );
};

export default GadgetsCard;
