/* eslint-disable react/no-array-index-key */

import * as React from 'react';
import Head from 'next/head';
import config from 'config';

interface PageWrapperProps {
  title?: string;
  pageTitle?: string;
  description?: string;
  layout: React.ComponentType;
}

const defaultTitle = 'App Name';
const defaultDescription = 'App description';
const defaultKeywords = 'App Keywords ';

const PageWrapper: React.FC<PageWrapperProps> = ({
  children,
  title = defaultTitle,
  description = defaultDescription,
  layout: Layout,
}) => {
  const noHTMLTagDescription = description.replace(/<\/?[^>]+(>|$)/g, ``);
  const metaAttributes = [
    {
      name: `description`,
      content: noHTMLTagDescription,
    },
    {
      name: 'keywords',
      content: defaultKeywords,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: noHTMLTagDescription,
    },
    // {
    //   property: `og:image`,
    //   content: `${config.baseURL}/filename.png`,
    // },
    {
      property: `og:image:width`,
      content: `192`,
    },
    {
      property: `og:image:height`,
      content: `192`,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: noHTMLTagDescription,
    },
  ];

  return (
    <>
      <Head>
        <title>{title}</title>
        {metaAttributes.map((attributes) => (
          <meta key={attributes.name || attributes.property} {...attributes} />
        ))}
      </Head>
      <Layout>{children}</Layout>
    </>
  );
};

export default PageWrapper;
