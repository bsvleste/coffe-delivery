import styled from 'styled-components'
import media from 'styled-media-query'

export const WrapperCardsCoffes = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  margin-bottom: 16px;
  ${media.greaterThan('small')`
   grid-template-columns: 1fr 1fr 1fr 1fr;
  `}
`
