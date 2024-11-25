import Features from "@/components/home/Features"
import Hero from "@/components/home/Hero"
import Navbar from "@/components/Navbar"


const CommonLayout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <div>
                <Hero />
                <Features />
                <div className="max-w-[1800px] mx-auto">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default CommonLayout 