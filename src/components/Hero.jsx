import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/SplitText'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { useMediaQuery } from 'react-responsive'

export const Hero = () => {

    const videoRef = useRef();

    const isMobile = useMediaQuery({ maxWidth: 767 });



    useGSAP(() => {
        const heroSplit = new SplitText('.title', { type: 'chars,words' });
        const paragraphSplit = new SplitText('.subtitle', { type: 'lines' });

        heroSplit.chars.forEach((char) => char.classList.add('text-gradient'))
        gsap.from(heroSplit.chars, {
            yPercent: 100,
            duration: 1.8,
            ease: "expo.out",
            stagger: 0.07
        });
        gsap.from(paragraphSplit.lines, {
            opacity: 0,
            yPercent: 100,
            duration: 1.8,
            ease: "expo.out",
            stagger: 0.07,
            delay: 0.5
        });
        gsap.timeline({
            scrollTrigger: {
                trigger: "#hero",
                start: 'top top',
                end: "bottom top",
                scrub: true,
            }
        })
            .to('.right-leaf', { y: 200 }, 0)
            .to('.left-leaf', { y: -200 }, 0)

        const startValue = isMobile ? "top 50%" : "center 60%";
        const endValue = isMobile ? "120% top" : "bottom top";
        //video animation

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "video",
                start: startValue,
                end: endValue,
                scrub: true,
                pin: true,
            },
        });

        videoRef.current.onloadedmetadata = () => {
            tl.to(videoRef.current, {
                currentTime: videoRef.current.duration,
            });
        };
    }, [])
    return (
        <>
            <section id='hero' className='noisy'>
                <h1 className='title'>Snacks</h1>

                <img src='/images/hero-left-leaf.png' alt='left-leaf' className='left-leaf' />
                <img src='/images/hero-right-leaf.png' alt='right-leaf' className='right-leaf' />

                <div className='body'>
                    <div className='content'>
                        <div className='space-y-5 hidden md:block'>
                            <p >Cool. Crisp. Classic</p>
                            <p className='subtitle'>
                                Sip the Spirit <br /> of Summer
                            </p>
                        </div>
                        <div className='view-cocktails'>
                            <p className='subtitle'>
                                Refreshing and flavorful, our snacks and cocktails are perfect for any occasion, our vibrant flavors and satisfying combos offer the perfect balance of taste, energy, and delight in every sip and bite.
                            </p>
                            <a href="#cocktails">View Snacks</a>
                        </div>
                    </div>
                </div>
            </section>
            <div className="video absolute inset-0">
                <video
                    ref={videoRef}
                    muted
                    playsInline
                    preload="auto"
                    src="/videos/output.mp4"
                />
            </div>

        </>
    )
}
