import left_arrow_icon from '../../assets/left_arrow.png'
import right_arrow_icon from '../../assets/right_arrow.png'
import bell_icon from '../../assets/bell.png'
import { FiArrowDownCircle } from "react-icons/fi";

const TopNavBar = () => {
  return (
    <div className="p-5 rounded-t-lg  "> {/* Fixed top */}
        <div className='flex justify-between'>
            <div className='flex gap-4 shrink-0'>{/*forward and back buttons*/}
                <button className='p-2 rounded-[50%] bg-black group relative'>
                <img src={left_arrow_icon} alt="" className='h-4' />
                <span className='px-3 py-1 bg-[#282828] text-sm font-[600] rounded-sm absolute bottom-[-35px] translate-x-[-50%] hidden group-hover:inline whitespace-nowrap'>Go back</span>
                </button>
                <button className='p-2 rounded-[50%] bg-black group relative'>
                <img src={right_arrow_icon} alt="" className='h-4' />
                <span className='px-3 py-1 bg-[#282828] text-sm font-[600] rounded-sm absolute bottom-[-35px] translate-x-[-50%] hidden group-hover:inline whitespace-nowrap'>Go foward</span>
                </button>
            </div>
            <div className='flex gap-2 text-sm shrink-0'>{/*right buttons */}
                <button className='bg-white text-black font-[600] rounded-3xl py-1 px-3 hover:opacity-90 hover:scale-105'>Explore Premium</button>
                <button className='bg-black font-[600] rounded-3xl py-1 px-3 hover:opacity-90 hover:scale-105 flex items-center'>
                <FiArrowDownCircle className='inline mr-1 text-lg'/>
                Install App</button>
                <button className='bg-black font-[600] rounded-[50%] p-2 hover:opacity-90 hover:scale-105 relative group'>
                    <img src={bell_icon} alt="" className='h-4' />
                    <span className='w-2 h-2 bg-blue-700 rounded-[50%] absolute top-0 right-1'></span>
                    <span className='px-3 py-1 bg-[#282828] text-sm font-[600] rounded-sm absolute bottom-[-35px] translate-x-[-50%] hidden group-hover:inline whitespace-nowrap'>What&#39;s new</span>
                </button>
                <button className='bg-blue-600 font-[600] rounded-[50%] w-8 h-8 text-center hover:scale-105 border-[5px] border-black group relative'>K<span className='px-3 py-1 bg-[#282828] text-sm font-[600] rounded-sm absolute bottom-[-40px] right-0 hidden whitespace-nowrap group-hover:inline'>Kevin Biwott</span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default TopNavBar
