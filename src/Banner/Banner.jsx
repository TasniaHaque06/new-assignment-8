import image from "../assets/banner.jpg";
const Banner = () => {
    return (
        <div className="relative mt-10 text-center bg-purple-600">
                {/* Banner Background */}
                <div className="rounded-lg p-6 pt-12 pb-24 text-center">
                    <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4">
                        Upgrade Your Tech Accessories <br /> with Gadget Heaven
                    </h1>
                    <p className="text-white mb-6">
                        Explore the latest gadgets that will elevate your experience <br /> to the next level. From smart devices to
                        the coolest accessories, we have it all!
                    </p>
                    <button className="text-purple-800 bg-white font-medium rounded-full text-sm px-6 py-2 mb-4">
                        Shop Now
                    </button>
                </div>

                {/* Banner Image */}
                <div className="absolute top-5/12 w-[90%] md:w-[60%] lg:w-[40%] items-center justify-center z-10">
                    <img
                        src={image}
                        alt="Gadget Heaven Banner"
                        className="rounded-lg shadow-lg border-4 border-white ml-72"
                    />
                </div>
            </div>
    );
};

export default Banner;