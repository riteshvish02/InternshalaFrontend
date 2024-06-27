import React, { useState } from 'react'
import { CiCalendar, CiFilter, CiLocationOn } from "react-icons/ci";
import { IoAnalytics } from 'react-icons/io5';
import { PiHouseLineLight, PiMoneyDuotone } from 'react-icons/pi';
import { Link } from 'react-router-dom';
const Interships = () => {
    const [selections, setSelections] = useState({
        workFromHome: false,
        partTime: false,
        fullTime: false,
      });
    
      const handleChange = (event) => {
        const { name, checked } = event.target;
        setSelections((prevSelections) => ({
          ...prevSelections,
          [name]: checked,
        }));
      };

      const [salaryRange, setSalaryRange] = useState({ min: 0, max: 100000 });

  const handleMinChange = (event) => {
    setSalaryRange((prevRange) => ({
      ...prevRange,
      min: parseInt(event.target.value),
    }));
  };

  const handleMaxChange = (event) => {
    setSalaryRange((prevRange) => ({
      ...prevRange,
      max: parseInt(event.target.value),
    }));
  };
      
  return (
    <>
      <div className='w-full py-[25%] lg:py-[8%] px-3 bg-[#F8F8F8]  overflow-y-scroll'>
            <div className='w-full  category hide-scrollbar lg:hidden pl-[22%] py-2 flex whitespace-nowrap overflow-x-auto '>
                    <button className='px-3 py-1 ml-2 absolute left-0 border-zinc-400 border rounded-full font-medium text-zinc-700  bg-white flex items-end justify-center gap-1'>Filter <CiFilter className='text-[#008BDC] scale-[1.2]' /></button>
                    <button className='px-3 py-1 ml-2 border-zinc-400 border rounded-full font-medium text-zinc-700'>Work from home</button>
                    <button className='px-3 py-1 ml-2 border-zinc-400 border rounded-full font-medium text-zinc-700'>profile</button>
                    <button className='px-3 py-1 ml-2 border-zinc-400 border rounded-full font-medium text-zinc-700'>Location</button>
                    <button className='px-3 py-1 ml-2 border-zinc-400 border rounded-full font-medium text-zinc-700'>part Time</button>
                    <button className='px-3 py-1 ml-2 border-zinc-400 border rounded-full font-medium text-zinc-700'>stipend</button>
            </div>
            <h2 className='text-center font-semibold lg:text-xl'>545 Total internships</h2>
            <h2 className='text-gray-500 text-sm mt-3 lg:text-center'>545 Total internships</h2>
            <div className='filtersintern lg:flex lg:items-start lg:justify-center lg:w-[80%] lg:float-end'>
                     <div className='filter max-sm:hidden w-[20%] bg-white h-[75vh] fixed top-[20%] left-[8%] shadow-lg border rounded-md'>
                       <h2 className='px-3 py-1 ml-2 text-center  text-[2vh]  rounded-full font-medium text-zinc-700  bg-white flex items-end justify-center gap-1'>Filter <CiFilter className='text-[#008BDC] scale-[1.2]' /></h2>
                       <form className='flex flex-col px-4 pt-3' action="">
                                <div className='w-full'>
                                    <h2 className='font-medium text-zinc-700'>Profile</h2>
                                    <input className='py-[8px] mt-1 w-full rounded px-3 border-[1px] outline-[3px] outline-none focus:border-[#00A5EC] border-zinc-300' placeholder='e.g. Marketing' type="text" />
                                </div>
                                <div className='mt-4 w-full'>
                                    <h2 className='font-medium text-zinc-700'>Location</h2>
                                    <input className='py-[8px] mt-1 w-full rounded px-3 border-[1px] outline-[3px] outline-none focus:border-[#00A5EC] border-zinc-300' placeholder='e.g. Delhi' type="text" />
                                </div>
                                <div className="space-y-4 p-4">
                                    <div className="flex items-center">
                                        <input
                                        type="checkbox"
                                        name="workFromHome"
                                        id="workFromHome"
                                        checked={selections.workFromHome}
                                        onChange={handleChange}
                                        className="form-checkbox h-5 w-5 text-blue-600"
                                        />
                                        <label htmlFor="workFromHome" className="ml-2 font-medium text-gray-800">
                                        Work from Home
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                        type="checkbox"
                                        name="partTime"
                                        id="partTime"
                                        checked={selections.partTime}
                                        onChange={handleChange}
                                        className="form-checkbox h-5 w-5 text-blue-600"
                                        />
                                        <label htmlFor="partTime" className="ml-2 font-medium text-gray-800">
                                        Part Time
                                        </label>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center p-4 space-y-4">
                                        <div className="w-full">
                                            <label htmlFor="minSalary" className="text-gray-800">
                                            Minimum Salary: ₹{salaryRange.min}
                                            </label>
                                            <input
                                            type="range"
                                            id="minSalary"
                                            name="minSalary"
                                            min="0"
                                            max="100000"
                                            value={salaryRange.min}
                                            onChange={handleMinChange}
                                            className="block w-full mt-2 appearance-none bg-gray-200 rounded h-2"
                                            />
                                        </div>
                                        <div className="w-full">
                                            <label htmlFor="maxSalary" className="text-gray-800">
                                            Maximum Salary: ₹{salaryRange.max}
                                            </label>
                                            <input
                                            type="range"
                                            id="maxSalary"
                                            name="maxSalary"
                                            min="0"
                                            max="100000"
                                            value={salaryRange.max}
                                            onChange={handleMaxChange}
                                            className="block w-full mt-2 appearance-none bg-gray-200 rounded h-2"
                                            />
                                        </div>
                                </div>
                                
                         </form>        
                     </div>
                    <div className='internships pt-2 lg:shrink-0     lg:w-[50%]'>
                        <div className='border mt-2  p-5 flex-col items-start justify-start py-5 lg:rounded-[15px]  rounded-md shadow-lg bg-white' >
                                    <h2 className='font-medium text-[2vh] lg:text-[2.5vh]'>Riteclkssh vish corpratesldlk</h2>
                                    <div className='companydets w-full flex items-center border-b pb-3 gap-1 pt-1'>
                                    <div className='w-[100%] text-left py-2 lg:flex lg:items-baseline lg:gap-3'>
                                        <h3 className='text-[1.6vh] lg:text-[2vh] text-zinc-500 font-medium'>planetsparkcjksjakncnds</h3>
                                        <button className='px-2 mt-2 border-[#008BDC] border flex items-end text-[13px] text-[#008BDC] gap-2 py-[1px]  rounded-full '> <h2>Actively hiring</h2></button>
                                    </div>
                                        <div className='h-[6vh] object-cover object-center rounded-full overflow-hidden lg:h-[8vh] w-[8vh]'>
                                            <img className='object-cover h-full w-full object-center' src="https://internshala-uploads.internshala.com/banner-images/home_new/study_abroad_is-student.png.webp" alt="" />
                                        </div>
                                    </div>
                                    <div className='loc text-zinc-600 pt-5 lg:flex lf lg:gap-3 '>
                                        <h2 className='text-[15px] lg:text-[1.8vh]   font-medium flex items-center gap-2'><PiHouseLineLight className='font-bold scale-[1.2]' /> Delhi,ahdkknk</h2>
                                        <h2 className='text-[15px] lg:text-[1.8vh]  font-medium flex items-center gap-2'><CiLocationOn className='font-bold scale-[1.2]' /> Delhi,ahdkknk</h2>
                                        <div className='flex items-center gap-2'>
                                            <h2 className='text-[15px] lg:text-[1.8vh]   font-medium flex my-2 items-center gap-2'><PiMoneyDuotone className='font-bold scale-[1.2]' /> Delhi,ahdkknk</h2>
                                            <h2 className='text-[15px] lg:text-[1.8vh]  font-medium flex my-2 items-center gap-2'><CiCalendar className='font-bold scale-[1.2]' /> Delhi,ahdkknk</h2>
                                        </div>
                                    </div>
                                
                        </div>
                        
                        <div className='border mt-2  p-5 flex-col items-start justify-start py-5  rounded-md shadow-lg bg-white' >
                                    <h2 className='font-medium text-[2vh]'>Riteclkssh vish corpratesldlk</h2>
                                    <div className='companydets w-full flex items-center border-b pb-3 gap-1 pt-3'>
                                    <div className='w-[100%] text-left py-2 '>
                                        <h3 className='text-[1.6vh] text-zinc-500 font-medium'>planetsparkcjksjakncnds</h3>
                                        <button className='px-2 mt-2 border-[#008BDC] border flex items-end text-[13px] text-[#008BDC] gap-2 py-[1px]  rounded-full '> <h2>Actively hiring</h2></button>
                                    </div>
                                        <div className='h-[6vh] object-cover object-center rounded-full overflow-hidden w-[8vh]'>
                                            <img className='object-cover h-full w-full object-center' src="https://internshala-uploads.internshala.com/banner-images/home_new/study_abroad_is-student.png.webp" alt="" />
                                        </div>
                                    </div>
                                    <div className='loc text-zinc-600 pt-5'>
                                        <h2 className='text-[15px]  font-medium flex items-center gap-2'><PiHouseLineLight className='font-bold scale-[1.2]' /> Delhi,ahdkknk</h2>
                                        <div className='flex items-center gap-2'>
                                            <h2 className='text-[15px]  font-medium flex my-2 items-center gap-2'><PiMoneyDuotone className='font-bold scale-[1.2]' /> Delhi,ahdkknk</h2>
                                            <h2 className='text-[15px]  font-medium flex my-2 items-center gap-2'><CiCalendar className='font-bold scale-[1.2]' /> Delhi,ahdkknk</h2>
                                        </div>
                                    </div>
                                
                        </div>
                        <div className='border mt-2  p-5 flex-col items-start justify-start py-5  rounded-md shadow-lg bg-white' >
                                    <h2 className='font-medium text-[2vh]'>Riteclkssh vish corpratesldlk</h2>
                                    <div className='companydets w-full flex items-center border-b pb-3 gap-1 pt-3'>
                                    <div className='w-[100%] text-left py-2 '>
                                        <h3 className='text-[1.6vh] text-zinc-500 font-medium'>planetsparkcjksjakncnds</h3>
                                        <button className='px-2 mt-2 border-[#008BDC] border flex items-end text-[13px] text-[#008BDC] gap-2 py-[1px]  rounded-full '> <h2>Actively hiring</h2></button>
                                    </div>
                                        <div className='h-[6vh] object-cover object-center rounded-full overflow-hidden w-[8vh]'>
                                            <img className='object-cover h-full w-full object-center' src="https://internshala-uploads.internshala.com/banner-images/home_new/study_abroad_is-student.png.webp" alt="" />
                                        </div>
                                    </div>
                                    <div className='loc text-zinc-600 pt-5'>
                                        <h2 className='text-[15px]  font-medium flex items-center gap-2'><PiHouseLineLight className='font-bold scale-[1.2]' /> Delhi,ahdkknk</h2>
                                        <div className='flex items-center gap-2'>
                                            <h2 className='text-[15px]  font-medium flex my-2 items-center gap-2'><PiMoneyDuotone className='font-bold scale-[1.2]' /> Delhi,ahdkknk</h2>
                                            <h2 className='text-[15px]  font-medium flex my-2 items-center gap-2'><CiCalendar className='font-bold scale-[1.2]' /> Delhi,ahdkknk</h2>
                                        </div>
                                    </div>
                                
                        </div>
                        <div className='border mt-2  p-5 flex-col items-start justify-start py-5  rounded-md shadow-lg bg-white' >
                                    <h2 className='font-medium text-[2vh]'>Riteclkssh vish corpratesldlk</h2>
                                    <div className='companydets w-full flex items-center border-b pb-3 gap-1 pt-3'>
                                    <div className='w-[100%] text-left py-2 '>
                                        <h3 className='text-[1.6vh] text-zinc-500 font-medium'>planetsparkcjksjakncnds</h3>
                                        <button className='px-2 mt-2 border-[#008BDC] border flex items-end text-[13px] text-[#008BDC] gap-2 py-[1px]  rounded-full '> <h2>Actively hiring</h2></button>
                                    </div>
                                        <div className='h-[6vh] object-cover object-center rounded-full overflow-hidden w-[8vh]'>
                                            <img className='object-cover h-full w-full object-center' src="https://internshala-uploads.internshala.com/banner-images/home_new/study_abroad_is-student.png.webp" alt="" />
                                        </div>
                                    </div>
                                    <div className='loc text-zinc-600 pt-5'>
                                        <h2 className='text-[15px]  font-medium flex items-center gap-2'><PiHouseLineLight className='font-bold scale-[1.2]' /> Delhi,ahdkknk</h2>
                                        <div className='flex items-center gap-2'>
                                            <h2 className='text-[15px]  font-medium flex my-2 items-center gap-2'><PiMoneyDuotone className='font-bold scale-[1.2]' /> Delhi,ahdkknk</h2>
                                            <h2 className='text-[15px]  font-medium flex my-2 items-center gap-2'><CiCalendar className='font-bold scale-[1.2]' /> Delhi,ahdkknk</h2>
                                        </div>
                                    </div>
                                
                        </div>
                        <div className='border mt-2  p-5 flex-col items-start justify-start py-5  rounded-md shadow-lg bg-white' >
                                    <h2 className='font-medium text-[2vh]'>Riteclkssh vish corpratesldlk</h2>
                                    <div className='companydets w-full flex items-center border-b pb-3 gap-1 pt-3'>
                                    <div className='w-[100%] text-left py-2 '>
                                        <h3 className='text-[1.6vh] text-zinc-500 font-medium'>planetsparkcjksjakncnds</h3>
                                        <button className='px-2 mt-2 border-[#008BDC] border flex items-end text-[13px] text-[#008BDC] gap-2 py-[1px]  rounded-full '> <h2>Actively hiring</h2></button>
                                    </div>
                                        <div className='h-[6vh] object-cover object-center rounded-full overflow-hidden w-[8vh]'>
                                            <img className='object-cover h-full w-full object-center' src="https://internshala-uploads.internshala.com/banner-images/home_new/study_abroad_is-student.png.webp" alt="" />
                                        </div>
                                    </div>
                                    <div className='loc text-zinc-600 pt-5'>
                                        <h2 className='text-[15px]  font-medium flex items-center gap-2'><PiHouseLineLight className='font-bold scale-[1.2]' /> Delhi,ahdkknk</h2>
                                        <div className='flex items-center gap-2'>
                                            <h2 className='text-[15px]  font-medium flex my-2 items-center gap-2'><PiMoneyDuotone className='font-bold scale-[1.2]' /> Delhi,ahdkknk</h2>
                                            <h2 className='text-[15px]  font-medium flex my-2 items-center gap-2'><CiCalendar className='font-bold scale-[1.2]' /> Delhi,ahdkknk</h2>
                                        </div>
                                    </div>
                                
                        </div>
                        <div className='border mt-2  p-5 flex-col items-start justify-start py-5  rounded-md shadow-lg bg-white' >
                                    <h2 className='font-medium text-[2vh]'>Riteclkssh vish corpratesldlk</h2>
                                    <div className='companydets w-full flex items-center border-b pb-3 gap-1 pt-3'>
                                    <div className='w-[100%] text-left py-2 '>
                                        <h3 className='text-[1.6vh] text-zinc-500 font-medium'>planetsparkcjksjakncnds</h3>
                                        <button className='px-2 mt-2 border-[#008BDC] border flex items-end text-[13px] text-[#008BDC] gap-2 py-[1px]  rounded-full '> <h2>Actively hiring</h2></button>
                                    </div>
                                        <div className='h-[6vh] object-cover object-center rounded-full overflow-hidden w-[8vh]'>
                                            <img className='object-cover h-full w-full object-center' src="https://internshala-uploads.internshala.com/banner-images/home_new/study_abroad_is-student.png.webp" alt="" />
                                        </div>
                                    </div>
                                    <div className='loc text-zinc-600 pt-5'>
                                        <h2 className='text-[15px]  font-medium flex items-center gap-2'><PiHouseLineLight className='font-bold scale-[1.2]' /> Delhi,ahdkknk</h2>
                                        <div className='flex items-center gap-2'>
                                            <h2 className='text-[15px]  font-medium flex my-2 items-center gap-2'><PiMoneyDuotone className='font-bold scale-[1.2]' /> Delhi,ahdkknk</h2>
                                            <h2 className='text-[15px]  font-medium flex my-2 items-center gap-2'><CiCalendar className='font-bold scale-[1.2]' /> Delhi,ahdkknk</h2>
                                        </div>
                                    </div>
                                
                        </div>
                        <div className='border mt-2  p-5 flex-col items-start justify-start py-5  rounded-md shadow-lg bg-white' >
                                    <h2 className='font-medium text-[2vh]'>Riteclkssh vish corpratesldlk</h2>
                                    <div className='companydets w-full flex items-center border-b pb-3 gap-1 pt-3'>
                                    <div className='w-[100%] text-left py-2 '>
                                        <h3 className='text-[1.6vh] text-zinc-500 font-medium'>planetsparkcjksjakncnds</h3>
                                        <button className='px-2 mt-2 border-[#008BDC] border flex items-end text-[13px] text-[#008BDC] gap-2 py-[1px]  rounded-full '> <h2>Actively hiring</h2></button>
                                    </div>
                                        <div className='h-[6vh] object-cover object-center rounded-full overflow-hidden w-[8vh]'>
                                            <img className='object-cover h-full w-full object-center' src="https://internshala-uploads.internshala.com/banner-images/home_new/study_abroad_is-student.png.webp" alt="" />
                                        </div>
                                    </div>
                                    <div className='loc text-zinc-600 pt-5'>
                                        <h2 className='text-[15px]  font-medium flex items-center gap-2'><PiHouseLineLight className='font-bold scale-[1.2]' /> Delhi,ahdkknk</h2>
                                        <div className='flex items-center gap-2'>
                                            <h2 className='text-[15px]  font-medium flex my-2 items-center gap-2'><PiMoneyDuotone className='font-bold scale-[1.2]' /> Delhi,ahdkknk</h2>
                                            <h2 className='text-[15px]  font-medium flex my-2 items-center gap-2'><CiCalendar className='font-bold scale-[1.2]' /> Delhi,ahdkknk</h2>
                                        </div>
                                    </div>
                                
                        </div>
                        <div className='border mt-2  p-5 flex-col items-start justify-start py-5  rounded-md shadow-lg bg-white' >
                                    <h2 className='font-medium text-[2vh]'>Riteclkssh vish corpratesldlk</h2>
                                    <div className='companydets w-full flex items-center border-b pb-3 gap-1 pt-3'>
                                    <div className='w-[100%] text-left py-2 '>
                                        <h3 className='text-[1.6vh] text-zinc-500 font-medium'>planetsparkcjksjakncnds</h3>
                                        <button className='px-2 mt-2 border-[#008BDC] border flex items-end text-[13px] text-[#008BDC] gap-2 py-[1px]  rounded-full '> <h2>Actively hiring</h2></button>
                                    </div>
                                        <div className='h-[6vh] object-cover object-center rounded-full overflow-hidden w-[8vh]'>
                                            <img className='object-cover h-full w-full object-center' src="https://internshala-uploads.internshala.com/banner-images/home_new/study_abroad_is-student.png.webp" alt="" />
                                        </div>
                                    </div>
                                    <div className='loc text-zinc-600 pt-5'>
                                        <h2 className='text-[15px]  font-medium flex items-center gap-2'><PiHouseLineLight className='font-bold scale-[1.2]' /> Delhi,ahdkknk</h2>
                                        <div className='flex items-center gap-2'>
                                            <h2 className='text-[15px]  font-medium flex my-2 items-center gap-2'><PiMoneyDuotone className='font-bold scale-[1.2]' /> Delhi,ahdkknk</h2>
                                            <h2 className='text-[15px]  font-medium flex my-2 items-center gap-2'><CiCalendar className='font-bold scale-[1.2]' /> Delhi,ahdkknk</h2>
                                        </div>
                                    </div>
                                
                        </div>

                    </div>
            </div>
          
      </div>
    </>
  )
}

export default Interships
