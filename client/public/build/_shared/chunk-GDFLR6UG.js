import {
  createHotContext
} from "/build/_shared/chunk-CQXNOMFL.js";

// app/utils/shared/index.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/utils/shared/index.ts"
  );
  import.meta.hot.lastModified = "1699307459251.0503";
}
var strapiUrl = `http://localhost:1337`;
var getImgUrl = ({
  url,
  username
}) => url ? `${strapiUrl}${url}` : `https://ui-avatars.com/api/?name=${username?.replace(
  " ",
  "+"
)}&background=2563eb&color=fff`;

export {
  strapiUrl,
  getImgUrl
};
//# sourceMappingURL=/build/_shared/chunk-GDFLR6UG.js.map
