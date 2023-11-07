import {
  require_blog
} from "/build/_shared/chunk-SFZDIPEC.js";
import {
  strapiUrl
} from "/build/_shared/chunk-GDFLR6UG.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Link,
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

// app/routes/blog.all.tsx
var import_node = __toESM(require_node(), 1);

// app/components/Blog/Card/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Blog/Card/index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Blog/Card/index.tsx"
  );
  import.meta.hot.lastModified = "1699310968150.5073";
}
function BlogCard({
  post
}) {
  let data = post.attributes;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "card", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "card-content", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "card-img", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: `${strapiUrl}${data.hero.data.attributes.url}`, alt: data.hero.data.attributes.alternativeText }, void 0, false, {
      fileName: "app/components/Blog/Card/index.tsx",
      lineNumber: 30,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/Blog/Card/index.tsx",
      lineNumber: 29,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "card-details", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/blog/${post.id}`, className: "card-title", children: data.title }, void 0, false, {
        fileName: "app/components/Blog/Card/index.tsx",
        lineNumber: 34,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "card-excerpt", children: data.excerpt }, void 0, false, {
        fileName: "app/components/Blog/Card/index.tsx",
        lineNumber: 38,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Blog/Card/index.tsx",
      lineNumber: 32,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Blog/Card/index.tsx",
    lineNumber: 28,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Blog/Card/index.tsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
}
_c = BlogCard;
var _c;
$RefreshReg$(_c, "BlogCard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/blog.all.tsx
var import_blog = __toESM(require_blog(), 1);
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/blog.all.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/blog.all.tsx"
  );
  import.meta.hot.lastModified = "1699311175223.151";
}
function Index() {
  _s();
  const {
    blog
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { className: "site-section profiles-section", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("header", { className: "section-header", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "text-4xl", children: "Blog!" }, void 0, false, {
        fileName: "app/routes/blog.all.tsx",
        lineNumber: 40,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Welcome to the new blog" }, void 0, false, {
        fileName: "app/routes/blog.all.tsx",
        lineNumber: 41,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/blog.all.tsx",
      lineNumber: 39,
      columnNumber: 9
    }, this),
    blog.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "profiles-list", children: blog.map((post) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "profile-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BlogCard, { post }, void 0, false, {
      fileName: "app/routes/blog.all.tsx",
      lineNumber: 45,
      columnNumber: 17
    }, this) }, post.id, false, {
      fileName: "app/routes/blog.all.tsx",
      lineNumber: 44,
      columnNumber: 31
    }, this)) }, void 0, false, {
      fileName: "app/routes/blog.all.tsx",
      lineNumber: 43,
      columnNumber: 28
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "No blog posts yet \u{1F642}" }, void 0, false, {
      fileName: "app/routes/blog.all.tsx",
      lineNumber: 47,
      columnNumber: 19
    }, this),
    " "
  ] }, void 0, true, {
    fileName: "app/routes/blog.all.tsx",
    lineNumber: 38,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/blog.all.tsx",
    lineNumber: 37,
    columnNumber: 10
  }, this);
}
_s(Index, "UGd6Srho9ZIz3WBO/oX8v/JIOKQ=", false, function() {
  return [useLoaderData];
});
_c2 = Index;
var _c2;
$RefreshReg$(_c2, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default
};
//# sourceMappingURL=/build/routes/blog.all-BFQST4UB.js.map
