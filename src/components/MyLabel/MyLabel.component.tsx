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
}

/**
 * Basic Label UI component for user interaction
 */
export const MyLabel = ({
	label = 'No Label',
	size = 'normal'
}: MyLabelProps) => {
	return <span className={`${size}`}>{label}</span>;
};
