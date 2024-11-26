import Footer from "@/components/Footer"
import Features from "@/components/home/Features"
import Hero from "@/components/home/Hero"
import Navbar from "@/components/Navbar"


const CommonLayout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <div>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default CommonLayout 