import Navbar from "@/components/Navbar"


const CommonLayout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <div className="max-w-[1800px] mx-auto">
                {children}
            </div>
        </div>
    )
}

export default CommonLayout 