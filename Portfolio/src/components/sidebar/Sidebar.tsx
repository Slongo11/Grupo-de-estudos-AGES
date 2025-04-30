import { useEffect, useRef, useState } from 'react';
import Icons from './Icons';
import './Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visivel, setVisivel] = useState(true); 
  const contactRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setVisivel(!entry.isIntersecting);
      },
      {
        threshold: 0.2,
      }
    );

    const contact = document.getElementById('contact');
    contactRef.current = contact;

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);


  const icons = [
    {
      url: '/Linkedin.svg',
      link: 'https://www.linkedin.com/in/rodrigo-miotto-slongo-3673072ba',
      width: 70,
      height: 70,
    },
    {
      url: '/Insta.svg',
      link: 'https://www.instagram.com/rodrigo_slongo/',
      width: 70,
      height: 70,
    },
    {
      url: '/GitHub.svg',
      link: 'https://github.com/Slongo11',
      width: 70,
      height: 70,
    },
  ]
  return (
    <div id="sidebar"className={` ${isOpen ? 'slide-in open' : 'slide-out'} ${visivel ? '': 'invisible' }`}>
      <button onClick={() => setIsOpen(!isOpen)}>&lt;</button>
      {isOpen ? icons.map(icon => (
        <a href={icon.link} target="_blank" key={icon.url}>
          <Icons
            url={icon.url}
            width={icon.width}
            height={icon.height}
          />
        </a>
        )): null}
    </div>

  );
}

export default Sidebar;