import * as React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import 'moment/locale/ru';

import plane from './assets/plane.svg';

moment.locale('fr');

/**
 * Константа с размером текста маленького размера
 * @type {string}
 */
const SMALL_FONT = '11px';

/**
 * Константа с цветом светло цвета
 * @type {string}
 */
const LIGHT_COLOR = `rgb(200, 203, 205)`;

/**
 * Константа с цветом темного текста
 * @type {string}
 */
const DARK_COLOR = 'rgb(57,57,57)';

/**
 * Стилезованная правая секция предложения
 */
const StyledRightOfferPart = styled.div`
	display: flex;
	justify-content: center;
	padding-top: 28px;
	width: 366px;
`;

/**
 * Блок с временем
 */
const Time = styled.div`
	color: ${DARK_COLOR};
	font-size: 27px;
	line-height: 27px;
	margin-bottom: 10px;
`;

/**
 * Блок с названием города
 */
const City = styled.div`
	color: ${DARK_COLOR};
	font-size: ${SMALL_FONT};
	line-height: 20px;
`;

/**
 * Блок с датой
 */
const Date = styled.div`
	color: ${LIGHT_COLOR};
	font-size: ${SMALL_FONT};
	line-height: 15px;
`;

/**
 * Секуция с самолетом и линией его пути
 */
const PathAndPlane = styled.div`
	display: flex;
`;

/**
 * Блок с линией показывающей путь самолета
 */
const Path = styled.div`
	border-bottom: 1px solid ${LIGHT_COLOR};
	height: 6px;
	width: 100%;
`;

/**
 * Блок с иконокой самолета
 */
const Plane = styled.div`
	background-image: url(${plane});
	background-repeat: no-repeat;
	height: 14px;
	width: 14px;
`;

/**
 * Секция между пунктом вылета и прилета
 * показывает кол-во персадок
 */
const ThroughSection = styled.div`
	color: ${LIGHT_COLOR};
	font-size: 8px;
	padding: 0 10px;
	text-align: center;
	text-transform: uppercase;
	width: 110px;
`;

/**
 * Правая часть предложения билета
 * с детальной информацией о полете
 */
class RightOfferPart extends React.PureComponent {
	getFormattedDate(date) {
		const momentDate = moment(date, 'DD.MM.YY');
		const dateWithoutWeek = momentDate.format('D MMM YYYY')
		const weekDay = momentDate.format('ddd');
		const capitalizedWeekDay = weekDay.charAt(0).toUpperCase() + weekDay.slice(1);

		return `${dateWithoutWeek}, ${capitalizedWeekDay}`;
	}

	getPluralOfStops(numberOfStops) {
		switch(numberOfStops){
			case 0: {
				return 'прямой рейс';
			}
			case 1: {
				return '1 пересадка';
			}
			case 2:
			case 3:
			case 4: {
				return `${numberOfStops} пересадки`;
			}
			default: {
				return `${numberOfStops} пересадок`;
			}
		}
	}


	render() {
		const {
			origin,
			origin_name,
			destination,
			destination_name,
			departure_date,
			departure_time,
			arrival_date,
			arrival_time,
			stops
		} = this.props;

		return (
			<StyledRightOfferPart >
				<div>
					<Time>{departure_time}</Time>
					<City>{`${origin} ${origin_name}`}</City>
					<Date>{this.getFormattedDate(departure_date)}</Date>
				</div>
				<ThroughSection>
					{this.getPluralOfStops(stops)}
					<PathAndPlane>
						<Path/>
						<Plane/>
					</PathAndPlane>
				</ThroughSection>

				<div>
					<Time>{arrival_time}</Time>
					<City>{`${destination_name} ${destination}`}</City>
					<Date>{this.getFormattedDate(arrival_date)}</Date>
				</div>
			</StyledRightOfferPart>
		);
	}
}

export {RightOfferPart};