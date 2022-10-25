import React from 'react';

import SiteOrigin from '.';

export default {
  title: 'Components/UI/SiteOrigin',
  id: __filename,
  component: SiteOrigin,
  argTypes: {
    siteOrigin: {
      control: 'text',
    },
    iconSrc: {
      control: 'text',
    },
    iconName: {
      control: 'text',
    },
    title: {
      control: 'text',
    },
    chip: {
      control: 'boolean',
    },
  },
};

export const DefaultStory = (args) => <SiteOrigin {...args} />;

DefaultStory.storyName = 'Default';

DefaultStory.args = {
  siteOrigin: 'https://dynochain.io',
  title: 'https://dynochain.io',
  iconName: 'DynoChain',
  iconSrc: './metamark.svg',
  chip: true,
};
