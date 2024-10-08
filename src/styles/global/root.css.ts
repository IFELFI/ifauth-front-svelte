import { globalStyle } from '@vanilla-extract/css';

globalStyle('html', {
	width: '100%',
	height: '100%'
});

globalStyle('body', {
	display: 'flex',
	width: '100%',
	height: '100%',
	margin: 0,
	padding: 0,
	fontFamily: 'Roboto, sans-serif',
	userSelect: 'none',
	WebkitUserSelect: 'none',
	MozUserSelect: 'none',
	msUserSelect: 'none',
	backgroundColor: 'rgba(0, 0, 0, 0.05)',
	color: 'rgba(0, 0, 0, 0.8)'
	// overflow: 'hidden',
});
