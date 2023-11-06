import { AiOutlineHome, AiOutlineUsergroupDelete } from "react-icons/ai"
import { BsQuestionCircle } from "react-icons/bs"
import { FiBox, FiSettings } from "react-icons/fi"
import { LuShoppingBag } from "react-icons/lu"
import { RxExit } from "react-icons/rx"

export const NavBar = () =>{
    return(
        <div className="bg hidden sm:flex h-screen flex-col items-stretch w-[5%] ">
          <div className=" flex w-full flex-col justify-around items-center text-3xl text-white h-full mx-auhref w-full mx-auhref pt-24 pb-14 ">
          <a href="/home">
            <AiOutlineHome />
          </a>
          <a href="/box">
            <FiBox />
          </a>
          <a href="/users">
            <AiOutlineUsergroupDelete />
          </a>
          <a href="/help">
            <BsQuestionCircle />
          </a>
          <a href="/shopping">
            <LuShoppingBag />
          </a>
          <a href="/settings">
            <FiSettings />
          </a>
          <a href="/exit">
            <RxExit />
          </a>
        </div>
        </div>
    )
}