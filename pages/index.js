import { MainContainer, CenterContainer, Cover, H1, Subheading, SubheadingButton } from '../components'
import { STATIC_URL } from '../constants'

const HomePage = () => {
	return (
    <MainContainer>
      <Cover src={`${STATIC_URL}/cover/home.jpg`}>
      <CenterContainer>
        <H1 color='white'>LittleEagle & Mich</H1>
        <Subheading color='white' marginTop='25'>
          Putopisne ideje i savjeti za ljude s puno želja a malo vremena.
        </Subheading>
        <SubheadingButton>Kreni na avanturu</SubheadingButton>
      </CenterContainer>
      </Cover>
    </MainContainer>
  )
}

export default HomePage