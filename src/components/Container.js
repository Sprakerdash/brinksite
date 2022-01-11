import React from "react"
import styled from "styled-components"

const Container = styled.div`
 padding: 4rem 2rem;
  ${({ theme }) => theme.sizes.xs} {
    padding: 4rem 3rem;
  }
  ${({ theme }) => theme.sizes.sm} {
    padding: 4rem 3.8rem;
  }
  ${({ theme }) => theme.sizes.md} {
    padding: 4rem 4rem;
  }
  ${({ theme }) => theme.sizes.lg} {
    padding: 4rem 8rem;
  }
`

export default Container
