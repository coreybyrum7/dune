import {
  Link
} from "/build/_shared/chunk-DJDRD27Q.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-3WQCWEBV.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/Profile/Card/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Profile/Card/index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Profile/Card/index.tsx"
  );
  import.meta.hot.lastModified = "1699294773689.333";
}
var strapiUrl = `http://localhost:1337`;
var getImgUrl = ({
  url,
  username
}) => url ? `${strapiUrl}${url}` : `https://ui-avatars.com/api/?name=${username?.replace(" ", "+")}&background=2563eb&color=fff`;
var ProfileCard = ({
  profile,
  preview
}) => {
  console.log({
    profile
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { className: `profile ${preview ? "preview" : ""}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "wrapper", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "profile-pic-cont", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("figure", { className: "profile-pic img-cont", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: getImgUrl({
      url: profile.profilePic?.formats.small.url,
      username: profile.username
    }), alt: `A photo of ${profile.username}`, className: "w-full" }, void 0, false, {
      fileName: "app/components/Profile/Card/index.tsx",
      lineNumber: 54,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/components/Profile/Card/index.tsx",
      lineNumber: 53,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/Profile/Card/index.tsx",
      lineNumber: 52,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "profile-content", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "profile-header ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "username", children: profile.username }, void 0, false, {
          fileName: "app/components/Profile/Card/index.tsx",
          lineNumber: 62,
          columnNumber: 15
        }, this),
        profile.twitterUsername && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "https://twitter.com/miracleio", className: "twitter link", children: [
          "@",
          profile.twitterUsername
        ] }, void 0, true, {
          fileName: "app/components/Profile/Card/index.tsx",
          lineNumber: 65,
          columnNumber: 43
        }, this),
        profile.bio && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "bio", children: profile.bio }, void 0, false, {
          fileName: "app/components/Profile/Card/index.tsx",
          lineNumber: 70,
          columnNumber: 31
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Profile/Card/index.tsx",
        lineNumber: 61,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "links", children: [
        profile.title && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "w-icon", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "icon stroke", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" }, void 0, false, {
            fileName: "app/components/Profile/Card/index.tsx",
            lineNumber: 76,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/components/Profile/Card/index.tsx",
            lineNumber: 75,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
            " ",
            profile.title,
            " "
          ] }, void 0, true, {
            fileName: "app/components/Profile/Card/index.tsx",
            lineNumber: 78,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Profile/Card/index.tsx",
          lineNumber: 74,
          columnNumber: 33
        }, this),
        profile.websiteUrl && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "w-icon", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "icon stroke", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" }, void 0, false, {
            fileName: "app/components/Profile/Card/index.tsx",
            lineNumber: 84,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/components/Profile/Card/index.tsx",
            lineNumber: 83,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "http://miracleio.me", target: "_blank", rel: "noopener noreferrer", className: "link", children: profile.websiteUrl }, void 0, false, {
            fileName: "app/components/Profile/Card/index.tsx",
            lineNumber: 86,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Profile/Card/index.tsx",
          lineNumber: 82,
          columnNumber: 38
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Profile/Card/index.tsx",
        lineNumber: 72,
        columnNumber: 13
      }, this),
      !preview && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", { className: "grow flex items-end justify-end pt-4", children: profile?.slug && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/members/${profile?.slug}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "cta w-icon", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "View profile" }, void 0, false, {
          fileName: "app/components/Profile/Card/index.tsx",
          lineNumber: 94,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "icon stroke", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M17 8l4 4m0 0l-4 4m4-4H3" }, void 0, false, {
          fileName: "app/components/Profile/Card/index.tsx",
          lineNumber: 96,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/components/Profile/Card/index.tsx",
          lineNumber: 95,
          columnNumber: 23
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Profile/Card/index.tsx",
        lineNumber: 93,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/components/Profile/Card/index.tsx",
        lineNumber: 92,
        columnNumber: 35
      }, this) }, void 0, false, {
        fileName: "app/components/Profile/Card/index.tsx",
        lineNumber: 91,
        columnNumber: 26
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Profile/Card/index.tsx",
      lineNumber: 60,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Profile/Card/index.tsx",
    lineNumber: 51,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/Profile/Card/index.tsx",
    lineNumber: 50,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Profile/Card/index.tsx",
    lineNumber: 48,
    columnNumber: 10
  }, this);
};
_c = ProfileCard;
var Card_default = ProfileCard;
var _c;
$RefreshReg$(_c, "ProfileCard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  Card_default
};
//# sourceMappingURL=/build/_shared/chunk-6X3KF2GB.js.map
