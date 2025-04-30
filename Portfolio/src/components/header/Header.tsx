import './Header.css'

const Header = () => {
    const items = [{item:"Home", href: "#presentation" }, 
        {item: "Technologies", href:"#tecnologies"},
        {item: "Hobbies", href: "#hobbies"},
        {item:"Projects", href:"#project"}, 
        {item: "Contact", href:"#contact"}];
    
    return (
        <header className="header">
            <ul className="list">
                {items.map(item => (
                    <li key={item.item} className="text"><a href={item.href}>{item.item}</a></li>
                ))}
            </ul>
        </header>
    );
}

export default Header;