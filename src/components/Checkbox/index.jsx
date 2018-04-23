import * as React from 'react';
import styled from 'styled-components';
import tick from './assets/tick.svg';

/**
 * Квадрадтик чекбокса
 */
const Box = styled.div`
	border: 1px solid #0cb2e1;
	border-radius: 3px;
	cursor: pointer
	display: inline-block;
	height: 19px;
	margin-right: 10px;
	width: 19px;
`;

/**
 * Лейбл(текст рядом с чекбоксом)
 */
const Label = styled.span`
	color: #393939;
	display: inline-flex;
	font-size: 13px;
	line-height: 21px;
`;

/**
 * Текст `только` для выбора только этой опции
 */
const OnlyThisCheckbox = styled.span`
	display: none;
	cursor: pointer;
	color: #0cb2e1;
	line-height: 21px;
	font-weight: 100;

	&:hover {
		color: #ff9d1b;
	}
	&:active {
		color: #ff761c;
	}
`;

/**
 * Общий вид секции чекбокса
 */
const CheckboxLayout = styled.div`
	display: flex;
	font-size: 13px;
	justify-content: space-between;
	line-height: 30px;

	input:checked + ${Box} {
		background: url(${tick});
		background-repeat: no-repeat;
		background-position: 50% 50%;
	}
	
	&:hover ${OnlyThisCheckbox}{
		display: inline;
	}
`;

/**
 * Чекбок
 * @param {String|Number} value значение чекбокса
 * @param {Boolean} checked выбран ли он
 * @param (Function} onChange обработчик изменения
 * @param (String} label Строка label'a
 * @param {Object} rest остальные параметры
 * @constructor
 */
const Checkbox = ({value, checked, onChange, label, ...rest}) => (
	<CheckboxLayout {...rest}>
		<label>
			<Label>
				<input
					style={{display: 'none'}}
					type="checkbox"
					value={value}
					checked={checked}
					onChange={onChange}
				/>
				<Box />
				{label}
			</Label>
		</label>
		<OnlyThisCheckbox onClick={onChange} data-id={value}>
			только
		</OnlyThisCheckbox>
	</CheckboxLayout>
);

export {Checkbox};
