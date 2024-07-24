import img1 from '../assets/img1.jpg'
import { FaCircleCheck } from "react-icons/fa6";

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

      <div className="bg-blue-100 flex-[1.5]">{/* Center -song duration and next controls*/}
        <input type='range'></input>
        
      </div>

      <div className="bg-blue-700 flex-1">{/* Right -Sound controls*/}

      </div>
      
      
    </div>
  )
}

export default PlaySection
