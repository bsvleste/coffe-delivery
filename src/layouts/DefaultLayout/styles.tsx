import styled from 'styled-components'
import media from 'styled-media-query'
export const LayoutContainer = styled.div`
  max-width: 74rem;
  margin: 1rem 1rem;
  ${media.greaterThan('large')`
    margin: auto auto
  `}
`
