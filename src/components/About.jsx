import aboutImage from "../assets/images/about-image.jpg";

export const About = () => {

    return (
        <div className="bg-white">
            <div className="p-24 grid grid-cols-2">
                <div className="">
                    <h2 className="text-2xl font-medium">About Us</h2>
                    <p className="text-lg">
                    Welcome to Pizzaware, where the love for pizza meets the art of perfection! We are more than just a pizza place; we are your go-to destination for the ultimate pizza experience. 
                    
                    <div>We invite you to come and experience the magic of our pizza for yourself. Whether you dine in with us, order for delivery, or take your pizza to go, we promise a culinary journey that will keep you coming back for more.</div>

                    Thank you for choosing Pizzaware as your pizza destination. We can't wait to serve you and become a part of your pizza-loving story...
                    </p>
                </div>
                <div className="flex items-center justify-center">
                    <img src={aboutImage} alt="" className="w-[400px] h-[400px] object-cover" />
                </div>
            </div>
        </div>
    )
}