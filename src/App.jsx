// imagenes
import Imghero1 from './assets/images/desktop-image-hero-1.jpg'

import ImgAboutDark from './assets/images/image-about-dark.jpg'
import ImgAboutLight from './assets/images/image-about-light.jpg'

// Icons
import IconArrow from './components/Icon/IconArrow'
import IconPrev from './components/Icon/IconPrev.jsx'
import IconNext from './components/Icon/IconNext.jsx'

const App = () => {
  return (
    <div>
      <nav>
        <a href="#">room</a>
        <div>
          <a href="#">Home</a>
          <a href="#">Shop</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      <header className='grid grid-cols-3 grid-rows-[10fr_1.5fr_11.5fr] lg:grid-cols-7 lg:grid-rows-[10fr_1.5fr]' >
        <img src={Imghero1} alt="/"className='col-start-1 col-end-4 row-start-1 row-end-3 lg:col-start-1 lg:col-end-5 lg:row-start-1 lg:row-end-3 w-full h-full' />

        <article className='col-start-1 col-end-4 row-start-3 row-end-4 lg:col-start-5 lg:col-end-8 lg:row-start-1 lg:row-end-2 px-6 py-20 lg:px-24 flex flex-col justify-center items-start'>
          <h1 className='font-bold text-4xl mb-6'>Discover innovative ways to decorate</h1>
          <p className='text-gray-500 mb-8'>
            We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.
          </p>

          {/* Button Shop */}
          <button className='flex items-center hover:text-gray-500 hover:fill-gray-500 fill-black'>
            <span className='font-bold text-base uppercase tracking-[1rem]'>
              Shop now
            </span>
            <IconArrow />
          </button>
        </article>

          <div className='col-start-3 col-end-4 row-start-2 row-end-3  lg:col-start-5 lg:col-end-6 lg:row-start-2 lg:row-end-3 bg-black text-white flex'>
            <button className='w-full'>
              <IconPrev className='mx-auto' />
            </button>
            <button className='w-full'>
             <IconNext className='mx-auto' />
            </button>
          </div>

      </header>

      <main className='grid grid-cols-1 lg:grid-cols-7'>
        <img src={ImgAboutDark} alt="/" className='lg:col-span-2 w-full h-full' />

        <section className='lg:col-span-3 lg:px-16 flex flex-col justify-center'>
          <h2 className='font-bold text-base uppercase tracking-[0.5rem] mb-4'>About our furniture</h2>
          <p className='text-gray-500'>
            Our multifunctional collection blends design and function to suit your individual taste.
            Make each room unique, or pick a cohesive theme that best express your interests and what
            inspires you. Find the furniture pieces you need, from traditional to contemporary styles
            or anything in between. Product specialists are available to help you create your dream space.
          </p>
        </section>

        <img src={ImgAboutLight} alt="/" className='lg:col-span-2 w-full h-full' />
      </main>
    </div>
  )
}

export default App