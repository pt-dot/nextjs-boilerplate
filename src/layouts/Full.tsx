import React from 'react';
import { Flex } from '@chakra-ui/react';

const FullLayout: React.FC = ({ children }) => {
  return (
    <Flex direction="column" minHeight="full">
      <Flex grow={1} flexWrap="wrap">
        <Flex direction="column" overflow="auto" flex={1}>
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default FullLayout;
