import React from 'react'
import './Sidebar.css'

// React icons
import { AiFillHome } from 'react-icons/ai';
import { FaBox } from 'react-icons/fa';
import { GiMagnifyingGlass } from 'react-icons/gi';
import { MdPermContactCalendar } from 'react-icons/md';
import { FaUsers } from 'react-icons/fa';
import { AiOutlineTransaction } from 'react-icons/ai';
import { HiOutlineDocumentReport } from 'react-icons/hi';
import { RiArrowDropDownLine } from 'react-icons/ri';


export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebarWrapper'>
                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Dashboard</h3>
                    <ul className='sidebarList'>
                        <li className='sidebarListItem'>
                            <AiFillHome style={{ marginRight: '5px' }}/>
                            Home
                            <RiArrowDropDownLine style={{ marginLeft: '111px' }} />
                        </li>
                        <li className='sidebarListItem'>
                            <FaBox style={{ marginRight: '5px' }}/>
                            Products
                            <RiArrowDropDownLine style={{ marginLeft: '91px' }} />
                        </li>
                        <li className='sidebarListItem'>
                            <GiMagnifyingGlass style={{ marginRight: '5px' }}/>
                            Explore
                            <RiArrowDropDownLine style={{ marginLeft: '100px' }} />
                        </li>
                        <li className='sidebarListItem'>
                            <MdPermContactCalendar style={{ marginRight: '5px' }}/>
                            Contact
                            <RiArrowDropDownLine style={{ marginLeft: '100px' }} />
                        </li>
                    </ul>
                    <h3 className="sidebarTitle">Quick Menu</h3>
                        <ul className="sidebarList">
                            <li className="sidebarListItem">
                                <FaUsers style={{ marginRight: '5px' }}/>
                                Users
                                <RiArrowDropDownLine style={{ marginLeft: '114px' }} />
                            </li>
                            <li className="sidebarListItem">
                                <AiOutlineTransaction style={{ marginRight: '5px' }}/>
                                Transactions
                                <RiArrowDropDownLine style={{ marginLeft: '65px' }} />
                            </li>
                            <li className="sidebarListItem">
                                <HiOutlineDocumentReport style={{ marginRight: '5px'}}/>
                                Reports
                                <li>
                                <RiArrowDropDownLine style={{ marginLeft: '100px' }}/>
                                </li>
                            </li>
                        </ul>
                </div>
            </div>
        </div>
    )
}

