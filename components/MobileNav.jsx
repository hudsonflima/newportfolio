'use client'

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { CiMenuFries } from 'react-icons/ci'
import Socials from '@/components/Socials'  // Certifique-se de ajustar o caminho conforme necessário

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

const MobileNav = () => {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger className='flex justify-center items-center'>
                <CiMenuFries className='text-[32px] text-accent' />
            </SheetTrigger>
            <SheetContent className='flex flex-col bg-primary/70 border-transparent' style={{ fontFamily: 'var(--font-jetbrainsMono)' }}>
                <div className='mt-32 mb-40 text-center'>
                    <Link href={'/'}>
                        <h1 className='text-4xl font-semibold'>Hudson L<span className='text-accent'>.</span></h1>
                    </Link>
                </div>
                <div className='flex flex-col items-center'>
                    {links.map(link => (
                        <Link key={link.name} href={link.path}>
                            <div className={`mb-4 text-xl capitalize hover:text-accent transition-all  ${pathname === link.path ? 'text-accent border-b-2 border-accent' : 'text-white'}`} style={{ fontFamily: 'var(--font-jetbrainsMono)' }}>
                                {link.name}
                            </div>
                        </Link>
                    ))}
                </div>
                <div className='mt-8 flex flex-1 justify-center items-center'>
                    <Socials />
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav
