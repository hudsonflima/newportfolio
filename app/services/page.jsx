'use client'

import { BsArrowDownRight } from 'react-icons/bs'
import Link from 'next/link'

const services = [
  {
    num: '01',
    title: 'Data Analysis',
    description: 'Harness the power of data to uncover insights, trends, and patterns that drive business decisions and strategies.',
    href: ""
  },
  {
    num: '02',
    title: 'Web Development',
    description: 'Create responsive and user-friendly web applications and websites tailored to your business needs and goals.',
    href: ""
  },
  {
    num: '03',
    title: 'SQL Development',
    description: 'Design, optimize, and manage SQL databases to ensure efficient data storage, retrieval, and management.',
    href: ""
  },
  {
    num: '04',
    title: 'Business Intelligence',
    description: 'Utilize data analytics tools and techniques to transform raw data into actionable insights for informed decision-making.',
    href: ""
  },
  {
    num: '05',
    title: 'Infrastructure',
    description: 'Design, deploy, and maintain scalable and secure IT infrastructure solutions to support business operations and growth.',
    href: ""
  },
  {
    num: '06',
    title: 'SEO',
    description: 'Optimize websites and content to improve search engine visibility and drive organic traffic and conversions.',
    href: ""
  },
];

import { motion } from 'framer-motion';


const Services = () => {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
      <div className='container mx-auto'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2.4,
              duration: 0.4,
              ease: 'easeIn'
            }
          }}
          className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'
        >
          {services.map((services, index) => {
            return (
              <div key={index}
                className='flex-1 flex flex-col justify-center gap-6 group'>
                <div className='w-full flex justify-between items-center'>
                  <div className='text-5xl font-extrabold hover:text-accent transition-colors delay-75'>{services.num}</div>
                  <Link href={services.href}>
                    <BsArrowDownRight />
                  </Link>
                </div>
                <h2>{services.title}</h2>
                <p>{services.description}</p>
                <div className='border-b border-white/20 w-full'></div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services