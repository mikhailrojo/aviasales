import * as React from 'react';
import styled from 'styled-components';

/**
 * Секция блока с радио-инпутом выбора валюты
 */
const RadioSection = styled.div`
	border: 1px solid #c8cbcd;
	flex-basis: 100%;
	font-size: 14px;
	text-align: center;
	color: #2d81f0;
	position: relative;
	
	&:first-of-type {
		border-radius: 5px 0 0 5px;
	}
	
	&:not(:first-of-type) {
		border-left: none;
	}
	
	&:not(:last-of-type) {
		border-right:none;
	}
	
	&:last-child {
		border-radius: 0 5px 5px 0;
	}
	
	&:not(:first-of-type):before {
		content: '';
		display: block;
		width: 1px;
		height: calc(100% + 2px);
		background-color: #c8cbcd;
		position: absolute;
		left: 0;
		top: -1px;
	}
	
	&:hover:before,
	&:hover ~ div:nth-of-type(-n + 2):before,
	&:nth-of-type(2):hover ~ div:before {
		background-color: #2d81f0;
	}
	
	
	&:hover {
		color: #2d81f0;
		border-color: #2d81f0;
	}
	
	& label {
		cursor: pointer;
		display: block;
		padding: 6px 0;
	}
`;
/**
 * Тело фильтра по валютам
 */
const FilterBody = styled.div`
	display: flex;
	position: relative;
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
		
		&:before,
		& ~ div:nth-of-type(-n + 2):before,
		&:nth-of-type(2) ~ div:before {
			background-color: #2d81f0;
		}
	}
`;

/**
 * Элемент заголовка фильтра
 */
const Header = styled.div`
	color: #393939;
	font-size: 13px;
	margin-bottom: 20px;
	text-align: left;
	text-transform: uppercase;
`;

/**
 * Фильтр переключения валюты предложений
 */
export class CurrencyFilter extends React.PureComponent {
	/**
	 * Назвавание секции
	 * @type {string}
	 */
	TITLE = 'Валюта';

	/**
	 * Достает значение радио-инпута и передает в Action creator
	 * @param {String} value
	 */
	onCurrencyChange = ({currentTarget: {value}}) => {
		this.props.changeCurrency(value);
	};

	render() {
		const {selectedCurrency} = this.props;

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
						checked={isRub}
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
