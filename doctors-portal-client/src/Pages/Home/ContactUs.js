import React from 'react';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const ContactUs = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} >
            <div className=''>
                <div className='text-center text-xl font-bold uppercase'>
                    <h3 className='text-primary'>Contact Us</h3>
                    <h2>Stay Connected with Us</h2>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div>
                        <input type="text" placeholder="Type here" className="input input-bordered input-xs w-full max-w-xs" />

                    </div>
                    <div>
                        <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs" />

                    </div>
                    <div>
                        <input type="text" placeholder="Type here" className="input input-bordered input-md w-full max-w-xs" />

                    </div>
                    <PrimaryButton>SEND YOUR REQUEST</PrimaryButton>

                </div>

            </div>
        </section>
    );
};

export default ContactUs;