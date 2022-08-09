import React from 'react';
import {RiArrowUpSFill,RiArrowDownSFill } from 'react-icons/ri';

export const NavbarData = [
  {
    title: 'Trang chủ',
    path: '/home',
    iconClosed: <RiArrowDownSFill />,
    iconOpened: <RiArrowUpSFill />
  },
  {
    title: 'Thời sự',
    path: '/news',
    iconClosed: <RiArrowDownSFill />,
    iconOpened: <RiArrowUpSFill />,

    subNav: [
      {
        title: 'Chính trị',
        path: '/news/news1',
        cName: 'sub-nav'
      },
      {
        title: 'Dân sinh',
        path: '/news/news2',
        cName: 'sub-nav'
      },
      {
        title: 'Lao động - việc làm',
        path: '/news/news3',
      },
      {
        title: 'Giao thông',
        path: '/news/news3',
      }
    ]
  },
  {
    title: 'Góc nhìn',
    path: '/views',
    iconClosed: <RiArrowDownSFill />,
    iconOpened: <RiArrowUpSFill />,

    subNav: [
      {
        title: 'Bình luận nhiều',
        path: '/views/views1',
        cName: 'sub-nav'
      },
      {
        title: 'Chính trị & chính sách',
        path: '/views/views2',
        cName: 'sub-nav'
      },
      {
        title: 'Y tế - sức khỏe',
        path: '/views/views3',
      },
      {
        title: 'Kinh doanh - quản trị',
        path: '/views/views3',
      }
    ]
  },
  {
    title: 'Thế giới',
    path: '/world',
    iconClosed: <RiArrowDownSFill />,
    iconOpened: <RiArrowUpSFill />,

    subNav: [
      {
        title: 'Tư liệu',
        path: '/world/world1',
        cName: 'sub-nav'
      },
      {
        title: 'Phân tích',
        path: '/world/world2',
        cName: 'sub-nav'
      },
      {
        title: 'Người Việt 5 châu',
        path: '/world/world3',
      },
      {
        title: 'Cuộc sống đó đây',
        path: '/world/world3',
      }
    ]
  },
  
];