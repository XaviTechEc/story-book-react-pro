import { FC } from 'react';
import './MyChip.styles.css';
export declare type MyChipProps = {
    label: string;
    size?: 'sm' | 'md' | 'lg';
    variant?: 'filled' | 'outlined';
};
export declare const MyChip: FC<MyChipProps>;
