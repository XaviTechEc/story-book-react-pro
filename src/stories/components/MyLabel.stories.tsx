import { MyLabel, MyLabelProps } from '../../components';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
	title: 'UI/MyLabel',
	component: MyLabel,
	argTypes: {
		size: { control: 'select', options: ['normal', 'h1'] },
		color: { control: 'select' }, // brings all the options
		fontColor: { control: 'color' }
	}
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = (args) => (
	<MyLabel {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
	size: 'normal',
	label: 'Label Example',
	allCaps: false
};

export const AllCaps = Template.bind({});
AllCaps.args = {
	size: 'normal',
	allCaps: true
};

export const Secondary = Template.bind({});
Secondary.args = {
	size: 'normal',
	color: 'secondary' // primary | secondary | tertiary
};

export const Tertiary = Template.bind({});
Secondary.args = {
	size: 'normal',
	color: 'tertiary'
};

export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
	size: 'h1',
	fontColor: '#5517ac'
};

// CustomFontColor
// fontColor: dynamic
// size h1
