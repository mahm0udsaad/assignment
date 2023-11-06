import {
    Dialog,
    Backdrop,
    Checkbox,
    Paper
  } from '@mui/material';
  import React from 'react';

import {AiOutlineEye } from 'react-icons/ai'
import {BsCalendarDateFill } from 'react-icons/bs'
import MaterialUIForm from './form';
const Row = ({ item }) => {
   const [ statusBg , setStatusBg ] = React.useState('')
   const [open, setOpen] = React.useState(false);
   const dialog = React.useRef(null)
   React.useEffect(()=>{
    switch (item.statusText) {
        case "Running": 
        setStatusBg('green')
            break;
            case "Will Expire":
                setStatusBg('yellow')
            break;
        default:
            setStatusBg('red')
            break;
    }
   },[])


   const handleOpen = () => {
     setOpen(true);
   };
   const handleClose = () => {
     setOpen(false);
   };
 
   const onSubmit = (data) => {
     console.log(data);
     handleClose(); // Close the dialog after form submission
   };

  return (
    <>
    <div className="hover:shadow-2xl bg-white self-center flex w-full  items-start justify-between gap-5 pl-6 pr-7 py-3.5 rounded-xl">
      <div className="self-center flex items-start gap-2 my-auto">
        <Checkbox className="border self-stretch flex w-5 h-5 flex-col rounded-sm border-solid border-gray-400" />
        <div className="text-black text-sm font-medium self-center whitespace-nowrap my-auto">
          {item.orderNumber}
        </div>
      </div>
      <div className="text-black text-sm font-medium self-center my-auto">
        {item.price}
      </div>
      <div className={`bg-${statusBg}-600 bg-opacity-10 self-stretch flex w-[172px] max-w-full items-start justify-between gap-3 pl-12 pr-7 py-3 rounded-3xl max-md:px-5`}>
        <div className={`text-${statusBg}-600 text-center text-xs font-medium self-center my-auto`}>
          {item.statusText}
        </div>
        <img
          loading="lazy"
          src={item.statusImageSrc}
          className="aspect-square object-contain object-center w-6 -rotate-90 overflow-hidden self-stretch max-w-full"
          alt="Status"
        />
      </div>
      <div className="self-center flex items-center gap-2.5 my-auto ">
        <BsCalendarDateFill className='text-blue-600' />
        <div className="text-black text-sm font-medium whitespace-nowrap self-start">
          {item.date}
        </div>
      </div>
      <button onClick={handleOpen} className="cursor-pointer hover:text-blue-600 self-center text-green-400 flex items-center gap-1 my-auto">
        <AiOutlineEye />
        <div className=" text-sm font-medium self-center whitespace-nowrap my-auto">
          Show Details
        </div>
      </button>
    </div>
     {open && (
       <Dialog maxWidth="lg" open={open} onClose={handleClose} BackdropComponent={Backdrop}>
       <Paper style={{ width: '98%' }}>
           <MaterialUIForm close={handleClose} />
       </Paper>
     </Dialog>
        )}
        </>
  );
};

export default Row;