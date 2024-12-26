import React from 'react';
import Link from "next/link";

const Page = () => {
    return (
        <>
         <h1>Meals Page</h1>
            <p>Choose you meal or share it on socials:</p>
            <p><Link href="/meals/share">Share Meals Page</Link></p>
            <p><Link href="/meals/pizza">Pizza</Link></p>
            <p><Link href="/meals/steak">Steak</Link></p>
        </>
    );
};

export default Page;
