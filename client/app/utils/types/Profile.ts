import { SingleMedia } from "../types";

// profile data type
export type Profile = {
  id?: number;
  username?: string;
  email?: string | undefined;
  provider?: string | undefined;
  confirmed?: boolean;
  blocked?: boolean;
  createdAt?: string | undefined;
  updatedAt?: string | undefined;
  twitterUsername?: string | undefined;
  websiteUrl?: string | undefined;
  title?: string;
  bio?: string | undefined;
  color?: string | undefined;
  profilePic?: SingleMedia | undefined;
  slug?: string;
  error?: any;
};

// profile form data type
export type ProfileData = {
  slug?: string | null;
  id?: string | File | null;
  username?: string | File | null;
  twitterUsername?: string | File | null;
  bio?: string | File | null;
  title?: string | File | null;
  websiteUrl?: string | File | null;
  // email: string | File | null
  // password: string | File | null
};

// type for profile form props
export type ProfileFormProps = {
  profile?: Profile | undefined;
  onModifyData?: Function | undefined;
  action: string;
  errors?: any;
};

// action data type
export type LoginActionData =
  | {
      email?: string | File | null;
      identifier?: string | File | null;
      password: string | File | null;
    }
  | undefined;

export type RegisterActionData = LoginActionData & ProfileData;

export type ErrorResponse = {
  data?: object;
  error?: {
    status: number;
    name: string;
    message: string;
    details: object;
  };
};

export type LoginResponse = ErrorResponse & {
  jwt?: string;
  user?: Profile;
};

export type LoginErrorResponse =
  | {
      identifier?: string;
      password?: string;
      ValidationError?: string;
    }
  | unknown;
