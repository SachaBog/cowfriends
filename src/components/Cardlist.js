import React from 'react';
import Card from './Card';

const CardList = ({ cows }) => {
    return (
        <div>
            {
                cows.map((user, i) => {
                    return (
                        <Card 
                            key={i} 
                            id={cows[i].id} 
                            username ={cows[i].username} 
                            name={cows[i].name} 
                            email={cows[i].email} 
                            img={cows[i].img}
                        />
                    );
                })
            }    
        </div>
    );
}

export default CardList;