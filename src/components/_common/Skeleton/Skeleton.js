import React from 'react'
import styled, { keyframes } from 'styled-components'

const animation = keyframes`
  0% {
    background-position:-200px 0
  }
  100% {
    background-position:calc(200px + 100%) 0}
  }
`

const Container = styled.div`
  background-color: #eee;
  background-image: linear-gradient( 90deg, #eee, #f5f5f5, #eee );
  background-size: 200px 100%;
  background-repeat: no-repeat;
  border-radius: 4px;
  display: inline-block;
  line-height: 1;
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '16px'};
  animation: 1.2s ease-in-out 0s infinite normal none running ${animation};
`

export default ({ width, height }) => (
  <Container width={width} height={height} />
)
