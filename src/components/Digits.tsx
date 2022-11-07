import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
	background-color: #E48900;
	border-radius: 8px;
	border: none;
	font-size: 1.5em;
`;

interface digitProps {
	digit: string;
	enterDigit: (digit: string) => void;
	pos: [x: number, y: number];
	width?: number;
	height?: number;
}

export default function Digit({
	digit,
	enterDigit,
	pos,
	width,
	height
}: digitProps) {
	const styles:React.CSSProperties = {};
	if (pos) {
		styles.gridRowStart = pos[0] + 1
		styles.gridColumnStart = pos[1] + 1;
	}
	if (width) {
		styles.gridColumnEnd = `span ${width}`
	}
	if (height) {
		styles.gridRowEnd = `span ${height}`
	}
	return (
		<StyledButton style={styles} onClick={() => enterDigit(digit)}>
			{digit}
		</StyledButton>
	)
}
