import React from 'react'
import { navLinks } from '../../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const NavBar = () => {
    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: 'nav',
                start: 'bottom top'
            }
        });
        navTween.fromTo('nav', { backgroundColor: 'transparent' }, {
            backgroundColor: '#00000050',
            backgroundFilter: 'blur(10px)',
            duration: 1,
            ease: 'power1.inOut'

        });
    });
    return (
        <nav>
            <div>
                <a href="#home" className='flex items-center gap-2'>
                    <img src="/images/logo.png" alt="logo" />
                    <p>Sank Juicy</p>
                </a>

                <ul>
                    {navLinks.map((item) => (

                        <li key={item.id} href={`${item.id}`}>
                            {item.title}
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default NavBar