import { Center, Heading } from '@chakra-ui/react';
import CenterLayout from 'layouts/CenterLayout';
import Page from 'layouts/Page';
import { NextPage } from 'next';
import 'react-multi-carousel/lib/styles.css';

const IndexPage: NextPage = () => {
  return (
    <Page layout={CenterLayout}>
      <Center>
        <Heading colorScheme="gray">Hello World</Heading>
      </Center>
    </Page>
  );
};

export default IndexPage;
