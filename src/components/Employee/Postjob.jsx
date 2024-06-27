import React, { useState } from 'react'

const Postjob = () => {
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


    const [selectedInternship, setSelectedInternship] = useState('');
    const [selectedtime, setSelectedtime] = useState('');
   
    const handleInternshipChange = (event) => {
      setSelectedInternship(event.target.value);
    };
    const handletimeChange = (event) => {
        setSelectedtime(event.target.value);
      };
  return (
    <>
      <div className='mt-[8%] w-[50%]  m-auto'>
        <h2 className='text-2xl font-bold mb-2'>Internship details</h2>
        <form className='border rounded min-h-[100vh] relative mb-3 p-5' action="">
            <div className='w-full'>
                <h2 className='font-medium text-zinc-700'>Internship profile</h2>
                <input className='py-[8px] mt-1 w-full rounded px-3 border-[1px] outline-[3px] outline-none focus:border-[#00A5EC] border-zinc-300' placeholder='e.g. software development' type="text" />
            </div>
            <div className='w-full mt-3'>
                <h2 className='font-medium text-zinc-700'>Skills required</h2>
                <input className='py-[8px] mt-1 w-full rounded px-3 border-[1px] outline-[3px] outline-none focus:border-[#00A5EC] border-zinc-300' placeholder='e.g. java' type="text" />
            </div>
            <div className='w-full mt-3'>
                <h2 className='font-medium text-zinc-700'>Required experience</h2>
                <input className='py-[8px] mt-1 w-full rounded px-3 border-[1px] outline-[3px] outline-none focus:border-[#00A5EC] border-zinc-300' placeholder='e.g. java' type="text" />
            </div>

        <div className="p-4">
      <h2 className="text-lg font-semibold mb-4">Select Internship Type</h2>
      <div className="space-y-2 flex items-baseline gap-3">
        <label className="flex items-center">
          <input
            type="radio"
            name="internship"
            value="frontend"
            checked={selectedInternship === 'frontend'}
            onChange={handleInternshipChange}
            className="form-radio text-indigo-600"
          />
          <span className="ml-2">In office</span>
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            name="internship"
            value="backend"
            checked={selectedInternship === 'backend'}
            onChange={handleInternshipChange}
            className="form-radio text-indigo-600"
          />
          <span className="ml-2">Hybrid</span>
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            name="internship"
            value="fullstack"
            checked={selectedInternship === 'fullstack'}
            onChange={handleInternshipChange}
            className="form-radio text-indigo-600"
          />
          <span className="ml-2">Remote</span>
        </label>
      </div>
        </div>
        <div className="p-4">
            <h2 className="text-lg font-semibold mb-4">Part-time/Full-time</h2>
            <div className="space-y-2 flex items-baseline gap-3">
                <label className="flex items-center">
                <input
                    type="radio"
                    name="ritesh"
                    value="part"
                    checked={selectedtime === 'part'}
                    onChange={handletimeChange}
                    className="form-radio text-indigo-600"
                />
                <span className="ml-2">Part-time</span>
                </label>
                <label className="flex items-center">
                <input
                    type="radio"
                    name="ritesh"
                    value="full"
                    checked={selectedtime === 'full'}
                    onChange={handletimeChange}
                    className="form-radio text-indigo-600"
                />
                <span className="ml-2">full-time</span>
                </label>
            
            </div>
        </div>
        <div className='w-full mt-3'>
                <h2 className='font-medium text-zinc-700'>Number of openings</h2>
                <input className='py-[8px] mt-1 w-full rounded px-3 border-[1px] outline-[3px] outline-none focus:border-[#00A5EC] border-zinc-300' placeholder='e.g. 4' type="text" />
        </div>
        <div className=" mt-10 w-full flex gap-[3vh]">
                        <div className="w-[45%]  ">
                        <h1 className=" text-base font-semibold mb-2 text-[#272727c1]">
                            Start date
                        </h1>
                        <input
                            className="w-full pl-[2vh] text-base text-black outline-sky-300  h-[5vh] border-[1px] border-[#27272748] p-2 rounded-md"
                            type="date"
                            name="startyear"
                            id=""
                            placeholder="2020"
                        />{" "}
                        </div>
                        <div className="w-[45%]  ">
                        <h1 className=" text-base font-semibold mb-2 text-[#272727c1]">
                            End date
                        </h1>
                        <input
                            className="w-full pl-[2vh]  h-[5vh] text-base outline-sky-300   text-black border-[1px] border-[#27272748] p-2 rounded-md"
                            type="date"
                            name="endyear"
                            id=""
                            placeholder="2024"
                        />{" "}
                        </div>
         </div>
         <div className='mt-2'>
            <h2 className=" text-base font-medium mb-3">Intern’s responsibilities</h2>
            <textarea
            className="w-full pl-[2vh]  h-[15vh] text-base outline-sky-300   text-black border-[1px] border-[#27272748] p-2 rounded-md"
            type="text"
            name="organization"
            placeholder="eg. AddDescription"
            id=""
            >
            </textarea>
         </div>

         <h3 className='text-2xl font-medium'>Stipend & perks</h3>
         <div className='w-full mt-3'>
                <h2 className='font-medium text-zinc-700'>Stipend</h2>
                <input className='py-[8px] mt-1 w-[50%] rounded px-3 border-[1px] outline-[3px] outline-none focus:border-[#00A5EC] border-zinc-300' placeholder='e.g. permonth' type="text" />
         </div>
         <div className="space-y-4 p-4">
            <h2 className='font-medium'>perks</h2>
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
                Certificate
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
                Letter of recommendation
                </label>
            </div>
        </div>
        <button className='px-3 font-medium absolute right-8 bottom-8 text-white py-2 bg-[#00A5EC] rounded-md'>Post</button>
        </form>
      </div>
    </>
  )
}

export default Postjob
