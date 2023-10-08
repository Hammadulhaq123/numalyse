import Describer from '../../../components/Describer'
import Navbar from '../../../components/Navbar'
import { BsFacebook, BsInstagram } from "react-icons/bs"
import { AiOutlineLinkedin } from "react-icons/ai"
import NewtonInputs from '../../../RequiredInputs/NewtonInputs'
import { Cedarville_Cursive } from "next/font/google"





const supreme = Cedarville_Cursive({
    weight: '400',
    subsets: ['latin']
})
const page = () => {
    return (
        <>
            <div className='flex flex-row gap-4 h-auto w-full p-4'>

                {/* Main Functionalities */}
                <div className='w-full lg:w-[70%] bg-gray-100 p-4 gap-2 rounded-[20px] flex flex-col items-center justify-start'>
                    <Navbar />
                    <Describer title={"Newton's method"} description={"This online calculator implements Newton's method (also known as the Newton–Raphson method) for finding the roots (or zeroes) of a real-valued function.It implements Newton's method using derivative calculator to obtain an analytical form of the derivative of a given function because this method requires it. You can find a theory to recall the method basics below the calculator."} />
                    <NewtonInputs />
                </div>

                {/* SideBar that is going to contain the ads and extras */}
                <div className='w-[30%] h-auto hidden lg:flex flex-col bg-gray-200 items-center justify-start py-8 px-4 text-[#04aa6d] rounded-[20px]'>
                    {/* <div className='flex gap-2 items-center justify-center flex-col text-3xl font-bold text-[#04aa6d]'>
                        Share Analysis!
                        <div className='flex gap-2 text-xl'>
                            <button className='w-8 h-8 bg-[#04aa6d] text-[#fff] rounded-full flex items-center justify-center'>
                                <BsFacebook />
                            </button>
                            <button className='w-8 h-8 bg-[#04aa6d] text-[#fff] rounded-full flex items-center justify-center'>
                                <BsInstagram />
                            </button>
                            <button className='w-8 h-8 bg-[#04aa6d] text-[#fff] rounded-full flex items-center justify-center'>
                                <AiOutlineLinkedin />
                            </button>
                        </div>
                    </div> */}
                    <div id='plot' className={`w-full text-center h-auto flex gap-2 items-center justify-center flex-col text-5xl font-bold text-[#04aa6d]`}>
                        <span className={`${supreme.className}`}>
                            Graphical Representation

                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page