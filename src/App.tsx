import styled from 'styled-components';
import Calculator from './components/Calculator'

const Container = styled.div`
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 98vh;
	width: 100%;
	background: #323232;
`;

function App() {


	return (
		<Container>
			<Calculator />
		</Container>

	)
}

export default App
