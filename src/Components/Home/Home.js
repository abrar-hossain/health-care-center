//import
import React from 'react';
import useService from '../../hooks/useService';
import Hero from '../Hero/Hero';
import Service from '../Service/Service';
import './Home.css'

const Home = () => {
    const [services] = useService();
    const featureCourses = services.slice(0, 3);
    return (
        <div>
            <Hero></Hero>
            <div className="container all-services">
                <div className="all-service">
                    <h1>Our Services</h1>
                </div>
                <div className="search-service">
                    <input className="p-2" type="text" />{" "}
                    <button className="btn p-2 btn-primary">Search</button>
                </div>
                <div className="services">
                    <div>
                        {featureCourses?.map((service) => (
                            <Service service={service} key={service.key}></Service>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Home;