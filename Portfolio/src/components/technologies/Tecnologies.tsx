import './Tecnologies.css';
import IconsTecnologies from './IconsTecnologies';
import { useState } from 'react';
const Tecnologies = () => {
    const [value,setValue] = useState({desc: "Java is a versatile, object-oriented programming language used for building cross-platform applications, from desktop to enterprise-level systems.", url: "./Java.svg", alt: "Imagem Java"})
    const icons = [
        {name: 'Java', url: './Java.svg', desc: "Java is a versatile, object-oriented programming language used for building cross-platform applications, from desktop to enterprise-level systems."},
        {name: 'Spring Boot', url: './Spring.svg', desc: "Spring Boot is a Java-based framework that simplifies the creation of production-ready, stand-alone Spring applications with minimal configuration."},
        {name: 'NodeJS', url: './Node.svg', desc: "Node.js is a JavaScript runtime built on Chrome`s V8 engine, allowing for scalable and fast server-side application development."},
        {name: 'Docker', url: './Docker.svg', desc: "Docker is a platform for developing, shipping, and running applications in lightweight, portable containers."},
        {name: 'Podman', url: './Podman.svg', desc: "Podman is a container engine that allows managing containers and pods without requiring a daemon, offering better security and integration with systemd."},
        {name: 'NestJS', url: './Nest.svg', desc: "NestJS is a progressive Node.js framework for building efficient, scalable, and maintainable server-side applications using TypeScript."},
        {name: 'Git', url: './Git.svg', desc: "Git is a distributed version control system that helps track changes in source code during software development and enables collaboration."},
        {name: 'TypeScript', url: './TypeScript.svg', desc: "TypeScript is a statically typed superset of JavaScript that adds optional types and modern features for better tooling and large-scale application development."},
        {name: 'React', url: './React.svg', desc: "React is a JavaScript library for building fast and interactive user interfaces using a component-based architecture."},
        {name: 'Postgre', url: './Postgre.svg', desc: "PostgreSQL is a powerful, open-source relational database system known for its reliability, performance, and advanced SQL features."},
    ]
    return (
        <section id="tecnologies">
            <h2>Knowledge and proficiency in technologies</h2>
            <div className="tecnologies-container">
                <div className="description">
                    <img src={value.url} alt={value.alt} />
                    <p className="description-image">{value.desc}</p>
                </div>
                <div className='icons-container'>
                    {icons.map(icon => (
                            <IconsTecnologies 
                                key={icon.name}
                                name={icon.name} 
                                url={icon.url} 
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

export default Tecnologies;