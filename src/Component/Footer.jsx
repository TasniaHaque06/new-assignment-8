const Footer = () => {
    return (
        <footer className="footer text-black mx-auto p-10 mt-96 justify-center items-center">
            <div className="flex flex-col items-center">
                <div>
                    <h1 className="text-black text-xl font-bold text-center">Gadget Heaven</h1> 
                    <p className="text-black text-base text-center">
                        Leading the way in cutting-edge technology and innovation.
                    </p>
                    <hr className="font-bold text-black" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-5 text-center">
                        <div>
                            <h6 className="footer-title font-bold">Services</h6>
                            <p className="link link-hover">Product Support</p>
                            <p className="link link-hover">Order Tracking</p>
                            <p className="link link-hover">Shipping & Delivery</p>
                            <p className="link link-hover">Returns</p>
                        </div>
                        <div>
                            <h6 className="footer-title font-bold">Company</h6>
                            <p className="link link-hover">About Us</p>
                            <p className="link link-hover">Career</p>
                            <p className="link link-hover">Contact</p>
                        </div>
                        <div>
                            <h6 className="footer-title font-bold">Legal</h6>
                            <p className="link link-hover">Terms of Services</p>
                            <p className="link link-hover">Privacy Policy</p>
                            <p className="link link-hover">Cookie Policy</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
