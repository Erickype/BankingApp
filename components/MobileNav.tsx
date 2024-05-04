'use client'

import React from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import { sidebarLinks } from '@/constants'

const MobileNav = ({ user }: MobileNavProps) => {
    const side = "left"
    const currentPath = usePathname()

    return (
        <section className='w-full max-w-[264px]'>
            <Sheet key={side}>
                <SheetTrigger>
                    <Image
                        src="/icons/hamburger.svg"
                        width={30}
                        height={30}
                        alt='menu'
                    />
                </SheetTrigger>
                <SheetContent side={side} className='border-none bg-white'>
                    <SheetClose asChild>
                        <Link
                            href="/"
                            className='items-center gap-1 px-4 cursor-pointer flex'>
                            <Image
                                alt='logo'
                                src="/icons/logo.svg"
                                width={34}
                                height={34}
                            />
                            <h1 className='text-26 font-bold text-black-1 font-ibm-plex-serif'>Stellar</h1>
                        </Link>
                    </SheetClose>
                    <div className='mobilenav-sheet'>
                        <SheetClose asChild>
                            <nav className='flex flex-col h-full gap-6 pt-16 text-white'>
                                {sidebarLinks.map((item) => {
                                    const isActive = currentPath === item.route || currentPath.startsWith(`${item.route}/`)

                                    return (
                                        <SheetClose asChild key={item.route}>
                                            <Link
                                                href={item.route}
                                                key={item.label}
                                                className={cn('mobilenav-sheet_close w-full', {
                                                    'bg-bank-gradient': isActive
                                                })}
                                            >
                                                <Image
                                                    src={item.imgURL}
                                                    alt={item.label}
                                                    width={20}
                                                    height={20}
                                                    className={cn({
                                                        'brightness-[3] invert-0': isActive
                                                    })}
                                                />
                                                <p className={cn('text-16 font-semibold text-black-2', {
                                                    'text-white': isActive
                                                })}>
                                                    {item.label}
                                                </p>
                                            </Link>
                                        </SheetClose>
                                    )
                                })}
                                USER
                            </nav>
                        </SheetClose>
                        FOOTER
                    </div>
                </SheetContent>
            </Sheet>
        </section>
    )
}

export default MobileNav