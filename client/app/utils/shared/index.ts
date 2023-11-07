// strapi url from environment variables
export const strapiUrl = `http://localhost:1337`;

// helper function to get image url for user
// we're also using https://ui-avatars.com api to generate images
// the function appends the image url returned
export const getImgUrl = ({
  url,
  username,
}: {
  url: string | undefined;
  username: string | undefined | "A+N";
}) =>
  url
    ? `${strapiUrl}${url}`
    : `https://ui-avatars.com/api/?name=${username?.replace(
        " ",
        "+"
      )}&background=2563eb&color=fff`;
