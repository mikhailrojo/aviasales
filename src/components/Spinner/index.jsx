import styled, {keyframes} from 'styled-components';

/**
 * Анимация вращения
 */
const spinAnimation = keyframes`
	to {
		transform: rotate(360deg);
	}
`;

/**
 * Блок крутящегося спиннера
 */
const Spinner = styled.div`
	animation: ${spinAnimation} 1s ease-in-out infinite;
	border: 3px solid rgba(255,255,255,.3);
	border-radius: 50%;
	border-top-color: #0cb2e1;;
	display: inline-block;
	height: 50px;
	margin-top: 15px;
	width: 50px;
`;

export {Spinner};
