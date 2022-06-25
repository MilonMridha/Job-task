import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Rating from 'react-rating';

const ReviewCart = ({ review }) => {
    const { name, img, tratting, treview, cratting, creview, complete } = review;
    return (
        <div>
            <div className='flex items-center gap-3'>
                <div>
                    <img className='rounded-full' style={{ width: '50px' }} src={img} alt="" />
                </div>
                <div>
                    <h1 className='text-purple-500 font-bold'>{name}</h1>
                </div>
            </div>
            <p className='mt-5'> <Rating
                        initialRating={tratting}
                        emptySymbol={<FontAwesomeIcon icon={faStar} />}
                        fullSymbol={<FontAwesomeIcon style={{ color: 'goldenrod' }} icon={faStar} />}
                        readonly
                    ></Rating>   <span className='ml-2'>{treview}</span></p>
            <p> <Rating
                        initialRating={cratting}
                        emptySymbol={<FontAwesomeIcon icon={faStar} />}
                        fullSymbol={<FontAwesomeIcon style={{ color: 'goldenrod' }} icon={faStar} />}
                        readonly
                    ></Rating>   <span className='ml-2'>{creview}</span></p>
                    <p className='font-bold mb-5'>
                        {complete}
                    </p>




        </div>
    );
};

export default ReviewCart;