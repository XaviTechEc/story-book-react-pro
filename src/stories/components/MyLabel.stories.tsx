import { MyLabel, MyLabelProps } from '../../components';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
	title: 'UI/MyLabel',
	component: MyLabel
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = (args) => (
	<MyLabel {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
	size: 'normal',
	label: 'Label Example'
};

export const AllCaps = Template.bind({});

export const Secondary = Template.bind({});
