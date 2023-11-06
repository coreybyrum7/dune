import {
  Form_default
} from "/build/_shared/chunk-WATNCGCT.js";
import {
  require_session
} from "/build/_shared/chunk-V22J52NZ.js";
import {
  Card_default
} from "/build/_shared/chunk-6X3KF2GB.js";
import {
  require_profiles
} from "/build/_shared/chunk-JUU7V43I.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  useActionData,
  useLoaderData
} from "/build/_shared/chunk-DJDRD27Q.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-3WQCWEBV.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/members.$slug.tsx
var import_node = __toESM(require_node(), 1);
var import_react2 = __toESM(require_react(), 1);
var import_profiles = __toESM(require_profiles(), 1);
var import_session = __toESM(require_session(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/members.$slug.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/members.$slug.tsx"
  );
  import.meta.hot.lastModified = "1699290545451.8562";
}
var Profile = () => {
  _s();
  const {
    profile,
    userData
  } = useLoaderData();
  const errors = useActionData();
  const [profileData, setprofileData] = (0, import_react2.useState)(profile);
  const [isEditing, setIsEditing] = (0, import_react2.useState)(false);
  console.log({
    userData,
    profile
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "site-section", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "wrapper flex items-center py-16 min-h-[calc(100vh-4rem)]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "profile-cont w-full max-w-5xl m-auto", children: [
    profileData ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { profile: profileData, preview: true }, void 0, false, {
        fileName: "app/routes/members.$slug.tsx",
        lineNumber: 126,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "actions", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "action", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "cta w-icon", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "icon stroke", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" }, void 0, false, {
            fileName: "app/routes/members.$slug.tsx",
            lineNumber: 133,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/routes/members.$slug.tsx",
            lineNumber: 132,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Share" }, void 0, false, {
            fileName: "app/routes/members.$slug.tsx",
            lineNumber: 135,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/members.$slug.tsx",
          lineNumber: 131,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/members.$slug.tsx",
          lineNumber: 130,
          columnNumber: 17
        }, this),
        userData?.user?.id == profile.id && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "action", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setIsEditing(!isEditing), className: "cta w-icon", children: [
          !isEditing ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "icon stroke", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" }, void 0, false, {
            fileName: "app/routes/members.$slug.tsx",
            lineNumber: 141,
            columnNumber: 27
          }, this) }, void 0, false, {
            fileName: "app/routes/members.$slug.tsx",
            lineNumber: 140,
            columnNumber: 37
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "icon stroke", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" }, void 0, false, {
            fileName: "app/routes/members.$slug.tsx",
            lineNumber: 143,
            columnNumber: 27
          }, this) }, void 0, false, {
            fileName: "app/routes/members.$slug.tsx",
            lineNumber: 142,
            columnNumber: 34
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: !isEditing ? "Edit" : "Cancel" }, void 0, false, {
            fileName: "app/routes/members.$slug.tsx",
            lineNumber: 146,
            columnNumber: 23
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/members.$slug.tsx",
          lineNumber: 139,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/routes/members.$slug.tsx",
          lineNumber: 138,
          columnNumber: 54
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/members.$slug.tsx",
        lineNumber: 129,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/members.$slug.tsx",
      lineNumber: 124,
      columnNumber: 26
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-center", children: "Oops, that profile doesn't exist... yet" }, void 0, false, {
      fileName: "app/routes/members.$slug.tsx",
      lineNumber: 150,
      columnNumber: 19
    }, this),
    userData?.user?.id == profile?.id && isEditing && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default, { errors, profile, action: "edit", onModifyData: (value) => setprofileData(value) }, void 0, false, {
      fileName: "app/routes/members.$slug.tsx",
      lineNumber: 153,
      columnNumber: 62
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/members.$slug.tsx",
    lineNumber: 123,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/members.$slug.tsx",
    lineNumber: 122,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/members.$slug.tsx",
    lineNumber: 121,
    columnNumber: 10
  }, this);
};
_s(Profile, "Fco0lYP9K9dZXr12qFYkDSWRFbE=", false, function() {
  return [useLoaderData, useActionData];
});
_c = Profile;
var members_slug_default = Profile;
var _c;
$RefreshReg$(_c, "Profile");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  members_slug_default as default
};
//# sourceMappingURL=/build/routes/members.$slug-QABXYT4K.js.map
