import { SingleMedia } from "../types";

// blog data type
export type BlogPost = {
  id?: number;
  title?: string | undefined;
  excerpt?: string | undefined;
  hero?: SingleMedia | undefined;
  context?: string | any;
  createdAt?: string | undefined;
  updatedAt?: string | undefined;
  slug?: string;
};
