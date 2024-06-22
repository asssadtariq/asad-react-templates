/**
 * divide up and down
 * up --> Logo etc | cols 
 * down --> 
 * -----
 * text pages links
 *  
 */

const LogoFooter = () => {
    return (
        <div>
            <div className="bg-slate-100 px-16 pt-16">
                <div className="footer--up grid lg:grid-cols-5 md:grid-cols-4 grid-cols-1 lg:gap-0 md:gap-0 gap-6 md:justify-items-center lg:justify-items-center justify-items-start w-full">
                    <div className="lg:col-span-1 md:col-span-4 md:my-4">
                        <h1 className="text-3xl">Your Logo Here</h1>
                        <p className="text-sm my-1">Your Tagline here</p>
                        <p className="lg:mt-8">Subscribe Now</p>
                        <input type="text" className="text-sm outline-none bg-transparent border-b-2 border-black my-4 py-1" placeholder="Enter Your Email Here" />
                        <button className="py-1 px-5 text-sm rounded bg-black text-white">Subscribe</button>
                    </div>
                    <div>
                        <h1 className="text-lg mb-4">Information</h1>
                        <ul className="text-sm text-gray-800 grid gap-1">
                            <li>About Us</li>
                            <li>More Search</li>
                            <li>Blog</li>
                            <li>Testimonials</li>
                            <li>Events</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="text-lg mb-4">Helpful Links</h1>
                        <ul className="text-sm text-gray-800 grid gap-1">
                            <li>Services</li>
                            <li>Supports</li>
                            <li>Terms & Condition</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="text-lg mb-4">Our Services</h1>
                        <ul className="text-sm text-gray-800 grid gap-1">
                            <li>Brands List</li>
                            <li>Order</li>
                            <li>Return & Exchange</li>
                            <li>Fashion List</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="text-lg mb-4">Contact Us</h1>
                        <p className="text-sm text-gray-800 my-1">+91 111111111</p>
                        <p className="text-sm text-gray-800 my-1">myexmail@example.com</p>
                    </div>
                </div>
                <div className="mt-24 mb-2 w-full h-[1px] bg-black">
                </div>
                <div className="footer--bottom pb-2 flex w-full justify-between">
                    <p className="justify-self-center text-xs">2024 &copy; company.Ltd | All Rights reserved</p>
                    <ul className="	flex gap-4 text-xs">
                        <li>FAQs</li>
                        <li>Privacy</li>
                        <li>Terms & Condition</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default LogoFooter;
