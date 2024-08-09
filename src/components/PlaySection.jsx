import img1 from '../assets/img1.jpg'
import { FaCircleCheck,  FaCirclePlay  } from "react-icons/fa6";
import shuffle_icon from '../assets/shuffle.png'
import prev_icon from '../assets/prev.png'
import next_icon from '../assets/next.png'
import loop_icon from '../assets/loop.png'
import plays_icon from '../assets/plays.png'
import mic_icon from '../assets/mic.png'
import speaker_icon from '../assets/speaker.png'
import volume_icon from '../assets/volume.png'
import mini_player_icon from '../assets/mini-player.png'
import zoom_icon from '../assets/zoom.png'
import queue_icon from '../assets/queue.png'

const PlaySection = () => {
  return (
    <div className="flex items-center  w-full h-full">
      <div className="flex-1">{/*Left -song details area */}
        <div className='p-2 flex items-center gap-2'>
          <div className='h-[58px] w-[58px] rounded-lg overflow-hidden'>
              <img src={img1} alt="" /> 
          </div>
          <div>
            <p className='font-[600] border-b-[1px] border-b-transparent hover:border-b-white cursor-pointer inline'>Blind Love</p>
            <div className='flex items-center gap-4'>
              <p className=' text-gray-400 text-sm ml-0 pl-0'>
                <span className='cursor-pointer border-b-[1px] border-b-transparent hover:border-b-gray-400 leading-none'>Tatiana Maianos</span>
              </p>
              <span className='text-green-600'><FaCircleCheck/></span>
            </div>
          </div>
        </div>
      </div>




      <div className="flex-[1.5] flex flex-col gap-3 justify-center items-center">{/* Center -song duration and next controls*/}
        <div className='flex gap-6 items-center'>{/* top controls*/}
          <button className='opacity-80 hover:opacity-100'>
            <img src={shuffle_icon} className='w-4' alt="" />
          </button>
          <button className='opacity-80 hover:opacity-100 relative group'>
            <img src={prev_icon} className='w-4' alt="" />
            <span className='group-hover:inline hidden absolute top-[-40px] text-sm font-[600] left-[-30px] px-2 py-1 rounded-sm bg-[#333333]'>Previous</span>
          </button>
          <button className='opacity-80 hover:opacity-100 hover:scale-105 group relative'>
            <FaCirclePlay size={35}/>
            <span className='group-hover:inline hidden absolute top-[-32px] text-sm font-[600] left-0 px-2 py-[2px] rounded-sm bg-[#333333]'>Play</span>
          </button>
          <button className='opacity-80 hover:opacity-100 relative group'>
            <img src={next_icon} className='w-4' alt="" />
            <span className='group-hover:inline hidden absolute top-[-40px] text-sm font-[600] left-[-12px] px-2 py-1 rounded-sm bg-[#333333]'>Next</span>
          </button>
          <button className='opacity-80 hover:opacity-100 group relative'>
            <img src={loop_icon} className='w-4' alt="" />
            <span className='group-hover:inline hidden absolute top-[-40px] text-sm font-[600] left-[-30px] px-2 py-1 rounded-sm bg-[#333333] whitespace-nowrap'>Enable repeat</span>
          </button>
        </div>

        <div className='flex gap-2 items-center'>
          <span className=' text-gray-400 font-medium'>0.00</span>
          <div className='flex items-center'>
            <input type='range' className='w-96' value={0}></input>
          </div>
          <span className=' text-gray-400 font-medium'>4.32</span>
        </div>
      </div>






      <div className="flex-1 flex justify-center">{/* Right -Sound controls*/}
        <div className='flex gap-4 items-center'>
          <button className='opacity-80 hover:opacity-100 group relative'>
            <img src={plays_icon} className='w-4' alt="" />
            <span className='group-hover:inline hidden absolute top-[-40px] text-sm font-[600] left-[-50px] px-2 py-1 rounded-sm bg-[#333333] whitespace-nowrap'>Now playing view</span>
          </button>
          <button className='opacity-80 hover:opacity-100 relative group'>
            <img src={mic_icon} className='w-4' alt="" />
            <span className='group-hover:inline hidden absolute top-[-40px] text-sm font-[600] left-[-12px] px-2 py-1 rounded-sm bg-[#333333]'>Lyrics</span>
          </button>
          <button className='opacity-80 hover:opacity-100 relative group'>
            <img src={queue_icon} className='w-4' alt="" />
            <span className='group-hover:inline hidden absolute top-[-40px] text-sm font-[600] left-[-12px] px-2 py-1 rounded-sm bg-[#333333]'>Queue</span>
          </button>
          <button className='opacity-80 hover:opacity-100 group relative'>
            <img src={speaker_icon} className='w-4' alt="" />
            <span className='group-hover:inline hidden absolute top-[-40px] text-sm font-[600] left-[-50px] px-2 py-1 rounded-sm bg-[#333333] whitespace-nowrap'>Conect to a device</span>
          </button>
          <div className='flex gap-1 items-center'>
            <button className='opacity-80 hover:opacity-100 relative group'>
              <img src={volume_icon} className='w-4' alt="" />
              <span className='group-hover:inline hidden absolute top-[-40px] text-sm font-[600] left-[-12px] px-2 py-1 rounded-sm bg-[#333333]'>Mute</span>
            </button>
            <input type="range" name="" id="" />
          </div>

          <button className='opacity-80 hover:opacity-100 group relative'>
            <img src={mini_player_icon} className='w-4' alt="" />
            <span className='group-hover:inline hidden absolute top-[-40px] text-sm font-[600] left-[-52px] px-2 py-1 rounded-sm bg-[#333333] whitespace-nowrap'>Open Miniplayer</span>
          </button>

          <button className='opacity-80 hover:opacity-100 group relative'>
            <img src={zoom_icon} className='w-4' alt="" />
            <span className='group-hover:inline hidden absolute top-[-40px] text-sm font-[600] left-[-20px] px-2 py-1 rounded-sm bg-[#333333] whitespace-nowrap'>Zoom</span>
          </button>
        </div>

      </div>
      
      
    </div>
  )
}

export default PlaySection
