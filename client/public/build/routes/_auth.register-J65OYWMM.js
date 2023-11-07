import {
  Form_default
} from "/build/_shared/chunk-PF5UGGKY.js";
import {
  require_session
} from "/build/_shared/chunk-V22J52NZ.js";
import {
  require_profiles
} from "/build/_shared/chunk-JUU7V43I.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  useActionData
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

// app/routes/_auth.register.tsx
var import_node = __toESM(require_node(), 1);
var import_profiles = __toESM(require_profiles(), 1);
var import_session = __toESM(require_session(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_auth.register.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_auth.register.tsx"
  );
  import.meta.hot.lastModified = "1699305550732.3901";
}
var Register = () => {
  _s();
  const errors = useActionData();
  console.log({
    errors
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "site-section profiles-section", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "wrapper", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "section-header", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-4xl", children: "Register" }, void 0, false, {
        fileName: "app/routes/_auth.register.tsx",
        lineNumber: 106,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Create a new profile" }, void 0, false, {
        fileName: "app/routes/_auth.register.tsx",
        lineNumber: 107,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_auth.register.tsx",
      lineNumber: 105,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default, { action: "create", errors }, void 0, false, {
      fileName: "app/routes/_auth.register.tsx",
      lineNumber: 111,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_auth.register.tsx",
    lineNumber: 104,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_auth.register.tsx",
    lineNumber: 103,
    columnNumber: 10
  }, this);
};
_s(Register, "MXG3vJWOluRyotNja3c0q7lD6Co=", false, function() {
  return [useActionData];
});
_c = Register;
var auth_register_default = Register;
var _c;
$RefreshReg$(_c, "Register");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  auth_register_default as default
};
//# sourceMappingURL=/build/routes/_auth.register-J65OYWMM.js.map
