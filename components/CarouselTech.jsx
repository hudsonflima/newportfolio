import { useState } from 'react';
import {
    SiMicrosoft, SiCentos, SiUbuntu, SiCisco,
    SiHtml5, SiCss3, SiJavascript, SiReact,
    SiNextdotjs, SiTailwindcss, SiWordpress, SiDotnet,
    SiMysql, SiPostgresql, SiOracle, SiMongodb,
    SiNodedotjs, SiCsharp, SiPhp, SiPython, SiMicrosoftsqlserver, SiSqlite
} from 'react-icons/si';

const iconSize = 70;

const technologies = [
    {
        title: 'Infrastructure',
        icons: [
            { Icon: SiMicrosoft, name: 'Microsoft', color: '#22A7F0', hoverColor: '#3498db' },
            { Icon: SiCentos, name: 'CentOS', color: '#7f8c8d', hoverColor: '#bdc3c7' },
            { Icon: SiUbuntu, name: 'Ubuntu', color: '#e67e22', hoverColor: '#e74c3c' },
            { Icon: SiCisco, name: 'Cisco', color: '#f39c12', hoverColor: '#f1c40f' }
        ],
    },
    {
        title: 'Web Development',
        icons: [
            { Icon: SiHtml5, name: 'HTML5', color: '#e74c3c', hoverColor: '#c0392b' },
            { Icon: SiCss3, name: 'CSS3', color: '#3498db', hoverColor: '#2980b9' },
            { Icon: SiJavascript, name: 'JavaScript', color: '#f1c40f', hoverColor: '#f39c12' },
            { Icon: SiReact, name: 'React', color: '#3498db', hoverColor: '#2980b9' },
            { Icon: SiNextdotjs, name: 'Next.js', color: '#718093', hoverColor: '#2c3e50' },
            { Icon: SiTailwindcss, name: 'Tailwind CSS', color: '#00bcd4', hoverColor: '#039be5' },
            { Icon: SiWordpress, name: 'WordPress', color: '#3498db', hoverColor: '#2980b9' },
            { Icon: SiDotnet, name: 'ASP.NET', color: '#9b59b6', hoverColor: '#8e44ad' }
        ],
    },
    {
        title: 'Databases',
        icons: [
            { Icon: SiMysql, name: 'MySQL', color: '#f1c40f', hoverColor: '#f39c12' },
            { Icon: SiPostgresql, name: 'PostgreSQL', color: '#3498db', hoverColor: '#2980b9' },
            { Icon: SiOracle, name: 'Oracle', color: '#e74c3c', hoverColor: '#c0392b' },
            { Icon: SiMongodb, name: 'MongoDB', color: '#2ecc71', hoverColor: '#27ae60' },
            { Icon: SiMicrosoftsqlserver, name: 'SQL Server', color: '#e74c3c', hoverColor: '#c0392b' },
            { Icon: SiSqlite, name: 'SQLite', color: '#4a89dc', hoverColor: '#3498db' }
        ],
    },
    {
        title: 'Programming Languages & Backend',
        icons: [
            { Icon: SiNodedotjs, name: 'Node.js', color: '#2ecc71', hoverColor: '#27ae60' },
            { Icon: SiCsharp, name: 'C#', color: '#9b59b6', hoverColor: '#8e44ad' },
            { Icon: SiPhp, name: 'PHP', color: '#9b59b6', hoverColor: '#8e44ad' },
            { Icon: SiPython, name: 'Python', color: '#f1c40f', hoverColor: '#f39c12' }
        ],
    },
];

const TechnologyCategory = ({ title, icons }) => {
    return (
        <div className="my-20">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <div className="flex flex-wrap gap-8">
                {icons.map((icon, i) => (
                    <TechnologyIcon key={i} icon={icon} />
                ))}
            </div>
        </div>
    );
};

const TechnologyIcon = ({ icon }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const Icon = icon.Icon;
    const iconName = icon.name;
    const colorStyle = {
        color: isHovered ? icon.hoverColor : icon.color
    };

    return (
        <div
            className="flex flex-col items-center cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Icon
                size={iconSize}
                className="text-gray-700 transition-all"
                style={colorStyle}
            />
            <span className="mt-2">{iconName}</span>
        </div>
    );
};

const TechnologiesList = () => (
    <div className="container mx-auto p-4">
        {technologies.map((category, index) => (
            <TechnologyCategory key={index} title={category.title} icons={category.icons} />
        ))}
    </div>
);

export default TechnologiesList;
