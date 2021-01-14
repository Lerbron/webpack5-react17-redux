import React from 'react'

import Home from '@/containers/Home'
import About from '@/containers/About'
import Login from '@/containers/Login'

export const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/about/:id',
    exact: true,
    component: About,
    auth: true
  },
  {
    path: '/login',
    exact: true,
    component: Login
  }
]