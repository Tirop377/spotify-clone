import { FaPlay, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
const Footer = () => {
  return (
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
  )
}

export default Footer
