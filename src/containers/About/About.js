import React, { useEffect} from 'react'
import checkNum from '@/utils/test'


import './index.scss'


export default (props) => {
  let {
    history,
    match
  }= props

  const goHome= () => {
    history.push('/')
  }

  useEffect(() => {
    let flag= checkNum(12)
    console.log("flag-->", flag)
  }, [])

  console.log('id-->', match)

  return <div>
    <div onClick={goHome}>About page <span>{match?.params?.id}</span></div>
  </div>
}