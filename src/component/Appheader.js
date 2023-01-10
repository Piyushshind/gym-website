import React from 'react'
import { Breadcrumb, Layout, Menu } from "antd";
import {FaDumbbell} from 'react-icons/fa'
import { Button, Space } from 'antd';
const { Header, Content, Footer } = Layout;


function AppHeader() {

  
  return (
<div className='container-fluid'>
    <div className='header'>
    <div className="logo" ><a href="home"><FaDumbbell/></a>
     
     
    </div>
        <Menu  mode="horizontal" defaultSelectedKeys={['Home']}>
          <Menu.Item key="1"><a href='#home'>Home</a></Menu.Item>
          <Menu.Item key="2">Program</Menu.Item>
          <Menu.Item key="3"><a  href='#Training'>Training</a></Menu.Item>
          <Menu.Item key="4">Priceing</Menu.Item>
          <Menu.Item key="5" ><a href='#aboutus'>About Us</a></Menu.Item>
        </Menu>
        <Button type="primary" danger>Join Us</Button>
    </div>
    </div>
  )
}

export default AppHeader;
