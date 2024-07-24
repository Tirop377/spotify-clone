import home_icon from '../assets/home.png'
import search_icon from '../assets/search.png'
import stack_icon from '../assets/stack.png'
import plus_icon from '../assets/plus.png'
import arrow_icon from '../assets/arrow.png'
import queue_icon from '../assets/queue.png'
import { FaHeart } from "react-icons/fa";
import { BsPinAngleFill } from "react-icons/bs";
import img1 from '../assets/img1.jpg'
const Sidebar = () => {
  return (
    <div className='w-[30%] h-full  flex flex-col gap-2 text-white'>
        <div className='rounded-lg h-[21%] bg-[#121212] p-5'>
            <button className='flex items-center gap-4 text-gray-400 hover:text-white group mb-5'>
                <img src={home_icon} alt="" className='h-6 opacity-50 group-hover:opacity-100' />
                <span className='text-lg font-[600]'>Home</span>
            </button>
            <button className='flex items-center gap-4 text-gray-400 hover:text-white group'>
                <img src={search_icon} alt="" className='h-6 opacity-50 group-hover:opacity-100' />
                <span className='text-lg font-[600]'>Search</span>
            </button>
        </div>

        <div className='rounded-lg h-[79%] w-full bg-[#121212]'>
            {/* Fixed top */}
            <div className='p-5 h-[27%]'>
                <div className='flex justify-between items-center mb-4'>
                    <button className='flex items-center gap-4 text-gray-400 hover:text-white group'>
                        <img src={stack_icon} alt="" className='h-6 opacity-50 group-hover:opacity-100' />
                        <span className='text-lg font-[600]'>Your Library</span>
                    </button>
                    <div className='flex gap-2'>
                        <button className='hover:bg-slate-800 p-2 rounded-[50%] group relative'>
                            <img src={plus_icon} alt="" className='h-4 opacity-50 group-hover:opacity-100' />
                            <span className='py-1 px-2 text-sm font-[600] bg-[#333333] rounded-sm absolute top-[-40px] whitespace-nowrap left-0 translate-x-[-40%] hidden group-hover:inline shadow-sm shadow-black'>Create playlist or folder</span>
                        </button>
                        <button className='hover:bg-slate-800 p-2 rounded-[50%] group relative'>
                            <img src={arrow_icon} alt="" className='h-4 opacity-50 group-hover:opacity-100' />
                            <span className='py-1 px-2 text-sm font-[600] bg-[#333333] rounded-sm absolute top-[-40px] whitespace-nowrap left-0 translate-x-[-30%] hidden group-hover:inline shadow-sm shadow-black'>Show more</span>
                        </button>
                    </div>
                </div>

                <div className='flex gap-2 items-center'>
                    <button className='py-[5px] px-3 text-sm rounded-3xl bg-[#333333] hover:bg-[#333333c2] font-[600]'>Playlist</button>
                    <button className='py-[5px] px-3 text-sm rounded-3xl bg-[#333333] hover:bg-[#333333c2] font-[600]'>Artist</button>
                    <button className='py-[5px] px-3 text-sm rounded-3xl bg-[#333333] hover:bg-[#333333c2] font-[600]'>Albums</button>
                    <button className='py-[5px] px-3 text-sm rounded-3xl bg-[#333333] hover:bg-[#333333c2] font-[600] whitespace-nowrap'>Podcasts & Shows</button>
                </div>

            </div>

            <div className='px-2 flex flex-col h-[73%] overflow-auto'>
                {/* mini search area */}
                <div className='flex justify-between items-center px-1'>
                    <button className='group hover:bg-[#333333] p-2 rounded-[50%]'>
                        <img src={search_icon} className='h-4 opacity-50 group-hover:opacity-100' alt="" />
                    </button>
                    <button className=' p-2  flex items-center gap-1 text-sm font-[600] opacity-60 hover:opacity-100 hover:scale-105'>
                        <span className=''>Resents</span>
                        <img src={queue_icon} className='h-4' alt="" />
                    </button>
                </div>

                {/* Liked songs button */}
                <div className='p-2 hover:bg-[#484848] rounded-lg flex gap-2 cursor-pointer'>
                    <div className='h-[50px] w-[50px] flex justify-center items-center bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-400'>
                        <FaHeart/>  
                    </div>
                    <div>
                        <p className='font-[600]'>Liked Songs</p>
                        <p className='text-gray-400 text-sm font-[600]'><BsPinAngleFill className='inline text-green-400 mr-2'/>Playlist &#183; 33 songs</p>
                    </div>
                </div>

                {/* Atists buttons */}
                <div className='w-full flex flex-col'>
                    <div className='p-2 hover:bg-[#484848] rounded-lg flex items-center gap-2 cursor-pointer'>
                        <div className='h-[50px] w-[50px] rounded-[50%] overflow-hidden'>
                            <img src={img1} alt="" /> 
                        </div>
                        <div>
                            <p className='font-[600]'>Tatiana Maianos</p>
                            <p className='text-gray-400 text-sm font-[600] ml-0 pl-0'>Artist</p>
                        </div>
                    </div>

                    <div className='p-2 hover:bg-[#484848] rounded-lg flex gap-2 cursor-pointer'>
                        <div className='h-[50px] w-[50px] rounded-[50%] overflow-hidden'>
                            <img src={img1} alt="" /> 
                        </div>
                        <div>
                            <p className='font-[600]'>Tatiana Maianos</p>
                            <p className='text-gray-400 text-sm font-[600] ml-0 pl-0'>Artist</p>
                        </div>
                    </div>

                    <div className='p-2 hover:bg-[#484848] rounded-lg flex gap-2 items-center cursor-pointer'>
                        <div className='h-[50px] w-[50px] rounded-[50%] overflow-hidden'>
                            <img src={img1} alt="" /> 
                        </div>
                        <div>
                            <p className='font-[600]'>Tatiana Maianos</p>
                            <p className='text-gray-400 text-sm font-[600] ml-0 pl-0'>Artist</p>
                        </div>
                    </div>

                    <div className='p-2 hover:bg-[#484848] rounded-lg flex gap-2 items-center cursor-pointer'>
                        <div className='h-[50px] w-[50px] rounded-[50%] overflow-hidden'>
                            <img src={img1} alt="" /> 
                        </div>
                        <div>
                            <p className='font-[600]'>Tatiana Maianos</p>
                            <p className='text-gray-400 text-sm font-[600] ml-0 pl-0'>Artist</p>
                        </div>
                    </div>

                    <div className='p-2 hover:bg-[#484848] rounded-lg flex gap-2 items-center cursor-pointer'>
                        <div className='h-[50px] w-[50px] rounded-[50%] overflow-hidden'>
                            <img src={img1} alt="" /> 
                        </div>
                        <div>
                            <p className='font-[600]'>Tatiana Maianos</p>
                            <p className='text-gray-400 text-sm font-[600] ml-0 pl-0'>Artist</p>
                        </div>
                    </div>

                    <div className='p-2 hover:bg-[#484848] rounded-lg flex gap-2 items-center cursor-pointer'>
                        <div className='h-[50px] w-[50px] rounded-[50%] overflow-hidden'>
                            <img src={img1} alt="" /> 
                        </div>
                        <div>
                            <p className='font-[600]'>Tatiana Maianos</p>
                            <p className='text-gray-400 text-sm font-[600] ml-0 pl-0'>Artist</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
      
    </div>
  )
}

export default Sidebar
