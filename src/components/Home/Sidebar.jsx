import React from 'react'
// Icons from https://react-icons.github.io/react-icons/
import { CgNotes } from "react-icons/cg";
import { MdLabelImportant } from "react-icons/md";
import { FaCheckDouble } from "react-icons/fa";
import { TbNotebookOff } from "react-icons/tb";
import {Link} from "react-router-dom"

const Sildebar = () => {
  const data=[
  {
    title:"All tasks",
    icon:<CgNotes />,
    link:"/",
  },
  {
    title:"Important tasks",
    icon:<MdLabelImportant/>,
    link:"/Important-Tasks",
  },
  {
    title:"Completed tasks",
    icon:<FaCheckDouble />,
    link:"/Completed-Tasks",
  },
  {
    title:"Incompleted tasks",
    icon:<TbNotebookOff />,
    link:"/Incompleted-Tasks",
  },
];

  return (
    <>
      <div>
        <h2 className='text-xl font-semibold'>User Name</h2>
        <h4 className='mb-1 text-gray-400'>example@gmail.com</h4>
        <hr/>
      </div>
      <div>
        {data.map((items,i)=>(
          <Link to={items.link} key ={i} className='my-2 flex items-center hover:bg-gray-600 p-2 rounded transition-all duration-300'>
            <div className='mr-2'>{items.icon}</div>
            {items.title}
          </Link>
        ))}
      </div>
      <div>
        <button className='bg-gray-600 w-full p-2 rounded'>Log out</button>
      </div>
    </>
  );
};

export default Sildebar;