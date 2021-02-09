import styled, { css } from 'styled-components'
import { Icon, HeaderLink } from '../components'
import { useScrolledDirection, useWindow } from '../common'
import Link from 'next/link'

const Header = () => {
	const { scrollY, scrolled } = useScrolledDirection({ boundary: 0 })
	const { width } = useWindow()
	if (width > 767) {
		return (
			<HeaderContainer scrolled={scrolled} transparent={scrollY == 0}>
				<CenterContainer>
					<Link href='/'>
						<Icon src='/images/logo-text.png' {...props.logo}/>
					</Link>
					<LinksContainer>
						<HeaderLink href='/category/weekend' value='Vikend izleti'/>
						<HeaderLink href='/category/local' value='Lokalna putovanja'/>
						<HeaderLink href='/category/distant' value='Daleka putovanja'/>
						<HeaderLink href='/gallery' value='Fotogalerija'/>
						<HeaderLink href='/about' value='O nama'/>
					</LinksContainer>
				</CenterContainer>
			</HeaderContainer>
		)
	}
	return (
		<HeaderContainer scrolled={scrolled} transparent={scrollY == 0}>
			<CenterContainer>
				<Link href='/'>
					<Icon src='/images/logo-text.png' {...props.logo}/>
				</Link>
				<IconsContainer>
					<Icon src='/images/hamburger.png' {...props.hamburger}/>
				</IconsContainer>
			</CenterContainer>
		</HeaderContainer>
	)

}

const props = {
	header: {
		height: 120
	},
	logo: {
		width: 162,
		height: 56
	},
	hamburger: {
		width: 30,
		height: 18
	}
}

const HeaderContainer = styled.header`
	position: fixed;
	z-index: 100;
	top: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: ${props.header.height}px;
	background-color: ${props => props.theme.color.dark};
	transform: translateY(0);
	${props => props.scrolled && css`
		transform: translateY(-120px);
	`}
	${props => props.transparent && css`
		background-color: transparent;
	`}
	transition-property: transform, background-color;
	transition-duration: 250ms;
	transition-delay: 0s, 0.25s;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	@media only screen and (max-width: ${props => props.theme.breakpoints.medium}px) {
		height: ${props.header.height * 0.75}px;
	}
`

const CenterContainer = styled.div`
	width: 100%;
	max-width: 960px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	@media only screen and (max-width: ${props => props.theme.breakpoints.large}px) {
		padding-left: 25px;
		padding-right: 25px;
		max-width: none;
	}
`

const LinksContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;
	justify-content: space-between;
	width: max-width;
`

const IconsContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`

export default Header