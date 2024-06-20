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
            { Icon: SiMicrosoft, name: 'Microsoft', color: 'text-sky-300', hoverColor: 'text-sky-400' },
            { Icon: SiCentos, name: 'CentOS', color: 'text-gray-300', hoverColor: 'text-gray-500' },
            { Icon: SiUbuntu, name: 'Ubuntu', color: 'text-orange-500', hoverColor: 'text-orange-700' },
            { Icon: SiCisco, name: 'Cisco', color: 'text-yellow-500', hoverColor: 'text-yellow-700' }
        ],
    },
    {
        title: 'Web Development',
        icons: [
            { Icon: SiHtml5, name: 'HTML5', color: 'text-red-500', hoverColor: 'text-red-700' },
            { Icon: SiCss3, name: 'CSS3', color: 'text-blue-500', hoverColor: 'text-blue-700' },
            { Icon: SiJavascript, name: 'JavaScript', color: 'text-yellow-500', hoverColor: 'text-yellow-700' },
            { Icon: SiReact, name: 'React', color: 'text-blue-500', hoverColor: 'text-blue-700' },
            { Icon: SiNextdotjs, name: 'Next.js', color: 'text-gray-200', hoverColor: 'text-gray-800' },
            { Icon: SiTailwindcss, name: 'Tailwind CSS', color: 'text-cyan-500', hoverColor: 'text-cyan-700' },
            { Icon: SiWordpress, name: 'WordPress', color: 'text-blue-500', hoverColor: 'text-blue-700' },
            { Icon: SiDotnet, name: 'ASP.NET', color: 'text-indigo-500', hoverColor: 'text-indigo-700' }
        ],
    },
    {
        title: 'Databases',
        icons: [
            { Icon: SiMysql, name: 'MySQL', color: 'text-yellow-500', hoverColor: 'text-yellow-700' },
            { Icon: SiPostgresql, name: 'PostgreSQL', color: 'text-blue-500', hoverColor: 'text-blue-700' },
            { Icon: SiOracle, name: 'Oracle', color: 'text-red-500', hoverColor: 'text-red-700' },
            { Icon: SiMongodb, name: 'MongoDB', color: 'text-green-500', hoverColor: 'text-green-700' },
            { Icon: SiMicrosoftsqlserver, name: 'SQL Server', color: 'text-red-500', hoverColor: 'text-red-700' },
            { Icon: SiSqlite, name: 'SQLite', color: 'text-blue-300', hoverColor: 'text-blue-500' }
        ],
    },
    {
        title: 'Programming Languages & Backend',
        icons: [
            { Icon: SiNodedotjs, name: 'Node.js', color: 'text-green-500', hoverColor: 'text-green-700' },
            { Icon: SiCsharp, name: 'C#', color: 'text-purple-500', hoverColor: 'text-purple-700' },
            { Icon: SiPhp, name: 'PHP', color: 'text-indigo-500', hoverColor: 'text-indigo-700' },
            { Icon: SiPython, name: 'Python', color: 'text-yellow-500', hoverColor: 'text-yellow-700' }
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
    const colorClass = isHovered ? icon.hoverColor : icon.color;

    return (
        <div
            className="flex flex-col items-center cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Icon
                size={iconSize}
                className={`text-gray-700 transition-all ${colorClass}`}
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
