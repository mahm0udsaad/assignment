import {
    Dialog,
    Backdrop,
    Checkbox,
    Paper
  } from '@mui/material';
  import React from 'react';

import {AiOutlineEye } from 'react-icons/ai'
import {BsCalendarDateFill } from 'react-icons/bs'
import {IoIosArrowForward } from 'react-icons/io'
import MaterialUIForm from './form';
const Row = ({ item }) => {
   const [ statusBg , setStatusBg ] = React.useState('')
   const [ statusColor , setStatusColor] = React.useState('')

   const [open, setOpen] = React.useState(false);
   const dialog = React.useRef(null)
   React.useEffect(()=>{
    switch (item.statusText) {
        case "Running": 
        setStatusBg('#cfffcf')
        setStatusColor('#00b400')
            break;
            case "Will Expire":
              
                setStatusBg('#ffdebe')
                setStatusColor('#F29339')
            break;
        default:
            setStatusBg('#ffbdbd')
            setStatusColor('red')

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
    <div className="hover:shadow-2xl w-full bg-white self-center flex flex-wrap items-start justify-between gap-5 pl-6 pr-7 py-3.5 rounded-xl">
  <div className="self-center flex items-start gap-2 my-auto">
    <Checkbox className="border self-stretch flex w-5 h-5 flex-col rounded-sm border-solid border-gray-400" />
    <div className="text-black text-sm font-medium self-center whitespace-nowrap my-auto">
      {item.orderNumber}
    </div>
  </div>
  <div className="text-black text-sm font-medium self-center my-auto">
    {item.price}
  </div>
  <div style={{ backgroundColor: `${statusBg}`, color: `${statusColor}` }} className={`bg-${statusBg}-600 bg-opacity-10 self-stretch flex w-full sm:w-auto max-w-full sm:max-w-[172px] items-start justify-between gap-3 pl-12 pr-7 py-3 rounded-3xl max-md:px-5`}>
    <div className={`text-${statusBg}-600 text-center text-xs font-medium self-center my-auto`}>
      {item.statusText}
    </div>
    <IoIosArrowForward style={{ color: `${statusColor}` }} />
  </div>
  <div className="self-center flex items-center gap-2.5 my-auto">
    <BsCalendarDateFill className="text-blue-600" />
    <div className="text-black text-sm font-medium whitespace-nowrap self-start">
      {item.date}
    </div>
  </div>
  <button onClick={handleOpen} className="cursor-pointer hover:text-blue-600 self-center text-green-400 flex items-center gap-1 my-auto">
    <AiOutlineEye />
    <div className="text-sm font-medium self-center whitespace-nowrap my-auto">
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
