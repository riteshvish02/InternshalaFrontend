import { RiCloseLine } from "@remixicon/react";
import { useState } from "react";


export default function Addjob(props) {
  
  const [formData, setFormData] = useState("");



  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
 
  };

  
  return (
    <>
      <>
      <div className=" z-[9] flex items-center  h-[110vh]  justify-center fixed  top-0 pt-8 w-full bg-black/30 ">
          <div style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} className="w-fit  h-[90vh] py-[5%] pt-0 overflow-y-scroll ">
                <div className="min-h-[95vh]  mt-8 pb-5 pt-2 px-10 rounded-md w-[100%]  bg-white ">
                    <RiCloseLine
                    size={30}
                    onClick={props.onClose}
                    className="ml-[50vh]  cursor-pointer  "
                    color="#1c1c1c9d" // set custom `width` and `height`
                    />
                    <div className=" flex items-center justify-center text-[#272727e4]  w-full h-5 text-3xl font-bold">
                    <h1>Add job</h1>
                    </div>
                    <form action="" onSubmit={handleSubmit}>
                    <div className="w-full">
                        <h1 className=" mt-16 text-base font-semibold mb-2 text-[#272727c1]">
                        Designation
                        </h1>
                        <input
                        className="w-full pl-[2vh]  h-[5vh] text-base outline-sky-300   text-black border-[1px] border-[#27272748] p-2 rounded-md"
                        type="text"
                        onChange={handleChange}
                        name="organization"
                        placeholder="eg. software Engineer"
                        id=""
                        />
                    </div>
                    <div className="w-full">
                        <h1 className=" mt-3 text-base font-semibold mb-2 text-[#272727c1]">
                        Profile
                        </h1>
                        <input
                        className="w-full pl-[2vh]  h-[5vh] text-base outline-sky-300   text-black border-[1px] border-[#27272748] p-2 rounded-md"
                        type="text"
                        onChange={handleChange}
                        name="organization"
                        placeholder="eg. operations"
                        id=""
                        />
                    </div>
                    <div className="w-full">
                        <h1 className=" mt-3 text-base font-semibold mb-2 text-[#272727c1]">
                        Organization
                        </h1>
                        <input
                        className="w-full pl-[2vh]  h-[5vh] text-base outline-sky-300   text-black border-[1px] border-[#27272748] p-2 rounded-md"
                        type="text"
                        onChange={handleChange}
                        name="organization"
                        placeholder="eg. internshala"
                        id=""
                        />
                    </div>
                    <div className="w-full">
                        <h1 className=" mt-3 text-base font-semibold mb-2 text-[#272727c1]">
                        Location
                        </h1>
                        <input
                        className="w-full pl-[2vh]  h-[5vh] text-base outline-sky-300   text-black border-[1px] border-[#27272748] p-2 rounded-md"
                        type="text"
                        onChange={handleChange}
                        name="organization"
                        placeholder="eg. Mumbai"
                        id=""
                        />
                    </div>
                    <div className=" mt-10 w-full flex gap-[3vh]">
                        <div className="w-[45%]  ">
                        <h1 className=" text-base font-semibold mb-2 text-[#272727c1]">
                            Start date
                        </h1>
                        <input
                            className="w-full pl-[2vh] text-base text-black outline-sky-300  h-[5vh] border-[1px] border-[#27272748] p-2 rounded-md"
                            type="date"
                            onChange={handleChange}
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
                            onChange={handleChange}
                            name="endyear"
                            id=""
                            placeholder="2024"
                        />{" "}
                        </div>
                    </div>
                    
                    <div className="w-full">
                        <h1 className=" mt-3 text-base font-semibold mb-2 text-[#272727c1]">
                         Description
                        </h1>
                        <textarea
                        className="w-full pl-[2vh]  h-[15vh] text-base outline-sky-300   text-black border-[1px] border-[#27272748] p-2 rounded-md"
                        type="text"
                        onChange={handleChange}
                        name="organization"
                        placeholder="eg. AddDescription"
                        id=""
                        >
                        </textarea>
                    </div>
                   
                    <button
                        type="submit"
                        className="px-[4vh] py-[1vh]  text-base  mt-8 font-semibold rounded-md text-white bg-[#008BDC] "
                    >A
                        Update
                    </button>
                    </form>
                </div>
          </div>
        </div>
      </>
    </>
  );
}
