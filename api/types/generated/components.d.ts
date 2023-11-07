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

export interface OrganismsSection extends Schema.Component {
  collectionName: 'components_organisms_sections';
  info: {
    displayName: 'Section';
    icon: 'dashboard';
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
      'organisms.section': OrganismsSection;
    }
  }
}
