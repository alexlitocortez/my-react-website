
import React from 'react';
import './DropdownImage.css';
import { IconContext } from 'react-icons/';

import { AiFillHome } from 'react-icons/ai';
import { FaBox } from 'react-icons/fa';
import { GiMagnifyingGlass } from 'react-icons/gi';
import { MdPermContactCalendar } from 'react-icons/md';
import { FaUsers } from 'react-icons/fa';
import { AiOutlineTransaction } from 'react-icons/ai';
import { HiOutlineDocumentReport } from 'react-icons/hi';


export default function DropdownImage() {
    return (
        <IconContext.Provider value={{ className: 'iconMargins', size: '1.6em' }}>
        <div className='dropdownStyle'>
                <AiFillHome />
                <FaBox />
                <GiMagnifyingGlass />
                <MdPermContactCalendar />
                <FaUsers />
                <AiOutlineTransaction />
                <HiOutlineDocumentReport />
        </div>
        </IconContext.Provider>
    )
}
