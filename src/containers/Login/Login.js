import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import Cookies from 'js-cookie';
import { Button } from 'antd'


export default (props) => {
  let {
    history
  }= props

  const goHome= () => {
    history.push('/')
  }

  const onLogin= () => {
    Cookies.set('token', 'dlkfjowif')
    setTimeout(() => {
      history.push('/about/3')
    }, 100)
  }
  

  return <div>
    <div onClick={goHome}>Login page</div>
    <Button type="primary" onClick={onLogin}>login</Button>
  </div>
}