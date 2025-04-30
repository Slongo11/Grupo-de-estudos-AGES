import './Project.css';
import ProjectItem from "./ProjectItem";

const Project = () => {
    const projects = [
        {title: "AGES Study Group Repository", src: "./AGESPNB.jpeg", href: "https://github.com/Slongo11/Grupo-de-estudos-AGES", alt: "Repository AGES", comment: "This repository documents the full journey within the AGES program, featuring 5 sprints and 5 distinct projects, each progressively more challenging and complex."},
        {title: "Spring Framework Studies Repository", src: "./Spring.svg", href: "https://github.com/Slongo11/EstudosSpring", alt: "Repository Spring", comment: "This repository contains training projects from Alura focused on the Spring Framework."},
        {title: "Assembly Blackjack Game Repository", src: "./Assembly.png", href: "https://github.com/Slongo11/Trabalho-FSC", alt: "Repository Assembly", comment: "This repository features a Blackjack card game developed in Assembly language."},
    ]
    return (
        <section id="project">
            <h2>Projects</h2>
            <div className="project-container">
                {projects.map(project =>(
                    <ProjectItem 
                        key={project.title}
                        title={project.title}
                        src={project.src}
                        href={project.href}
                        alt={project.alt}
                        comment={project.comment}
                    />
                ))}
            </div>
        </section>
    );
}

export default Project;