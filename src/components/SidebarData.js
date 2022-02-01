import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io'
import '../assets/css/Sidebar.css'

const Sidebardata = [
    {
        title: 'Home',
        path:'/',
        icon: <AiIcons.AiFillHome/>,
        cName:'nav-text'
    },
    {
        title: 'Producto',
        path:'/Productos',
        icon: <FaIcons.FaCartPlus/>,
        cName:'nav-text'
    },
    {
        title: 'Usuarios',
        path:'/Usuarios',
        icon: <IoIcons.IoIosPaper/>,
        cName:'nav-text'
    }
]

export default Sidebardata;