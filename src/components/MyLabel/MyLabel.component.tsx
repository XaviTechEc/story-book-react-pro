import './MyLabel.styles.css';

export interface MyLabelProps {
	/**
	 * Text to show in the label
	 */
	label: string;
	/**
	 * Custom Font size applied to the label
	 */
	size?: 'normal' | 'h1' | 'h2' | 'h3';
	/**
	 * Capitalize all letters
	 */
	allCaps?: boolean;
	/**
	 * Change text color
	 */
	color?: 'primary' | 'secondary' | 'tertiary';

	/**
	 * Adds a color to the font
	 */

	fontColor?: string;
}

/**
 * Basic Label UI component for user interaction
 */
export const MyLabel = ({
	label = 'No Label',
	size = 'normal',
	allCaps = false,
	color = 'primary',
	fontColor
}: MyLabelProps) => {
	return (
		<span
			className={`${[size, `text-${color}`].join(' ')}`}
			style={{
				textTransform: allCaps ? 'uppercase' : 'none',
				color: fontColor || ''
			}}
		>
			{label}
		</span>
	);
};
