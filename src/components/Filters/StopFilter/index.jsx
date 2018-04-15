import * as React from 'react';
import styled from 'styled-components';

const Header = styled.div`
	text-transform: uppercase;
	color: #aaa;
`;

const StyledStopFilter = styled.div`
	padding: 10px;
`;


const StopFilter = () => (
	<StyledStopFilter>
	<Header>
		Количество пересадок
	</Header>
		<div>
			<label>
				<input
					type='checkbox'
					value="1"
					checked
					onChange={() => console.log('click')}
				/>
				1 пересадка
			</label>
		</div>
	</StyledStopFilter>
);

export {StopFilter};