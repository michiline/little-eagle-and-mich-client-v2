import styled from 'styled-components'


export const Icon = styled.img`
	width: ${props => props.width};
	height: ${props => props.height};
	cursor: pointer;
	${props => props.resize && css`
		@media only screen and (max-width: ${props => props.theme.breakpoints.medium}px) {
			width: ${props => props.width * 0.75}px;
			height: ${props => props.height * 0.75}px;
		}
	`}
`