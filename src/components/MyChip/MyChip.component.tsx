import React, { FC } from 'react';

import './MyChip.styles.css';

export type MyChipProps = {
	label: string;
	size?: 'sm' | 'md' | 'lg';
	variant?: 'filled' | 'outlined';
};

export const MyChip: FC<MyChipProps> = ({
	label,
	size = 'md',
	variant = 'filled'
}) => {
	return (
		<span
			className={`${[
				'storybook-mychip',
				`storybook-mychip--${size}`,
				`storybook-mychip--${variant}`
			].join(' ')}`}
		>
			{label}
		</span>
	);
};
