import left_arrow_icon from '../assets/left_arrow.png'
import right_arrow_icon from '../assets/right_arrow.png'
import bell_icon from '../assets/bell.png'
import { FiArrowDownCircle } from "react-icons/fi";
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'
import img6 from '../assets/img6.jpg'
import img7 from '../assets/img7.jpg'
import img8 from '../assets/img8.jpg'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import { FaPlay, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";


const Main = () => {
  return (
    <div className='w-[70%] h-[101.5%] bg-[#121212] rounded-lg'>
      <div className="p-5 bg-gradient-to-b from-[#212121] to-[#121212] rounded-t-lg h-[22%]"> {/* Fixed top */}
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
              <button className='bg-blue-600 font-[600] rounded-[50%] w-8 h-8 text-center hover:scale-105 border-[5px] border-black group relative'>
                K
                <span className='px-3 py-1 bg-[#282828] text-sm font-[600] rounded-sm absolute bottom-[-40px] right-0 hidden group-hover:inline whitespace-nowrap'>Kevin Biwott</span>
              </button>
          </div>
        </div>
        <div className='flex gap-2 items-center mt-4'>
          <button className='py-[5px] px-3 text-sm rounded-3xl bg-white text-black font-[600]'>All</button>
          <button className='py-[5px] px-3 text-sm rounded-3xl bg-[#333333] hover:bg-[#333333c2] font-[600]'>Music</button>
          <button className='py-[5px] px-3 text-sm rounded-3xl bg-[#333333] hover:bg-[#333333c2] font-[600]'>Podcast</button>
        </div>
        
      </div>

      <section className='h-[78%] w-full flex flex-col gap-6 px-2 py-2 overflow-auto'>{/*main section*/}
        <div className='w-full'>{/*Group of Playlists*/}
          <div className='flex justify-between items-center py-3 px-3'>{/* headings*/}
            <button className='text-2xl font-bold border-b-[3px] border-b-transparent hover:border-b-white leading-6'>Made For Kevin Biwott</button>
            <button className='text-sm text-gray-500 border-b-[2px] border-b-transparent font-bold hover:border-b-gray-500 leading-3'>Show all</button>
          </div>
         
          <div className='flex items-center mt-2 w-full overflow-auto scrollbar-hide'> {/*playlists  */}
            <div className='p-3 rounded-lg  hover:bg-[#1E1E1E] w-[190px] min-w-[190px] cursor-pointer group'> {/* single playlist */}
              <div className='w-full rounded-lg overflow-hidden relative'>
                <img src={img4} alt="" />
                <button className='absolute  bottom-2 right-2 w-12 h-12 rounded-[50%] bg-green-500 text-black group-hover:flex items-center justify-center hidden hover:scale-105'> <FaPlay className='translate-x-[2px]'/> </button>
              </div>
              <h3 className='font-[600] mt-2'>Daily Mix 1</h3>
              <p className='text-sm text-gray-400 font-[600] mt-1'>Tatiana Manaois, Olamide, Fireboy DML...</p>
            </div>

            <div className='p-3 rounded-lg  hover:bg-[#1E1E1E] w-[190px] min-w-[190px] cursor-pointer group'> {/* single playlist */}
              <div className='w-full rounded-lg overflow-hidden relative'>
                <img src={img5} alt="" />
                <button className='absolute  bottom-2 right-2 w-12 h-12 rounded-[50%] bg-green-500 text-black group-hover:flex items-center justify-center hidden hover:scale-105'> <FaPlay className='translate-x-[2px]'/> </button>
              </div>
              <h3 className='font-[600] mt-2'>Daily Mix 2</h3>
              <p className='text-sm text-gray-400 font-[600] mt-1'>Tatiana Manaois, Olamide, Fireboy DML...</p>
            </div>

            <div className='p-3 rounded-lg  hover:bg-[#1E1E1E] w-[190px] min-w-[190px] cursor-pointer group'> {/* single playlist */}
              <div className='w-full rounded-lg overflow-hidden relative'>
                <img src={img6} alt="" />
                <button className='absolute  bottom-2 right-2 w-12 h-12 rounded-[50%] bg-green-500 text-black group-hover:flex items-center justify-center hidden hover:scale-105'> <FaPlay className='translate-x-[2px]'/> </button>
              </div>
              <h3 className='font-[600] mt-2'>Daily Mix 3</h3>
              <p className='text-sm text-gray-400 font-[600] mt-1'>Tatiana Manaois, Olamide, Fireboy DML...</p>
            </div>

            <div className='p-3 rounded-lg  hover:bg-[#1E1E1E] w-[190px] min-w-[190px] cursor-pointer group'> {/* single playlist */}
              <div className='w-full rounded-lg overflow-hidden relative'>
                <img src={img7} alt="" />
                <button className='absolute  bottom-2 right-2 w-12 h-12 rounded-[50%] bg-green-500 text-black group-hover:flex items-center justify-center hidden hover:scale-105'> <FaPlay className='translate-x-[2px]'/> </button>
              </div>
              <h3 className='font-[600] mt-2'>Daily Mix 4</h3>
              <p className='text-sm text-gray-400 font-[600] mt-1'>Tatiana Manaois, Olamide, Fireboy DML...</p>
            </div>

            <div className='p-3 rounded-lg  hover:bg-[#1E1E1E] w-[190px] min-w-[190px] cursor-pointer group'> {/* single playlist */}
              <div className='w-full rounded-lg overflow-hidden relative'>
                <img src={img8} alt="" />
                <button className='absolute  bottom-2 right-2 w-12 h-12 rounded-[50%] bg-green-500 text-black group-hover:flex items-center justify-center hidden hover:scale-105'> <FaPlay className='translate-x-[2px]'/> </button>
              </div>
              <h3 className='font-[600] mt-2'>Daily Mix 5</h3>
              <p className='text-sm text-gray-400 font-[600] mt-1'>Tatiana Manaois, Olamide, Fireboy DML...</p>
            </div>

          </div>

        </div>

        <div className='w-full'>{/*Group of Playlists*/}
          <div className='flex justify-between items-center py-3 px-3'>{/* headings*/}
            <button className='text-2xl font-bold border-b-[3px] border-b-transparent hover:border-b-white leading-6'>Popular Albums</button>
            <button className='text-sm text-gray-500 border-b-[2px] border-b-transparent font-bold hover:border-b-gray-500 leading-3'>Show all</button>
          </div>
         
          <div className='flex items-center mt-2 w-full overflow-auto scrollbar-hide'> {/*playlists  */}
            <div className='p-3 rounded-lg  hover:bg-[#1E1E1E] w-[190px] min-w-[190px] cursor-pointer group'> {/* single playlist */}
              <div className='w-full rounded-lg overflow-hidden relative'>
                <img src={img4} alt="" />
                <button className='absolute  bottom-2 right-2 w-12 h-12 rounded-[50%] bg-green-500 text-black group-hover:flex items-center justify-center hidden hover:scale-105'> <FaPlay className='translate-x-[2px]'/> </button>
              </div>
              <h3 className='font-[600] mt-2'>Daily Mix 1</h3>
              <p className='text-sm text-gray-400 font-[600] mt-1'>Tatiana Manaois, Olamide, Fireboy DML...</p>
            </div>

            <div className='p-3 rounded-lg  hover:bg-[#1E1E1E] w-[190px] min-w-[190px] cursor-pointer group'> {/* single playlist */}
              <div className='w-full rounded-lg overflow-hidden relative'>
                <img src={img5} alt="" />
                <button className='absolute  bottom-2 right-2 w-12 h-12 rounded-[50%] bg-green-500 text-black group-hover:flex items-center justify-center hidden hover:scale-105'> <FaPlay className='translate-x-[2px]'/> </button>
              </div>
              <h3 className='font-[600] mt-2'>Daily Mix 2</h3>
              <p className='text-sm text-gray-400 font-[600] mt-1'>Tatiana Manaois, Olamide, Fireboy DML...</p>
            </div>

            <div className='p-3 rounded-lg  hover:bg-[#1E1E1E] w-[190px] min-w-[190px] cursor-pointer group'> {/* single playlist */}
              <div className='w-full rounded-lg overflow-hidden relative'>
                <img src={img6} alt="" />
                <button className='absolute  bottom-2 right-2 w-12 h-12 rounded-[50%] bg-green-500 text-black group-hover:flex items-center justify-center hidden hover:scale-105'> <FaPlay className='translate-x-[2px]'/> </button>
              </div>
              <h3 className='font-[600] mt-2'>Daily Mix 3</h3>
              <p className='text-sm text-gray-400 font-[600] mt-1'>Tatiana Manaois, Olamide, Fireboy DML...</p>
            </div>

            <div className='p-3 rounded-lg  hover:bg-[#1E1E1E] w-[190px] min-w-[190px] cursor-pointer group'> {/* single playlist */}
              <div className='w-full rounded-lg overflow-hidden relative'>
                <img src={img7} alt="" />
                <button className='absolute  bottom-2 right-2 w-12 h-12 rounded-[50%] bg-green-500 text-black group-hover:flex items-center justify-center hidden hover:scale-105'> <FaPlay className='translate-x-[2px]'/> </button>
              </div>
              <h3 className='font-[600] mt-2'>Daily Mix 4</h3>
              <p className='text-sm text-gray-400 font-[600] mt-1'>Tatiana Manaois, Olamide, Fireboy DML...</p>
            </div>

            <div className='p-3 rounded-lg  hover:bg-[#1E1E1E] w-[190px] min-w-[190px] cursor-pointer group'> {/* single playlist */}
              <div className='w-full rounded-lg overflow-hidden relative'>
                <img src={img8} alt="" />
                <button className='absolute  bottom-2 right-2 w-12 h-12 rounded-[50%] bg-green-500 text-black group-hover:flex items-center justify-center hidden hover:scale-105'> <FaPlay className='translate-x-[2px]'/> </button>
              </div>
              <h3 className='font-[600] mt-2'>Daily Mix 5</h3>
              <p className='text-sm text-gray-400 font-[600] mt-1'>Tatiana Manaois, Olamide, Fireboy DML...</p>
            </div>

          </div>
          
        </div>

        <div className='w-full'>{/*popular artists*/}
          <div className='flex justify-between items-center py-3 px-3'>{/* headings*/}
            <button className='text-2xl font-bold border-b-[3px] border-b-transparent hover:border-b-white leading-6'>Popular Artist</button>
            <button className='text-sm text-gray-500 border-b-[2px] border-b-transparent font-bold hover:border-b-gray-500 leading-3'>Show all</button>
          </div>
         
          <div className='flex items-center mt-2 w-full overflow-auto scrollbar-hide'> {/*group of artists  */}
            <div className='p-3 rounded-lg  hover:bg-[#1E1E1E] w-[190px] min-w-[190px] cursor-pointer group'> {/* single artist */}
              <div className='w-full  overflow-hidden relative'>
                <img src={img4} alt="" className='rounded-[50%]' />
                <button className='absolute  bottom-2 right-2 w-12 h-12 rounded-[50%] bg-green-500 text-black group-hover:flex items-center justify-center hidden hover:scale-105 '> <FaPlay className='translate-x-[2px]'/> </button>
              </div>
              <h3 className='font-[600] mt-2'>Tatiana</h3>
              <p className='text-sm text-gray-400 font-[600] mt-1'>Artist</p>
            </div>

            <div className='p-3 rounded-lg  hover:bg-[#1E1E1E] w-[190px] min-w-[190px] cursor-pointer group'> {/* single artist */}
              <div className='w-full  overflow-hidden relative'>
                <img src={img1} alt="" className='rounded-[50%]' />
                <button className='absolute  bottom-2 right-2 w-12 h-12 rounded-[50%] bg-green-500 text-black group-hover:flex items-center justify-center hidden hover:scale-105 '> <FaPlay className='translate-x-[2px]'/> </button>
              </div>
              <h3 className='font-[600] mt-2'>Tatiana</h3>
              <p className='text-sm text-gray-400 font-[600] mt-1'>Artist</p>
            </div>

            <div className='p-3 rounded-lg  hover:bg-[#1E1E1E] w-[190px] min-w-[190px] cursor-pointer group'> {/* single artist */}
              <div className='w-full  overflow-hidden relative'>
                <img src={img2} alt="" className='rounded-[50%]' />
                <button className='absolute  bottom-2 right-2 w-12 h-12 rounded-[50%] bg-green-500 text-black group-hover:flex items-center justify-center hidden hover:scale-105 '> <FaPlay className='translate-x-[2px]'/> </button>
              </div>
              <h3 className='font-[600] mt-2'>Tatiana</h3>
              <p className='text-sm text-gray-400 font-[600] mt-1'>Artist</p>
            </div>

            <div className='p-3 rounded-lg  hover:bg-[#1E1E1E] w-[190px] min-w-[190px] cursor-pointer group'> {/* single artist */}
              <div className='w-full  overflow-hidden relative'>
                <img src={img3} alt="" className='rounded-[50%]' />
                <button className='absolute  bottom-2 right-2 w-12 h-12 rounded-[50%] bg-green-500 text-black group-hover:flex items-center justify-center hidden hover:scale-105 '> <FaPlay className='translate-x-[2px]'/> </button>
              </div>
              <h3 className='font-[600] mt-2'>Tatiana</h3>
              <p className='text-sm text-gray-400 font-[600] mt-1'>Artist</p>
            </div>

            <div className='p-3 rounded-lg  hover:bg-[#1E1E1E] w-[190px] min-w-[190px] cursor-pointer group'> {/* single artist */}
              <div className='w-full  overflow-hidden relative'>
                <img src={img4} alt="" className='rounded-[50%]' />
                <button className='absolute  bottom-2 right-2 w-12 h-12 rounded-[50%] bg-green-500 text-black group-hover:flex items-center justify-center hidden hover:scale-105 '> <FaPlay className='translate-x-[2px]'/> </button>
              </div>
              <h3 className='font-[600] mt-2'>Tatiana</h3>
              <p className='text-sm text-gray-400 font-[600] mt-1'>Artist</p>
            </div>
          </div>
          
        </div>

        <footer className='w-full p-6 mt-8'>{/*footer */}
          <div className='w-full flex justify-between items-start text-gray-400 border-b-[1px] border-b-gray-600 pb-10'>{/*Navigation Links */}
            <ul className='flex flex-col gap-2'>{/*Company Links */}
              <li>
                <h3 className='text-white font-[600] text-lg'>Company</h3>
              </li>
              <li>
                <span className='border-b-2 border-b-transparent hover:border-b-gray-400 leading-4 cursor-pointer'>About</span>
              </li>
              <li>
                <span className='border-b-2 border-b-transparent hover:border-b-gray-400 leading-4 cursor-pointer'>Jobs</span>
              </li>
              <li>
                <span className='border-b-2 border-b-transparent hover:border-b-gray-400 leading-4 cursor-pointer'>For the Record</span>
              </li>
              
            </ul>

            <ul className='flex flex-col gap-2'>{/*Communities */}
              <li>
                <h3 className='text-white font-[600] text-lg'>Communities</h3>
              </li>
              <li>
                <span className='border-b-2 border-b-transparent hover:border-b-gray-400 leading-4 cursor-pointer'>For Artists</span>
              </li>
              <li>
                <span className='border-b-2 border-b-transparent hover:border-b-gray-400 leading-4 cursor-pointer'>Developers</span>
              </li>
              <li>
                <span className='border-b-2 border-b-transparent hover:border-b-gray-400 leading-4 cursor-pointer'>Advertising</span>
              </li>
              <li>
                <span className='border-b-2 border-b-transparent hover:border-b-gray-400 leading-4 cursor-pointer'>Investors</span>
              </li>
              <li>
                <span className='border-b-2 border-b-transparent hover:border-b-gray-400 leading-4 cursor-pointer'>Vendors</span>
              </li>
              
            </ul>

            <ul className='flex flex-col gap-2'>{/*Usefull Links */}
              <li>
                <h3 className='text-white font-[600] text-lg'>Usefull Links</h3>
              </li>
              <li>
                <span className='border-b-2 border-b-transparent hover:border-b-gray-400 leading-4 cursor-pointer'>Support</span>
              </li>
              <li>
                <span className='border-b-2 border-b-transparent hover:border-b-gray-400 leading-4 cursor-pointer'>For Mobile App</span>
              </li>
            </ul>

            <ul className='flex flex-col gap-2'>{/*Spotify Plans */}
              <li>
                <h3 className='text-white font-[600] text-lg'>Spotify Plans</h3>
              </li>
              <li>
                <span className='border-b-2 border-b-transparent hover:border-b-gray-400 leading-4 cursor-pointer'>Premium Individual</span>
              </li>
              <li>
                <span className='border-b-2 border-b-transparent hover:border-b-gray-400 leading-4 cursor-pointer'>Premium Duo</span>
              </li>
              <li>
                <span className='border-b-2 border-b-transparent hover:border-b-gray-400 leading-4 cursor-pointer'>Premium Family</span>
              </li>
              <li>
                <span className='border-b-2 border-b-transparent hover:border-b-gray-400 leading-4 cursor-pointer'>Premium Student</span>
              </li>
              <li>
                <span className='border-b-2 border-b-transparent hover:border-b-gray-400 leading-4 cursor-pointer'>Spotify Free</span>
              </li>
            </ul>

            <ul className='flex gap-3 text-white'>{/*Social media links */}
              <li className='p-4 rounded-[50%] bg-[#9b99995d] hover:bg-[#727272] cursor-pointer  text-lg'>
                <FaInstagram/>
              </li>
              <li className='p-4 rounded-[50%] bg-[#9b99995d] hover:bg-[#727272] cursor-pointer text-lg'>
                <FaTwitter/>
              </li>
              <li className='p-4 rounded-[50%] bg-[#9b99995d] hover:bg-[#727272] cursor-pointer text-lg'>
                <FaFacebook/>
              </li>
              
              
            </ul>
            
          </div>

          <div className='w-full flex justify-between items-center py-10'>{/*copyright area */}
            <ul className='flex gap-3'>
              <li>
                <span className='text-gray-600 hover:text-gray-300 cursor-pointer text-sm font-[600]'>Legal</span>
              </li>
              <li>
                <span className='text-gray-600 hover:text-gray-300 cursor-pointer text-sm whitespace-nowrap font-[600]'>Safety & Privacy Center</span>
              </li>
              <li>
                <span className='text-gray-600 hover:text-gray-300 cursor-pointer text-sm font-[600]'>Privacy Policy</span>
              </li>
              <li>
                <span className='text-gray-600 hover:text-gray-300 cursor-pointer text-sm font-[600]'>Cookies</span>
              </li>
              <li>
                <span className='text-gray-600 hover:text-gray-300 cursor-pointer text-sm font-[600]'>About Ads</span>
              </li>
              <li>
                <span className='text-gray-600 hover:text-gray-300 cursor-pointer text-sm font-[600]'>Accessibility</span>
              </li>
            </ul>

            <p className='font-[600] text-sm'>
              &#169; 2024 kevin@suppercool
            </p>

          </div>

        </footer>

      </section>


    </div>
  )
}

export default Main
