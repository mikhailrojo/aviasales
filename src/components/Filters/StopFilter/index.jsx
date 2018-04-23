import * as React from 'react';
import styled from 'styled-components';

import {Checkbox} from '../../../components';

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
 * Стилизация компонента фильтра
 */
const StyledStopFilter = styled.div`
	padding: 15px;
`;

/**
 * Компонент с фильтром предложений билетов по количеству пересадок
 */
export class StopFilter extends React.PureComponent {
	/**
	 * Возмможные значение чекбоксов
	 * @type {{value: string, label:string}[]}
	 */
	checkBoxOptions = [
		{
			value: 'all',
			label: 'Все'
		},
		{
			value: '0',
			label: 'Без пересадок'
		},
		{
			value: '1',
			label: '1 пересадка'
		},
		{
			value: '2',
			label: '2 пересадки'
		},
		{
			value: '3',
			label: '3 пересадки'
		}
	];

	/**
	 * Название секции
	 * @type {string}
	 */
	TITLE = 'Количество пересадок';

	/**
	 * Возможные контролы переключения
	 * либо input[checkbox], либо span с текстом 'только'
	 * @type {{SPAN: string, INPUT: string}}
	 */
	controls = {
		SPAN: 'SPAN',
		INPUT: 'INPUT'
	};

	/**
	 * Обработчик событий
	 * @param currentTarget
	 */
	onChangeFn = ({currentTarget}) => {
		const {tagName} = currentTarget;
		const {filterByStops} = this.props;

		if (tagName === this.controls.SPAN) {
			const value = currentTarget.dataset.id;
			return filterByStops({
				value: value === 'all' ? 'all' : parseInt(value, 10),
				checked: true,
				onlyThisOption: true
			});
		} else  if (tagName === this.controls.INPUT) {
			const {value, checked} = currentTarget;
			return filterByStops({
				value: value === 'all' ? 'all' : parseInt(value, 10),
				checked
			});
		}
	};

	/**
	 * Возвращает все чекбоксы
	 * в состояниях соответсвующих стору
	 * @returns {JSX[]}
	 */
	getCheckboxes = () => {
		const {chosenStops} = this.props;

		return this.checkBoxOptions.map((option, index) => {
			const {value, label} = option;
			const areAllSelected = chosenStops.every(i => i);
			const isVisible = chosenStops[index] === void 0 ? 'none': 'flex';

			return (
				<Checkbox
					style={{display: isVisible}}
					key={index}
					value= {value}
					onChange={this.onChangeFn}
					label={label}
					checked={value === 'all' ? areAllSelected : chosenStops[parseInt(value, 10)] || false}
				/>
			);
		});
	};

	render() {
		return (
			<StyledStopFilter>
				<Header>
					{this.TITLE}
				</Header>
				{this.getCheckboxes()}
			</StyledStopFilter>
		);
	}
}