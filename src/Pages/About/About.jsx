import React from 'react';
import image from '../../assets/image/outdoor-image-02.jpg'
import BottomAbout from './BottomAbout';
import SectionHeader from '../../Components/Shared/SectionHeader/SectionHeader';
import bg from '../../assets/image/about-bg-5.jpg'
import Container from '../../Components/Shared/Container/Container';

const About = () => {
    return (
        <>
            <SectionHeader
                title={'WHO WE ARE?'} bgImage={bg}
            ></SectionHeader>
            <div className='mx-16'>

                <Container>
                    <div className='md:flex justify-between my-24'>
                        <div>
                            <h3 className='text-3xl font-bold'>OUR MISSION</h3>
                            
                            <p className="bg-rose-600 w-20 h-1 my-3">&nbsp;</p>
                            
                            <p className='my-8'>Click edit button to change this text. Lorem ipsum dolor sit amet, <br /> adipiscing elit.</p>
                            <p>Click edit button to change this text. Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, <br /> pulvinar dapibus leo.</p>
                        </div>
                        <div>
                            <img className='custom-shadow' style={{ height: 400 }} src={image} alt="" />
                        </div>

                    </div>
                    <BottomAbout></BottomAbout>
                </Container>
            </div>

        </>

    );
};

export default About;