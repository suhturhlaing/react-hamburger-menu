import React from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"


export const SideBar = [
    {
        title: "Home",
        path: "/",
        cName: "nav-text",
        icons: <AiIcons.AiFillHome />
    },
    {
        title: "Products",
        path: "/products",
        cName: "nav-text",
        icons: <FaIcons.FaCartPlus />
    },
    {
        title: "About",
        path: "/about",
        cName: "nav-text",
        icons: <IoIcons.IoIosPaper />
    },

]


