import { Box } from '@rocket.chat/fuselage';
import React, { ComponentProps, FC } from 'react';

const Label: FC<ComponentProps<typeof Box>> = (props) => <Box mb='x8' fontScale='p4' color='default' {...props} />;

export default Label;
