import './Contact.css';
import SocialMidia from './SocialMidia';

const Contact = () => {
    const contacts = [
        {
            url: '/Linkedin.svg',
            href: 'https://www.linkedin.com/in/rodrigo-miotto-slongo-3673072ba',
            socialMidia: 'LinkedIn',
            name: 'Rodrigo Miotto Slongo',
        },
        {
            url: '/Insta.svg',
            href: 'https://www.instagram.com/rodrigo_slongo/',
            socialMidia: 'Instagram',
            name: 'rodrigo_slongo',
        },
          
        {
            url: '/GitHub.svg',
            href: 'https://github.com/Slongo11',
            socialMidia: 'GitHub',
            name: 'Slongo11',
        },
    ]
    return (
        <section id="contact">
            {contacts.map(contact => (
                <SocialMidia 
                    key={contact.url}
                    href={contact.href}
                    url={contact.url}
                    socialMidia={contact.socialMidia}
                    name={contact.name}
                />
            ))}
        </section>
    );
}
export default Contact;