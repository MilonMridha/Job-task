import React, { useEffect, useState } from 'react';
import love from '../img/images (1).png'
import greater from '../img/white greater (1).png'
import ReviewCart from './ReviewCart';

const Home = () => {
    const [reviews, setReview] = useState([]);

    useEffect(()=> {
        fetch('fakedata.json')
        .then(res => res.json())
        .then(data => setReview(data))
    },[])
    return (
        <div>
            <h1 className='text-4xl font-bold mt-5 text-left px-5 '>Summer Art Camp! 5 Days of Artists and Painting Monet, Van Gogh, Matisse, & More</h1>
            <span className='text-gray-500 text-xl text-left px-5 font-bold'>Multi-day course</span>

            <div>
                <div class="hero min-h-screen">
                    <div class="hero-content flex-col lg:flex-row-reverse">
                        <img style={{width: "200px"}} src="https://api.lorem.space/image/movie?w=260&h=400" class="max-w-sm rounded-lg shadow-2xl" />
                        <img style={{width: "200px"}} src="https://api.lorem.space/image/movie?w=260&h=400" class="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                           

                            <p class="py-6 text-left">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            {
                                reviews.map(review => <ReviewCart
                                key={review.id}
                                review={review}
                                ></ReviewCart>)
                            }

                            <div className='grid md:grid-cols-3 gap-3 items-center'>
                                <div>
                                    <button class="btn bg-purple-800 flex lowercase rounded-full px-20 w-full text-white text-start">See Class Schedule <span><img src={greater} alt="" /></span></button>
                                    
                                </div>

                                <div className='flex'>
                                
                                <h2 className=' font-bold ml-10 text-purple-800'>Save</h2>
                                </div>
                                <div>
                                    <h2 className='font-bold text-purple-800'>Share</h2>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
