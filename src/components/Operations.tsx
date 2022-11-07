import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button<{ selected?: boolean }>`
	background-color: #6c6c6c;
	border-radius: 8px;
	border: ${props => props.selected ? 'red' : 'none'} ;
	font-size: 1.5em;
`;

interface operatorProps {
	label: string;
	enterOperator: (label: string) => void;
	selectedOperation: string;
	pos: [x: number, y: number];
	width?: number;
	height?: number;
}

export default function Operator({
	label,
	enterOperator,
	selectedOperation,
	pos,
	width,
	height
}: operatorProps) {
	const styles: React.CSSProperties = {};
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
		<StyledButton style={styles} selected={selectedOperation === label} onClick={() => enterOperator(label)}>
			{label}
		</StyledButton>
	)
}
