import './Hobbies.css';
import Icons from '../technologies/IconsTecnologies';
import { useState } from 'react';
const Hobbies = () => {
    const [value,setValue] = useState({desc: "Riding a dirt bike across the country, especially in my southern region, has been the best experience I've ever had.", url: "./MotorBike.svg", alt: "Ride DirtBike"})
    const icons = [
        {name: 'Ride DirtBike', url: './MotorBike.svg', desc: "Riding a dirt bike across the country, especially in my southern region, has been the best experience I've ever had."},
        {name: 'Cook', url: './Cook.svg', desc: "Cooking is a way to learn patience and strive for excellence, ultimately showcasing a masterpiece to everyone."},
        {name: 'Read', url: './Read.svg', desc: "Reading is a way to expand knowledge, stimulate imagination, and escape into different worlds through stories and ideas."},
        {name: 'Play Cards', url: './Cards.svg', desc: "Playing cards is a fun and strategic activity that sharpens the mind, encourages social interaction, and often brings friendly competition."},
        {name: 'Play Games', url: './Games.svg', desc: "Playing games is an engaging way to relax, connect with others, and have fun way in your free time."},
        {name: 'Travel', url: './Plane.svg', desc: "Traveling offers new experiences, cultural discoveries, and unforgettable memories that broaden your perspective on the world."}, 
    ]
    return (
        <section id="hobbies">
            <h2>Hobbies</h2>
            <div className="hobbies-container">
                <div className="description">
                    <img src={value.url} alt={value.alt} />
                    <p className="description-image">{value.desc}</p>
                </div>
                <div className='icons-container'>
                    {icons.map(icon => (
                            <Icons 
                                name={icon.name} 
                                url={icon.url} 
                                key={icon.name} 
                                desc={icon.desc}
                                setValue={setValue}
                                />
                            )
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default Hobbies;