import React, { useState } from 'react'
import styled from 'styled-components'
import Digit from './Digits';
import Operator from './Operations';

const Container = styled.div`
`;

const Button = styled.button`
background-color: #E48900;
border-radius: 8px;
border: none;
font-size: 1.5em;
grid-row-end: span 2;
`;

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 80px);
	grid-template-rows: 120px repeat(5, 80px);
	grid-gap: 10px;
	padding: 10px;
`;

const Display = styled.div`
	background: #fff;
	font-size: 48px;
	display: flex;
	justify-content: end;
	align-items: center;
	border-radius: 8px;
	grid-column-end: span 4;
	padding: 0 24px;
`;

type Props = {}

export default function Calculator({ }: Props) {
	const [currentValue, setCurrentValue] = useState("0")
	const [operation, setOperation] = useState("0")

	const [prevValue, setPrevValue] = useState("0")
	const [overwrite, setOverwrite] = useState(true)

	const calculate = () => {
		if (!prevValue || !operation) return currentValue;

		const curr = parseFloat(currentValue)
		const prev = parseFloat(prevValue)

		let result;
		switch (operation) {
			case "%":
				result = prev / curr;
				break;
			case "*":
				result = prev * curr;
				break;
			case "+":
				result = prev + curr;
				break;
			case "-":
				result = prev - curr;
				break;
		}
		return result
	}

	const equals = () => {
		const val = calculate()
		setCurrentValue(`${val}`)
		setPrevValue("")
		setOperation("")
		setOverwrite(true)
	}

	const clear = () => {
		setPrevValue("")
		setOperation("")
		setCurrentValue("0")
		setOverwrite(true)
	}

	const del = () => {
		setCurrentValue("0")
		setOverwrite(true)
	}

	const setDigit = (digit: string) => {
		if (currentValue[0] === "0" && digit === "0") return;
		if (currentValue.includes(".") && digit == ".") return;
		if (overwrite && digit !== ".") {
			setCurrentValue(digit)
		}
		else {


			setCurrentValue(`${currentValue}${digit}`)
		}
		setOverwrite(false)
	}

	const selectOperator = (operation: string) => {

		if (prevValue) {
			const val = calculate()
			setCurrentValue(`${val}`)
		}
		else {
			setPrevValue(currentValue)
		}
		setOperation(operation)
		setOverwrite(true)
	};

	return (
		<Container>
			<Grid>
				<Display>{currentValue}</Display>
				<Operator label="AC" enterOperator={clear} selectedOperation={operation} pos={[1, 0]} />
				<Operator label="C" enterOperator={del} selectedOperation={operation} pos={[1, 1]} />
				<Operator label="%" enterOperator={selectOperator} selectedOperation={operation} pos={[1, 2]} />
				<Operator label="*" enterOperator={selectOperator} selectedOperation={operation} pos={[1, 3]} />
				<Operator label="+" enterOperator={selectOperator} selectedOperation={operation} pos={[2, 3]} />
				<Operator label="-" enterOperator={selectOperator} selectedOperation={operation} pos={[3, 3]} />
				<Button onClick={equals}>
					=
				</Button>
				<Digit digit="." enterDigit={setDigit} pos={[5, 2]} />
				<Digit digit="9" enterDigit={setDigit} pos={[2, 2]} />
				<Digit digit="8" enterDigit={setDigit} pos={[2, 1]} />
				<Digit digit="7" enterDigit={setDigit} pos={[2, 0]} />
				<Digit digit="6" enterDigit={setDigit} pos={[3, 2]} />
				<Digit digit="5" enterDigit={setDigit} pos={[3, 1]} />
				<Digit digit="4" enterDigit={setDigit} pos={[3, 0]} />
				<Digit digit="3" enterDigit={setDigit} pos={[4, 2]} />
				<Digit digit="2" enterDigit={setDigit} pos={[4, 1]} />
				<Digit digit="1" enterDigit={setDigit} pos={[4, 0]} />
				<Digit digit="0" enterDigit={setDigit} pos={[5, 0]} width={2} />
			</Grid>
		</Container>
	)
}
