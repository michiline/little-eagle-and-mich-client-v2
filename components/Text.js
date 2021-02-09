import styled from 'styled-components'

const props = {
	h1: {
		fontSize: 85,
		lineHeight: 106
	},
	subheading: {
		fontSize: 18,
		lineHeight: 23 
	}
}

export const H1 = styled.h1`
	font-family: Lobster;
	font-style: normal;
	font-weight: normal;
	font-size: ${props.h1.fontSize}px;
	line-height: ${props.h1.lineHeight}px;
	color: ${props => props.color ? props.theme.color[props.color] : '#000000'};
	width: max-width;
	@media only screen and (max-width: ${props => props.theme.breakpoints.large}px) {
		font-size: ${props.h1.fontSize* 0.85}px;
		line-height: ${props.h1.lineHeight * 0.85}px;
	}
	@media only screen and (max-width: ${props => props.theme.breakpoints.medium}px) {
		font-size: ${props.h1.fontSize* 0.75}px;
		line-height: ${props.h1.lineHeight * 0.7}px;
	}
	@media only screen and (max-width: ${props => props.theme.breakpoints.small}px) {
		font-size: ${props.h1.fontSize* 0.65}px;
		line-height: ${props.h1.lineHeight * 0.65}px;
	}
	@media only screen and (max-width: ${props => props.theme.breakpoints.xsmall}px) {
		width: min-width;
	}
`

export const Subheading = styled.p`
  font-family: 'Mulish';
  font-style: normal;
  font-weight: bold;
  font-size: ${props.subheading.fontSize}px;
  line-height: ${props.subheading.lineHeight}px;
  color: ${props => props.color ? props.theme.color[props.color] : '#000000'};
  margin-top: ${props => props.marginTop ? props.marginTop : 0}px;
  @media only screen and (max-width: ${props => props.theme.breakpoints.large}px) {
	font-size: ${props.subheading.fontSize* 0.85}px;
	line-height: ${props.subheading.lineHeight * 0.85}px;
	width: 350px;
	margin-top: ${props => props.marginTop ? props.marginTop * 0.85 : 0}px;
	}
	@media only screen and (max-width: ${props => props.theme.breakpoints.medium}px) {
		font-size: ${props.subheading.fontSize* 0.75}px;
		line-height: ${props.subheading.lineHeight * 0.75}px;
		margin-top: ${props => props.marginTop ? props.marginTop * 0.75 : 0}px;
		width: 250px;
	}

`