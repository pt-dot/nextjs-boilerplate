import React from 'react';
import { Flex, Center } from '@chakra-ui/react';

const CenterLayout: React.FC = ({ children }) => {
  return <Center h="100vh">{children}</Center>;
};

export default CenterLayout;
