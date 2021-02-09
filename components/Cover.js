import styled from 'styled-components'

const Cover = ({ src, children }) => {
	return (
		<CoverContainer src={src}>
			{children}
		</CoverContainer>
	)
}

const CoverContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(0deg, rgba(28, 57, 74, 0.3), rgba(28, 57, 74, 0.3)), url(${props => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`



export default Cover