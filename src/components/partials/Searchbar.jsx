import React,{useState} from 'react'
import { IoMdClose } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";

const Searchbar = ({toggle,settoggle}) => {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('internships');

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };
    // console.log(selectedOption);
  return (
    <>
      <div className={`w-full absolute  bg-white z-[999999999] top-0 h-screen  ${toggle ? 'block' : 'hidden'} bg-red p-5`}>
       <IoMdClose onClick={()=>settoggle((prev)=>!prev)}  className='block cursor-pointer scale-[1.4]  float-end' />
         <div className='mt-8 lg:w-[70%] lg:m-auto'>
                <h2 className='mb-2'>Looking for</h2>
            <form action="">
                <div className="relative z-30   text-left w-full  ">
                    <div>
                        <button
                            type="button"
                            onClick={toggleDropdown}
                            className={`inline-flex justify-between h-[5vh] lg:h-[8vh] lg:pt-5 w-full rounded-md border border-gray-300 shadow-sm px-4  py-2 bg-white text-sm font-medium ${
                                selectedOption ? 'text-blue-600' : 'text-gray-700'
                            } hover:bg-gray-50 focus:outline-none  focus:ring-offset-2 focus:ring-indigo-500`}
                        >
                            {selectedOption }
                            <svg
                                className="-mr-1 ml-2 h-5 w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </div>

                    {isOpen && (
                        <div className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                {['internships','Jobs',].map((option) => (
                                    <button
                                        key={option}
                                        type="button"
                                        onClick={() => handleOptionClick(option)}
                                        className={`block px-4 py-2 text-sm lg:text-xl   w-full text-left ${
                                            selectedOption === option ? 'bg-blue-100 text-blue-600' : 'text-gray-700 hover:bg-gray-100'
                                        }`}
                                        role="menuitem"
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
                <div className='relative mt-3 w-full '>
                        <IoSearchOutline className='absolute top-[50%] translate-y-[-50%]  scale-[1.5] text-zinc-500 left-3' />
                        <input  placeholder='Search here...' className='w-[100%]  h-[5vh] lg:h-[8vh] px-9 focus:border-[#00A5EC] outline-none rounded-md border-zinc-300 border-[0.1px]' type="text" />
                </div>
            </form>
            <div className='lg:border lg:border-zinc-400 rounded-[10px] lg:p-5 lg:pt-0 lg:mt-5'>
            <h2 className='mt-8 text-[15px] font-medium ' >POPULAR CITIES</h2>
            <form  className='px-1 w-full mt-1 flex-wrap text-[14px]' action="">
            <button className='px-3 py-1 ml-2 border-zinc-300 mt-3  border rounded-full font-medium text-zinc-700'>Delhi</button>
            <button className='px-3 py-1 ml-2 border-zinc-300 mt-3 border rounded-full font-medium text-zinc-700'>Banglore</button>
            <button className='px-3 py-1 ml-2 border-zinc-300 mt-3 border rounded-full font-medium text-zinc-700'>Mumbai</button>
            <button className='px-3 py-1 ml-2 border-zinc-300 mt-3 border rounded-full font-medium text-zinc-700'>Hyderabad</button>
            <button className='px-3 py-1 ml-2 border-zinc-300 mt-3 border rounded-full font-medium text-zinc-700'>chennai</button>
            <button className='px-3 py-1 ml-2 border-zinc-300 mt-3 border rounded-full font-medium text-zinc-700'>Kolkata</button>
            </form>

            <h2 className='mt-10 text-[15px] font-medium' >POPULAR CATEGORIES</h2>
            <form  className='px-1 w-full mt-1 flex-wrap text-[14px]' action="">
            <button className='px-2 py-1 ml-2 border-zinc-400 border rounded-full font-medium text-zinc-700'>Work from home</button>
                        <button className='px-3 mt-2 py-1 ml-3 border-zinc-400 border rounded-full font-medium text-zinc-700'>Part-time</button>
                        <button className='px-3 mt-2 py-1 ml-3 border-zinc-400 border rounded-full font-medium text-zinc-700'>MBA</button>
                        <button className='px-3 mt-2 py-1 ml-3 border-zinc-400 border rounded-full font-medium text-zinc-700'>Engineering</button>
                        <button className='px-3 mt-2 py-1 ml-3 border-zinc-400 border rounded-full font-medium text-zinc-700'>Media</button>
                        <button className='px-3 mt-2 py-1 ml-3 border-zinc-400 border rounded-full font-medium text-zinc-700'>Design</button>
            </form>
            </div>
         </div>
      </div>
    </>
  )
}

export default Searchbar
