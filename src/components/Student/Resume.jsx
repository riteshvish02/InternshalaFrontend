import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'

import {
  RiArrowLeftLine,
  RiBookmarkLine,
  RiDeleteBin5Line,
  RiPencilLine,
} from "@remixicon/react";
// import Editresume from "./Editresume";
import Education from "./Education";
import Addjob from './Addjob'
import EditEducation from "./EditEducation";
import Editjob from "./Editjob";
import Addresp from "./Addresp";
import Editresp from "./Editresp";
import Addcourse from "./Addcourse";
import Editcourse from "./Editcourse";
import Addproject from "./Addproject";
import Editproject from "./Editproject";
import Addskill from "./Addskill";
import Editskill from "./Editskill";
import Addlink from "./Addlink";
import Editlink from "./Editlink";
import Addaccom from "./Addaccom";
import Editaccom from "./Editaccom";

// import DelEducation from "./DelEducation";

export default function Resumepage() {
//   const dispatch = useDispatch(); // Get dispatch function
//   const resume = useSelector((state) => state.resume.data); // Assuming resume details are stored under 'user' in Redux store
  // //(resume);
  const [showEditResume, setShowEditResume] = useState(false);
  const [ShowAvatar, setShowAvatar] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [ShowDropdown, setShowDropdown] = useState(false);

  const [ShowEducation, setShowEducation] = useState(false);
  const [ShowAddJobs, setShowAddJobs] = useState(false);
  const [ShowAddResp, setShowAddResp] = useState(false);
  const [ShowAddCourses, setShowAddCourses] = useState(false);
  const [ShowAddProjects, setShowAddProjects] = useState(false);
  const [ShowAddSkills, setShowAddSkills] = useState(false);
  const [ShowAddLink, setShowAddLink] = useState(false);
  const [ShowAddAccomp, setShowAddAccomp] = useState(false);

  const [ShowEditEducation, setShowEditEducation] = useState(false);
  const [ShowEditJobs, setShowEditJobs] = useState(false);
  const [ShowEditResp, setShowEditResp] = useState(false);
  const [ShowEditCourse, setShowEditCourse] = useState(false);
  const [ShowEditProjects, setShowEditProjects] = useState(false);
  const [ShowEditLink, setShowEditLink] = useState(false);
  const [ShowEditSkills, setShowEditSkills] = useState(false);
  const [ShowEditAccomp, setShowEditAccomp] = useState(false);

  const [ShowDelEducation, setShowDelEducation] = useState(false);

//   useEffect(() => {
//     dispatch(Resume()); // Fetch resume data for student when component mounts
//   }, [dispatch]);

  const handleEditClick = () => {
    setShowEditResume(true); // Show Editresume component when edit is clicked
  };
  const handleCloseClick = () => {
    setShowEditResume(false); // Hide Editresume component when close is clicked
  };

  const openeducation = () => {
    setShowEducation(true); // Show Editresume component when edit is clicked
  };
  const closeeducation = () => {
    setShowEducation(false); // Hide Editresume component when close is clicked
  };
  
  
 

  const openediteducation = (index) => {
    setEditingIndex(index); // Set the index of the education item being edited
    setShowEditEducation(true); // Show Editresume component when edit is clicked
  };
  const closeediteducation = () => {
    setEditingIndex(null); // Reset the index when closing the edit education modal
    setShowEditEducation(false); // Hide Editresume component when close is clicked
  };

  

  const opendropdown = () => {
    setShowDropdown(true); // Show Editresume component when edit is clicked
  };
  const closedropdown = () => {
    setShowDropdown(false); // Hide Editresume component when close is clicked
  };


  const openjob = () => {
    setShowAddJobs(true); // Show Editresume component when edit is clicked
  };
  const closejob = () => {
    setShowAddJobs(false); // Hide Editresume component when close is clicked
  };
  
  const openeditjob = (index) => {
    setEditingIndex(index); // Set the index of the education item being edited
    setShowEditJobs(true); // Show Editresume component when edit is clicked
  };
  const closeeditjob = () => {
    setEditingIndex(null); // Reset the index when closing the edit education modal
    setShowEditJobs(false); // Hide Editresume component when close is clicked
  };

  const openresp = () => {
    setShowAddResp(true); // Show Editresume component when edit is clicked
  };
  const closeresp = () => {
    setShowAddResp(false); // Hide Editresume component when close is clicked
  };
 
  const openeditresp = (index) => {
    setEditingIndex(index); // Set the index of the education item being edited
    setShowEditResp(true); // Show Editresume component when edit is clicked
  };
  const closeeditresp = () => {
    setEditingIndex(null); // Reset the index when closing the edit education modal
    setShowEditResp(false); // Hide Editresume component when close is clicked
  };


  const opencourse = () => {
    setShowAddCourses(true); // Show Editresume component when edit is clicked
  };
  const closecourse = () => {
    setShowAddCourses(false); // Hide Editresume component when close is clicked
  };
 
  const openeditcourse = (index) => {
    setEditingIndex(index); // Set the index of the education item being edited
    setShowEditCourse(true); // Show Editresume component when edit is clicked
  };
  const closeeditcourse = () => {
    setEditingIndex(null); // Reset the index when closing the edit education modal
    setShowEditCourse(false); // Hide Editresume component when close is clicked
  };

  const openproject = () => {
    setShowAddProjects(true); // Show Editresume component when edit is clicked
  };
  const closeproject = () => {
    setShowAddProjects(false); // Hide Editresume component when close is clicked
  };
 
  const openeditproject = (index) => {
    setEditingIndex(index); // Set the index of the education item being edited
    setShowEditProjects(true); // Show Editresume component when edit is clicked
  };
  const closeeditproject = () => {
    setEditingIndex(null); // Reset the index when closing the edit education modal
    setShowEditProjects(false); // Hide Editresume component when close is clicked
  };


  const openskill = () => {
    setShowAddSkills(true); // Show Editresume component when edit is clicked
  };
  const closeskill = () => {
    setShowAddSkills(false); // Hide Editresume component when close is clicked
  };
 
  const openeditskill = (index) => {
    setEditingIndex(index); // Set the index of the education item being edited
    setShowEditSkills(true); // Show Editresume component when edit is clicked
  };
  const closeeditskill = () => {
    setEditingIndex(null); // Reset the index when closing the edit education modal
    setShowEditSkills(false); // Hide Editresume component when close is clicked
  };


  const openlink = () => {
    setShowAddLink(true); // Show Editresume component when edit is clicked
  };
  const closelink = () => {
    setShowAddLink(false); // Hide Editresume component when close is clicked
  };
 
  const openeditlink = (index) => {
    setEditingIndex(index); // Set the index of the education item being edited
    setShowEditLink(true); // Show Editresume component when edit is clicked
  };
  const closeeditlink = () => {
    setEditingIndex(null); // Reset the index when closing the edit education modal
    setShowEditLink(false); // Hide Editresume component when close is clicked
  };


  const openaccom = () => {
    setShowAddAccomp(true); // Show Editresume component when edit is clicked
  };
  const closeaccom = () => {
    setShowAddAccomp(false); // Hide Editresume component when close is clicked
  };
 
  const openeditaccom = (index) => {
    setEditingIndex(index); // Set the index of the education item being edited
    setShowEditAccomp(true); // Show Editresume component when edit is clicked
  };
  const closeeditaccom = () => {
    setEditingIndex(null); // Reset the index when closing the edit education modal
    setShowEditAccomp(false); // Hide Editresume component when close is clicked
  };

  return (
    <>
      {ShowDropdown && <Dropdown onClose={closedropdown} />}
      {ShowEducation && <Education onClose={closeeducation} />}
      {ShowEditEducation && (
        <EditEducation index={editingIndex} onClose={closeediteducation} />
      )}
      {ShowAddJobs && <Addjob onClose={closejob} />}
      {ShowEditJobs && (
        <Editjob index={editingIndex} onClose={closeeditjob} />
      )}
      {ShowAddResp && <Addresp onClose={closeresp} />}
       {ShowEditResp && (
        <Editresp index={editingIndex} onClose={closeeditresp} />
      )}
      {ShowAddCourses && <Addcourse onClose={closecourse} />}
       {ShowEditCourse && (
        <Editcourse index={editingIndex} onClose={closeeditcourse} />
      )}
       {ShowAddProjects && <Addproject onClose={closeproject} />}
       {ShowEditProjects && (
        <Editproject index={editingIndex} onClose={closeeditproject} />
      )}
       {ShowAddSkills && <Addskill onClose={closeskill} />}
       {ShowEditSkills && (
        <Editskill index={editingIndex} onClose={closeeditskill} />
      )}

       {ShowAddLink && <Addlink onClose={closelink} />}
       {ShowEditLink && (
        <Editlink index={editingIndex} onClose={closeeditlink} />
      )}

     {ShowAddAccomp && <Addaccom onClose={closeaccom} />}
       {ShowEditAccomp && (
        <Editaccom index={editingIndex} onClose={closeeditaccom} />
      )}
     
     
      <div className="flex text-sky-500 font-semibold gap-5 items-center ml-[10vh] mt-[5vh] text-2xl ">
        <RiArrowLeftLine size={20} />
        <Link to={-1}>Go back</Link>
      </div>
      <div className="flex justify-center items-center text-[#151515d2] text-5xl font-semibold w-full h-[20vh]  ">
        Resume
      </div>
      <div className=" flex mb-[15vh] justify-center items-center  w-full  ">
        <div className=" w-[60%] max-[600px]:w-full h-full   border-2 rounded-md px-[7vh] py-[5vh] max-[600px]:px-2 max-[600px]:py-2 ">
          <div className=" w-full flex justify-between pr-[10vh] max-[600px]:pr-0 ">
            <div className="pb-[5vh]">
              <h1 className=" flex gap-[5vh] text-3xl font-semibold   text-[#151515d2]  ">
                   sjkkl;ksd
                <RiPencilLine
                  size={25}
                  className="mt-1 cursor-pointer"
                  onClick={handleEditClick}
                  color="#1c1c1c9d" // set custom `width` and `height`
                />
              </h1>
              <h1 className="text-base mt-2  text-[#1c1c1c9d]   ">
                adkas
              </h1>
              <h1 className="text-base mt-2  text-[#1c1c1c9d]   ">
                adxaj
              </h1>
              <h1 className="text-base mt-2  text-[#1c1c1c9d]   ">
                aqahdi
              </h1>
            </div>
            <div className="">
              <div className=" w-[15vh] h-[15vh] border-2 overflow-hidden rounded-full   ">
                <img
                  className="w-full h-full object-cover "
                  src={``}
                  alt=""
                />
              </div>
              <div
                className=" cursor-pointer mt-1 text-[#008BDC]  text-2xl font-medium"
                // onClick={openaddavatar}
              >
                Edit profile picture
              </div>
            </div>
          </div>
          <div className=" flex border-t-2 py-[4vh]   w-full  ">
            <div className="w-[30%]    text-[#1515159d] text-[2vh] font-semibold ">
              EDUCATION
            </div>
            <div className="w-[60%]  ">
                 <div key={1} className="flex">
                    <div className=" w-[80%]  mb-5">
                      <div className="text-[#151515d0] text-[2.5vh] font-semibold ">
                        {/* {item.degree} {item.branch} */}
                        helo
                      </div>
                      <div className="text-[#1515159d]  mt-1 text-[2vh] font-medium">
                        {/* {item.organization} */}
                        hyy
                      </div>
                      <div className="text-[#1515159d]  mt-1 text-[2vh] font-medium">
                        {/* {item.startyear}-{item.endyear} */}
                        hiee
                      </div>
                      <div className="text-[#1515159d]  text-[2vh]  mt-1 text-2xl font-medium">
                        {/* CGPA {item.grade} */}
                        how
                      </div>
                    </div>
                    <div className="flex gap-10">
                      <RiPencilLine
                        size={20}
                        className="mt-1 cursor-pointer"
                        onClick={() => openediteducation(1)}
                        color="#1c1c1c9d" // set custom `width` and `height`
                      />
                      <RiDeleteBin5Line
                        size={20}
                        onClick={() => opendelducation(1)}
                        className="mt-1 cursor-pointer"
                        color="#1c1c1c9d" // set custom `width` and `height`
                      />
                    </div>
                  </div>
                  
              <div
                onClick={openeducation}
                className=" mt-2 text-[#008BDC]  text-base font-medium"
              >
                <div className="cursor-pointer">+ Add Education</div>
              </div>
            </div>
          </div>
          <div className=" flex border-t-2 py-[4vh]   w-full  ">
            <div className="w-[30%]    text-[#1515159d] text-[2vh] font-semibold ">
              WORK EXPERIENCE
            </div>
            <div className="w-[60%]  ">
                 <div key={1} className="flex">
                    <div className=" w-[80%]  mb-5">
                      <div className="text-[#151515d0] text-[2.5vh] font-semibold ">
                        helo
                      </div>
                      <div className="text-[#1515159d]  mt-1 text-[2vh] font-medium">
                        hyy
                      </div>
                      <div className="text-[#1515159d]  mt-1 text-[2vh] font-medium">
                        hiee
                      </div>
                      <div className="text-[#1515159d]  text-[2vh]  mt-1 text-2xl font-medium">
                        how
                      </div>
                    </div>
                    <div className="flex gap-10">
                      <RiPencilLine
                        size={20}
                        className="mt-1 cursor-pointer"
                        onClick={() => openeditjob(1)}
                        color="#1c1c1c9d" // set custom `width` and `height`
                      />
                      <RiDeleteBin5Line
                        size={20}
                        // onClick={() => opendeljob(1)}
                        className="mt-1 cursor-pointer"
                        color="#1c1c1c9d" // set custom `width` and `height`
                      />
                    </div>
                  </div>
                  
             <div className="flex gap-3">
             <div
                onClick={openjob}
                className=" mt-2 text-[#008BDC]  text-base font-medium"
               >
                <div className="cursor-pointer">+ Add job</div>
              </div>
              <div
                onClick={openjob}
                className=" mt-2 text-[#008BDC]  text-base font-medium"
               >
                <div className="cursor-pointer">+ Add Internship</div>
              </div>
             </div>
            </div>
          </div>
          <div className=" flex border-t-2 py-[4vh]   w-full  ">
            <div className="w-[30%]    text-[#1515159d] text-[2vh] font-semibold ">
            POSITIONS OF RESPONSIBILITY
            </div>
            <div className="w-[60%]  ">
                 <div key={1} className="flex">
                    <div className=" w-[80%]  mb-5">
                     
                      <div className="text-[#1515159d]   text-[2vh] font-medium">
                        hyy
                      </div>
                      
                    </div>
                    <div className="flex gap-10">
                      <RiPencilLine
                        size={20}
                        className="mt-1 cursor-pointer"
                        onClick={() => openeditresp(1)}
                        color="#1c1c1c9d" // set custom `width` and `height`
                      />
                      <RiDeleteBin5Line
                        size={20}
                        onClick={() => opendelducation(1)}
                        className="mt-1 cursor-pointer"
                        color="#1c1c1c9d" // set custom `width` and `height`
                      />
                    </div>
                  </div>
                  
              <div
                onClick={openresp}
                className=" mt-2 text-[#008BDC]  text-base font-medium"
              >
                <div className="cursor-pointer">+ Add position of responsibility</div>
              </div>
            </div>
          </div>
          <div className=" flex border-t-2 py-[4vh]   w-full  ">
            <div className="w-[30%]    text-[#1515159d] text-[2vh] font-semibold ">
            TRAININGS/ COURSES
            </div>
            <div className="w-[60%]  ">
                 <div key={1} className="flex">
                    <div className=" w-[80%]  mb-5">
                      <div className="text-[#151515d0] text-[2.5vh] font-semibold ">
                        helo
                      </div>
                      <div className="text-[#1515159d]  mt-1 text-[2vh] font-medium">
                        hyy
                      </div>
                      <div className="text-[#1515159d]  mt-1 text-[2vh] font-medium">
                        hiee
                      </div>
                      <div className="text-[#1515159d]  text-[2vh]  mt-1 text-2xl font-medium">
                        how
                      </div>
                    </div>
                    <div className="flex gap-10">
                      <RiPencilLine
                        size={20}
                        className="mt-1 cursor-pointer"
                        onClick={() => openeditcourse(1)}
                        color="#1c1c1c9d" // set custom `width` and `height`
                      />
                      <RiDeleteBin5Line
                        size={20}
                        // onClick={() => opendeljob(1)}
                        className="mt-1 cursor-pointer"
                        color="#1c1c1c9d" // set custom `width` and `height`
                      />
                    </div>
                  </div>
                  
              <div
                onClick={opencourse}
                className=" mt-2 text-[#008BDC]  text-base font-medium"
               >
                <div className="cursor-pointer">+ Add training/ course</div>
              </div>
            </div>
          </div>
          <div className=" flex border-t-2 py-[4vh]   w-full  ">
            <div className="w-[30%]    text-[#1515159d] text-[2vh] font-semibold ">
            ACADEMICS/ <br /> PERSONAL PROJECTS
            </div>
            <div className="w-[60%]  ">
                 <div key={1} className="flex">
                    <div className=" w-[80%]  mb-5">
                      <div className="text-[#151515d0] text-[2.5vh] font-semibold ">
                        helo
                      </div>
                      <div className="text-[#1515159d]  mt-1 text-[2vh] font-medium">
                        hyy
                      </div>
                      <div className="text-[#1515159d]  mt-1 text-[2vh] font-medium">
                        hiee
                      </div>
                      <div className="text-[#1515159d]  text-[2vh]  mt-1 text-2xl font-medium">
                        how
                      </div>
                    </div>
                    <div className="flex gap-10">
                      <RiPencilLine
                        size={20}
                        className="mt-1 cursor-pointer"
                        onClick={() => openeditproject(1)}
                        color="#1c1c1c9d" // set custom `width` and `height`
                      />
                      <RiDeleteBin5Line
                        size={20}
                        // onClick={() => opendeljob(1)}
                        className="mt-1 cursor-pointer"
                        color="#1c1c1c9d" // set custom `width` and `height`
                      />
                    </div>
                  </div>
                  
              <div
                onClick={openproject}
                className=" mt-2 text-[#008BDC]  text-base font-medium"
               >
                <div className="cursor-pointer">+ Add academic/ personal project</div>
              </div>
            </div>
          </div>
          <div className=" flex border-t-2 py-[4vh]   w-full  ">
            <div className="w-[30%]    text-[#1515159d] text-[2vh] font-semibold ">
             SKILLS
            </div>
            <div className="w-[60%]  ">
                 <div key={1} className="flex">
                    <div className=" w-[80%]  mb-5">
                     
                      <div className="text-[#1515159d]   text-[2vh] font-medium">
                        hyy
                      </div>
                      
                    </div>
                    <div className="flex gap-10">
                      <RiPencilLine
                        size={20}
                        className="mt-1 cursor-pointer"
                        onClick={() => openeditskill(1)}
                        color="#1c1c1c9d" // set custom `width` and `height`
                      />
                      <RiDeleteBin5Line
                        size={20}
                        onClick={() => opendelducation(1)}
                        className="mt-1 cursor-pointer"
                        color="#1c1c1c9d" // set custom `width` and `height`
                      />
                    </div>
                  </div>
                  
              <div
                onClick={openskill}
                className=" mt-2 text-[#008BDC]  text-base font-medium"
              >
                <div className="cursor-pointer">+ Add skill</div>
              </div>
            </div>
          </div>
          <div className=" flex border-t-2 py-[4vh]   w-full  ">
            <div className="w-[30%]    text-[#1515159d] text-[2vh] font-semibold ">
            PORTFOLIO/ <br /> WORK SAMPLES
            </div>
            <div className="w-[60%]  ">
                 <div key={1} className="flex">
                    <div className=" w-[80%]  mb-5">
                    <div className="text-[#151515d0] text-[2.5vh] font-semibold ">
                        helo
                      </div>
                      <div className="text-[#1515159d]   text-[2vh] font-medium">
                        hyy
                      </div>
                      
                    </div>
                    <div className="flex gap-10">
                      <RiPencilLine
                        size={20}
                        className="mt-1 cursor-pointer"
                        onClick={() => openeditlink(1)}
                        color="#1c1c1c9d" // set custom `width` and `height`
                      />
                      <RiDeleteBin5Line
                        size={20}
                        onClick={() => opendelducation(1)}
                        className="mt-1 cursor-pointer"
                        color="#1c1c1c9d" // set custom `width` and `height`
                      />
                    </div>
                  </div>
                  
              <div
                onClick={openlink}
                className=" mt-2 text-[#008BDC]  text-base font-medium"
              >
                <div className="cursor-pointer">+ Add portfolio/ work sample</div>
              </div>
            </div>
          </div>
          <div className=" flex border-t-2 py-[4vh]   w-full  ">
            <div className="w-[30%]    text-[#1515159d] text-[2vh] font-semibold ">
            ACCOMPLISHMENTS/ <br /> ADDITIONAL DETAILS
            </div>
            <div className="w-[60%]  ">
                 <div key={1} className="flex">
                    <div className=" w-[80%]  mb-5">
                      <div className="text-[#1515159d]   text-[2vh] font-medium">
                        hyy
                      </div>
                      
                    </div>
                    <div className="flex gap-10">
                      <RiPencilLine
                        size={20}
                        className="mt-1 cursor-pointer"
                        onClick={() => openeditaccom(1)}
                        color="#1c1c1c9d" // set custom `width` and `height`
                      />
                      <RiDeleteBin5Line
                        size={20}
                        onClick={() => opendelducation(1)}
                        className="mt-1 cursor-pointer"
                        color="#1c1c1c9d" // set custom `width` and `height`
                      />
                    </div>
                  </div>
                  
              <div
                onClick={openaccom}
                className=" mt-2 text-[#008BDC]  text-base font-medium"
              >
                <div className="cursor-pointer">+ Add accomplishment/ additional detail</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <img
          src="https://ik.imagekit.io/sunnykurmi/footer.png?updatedAt=1708749737577"
          alt=""
        />
      </div>
    </>
  );
}
