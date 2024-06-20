// Resume.jsx
'use client'
import { motion } from 'framer-motion';

const Resume = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 1.5,
                ease: 'easeInOut',
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: 'easeOut',
            },
        },
    };

    return (
        <motion.div
            className="bg-primary text-gray-800 rounded-lg shadow-lg p-8 mx-auto max-w-3xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div
                className="bg-gradient-to-b from-primary to-slate-800 rounded-lg p-6 mb-6"
                variants={cardVariants}
            >
                <motion.h2 className="text-3xl font-bold mb-4 text-accent">Resumo Profissional</motion.h2>
                <motion.p className='text-gray-300'>
                    Analista de Dados com mais de 5 anos de experiência em análise e visualização de
                    dados. Especializado em transformar dados brutos em insights acionáveis usando
                    Power BI e tecnologias web. Proficiente em Node.js e SQL, com um histórico
                    comprovado de otimização de processos de negócios e suporte à tomada de decisões
                    estratégicas. Buscando uma posição desafiadora para aplicar minhas habilidades em
                    análise de dados e contribuir para o crescimento da empresa.
                </motion.p>
            </motion.div>
            <motion.div
                className="bg-gradient-to-b from-primary to-slate-800 rounded-lg p-6 mb-6"
                variants={cardVariants}
            >
                <motion.h3 className="text-2xl font-bold mb-2 text-accent">Habilidades</motion.h3>
                <motion.ul className="list-disc pl-6 mb-4">
                    <motion.li className='text-gray-300'>Análise de Dados</motion.li>
                    <motion.li className='text-gray-300'>ETL e Higienização de Dados</motion.li>
                    <motion.li className='text-gray-300'>Microsoft Power BI</motion.li>
                    <motion.li className='text-gray-300'>React/Next.js</motion.li>
                    <motion.li className='text-gray-300'>Node.js</motion.li>
                    <motion.li className='text-gray-300'>SQL Server e Oracle Database</motion.li>
                    <motion.li className='text-gray-300'>Web Scraping</motion.li>
                    <motion.li className='text-gray-300'>Administração de Servidores</motion.li>
                    <motion.li className='text-gray-300'>Criação de Scripts em Powershell</motion.li>
                    <motion.li className='text-gray-300'>Comunicação Eficaz</motion.li>
                    <motion.li className='text-gray-300'>Trabalho em Equipe</motion.li>
                </motion.ul>
            </motion.div>
            <motion.div
                className="bg-gradient-to-b from-primary to-slate-800 rounded-lg p-6 mb-6"
                variants={cardVariants}
            >
                <motion.h3 className="text-2xl font-bold mb-2 text-accent">Escolaridade</motion.h3>
                <motion.div className="mb-4 text-gray-300">
                    <p>
                        <span className="font-bold">Estácio</span> - Bacharelado em Ciência de Dados
                    </p>
                    <p>Cursando desde 16/05/2024</p>
                </motion.div>
                <motion.div className="text-gray-300">
                    <p>
                        <span className="font-bold">Faculdade dos Guararapes</span> - Técnico em
                        Redes de Computadores
                    </p>
                    <p>Concluído em 17/11/2009</p>
                </motion.div>
            </motion.div>
            <motion.div
                className="bg-gradient-to-b from-primary to-slate-800 rounded-lg p-6"
                variants={cardVariants}
            >
                <motion.h3 className="text-2xl font-bold mb-2 text-accent">Cursos Importantes</motion.h3>
                <motion.ul className="list-disc pl-6">
                    <motion.li className='text-gray-300'>Marketing Digital, 55h (09/2021) - Udemy</motion.li>
                    <motion.li className='text-gray-300'>Microsoft Power BI, 40h (07/2018) - Udemy</motion.li>
                    <motion.li className='text-gray-300'>DBA Oracle, 11h (05/2018) - Udemy</motion.li>
                    <motion.li className='text-gray-300'>Node.js, 38h (01/2023) - Udemy</motion.li>
                </motion.ul>
            </motion.div>
        </motion.div>
    );
};

export default Resume;
