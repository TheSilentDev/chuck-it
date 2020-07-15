import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Wrapper } from './styles';

type Types =
  | 'Audio'
  | 'BallTriangle'
  | 'Bars'
  | 'Circles'
  | 'Grid'
  | 'Hearts'
  | 'Oval'
  | 'Puff'
  | 'Rings'
  | 'TailSpin'
  | 'ThreeDots'
  | 'Watch'
  | 'RevolvingDot'
  | 'Triangle'
  | 'Plane'
  | 'MutatingDots'
  | 'None'
  | 'NotSpecified';

interface ILoader {
  type: Types;
  color?: string;
}
export default ({ type, color }: ILoader) => {
  const bg = color || 'rgba(0,0,0,0.6)';
  return (
    <Wrapper>
      <Loader type={type} color={bg} height={80} width={80} />
    </Wrapper>
  );
};
