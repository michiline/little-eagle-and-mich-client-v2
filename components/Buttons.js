import styled from 'styled-components'


const props = {
	subheading: {
		fontSize: 24,
		lineHeight: 30,
    marginTop: 30,
    paddingH: 30,
    paddingV: 5
	}
}

export const SubheadingButton = styled.button`
  border: 3px solid #FFFCF9;
  border-radius: 20px 2px;
  background: transparent;
  font-family: Lobster;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 30px;
  color: #FFFCF9;
  transform: matrix(1, 0.01, -0.01, 1, 0, 0);
  margin-top: 25px;
  cursor: pointer;
  padding: ${props.subheading.paddingV}px ${props.subheading.paddingH}px ${props.subheading.paddingV}px ${props.subheading.paddingH}px;
  margin-top: ${props => props.marginTop}px;
  align-self: flex-end;
	@media only screen and (max-width: ${props => props.theme.breakpoints.large}px) {
		font-size: ${props.subheading.fontSize * 0.85}px;
		line-height: ${props.subheading.lineHeight * 0.85}px;
    margin-top: ${props.subheading.marginTop * 0.85}px;
    padding: ${props.subheading.paddingV * 0.85}px ${props.subheading.paddingH * 0.85}px ${props.subheading.paddingV * 0.85}px ${props.subheading.paddingH * 0.85}px !important;
	}
  @media only screen and (max-width: ${props => props.theme.breakpoints.medium}px) {
		font-size: ${props.subheading.fontSize * 0.75}px;
		line-height: ${props.subheading.lineHeight * 0.75}px;
    margin-top: ${props.subheading.marginTop * 0.75}px;
    padding: ${props.subheading.paddingV * 0.75}px ${props.subheading.paddingH * 0.85}px ${props.subheading.paddingV * 0.75}px ${props.subheading.paddingH * 0.75}px !important;
    align-self: flex-start;
	}
  @media only screen and (max-width: ${props => props.theme.breakpoints.small}px) {
    margin-top: ${props.subheading.marginTop * 0.65}px;
    align-self: flex-start;
	}
`