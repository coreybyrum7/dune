import {
  Card_default
} from "/build/_shared/chunk-DYRTJG6H.js";
import "/build/_shared/chunk-GDFLR6UG.js";
import {
  require_profiles
} from "/build/_shared/chunk-JUU7V43I.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  useLoaderData
} from "/build/_shared/chunk-RZPHRSLC.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-CQXNOMFL.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/members._index.tsx
var import_node = __toESM(require_node(), 1);
var import_profiles = __toESM(require_profiles(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/members._index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/members._index.tsx"
  );
  import.meta.hot.lastModified = "1699306902805.5613";
}
function Members() {
  _s();
  const {
    profiles
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "site-section profiles-section", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "section-header", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-4xl", children: "Explore profiles" }, void 0, false, {
        fileName: "app/routes/members._index.tsx",
        lineNumber: 47,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Find and connect with amazing people all over the world!" }, void 0, false, {
        fileName: "app/routes/members._index.tsx",
        lineNumber: 48,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/members._index.tsx",
      lineNumber: 46,
      columnNumber: 9
    }, this),
    profiles.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "profiles-list", children: profiles.map((profile) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "profile-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { profile, preview: false }, void 0, false, {
      fileName: "app/routes/members._index.tsx",
      lineNumber: 52,
      columnNumber: 17
    }, this) }, profile.id, false, {
      fileName: "app/routes/members._index.tsx",
      lineNumber: 51,
      columnNumber: 38
    }, this)) }, void 0, false, {
      fileName: "app/routes/members._index.tsx",
      lineNumber: 50,
      columnNumber: 32
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "No profiles yet \u{1F642}" }, void 0, false, {
      fileName: "app/routes/members._index.tsx",
      lineNumber: 54,
      columnNumber: 19
    }, this),
    " "
  ] }, void 0, true, {
    fileName: "app/routes/members._index.tsx",
    lineNumber: 45,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/members._index.tsx",
    lineNumber: 44,
    columnNumber: 10
  }, this);
}
_s(Members, "UGd6Srho9ZIz3WBO/oX8v/JIOKQ=", false, function() {
  return [useLoaderData];
});
_c = Members;
var _c;
$RefreshReg$(_c, "Members");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Members as default
};
//# sourceMappingURL=/build/routes/members._index-WEK4ZXQU.js.map
