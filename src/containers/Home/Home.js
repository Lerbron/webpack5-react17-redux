import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { testNum } from '@/actions/testActions'
import checkNum from '@/utils/test'
import imgUrl from '@/assets/icons/img.jpg'
import { Button } from 'antd'
import http from '@/utils/http'
import API from '@/api'


const Home= (props) => {

  let {
    history,
    num,
    testNum,
  }= props

  const goAbout= () => {
    history.push('/about/3')
  }
  const add=() => {
    testNum()
  }

  useEffect(() => {
    let flag= checkNum(8)
    console.log("flag-->", flag)
    http.get(API.MUSICS)
      .then(res => {
        console.log('---->', res)
      })
  }, [])

  return <div>
    <div className='title'>Home page</div>
    <Button type='ghost' onClick={goAbout}>Login</Button>
    <div>{num}</div>
    <div onClick={add}>add</div>
    <img src={imgUrl} />
  </div>
}

const mapStateToProps = (state, ownProps) => {
  return {
    num: state.test.num
  }
}

const mapDispatchToProps = (dispatch, ownProps ) => {
  return {
    testNum: () => {
      dispatch(testNum())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)