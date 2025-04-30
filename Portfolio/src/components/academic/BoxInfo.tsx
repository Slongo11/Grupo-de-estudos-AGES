const BoxInfo = (props: {url: string, alt: string, info1?: string, info2?: string, info3?: string, more?: string}) => {
    return (
        <div className="box">
            <img src={props.url} alt={props.alt} />
            <p>{props.info1}</p>
            <p>{props.info2}</p>
            <p>{props.info3}</p>
            <a href={props.more}>Mais Informações</a>
        </div>
    );
}
export default BoxInfo;