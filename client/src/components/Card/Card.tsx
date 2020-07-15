import React from 'react';
import { Wrapper } from './styles';

interface IProps extends React.HTMLAttributes<HTMLElement> {
	children?: any;
}
const Card: React.FC<IProps> = ({ children, ...props }) => (
	<Wrapper {...props}>{children}</Wrapper>
);

export default Card;
