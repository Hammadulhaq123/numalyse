import Link from "next/link"


const GrayBox = ({ name, link }) => {
    return (
        <Link href={link} className='w-full md:w-[21.1rem] lg:w-[19.1rem] xl:w-[20.4rem] text-xl font-bold p-4 flex justify-center items-center h-auto bg-[#2e2e2e] text-[#fff] rounded-[16px]'>
            {name}
        </Link>
    )
}

export default GrayBox
