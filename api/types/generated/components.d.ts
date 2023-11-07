import type { Schema, Attribute } from '@strapi/strapi';

export interface AtomsButton extends Schema.Component {
  collectionName: 'components_atoms_buttons';
  info: {
    displayName: 'Button';
    icon: 'magic';
  };
  attributes: {
    text: Attribute.String;
  };
}

export interface MoleculesCta extends Schema.Component {
  collectionName: 'components_molecules_ctas';
  info: {
    displayName: 'CTA';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.String;
    Button: Attribute.Component<'atoms.button', true>;
  };
}

export interface MoleculesMeta extends Schema.Component {
  collectionName: 'components_molecules_metas';
  info: {
    displayName: 'Meta';
  };
  attributes: {
    Name: Attribute.String;
    Content: Attribute.String;
  };
}

export interface OrganismsSection extends Schema.Component {
  collectionName: 'components_organisms_sections';
  info: {
    displayName: 'Grid';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    Width: Attribute.Enumeration<['Default', 'Full', 'Narrow']> &
      Attribute.DefaultTo<'Default'>;
    CTAs: Attribute.Relation<'organisms.section', 'oneToMany', 'api::cta.cta'>;
  };
}

export interface OrganismsSeo extends Schema.Component {
  collectionName: 'components_organisms_seos';
  info: {
    displayName: 'Seo';
  };
  attributes: {
    MetaTitle: Attribute.String;
    MetaDescription: Attribute.Text;
    Meta: Attribute.Component<'molecules.meta', true>;
    PreventIndexing: Attribute.Boolean;
    StructuredData: Attribute.JSON;
    MetaImage: Attribute.Media;
  };
}

export interface PageSection extends Schema.Component {
  collectionName: 'components_page_sections';
  info: {
    displayName: 'Section';
  };
  attributes: {
    Width: Attribute.Enumeration<['Default', 'Full', 'Narrow']> &
      Attribute.DefaultTo<'Default'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'atoms.button': AtomsButton;
      'molecules.cta': MoleculesCta;
      'molecules.meta': MoleculesMeta;
      'organisms.section': OrganismsSection;
      'organisms.seo': OrganismsSeo;
      'page.section': PageSection;
    }
  }
}
