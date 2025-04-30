const Icons = (props: {url:string, width: number, height:number}) => {
    const {url, width, height} = props;
    return (
        <div className="icons" style={ 
            { 
                backgroundImage: `url(${url})`, 
                width: `${width}px`,
                height: `${height}px`, 
        }}></div>
    );
}

export default Icons;