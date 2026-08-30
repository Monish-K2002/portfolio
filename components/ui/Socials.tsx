import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const social = [
    {icon: <FaGithub />, path: "https://github.com/Monish-K2002", name: "GitHub"},
    {icon: <FaLinkedin />, path: "https://www.linkedin.com/in/monishk2002", name: "LinkedIn"}
];

interface SocialsProps {
    containerStyles?: string;
    iconStyles?: string;
}

const Socials: React.FC<SocialsProps> = ({containerStyles, iconStyles}) => {
    return (
        <div className={containerStyles}>
            {social.map((item, index) => (
                <Link 
                    key={index} 
                    href={item.path} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={iconStyles}
                    aria-label={item.name}
                >
                    {item.icon}
                    <span 
                        className="ml-2 text-sm text-white"
                        id="phone"
                    >
                        {item.name}
                    </span>
                </Link>
            ))}
        </div>
    )
}

export default Socials;