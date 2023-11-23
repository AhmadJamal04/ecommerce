import { Navbar } from "../navbar/Navbar";
import Category from "../category/Category"
import Food from "../food/Food";
import Footer from '../footer/Footer';
import Hero from "../product/Products"

const home = () => {
  return (
    <main >

      {/* Navbar components Import here */}
      <Navbar />

      {/* Home section started form here  */}

      <section className=' w-full' >
        <div className=' max-h-[580px] relative'>
          {/* overlay */}
          <div className=' absolute w-full h-full text-gray-200 max-h-[580px] bg-black/40 flex flex-col justify-center'>
            <h1 className=' px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
              The <span className=' text-orange-500'>Best</span>
            </h1>
            <h1 className=' px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
              Food <span className=' text-orange-500 '>Delivered</span>
            </h1>
          </div>
          <img
            src="https://media.istockphoto.com/id/1197425461/photo/big-sandwich-hamburger-burger-with-beef-avocado-tomato-and-red-onions-on-light-background.jpg?s=612x612&w=0&k=20&c=yaZJCQ07B1Re5qTKP7leHGiUedloK0ZqX0eF6wQIlFo="
            alt="burger pic"
            className=' w-full max-h-[580px] object-cover '
          />
        </div>
      </section>


      {/* other components import here  */}
      <Hero />
      <Category />
      <Food />
      <Footer />

    </main>
  )
}

export default home