import React from 'react';

const Card = ({img, username, name, email}) => {
    return (
        <div className='tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`${img}`} alt='cow' />
            <div>
                <h2>{username}</h2>
                <p>{name}</p>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;