'use client'
import { useRef } from "react"
import Collections from "./Collections"
import FeaturedProducts from "./featuredProducts/FeaturedProducts"
import Features from "./Features"
import Hero from "./Hero"
import PromotionalSec from "./PromotionalSec"
import SummerProducts from "./summer/SummerProducts"
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'



const HomeComponent = () => {
    const containerRef = useRef(null)
    return (
        <LocomotiveScrollProvider
            options={{
                smooth: true,
                lerp: 0.075, // Linear interpolation, lower = smoother
                multiplier: 0.9, // Scroll speed multiplier
                smartphone: {
                    smooth: true,
                },
                tablet: {
                    smooth: true,
                },
            }}
            containerRef={containerRef}
        >
            <main data-scroll-container ref={containerRef}>
                <Hero />
                <Features />
                <div className="max-w-[1800px] mx-auto">
                    <FeaturedProducts />
                    <PromotionalSec />
                    <Collections />
                    <SummerProducts />
                </div>
            </main>
        </LocomotiveScrollProvider>
    )
}

export default HomeComponent