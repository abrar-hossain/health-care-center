import React from 'react';
import './Hero.css'
import { Container, Image } from 'react-bootstrap';
const Hero = () => {
    return (

        <div className='mt-5 pt-5'>
            <Container className='my-5 pt-5 pb-5'>
                <div className='hero'>
                    <div style={{ backgroundColor: '#00203FFF', color: '#ADEFD1FF', textAlign: 'center' }}>
                        <p>This Health care center is now serving the people of Bangladesh by providing health facilities through a reputed Medical College, a renowned Nursing Institute, a specialized hospital with 300 beds along with other two general hospitals consist of 300 and 50 beds. Besides, the medilink hospital is more famous in the sector of diagnosis and investigation. It is an ISO certified organization and has one of the equipped laboratories of the country.</p>
                    </div>
                    <div>
                        <Image src="https://image.shutterstock.com/image-photo/doctors-group-260nw-603518372.jpg" rounded />
                    </div>
                </div>
            </Container>
        </div>

    );
};

export default Hero;