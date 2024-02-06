import type { Schema, Attribute } from '@strapi/strapi';

export interface CtaButton extends Schema.Component {
  collectionName: 'components_cta_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    Text: Attribute.String;
    Link: Attribute.String;
    Color: Attribute.String;
  };
}

export interface CtaCta extends Schema.Component {
  collectionName: 'components_cta_ctas';
  info: {
    displayName: 'CTA';
  };
  attributes: {
    Heading: Attribute.String;
    Subheading: Attribute.String;
    ButtonText: Attribute.String & Attribute.Required;
    ButtonLink: Attribute.String & Attribute.Required;
  };
}

export interface ImagesingleImage extends Schema.Component {
  collectionName: 'components_imagesingle_images';
  info: {
    displayName: 'image';
    icon: 'border-style';
    description: '';
  };
  attributes: {
    Image: Attribute.Media;
    video: Attribute.Media;
  };
}

export interface PageHeadline extends Schema.Component {
  collectionName: 'components_page_headlines';
  info: {
    displayName: 'Headline';
  };
  attributes: {
    Headline: Attribute.String;
    subline: Attribute.Blocks;
  };
}

export interface PageHero extends Schema.Component {
  collectionName: 'components_page_heroes';
  info: {
    displayName: 'Hero';
    description: '';
  };
  attributes: {
    Headline: Attribute.String;
    Subline: Attribute.String;
    Button: Attribute.Component<'cta.button', true>;
  };
}

export interface QuelleQuelle extends Schema.Component {
  collectionName: 'components_quelle_quelles';
  info: {
    displayName: 'quelle';
    icon: 'asterisk';
    description: '';
  };
  attributes: {
    linkname: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    linkurl: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'cta.button': CtaButton;
      'cta.cta': CtaCta;
      'imagesingle.image': ImagesingleImage;
      'page.headline': PageHeadline;
      'page.hero': PageHero;
      'quelle.quelle': QuelleQuelle;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
    }
  }
}
