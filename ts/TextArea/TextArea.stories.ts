import type {Meta,StoryObj} from '@storybook/react';
import { TextAreaProps } from './TextArea.types';
import TextArea from './TextArea';


const meta:Meta<typeof TextArea>={
component:TextArea
}

export default meta;

type story=StoryObj<typeof TextArea>;

export const TextAreaInput:Story={
args:{
    rows:'2',
    placeholder:'Enter the value',
    value:'test'
}
}
