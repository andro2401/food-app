import React from 'react';
import Link from "next/link";

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link href="/community">Community</Link>
                    </li>
                    <li>
                        <Link href="/meals">Meals</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
