const ProjectItem = (props: {title: string, src: string, href: string, alt: string, comment?: string} ) => {
    const {title, src, href, alt, comment} = props
    return (
        <>
            <div className="project-item">
                <div className="project-item-front">
                    <h3 className="project-title">{title}</h3>
                    <img src={src} alt={alt} />
                </div>
                <div className="project-item-back">
                    <p>{comment}</p>
                    <a href={href} target="_black">Repository</a>
                </div>
            </div>
            
        </>

    );
}

export default ProjectItem;