import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa'

const SocialLinks = () => {
    return (
        <div className="flex space-x-4">
            <a href="https://github.com/hudsonflima" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent-hover/50 transition-colors duration-300">
                <FaGithub size={32} />
            </a>
            <a href="https://linkedin.com/in/hudsonflima" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent-hover/50 transition-colors duration-300">
                <FaLinkedin size={32} />
            </a>
            <a href="https://youtube.com/@HudsonDataExpert" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent-hover/50 transition-colors duration-300">
                <FaYoutube size={32} />
            </a>
        </div>
    )
}

export default SocialLinks
