const IconsTecnologies = (props: 
    {
        name: string, 
        url: string,
        desc: string 
        setValue: React.Dispatch<React.SetStateAction<{ desc: string, url: string, alt: string }>>}
    ) => {
        const handleClick = (event: React.MouseEvent) => {
            props.setValue({
                desc: `${props.desc} `,
                url: props.url,
                alt: `Imagem ${props.name}`
            });
            // find the parent and move up 100px
            const target = event.currentTarget as HTMLElement;
            const parent = (target.parentElement)?.parentElement;
            
            if (parent) {
                const y = parent.getBoundingClientRect().top + window.scrollY - 300;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        };
    return (
        <div className="icon-generic" style={{backgroundImage: `url(${props.url})`}} onClick={handleClick}>
            <p>{props.name}</p>
        </div>
    );
}

export default IconsTecnologies;