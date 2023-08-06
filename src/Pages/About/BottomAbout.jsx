import React from 'react';

const BottomAbout = () => {
    return (
        <div className='md:flex justify-between my-24'>
            <div className='md:w-1/2 w-full'>
                <h3 className='text-2xl font-semibold'>Extraordinary Experiences</h3>
                <p className="bg-rose-600 w-20 h-1 my-3">&nbsp;</p>
                <p className='my-8'>Click edit button to change this text. Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.</p>
                <p>Click edit button to change this text. Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, <br /> pulvinar dapibus leo.</p>
            </div>
            <div className='md:w-1/2 w-full'>
                <h3 className='text-2xl font-semibold'>Our Core Values</h3>
                <div>
                    <p className="bg-rose-600 w-20 h-1 my-3">&nbsp;</p>
                </div>
                <p className='my-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <ul>
                    <li>Locavit liberioris possedit</li>
                    <li>Diremit mundi mare undae</li>
                    <li>Diremit mundi mare undae</li>
                </ul>
            </div>
        </div>
    );
};

export default BottomAbout;