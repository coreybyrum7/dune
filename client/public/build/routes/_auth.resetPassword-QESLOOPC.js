import {
  require_profiles
} from "/build/_shared/chunk-JUU7V43I.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Form,
  useActionData,
  useLoaderData,
  useNavigation
} from "/build/_shared/chunk-DJDRD27Q.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-3WQCWEBV.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/_auth.resetPassword.tsx
var import_node = __toESM(require_node(), 1);
var import_profiles = __toESM(require_profiles(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_auth.resetPassword.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_auth.resetPassword.tsx"
  );
  import.meta.hot.lastModified = "1699286401360.7783";
}
var ResetPass = () => {
  _s();
  const navigation = useNavigation();
  const error = useActionData();
  const {
    code
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "site-section profiles-section", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "wrapper", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "section-header", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-4xl", children: "Reset password" }, void 0, false, {
        fileName: "app/routes/_auth.resetPassword.tsx",
        lineNumber: 71,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Enter your new password" }, void 0, false, {
        fileName: "app/routes/_auth.resetPassword.tsx",
        lineNumber: 72,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_auth.resetPassword.tsx",
      lineNumber: 70,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "form", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { value: code, type: "hidden", id: "code", name: "code", required: true }, void 0, false, {
        fileName: "app/routes/_auth.resetPassword.tsx",
        lineNumber: 76,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "wrapper", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-control", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "job-title", children: "Password" }, void 0, false, {
            fileName: "app/routes/_auth.resetPassword.tsx",
            lineNumber: 79,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "password", name: "password", type: "password", className: "form-input", required: true }, void 0, false, {
            fileName: "app/routes/_auth.resetPassword.tsx",
            lineNumber: 80,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_auth.resetPassword.tsx",
          lineNumber: 78,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-control", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "job-title", children: "Confirm password" }, void 0, false, {
            fileName: "app/routes/_auth.resetPassword.tsx",
            lineNumber: 83,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "confirmPassword", name: "confirmPassword", type: "password", className: "form-input", required: true }, void 0, false, {
            fileName: "app/routes/_auth.resetPassword.tsx",
            lineNumber: 84,
            columnNumber: 15
          }, this),
          error?.confirmPassword ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("em", { className: "text-red-600", children: error.confirmPassword }, void 0, false, {
            fileName: "app/routes/_auth.resetPassword.tsx",
            lineNumber: 85,
            columnNumber: 41
          }, this) : null
        ] }, void 0, true, {
          fileName: "app/routes/_auth.resetPassword.tsx",
          lineNumber: 82,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "action-cont mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "cta", children: [
          " ",
          navigation.state == "submitting" ? "Sending" : "Reset password",
          " "
        ] }, void 0, true, {
          fileName: "app/routes/_auth.resetPassword.tsx",
          lineNumber: 88,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/_auth.resetPassword.tsx",
          lineNumber: 87,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_auth.resetPassword.tsx",
        lineNumber: 77,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_auth.resetPassword.tsx",
      lineNumber: 75,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_auth.resetPassword.tsx",
    lineNumber: 69,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_auth.resetPassword.tsx",
    lineNumber: 68,
    columnNumber: 10
  }, this);
};
_s(ResetPass, "xjGM8Z5C946dBOsSWY2IpQ02ogE=", false, function() {
  return [useNavigation, useActionData, useLoaderData];
});
_c = ResetPass;
var auth_resetPassword_default = ResetPass;
var _c;
$RefreshReg$(_c, "ResetPass");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  auth_resetPassword_default as default
};
//# sourceMappingURL=/build/routes/_auth.resetPassword-QESLOOPC.js.map
