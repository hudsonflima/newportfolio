'use client'

import CountUp from "react-countup"

const stats = [
    {
        num: new Date().getFullYear() - 2009,
        text: 'Years of experience',
    },
    {
        num: 26,
        text: 'Technologies mastered',
    },
    {
        num: 11,
        text: 'Projects completed',
    },
    {
        num: 63 + 22,
        text: 'Code commits',
    },
];

const Stats = () => {
    return (
        <section className='pt-4 pb-12 xl:pt-0 xl:pb-0'>
            <div className='container mx-auto'>
                <div className='flex flex-wrap gap-6 max-2-[80vw] mx-auto xl:max-w-none'>
                    {stats.map((stats, index) => {
                        return <div key={index} className='flex-1 flex gap-4 items-center xl:justify-start'>
                            <CountUp 
                                end={stats.num} 
                                duration={5} 
                                delay={1} 
                                className='text-4xl xl:text-6xl font-extrabold' 
                            />
                            <div className={`${stats.text.length < 15 ? 'max-w-[100px]' : 'max-w-[150px]'} leading-snug text-white/80`}>{stats.text}</div>
                        </div>
                    })}
                </div>
            </div>
        </section>
    )
}

export default Stats