import React, { useState } from 'react';
import { AppstoreOutlined, DownOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import './Header.css'; // Ensure your styles are included
import logo from './../assets/logo.png';

const items = [
    {
        key: 'Home',
        label: 'Home',
    },

    {
        key: 'about', // News menu with children
        label: (<span>About <DownOutlined style={{ fontSize: '10px' }}/></span>), // Dropdown indicator for News
        children: [
            {
                label: 'Local News',
                key: 'local_news',
            },
            {
                label: 'International News',
                key: 'international_news',
            },
        ],
    },
    {
        key: 'contact', // About menu with children
        label: (<span>Contact <DownOutlined style={{ fontSize: '10px' }}/></span>),
        children: [
            {
                label: 'Company Info',
                key: 'company_info',
            },
            {
                label: 'Contact Us',
                key: 'contact_us',
            },
        ],
    },
    {
        key: 'projects', // About menu with children
        label: (<span>Projects <DownOutlined style={{ fontSize: '10px' }}/></span>),
        children: [
            {
                label: 'Company Info',
                key: 'company_info',
            },
            {
                label: 'Contact Us',
                key: 'contact_us',
            },
        ],
    },
]

const Header = () => {
    const [current, setCurrent] = useState('ex_rate');

    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return (
        <header className="header">
            <div className="logo-container">
                <img style={{width:'40px'}} src={logo} alt="Logo" />
            </div>
            <Menu
                onClick={onClick}
                selectedKeys={[current]}
                mode="horizontal"
                items={items.map(item => ({
                    ...item,
                    icon: item.icon || null,
                    children: item.children ? item.children.map(child => ({
                        ...child,
                        key: child.key,
                    })) : null,
                }))}
                className="header-menu"
            />
        </header>
    );
};

export default Header;
