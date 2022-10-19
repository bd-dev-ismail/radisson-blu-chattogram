import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import hero from '../../assets/img/hero.jpg'
import Hotel from '../Hotel/Hotel';
const Home = () => {
    const hotels = useLoaderData();
    console.log(hotels);
    return (
      <div>
        {/* Hero Image Area */}
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: `url(${hero})`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-full">
              <h1 className="mb-5 text-xl font-bold uppercase">
                Hotel & Resort
              </h1>
              <p className="mb-5 text-6xl capitalize">
                Welcome to Radisson Blu Chattogram
              </p>
              <p className="text-sm text-gray-300">
                As the city’s premier international hotel, the Radisson Blu
                Chattogram Bay View offers you an unforgettable stay with
                spectacular views of Chattogram, the Bay of Bengal, and the Hill
                Tracts. Enjoy posh rooms and suites within walking distance of
                M. A. Aziz Stadium and landmarks like the Circuit House in this
                commercial capital. The hotel is just a 10-minute drive from the
                city’s main business hub and less than 45 minutes from Shah
                Amanat International Airport (CGP).
              </p>
              <Link to="/booking">
                <button className="btn btn-primary mt-6">Book Now</button>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className='container mx-auto mt-10'>
            <h2 className="text-4xl my-5">
              Stay in the heart of the city at our upscale hotel in Chattogram
            </h2>
            <p>
              Start each morning with our complimentary Super Breakfast buffet
              at The Xchange, one of our five on-site restaurants and bars. Our
              hotel boasts the city’s largest pillarless event facility as well
              as a Business Class lounge, making us the perfect choice for
              conferences and events in Chattogram. After a busy day of
              meetings, unwind with a swim in our circular outdoor infinity
              pool, a refreshing beverage from the pool bar, or a therapeutic
              treatment at the spa.{" "}
            </p>
          </div>
          <div className="grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 my-10 container mx-auto">
            {hotels.map((hotel) => (
              <Hotel hotel={hotel} key={hotel.id}></Hotel>
            ))}
          </div>
        </div>
      </div>
    );
};

export default Home;