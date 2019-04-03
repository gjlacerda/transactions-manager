import React, { Fragment } from 'react'
import styled from 'styled-components'
import Skeleton from 'components/_common/Skeleton'

const SkeletonWrapper = styled.div`
  margin-top: 15px;
  margin-bottom: 20px;
`

export default () => (
  <Fragment>
    <SkeletonWrapper>
      <Skeleton height="25px" />
    </SkeletonWrapper>
    <SkeletonWrapper>
      <Skeleton height="25px" />
    </SkeletonWrapper>
    <SkeletonWrapper>
      <Skeleton height="25px" />
    </SkeletonWrapper>
  </Fragment>
)
