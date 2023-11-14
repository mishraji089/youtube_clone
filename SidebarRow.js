import React from 'react';
import './SidebarRow.css'

function SidebarRow({Selected,Icon,title}) {
  return (
    <div className={`sidebarRow ${Selected && "selected"}`}>
        <Icon className="sidebarIcon"/>
        <h2 className='sidebar_title'>{title}</h2>
    </div>

    );
}

export default SidebarRow