import Sidebar from "./components/Sidebar"
import Main from "./components/Main"
import PlaySection from "./components/PlaySection"

function App() {
  
  return (
   <div className='h-screen w-full bg-black text-white p-2 flex flex-col gap-4'>
    <div className='w-full h-[85%] flex gap-2'>
      <Sidebar/>
      <Main/>
    </div>
    <div className="h-[14%]">
      <PlaySection/>
    </div>
   </div>

  )
}

export default App
