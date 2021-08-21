import React from 'react'
import styled from 'styled-components'
export default function Main() {
  return (
    <>
      <MainImg />
    </>
  )
}
const MainImg = styled.div`
  width:100%;
  height:calc(100vh - 100px);
  line-height: 130vh;
  
  font-size: 60px;
  text-align: center;
  
  background: #000 url(/home/img/main_img.jpg) no-repeat center / contain;
  color: yellow;
`