import { MyChip } from '../../components';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
	title: 'UI/MyChip',
	component: MyChip
} as ComponentMeta<typeof MyChip>;

const Template: ComponentStory<typeof MyChip> = (args) => {
	return <MyChip {...args} />;
};

export const Small = Template.bind({});
Small.args = { label: 'Chip!', size: 'sm' };

export const Medium = Template.bind({});
Medium.args = { label: 'Chip!', size: 'md' };

export const Large = Template.bind({});
Large.args = { label: 'Chip!', size: 'lg' };

export const Outlined = Template.bind({});
Outlined.args = { label: 'Chip!', variant: 'outlined' };
