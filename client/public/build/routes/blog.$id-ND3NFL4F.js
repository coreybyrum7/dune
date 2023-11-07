import {
  require_blog
} from "/build/_shared/chunk-SFZDIPEC.js";
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

// app/routes/blog.$id.tsx
var import_node = __toESM(require_node(), 1);
var import_blog = __toESM(require_blog(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/blog.$id.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/blog.$id.tsx"
  );
  import.meta.hot.lastModified = "1699311674795.7493";
}
var BlogPost = () => {
  _s();
  const {
    post: {
      attributes
    }
  } = useLoaderData();
  console.log(attributes);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "site-section", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "wrapper flex items-center py-16 min-h-[calc(100vh-4rem)]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "profile-cont w-full max-w-5xl m-auto", children: attributes ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: attributes.title }, void 0, false, {
    fileName: "app/routes/blog.$id.tsx",
    lineNumber: 45,
    columnNumber: 29
  }, this) }, void 0, false, {
    fileName: "app/routes/blog.$id.tsx",
    lineNumber: 44,
    columnNumber: 35
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-center", children: "Oops, that post doesn't exist... yet" }, void 0, false, {
    fileName: "app/routes/blog.$id.tsx",
    lineNumber: 46,
    columnNumber: 31
  }, this) }, void 0, false, {
    fileName: "app/routes/blog.$id.tsx",
    lineNumber: 43,
    columnNumber: 17
  }, this) }, void 0, false, {
    fileName: "app/routes/blog.$id.tsx",
    lineNumber: 42,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/blog.$id.tsx",
    lineNumber: 41,
    columnNumber: 10
  }, this);
};
_s(BlogPost, "UGd6Srho9ZIz3WBO/oX8v/JIOKQ=", false, function() {
  return [useLoaderData];
});
_c = BlogPost;
var blog_id_default = BlogPost;
var _c;
$RefreshReg$(_c, "BlogPost");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  blog_id_default as default
};
//# sourceMappingURL=/build/routes/blog.$id-ND3NFL4F.js.map
