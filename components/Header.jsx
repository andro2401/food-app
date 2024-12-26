import React from 'react';
import Link from "next/link";
import logoImg from '@/assets/logo.png';
import Image from "next/image";
import './header.scss';
const Header = () => {
    return (
        <header>
            <Link href="/" className="mainLogo">
                <Image src={logoImg} alt="Plate of food on it" priority={false} />
                NextLevel Food
            </Link>
            <nav className="headerNav">
                <ul>
                    <li>
                        <Link href="/community">Community</Link>
                    </li>
                    <li>
                        <Link href="/meals">Meals</Link>
                    </li>
                    <li>
                        <Link href="/meals/share">Share</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
