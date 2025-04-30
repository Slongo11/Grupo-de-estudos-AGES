const SocialMidia = (props: {href: string, url: string, socialMidia: string, name: string}) => {
    const {href, url, socialMidia, name} = props;
    return(
        <div className="social-midia">
            <p className="social-midia__brand">{socialMidia}</p>
            <a href={href} style={{backgroundImage: `url(${url})`}}></a>
            <p className="social-midia__name">{name}</p>
        </div>
    );
}

export default SocialMidia;