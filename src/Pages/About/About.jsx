import React from 'react';
import image from '../../assets/image/outdoor-image-02.jpg'
import BottomAbout from './BottomAbout';

const About = () => {
    return (
        <div className='mx-16'>
        <div className='flex justify-between'>
            <div>
                <h3 className='text-3xl font-bold'>OUR MISSION</h3>
                <div className='text-5xl'>
<hr />
                </div>
                <p className='my-8'>Click edit button to change this text. Lorem ipsum dolor sit amet, <br /> adipiscing elit.</p>
                <p>Click edit button to change this text. Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, <br /> pulvinar dapibus leo.</p>
            </div>
            <div>
                <img style={{height:400}} src={image} alt="" />
            </div>
            
        </div>
        <BottomAbout></BottomAbout>
        </div>

    );
};

export default About;