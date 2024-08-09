import TopNavBar from "./TopNavBar"
import img8 from '../../assets/img8.jpg'
import img4 from '../../assets/img4.jpg'
import logo from '../../assets/spotify_logo.png'
import { FaCirclePlay, FaCirclePause, FaListUl, FaPlay } from "react-icons/fa6";
import { FiPlusCircle } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";
import { LuClock3 } from "react-icons/lu";
import { useEffect, useState } from "react";


const PlaylistMain = () => {
    const [play, setPlay] = useState(true)
    const [playText, setPlayText] = useState('')
    useEffect(()=>{
        if(play){
            setPlayText('Play Daily Mix 1')
        }else{
           setPlayText('Pause Daily Mix 1')
        }

    }, [play])
    


  return (
    <section className="w-full h-full relative overflow-auto noScrollbar">
        <div className="absolute top-0 left-0 w-full">
            <TopNavBar/>
        </div>
        <div className="h-[48%] bg-gradient-to-br from-[#046666] to-[#033737] w-full rounded-t-lg p-4 flex items-end">
            <div className="flex gap-4 items-end">{/*PLalist info container */}
                <div className="">
                    <img src={img8} alt="" className="w-[136px] rounded-[5px]" />
                </div>
                <div className="flex flex-col">
                    <p className="text-sm font-[600]">Playlist</p>
                    <p className="text-8xl font-[700] mb-4 tracking-tighter">Daily Mix 1</p>
                    <p className="my-2 text-sm font-[600] text-gray-300">CalledOut Music, Maverick City Music, Anendlessocean and more</p>
                    <div className="flex items-center">
                        <img src={logo} alt="" className="w-6 mr-2" />
                        <span className="text-sm font-[600] cursor-pointer border-b-[1px] border-b-transparent hover:border-b-gray-300 mr-2">Spotify</span>
                        <span className="text-sm font-[600] mr-1">&#183; 50 songs,</span>
                        <span className="text-sm font-[600] text-gray-300">about 2hr</span>
                    </div>
                </div>
            </div>
        </div>

        <section className="w-full p-4">
            <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-6">{/*left */}
                    <button className="text-green-500 hover:scale-105 hover:text-green-400 relative group"
                        onClick={()=>setPlay(!play)}>
                        { play ? <FaCirclePlay size={60}/> : <FaCirclePause size={60}/>}
                        <span className="absolute top-[-35px] left-[-50%] px-2 py-1 rounded-sm bg-[#2A2A2A] text-gray-300 whitespace-nowrap text-sm font-[600] hidden group-hover:inline ">{playText}</span>
                    </button>
                    <button className="text-gray-300 hover:scale-105  hover:text-gray-100 relative group">
                        <FiPlusCircle size={35}/>
                        <span className="absolute top-[-46px] left-[-150%] px-2 py-1 rounded-sm bg-[#2A2A2A] text-gray-300 whitespace-nowrap text-sm font-[600] hidden group-hover:inline ">Save to Your Library</span>
                    </button>
                    <button className="text-gray-300 hover:scale-105 hover:text-gray-100 relative group">
                        <BsThreeDots size={30}/>
                        <span className="absolute top-[-48px] left-[-300%] px-2 py-1 rounded-sm bg-[#2A2A2A] text-gray-300 whitespace-nowrap text-sm font-[600] hidden group-hover:inline ">More options for Your Daily Mix 1</span>
                    </button>
                </div>
                <div className="mr-4">{/*right */}
                    <button className="text-gray-400 hover:text-gray-50 flex items-center gap-2 text-sm">
                        <span className="font-[600]">List</span>
                        <FaListUl size={20} />
                    </button>

                </div>

            </div>

            <div className="text-gray-400 font-[600] flex justify-between py-1 px-2 border-b-[1px] border-b-gray-800 mb-2">
                <span>#  Title</span>
                <span>Album</span>
                <div>
                    <LuClock3 size={20}/>
                </div>    
            </div>

            <div>{/*songs container */}
                <div className="flex p-2  items-center justify-between group hover:bg-[#2A2A2A] rounded-[5px]">{/*songs info and buttons */}
                    <div className="flex  gap-4 items-center pl-3">{/*left */}
                        <div className="w-4 h-4 flex justify-center items-center">
                            <span className="group-hover:hidden font-[600]">1</span>
                            <span className="hidden group-hover:inline"><FaPlay/></span>
                        </div>
                        <div>
                            <img src={img4} alt="" className="w-[50px] rounded-lg"/>
                        </div>
                        <div className="flex flex-col justify-between items-start tracking-tighter">
                            <button className="font-[600] hover:underline ">God Like You</button>
                            <button className="font-[600] hover:underline text-sm text-gray-400 ">CalledOut Music</button>
                        </div>
                    </div>

                    <div className=" flex items-center gap-8">{/*middle */}
                        <button className="font-[600] text-sm hover:underline">God Like You</button>
                        <button className="invisible group-hover:visible">
                            <FiPlusCircle size={15}/>
                        </button>
                    </div>

                    <div className=" flex justify-center  items-center">
                        <div className="flex gap-4">
                            <span>2:34</span>

                            <button className="invisible group-hover:visible">
                                <BsThreeDots size={15}/>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex p-2  items-center justify-between group hover:bg-[#2A2A2A] rounded-[5px]">{/*songs info and buttons */}
                    <div className="flex  gap-4 items-center pl-3">{/*left */}
                        <div className="w-4 h-4 flex justify-center items-center">
                            <span className="group-hover:hidden font-[600]">1</span>
                            <span className="hidden group-hover:inline"><FaPlay/></span>
                        </div>
                        <div>
                            <img src={img4} alt="" className="w-[50px] rounded-lg"/>
                        </div>
                        <div className="flex flex-col justify-between items-start tracking-tighter">
                            <button className="font-[600] hover:underline ">God Like You</button>
                            <button className="font-[600] hover:underline text-sm text-gray-400 ">CalledOut Music</button>
                        </div>
                    </div>

                    <div className=" flex items-center gap-8">{/*middle */}
                        <button className="font-[600] text-sm hover:underline">God Like You</button>
                        <button className="invisible group-hover:visible">
                            <FiPlusCircle size={15}/>
                        </button>
                    </div>

                    <div className=" flex justify-center  items-center">
                        <div className="flex gap-4">
                            <span>2:34</span>

                            <button className="invisible group-hover:visible">
                                <BsThreeDots size={15}/>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex p-2  items-center justify-between group hover:bg-[#2A2A2A] rounded-[5px]">{/*songs info and buttons */}
                    <div className="flex  gap-4 items-center pl-3">{/*left */}
                        <div className="w-4 h-4 flex justify-center items-center">
                            <span className="group-hover:hidden font-[600]">1</span>
                            <span className="hidden group-hover:inline"><FaPlay/></span>
                        </div>
                        <div>
                            <img src={img4} alt="" className="w-[50px] rounded-lg"/>
                        </div>
                        <div className="flex flex-col justify-between items-start tracking-tighter">
                            <button className="font-[600] hover:underline ">God Like You</button>
                            <button className="font-[600] hover:underline text-sm text-gray-400 ">CalledOut Music</button>
                        </div>
                    </div>

                    <div className=" flex items-center gap-8">{/*middle */}
                        <button className="font-[600] text-sm hover:underline">God Like You</button>
                        <button className="invisible group-hover:visible">
                            <FiPlusCircle size={15}/>
                        </button>
                    </div>

                    <div className=" flex justify-center  items-center">
                        <div className="flex gap-4">
                            <span>2:34</span>

                            <button className="invisible group-hover:visible">
                                <BsThreeDots size={15}/>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex p-2  items-center justify-between group hover:bg-[#2A2A2A] rounded-[5px]">{/*songs info and buttons */}
                    <div className="flex  gap-4 items-center pl-3">{/*left */}
                        <div className="w-4 h-4 flex justify-center items-center">
                            <span className="group-hover:hidden font-[600]">1</span>
                            <span className="hidden group-hover:inline"><FaPlay/></span>
                        </div>
                        <div>
                            <img src={img4} alt="" className="w-[50px] rounded-lg"/>
                        </div>
                        <div className="flex flex-col justify-between items-start tracking-tighter">
                            <button className="font-[600] hover:underline ">God Like You</button>
                            <button className="font-[600] hover:underline text-sm text-gray-400 ">CalledOut Music</button>
                        </div>
                    </div>

                    <div className=" flex items-center gap-8">{/*middle */}
                        <button className="font-[600] text-sm hover:underline">God Like You</button>
                        <button className="invisible group-hover:visible">
                            <FiPlusCircle size={15}/>
                        </button>
                    </div>

                    <div className=" flex justify-center  items-center">
                        <div className="flex gap-4">
                            <span>2:34</span>

                            <button className="invisible group-hover:visible">
                                <BsThreeDots size={15}/>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex p-2  items-center justify-between group hover:bg-[#2A2A2A] rounded-[5px]">{/*songs info and buttons */}
                    <div className="flex  gap-4 items-center pl-3">{/*left */}
                        <div className="w-4 h-4 flex justify-center items-center">
                            <span className="group-hover:hidden font-[600]">1</span>
                            <span className="hidden group-hover:inline"><FaPlay/></span>
                        </div>
                        <div>
                            <img src={img4} alt="" className="w-[50px] rounded-lg"/>
                        </div>
                        <div className="flex flex-col justify-between items-start tracking-tighter">
                            <button className="font-[600] hover:underline ">God Like You</button>
                            <button className="font-[600] hover:underline text-sm text-gray-400 ">CalledOut Music</button>
                        </div>
                    </div>

                    <div className=" flex items-center gap-8">{/*middle */}
                        <button className="font-[600] text-sm hover:underline">God Like You</button>
                        <button className="invisible group-hover:visible">
                            <FiPlusCircle size={15}/>
                        </button>
                    </div>

                    <div className=" flex justify-center  items-center">
                        <div className="flex gap-4">
                            <span>2:34</span>

                            <button className="invisible group-hover:visible">
                                <BsThreeDots size={15}/>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex p-2  items-center justify-between group hover:bg-[#2A2A2A] rounded-[5px]">{/*songs info and buttons */}
                    <div className="flex  gap-4 items-center pl-3">{/*left */}
                        <div className="w-4 h-4 flex justify-center items-center">
                            <span className="group-hover:hidden font-[600]">1</span>
                            <span className="hidden group-hover:inline"><FaPlay/></span>
                        </div>
                        <div>
                            <img src={img4} alt="" className="w-[50px] rounded-lg"/>
                        </div>
                        <div className="flex flex-col justify-between items-start tracking-tighter">
                            <button className="font-[600] hover:underline ">God Like You</button>
                            <button className="font-[600] hover:underline text-sm text-gray-400 ">CalledOut Music</button>
                        </div>
                    </div>

                    <div className=" flex items-center gap-8">{/*middle */}
                        <button className="font-[600] text-sm hover:underline">God Like You</button>
                        <button className="invisible group-hover:visible">
                            <FiPlusCircle size={15}/>
                        </button>
                    </div>

                    <div className=" flex justify-center  items-center">
                        <div className="flex gap-4">
                            <span>2:34</span>

                            <button className="invisible group-hover:visible">
                                <BsThreeDots size={15}/>
                            </button>
                        </div>
                    </div>
                </div>

            </div>



        </section>
        
        
        
      
    </section>
  )
}

export default PlaylistMain
