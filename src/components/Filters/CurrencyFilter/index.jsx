import * as React from 'react';
import styled from 'styled-components';


const RadioSection = styled.span`
	border: 1px solid #c8cbcd;
	flex-basis: 100%;
	font-size: 14px;
	text-align: center;
	color: #2d81f0;
	
	&:first-of-type {
		border-radius: 5px 0 0 5px;
	}
	
	&:nth-of-type(2) {
		border-left: none;
		border-right: none;
	}
	
	&:last-child {
		border-radius: 0 5px 5px 0;
	}
	
	&:hover {
		color: #2d81f0;
		border: 1px solid #2d81f0;
	}
	
	& label {
		display: block;
		padding: 6px 0;
	}
`;
/**
 * Надо подумать
 */
const FilterBody = styled.div`
	display: flex;
	
	${RadioSection}:nth-of-type(2):hover ~${RadioSection} {
		border-left: none;
	}
	&:hover {		
		& ${RadioSection}:not(:hover) {
			:first-of-type  {
				border-right: none;
			}
			:nth-of-type(2) {
				border-left: 1px solid #ccc;
			}
		 }
	 }
`;

/**
 * Стилизация компонента фильтра
 */
const StyledStopFilter = styled.div`
	padding: 15px;
	
	input:checked + ${RadioSection} {
		border-color: #2d81f0;
		background: #2d81f0;
		color: white;
	}
	

`;

/**
 * Элемент заголовка фильтра
 */
const Header = styled.div`
	color: #393939;
	font-size: 13px;
	margin-bottom: 20px;
	text-transform: uppercase;
`;

/**
 * Фильтр переключения валюты предложений
 */
export class CurrencyFilter extends React.PureComponent {
	TITLE = 'Валюта';

	onCurrencyChange = ({currentTarget: {value}}) => {
		this.props.changeCurrency(value);
	};

	render() {
		const {
			selectedCurrency = 'RUB',
			changeCurrency
		} = this.props;
		console.log(this.props);

		const isRub = selectedCurrency === 'RUB';
		const isUsd= selectedCurrency === 'USD';
		const isEur = selectedCurrency === 'EUR';

		return (
			<StyledStopFilter>
				<Header>
					{this.TITLE}
				</Header>
				<FilterBody>
					<input
						id='rubCurrency'
						style={{display: 'none'}}
						name='currency'
						value='RUB'
						type='radio'
						checked={isUsd}
						onChange={this.onCurrencyChange}
					/>
					<RadioSection>
						<label htmlFor='rubCurrency'>
							RUB
						</label>
					</RadioSection>
					<input
						id='usdCurrency'
						style={{display: 'none'}}
						name='currency'
						value='USD'
						type='radio'
						checked={isUsd}
						onChange={this.onCurrencyChange}
					/>
					<RadioSection>
						<label htmlFor="usdCurrency">
							USD
						</label>
					</RadioSection>
					<input
						id='eurCurrency'
						style={{display: 'none'}}
						name='currency'
						value='EUR'
						type='radio'
						checked={isEur}
						onChange={this.onCurrencyChange}
					/>
					<RadioSection>
						<label htmlFor="eurCurrency">
							EUR
						</label>
					</RadioSection>
				</FilterBody>
			</StyledStopFilter>
		);
	}
}
;
