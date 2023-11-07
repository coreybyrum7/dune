// type for media format
export type Format = {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | undefined;
  width: number;
  height: number;
  size: number;
  url: string;
};

// type for media object
export type SingleMedia = {
  id: number;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: {
    thumbnail: Format;
    medium: Format;
    small: Format;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | undefined;
  provider: string;
  provider_metadata: string | undefined;
  createdAt: string;
  updatedAt: string;
};
