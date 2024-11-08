import { Outlet } from "react-router-dom";
import GadgetsCard from "../Component/GadgetsCard";
import Banner from "../Banner/Banner";


const Home = () => {
    return (
        <div className="mt-96">
            <Banner></Banner>
            <h1 className="text-xl md:text-2xl lg:text-4xl font-bold mb-8 text-center">Explore Cutting-Edge Gadgets</h1>
            <div className="flex justify-between">
            <GadgetsCard></GadgetsCard>
            <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default Home;