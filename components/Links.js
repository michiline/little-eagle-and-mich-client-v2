import Link from 'next/link'
import styled from 'styled-components'

export const HeaderLink = ({ href, value }) => {
	return (
		<Link href={href} passHref>
			<SLink>{value}</SLink>
		</Link>
	)
}

const fontSize = {
	link: 12
}

const lineHeight = {
	link: 15
}

const SLink = styled.a`
	text-decoration: none;
	font-family: 'Mulish';
	font-style: normal;
	font-weight: bold;
	font-size: ${fontSize.link}px;
	line-height: ${lineHeight.link}px;
	text-transform: uppercase;
	color: #FFFFFF;
	text-shadow: 0px 0px 12px rgba(1,52,8,0.8);
	margin-left: 30px;
	@media only screen and (max-width: ${props => props.theme.breakpoints.large}px) {
		margin-left: 20px;
		font-size: ${fontSize.link * 0.9}px;
		line-height: ${lineHeight.link * 0.9}px;
	}
	&:first-of-type {
		margin-left: 0;
	}
`