'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
    {
        name: 'home',
        path: '/',
    },
    {
        name: 'Serviços',
        path: '/services',
    },
    {
        name: 'Resumo',
        path: '/resume',
    },
    {
        name: 'Projetos',
        path: '/work',
    },
    {
        name: 'Contato',
        path: '/contact',
    }
]

const Nav = () => {
    const pathname = usePathname();

    return (
        <nav className='flex gap-8 capitalize'>
            {links.map((links, index) => {
                return (<Link href={links.path} key={index} className={`${links.path === pathname && "text-accent border-b-2 border-accent "}`}>
                    {links.name}
                </Link>
                );
            })}
        </nav>
    )
}

export default Nav