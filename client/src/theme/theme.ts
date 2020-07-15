import { createGlobalStyle } from 'styled-components';

export interface IPalette {
	[key: string]: string;
	primary: string;
	secondary: string;
	cardShadow: string;
	textPrimary: string;
	textSecondary: string;
	light: string;
	dark: string;
}

export interface ITheme {
	theme: {
		breakpoints: {
			xsmall: string;
			small: string;
			medium: string;
			large: string;
			xLarge: string;
		};
		fontFamily: string;
		fontSize: string[];
		palette: IPalette;
	};
}

export const theme = {
	breakpoints: {
		xsmall: '425px',
		small: '768px',
		medium: '1024px',
		large: '1440px',
		xLarge: '1920px',
	},
	fontFamily: 'Poppins',
	fontSize: ['14px', '16px', '18px', '20px', '22px'],
	palette: {
		primary: '#FFF',
		secondary: '#512DA8',
		cardShadow: '#CACACA',
		textPrimary: '#FFF',
		textSecondary: '#7c7d87',
		light: '#FFFFFF',
		dark: 'rgba(0,0,0,0.1)',
	},
};

export default createGlobalStyle`
  * {
    -webkit-tap-highlight-color: transparent;
    box-sizing: border-box;
  }

  *::-webkit-scrollbar {
    width: 8px !important;
    height: 2px !important
  }

  *::-webkit-scrollbar-thumb {
    background-color: rgba(0,0,0,0.2)
  }

  *::-webkit-scrollbar-track {
    background: rgba(255,255,255,0.08)
  }

  html,
  body {
    background-color: ${({ theme }: ITheme) => theme.palette.offWhite};
    font-size: ${({ theme }: ITheme) => theme.fontSize[1]};
    font-weight: 400;
    height: 100%;
    margin: 0;
    padding: 0;
    text-rendering: optimizeLegibility;
    width: 100%;
  }

  html {
    overflow-x: hidden;
  }

  body {
    font-family: ${({ theme }: ITheme) => theme.fontFamily};
  }

`;
