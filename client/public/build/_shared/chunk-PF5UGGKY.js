import {
  Form,
  useNavigation
} from "/build/_shared/chunk-RZPHRSLC.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-CQXNOMFL.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/Profile/Form/index.tsx
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Profile/Form/index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Profile/Form/index.tsx"
  );
  import.meta.hot.lastModified = "1699305512545.8582";
}
var ProfileForm = ({
  profile,
  onModifyData,
  action,
  errors
}) => {
  _s();
  const navigation = useNavigation();
  const [profileData, setProfileData] = (0, import_react2.useState)(profile);
  const [authData, setAuthData] = (0, import_react2.useState)({
    email: "",
    password: ""
  });
  const updateField = (field) => setProfileData((value) => ({
    ...value,
    ...field
  }));
  (0, import_react2.useEffect)(() => {
    if (onModifyData) {
      if (action == "create")
        onModifyData({
          ...profileData,
          ...authData
        });
      else if (action == "login")
        onModifyData(authData);
      else
        onModifyData(profileData);
    }
  }, [profileData, authData]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: action == "edit" ? "put" : "post", className: "form", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", { disabled: navigation.state == "submitting", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { value: profile?.id, type: "hidden", name: "id", required: true }, void 0, false, {
      fileName: "app/components/Profile/Form/index.tsx",
      lineNumber: 76,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "wrapper", children: [
      action != "login" && // profile edit input forms
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-control", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "username", children: "Name" }, void 0, false, {
              fileName: "app/components/Profile/Form/index.tsx",
              lineNumber: 83,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { onChange: (e) => updateField({
              username: e.target.value
            }), value: profileData?.username, id: "username", name: "username", type: "text", className: "form-input", required: true }, void 0, false, {
              fileName: "app/components/Profile/Form/index.tsx",
              lineNumber: 84,
              columnNumber: 19
            }, this),
            errors?.username ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("em", { className: "text-red-600", children: errors.username }, void 0, false, {
              fileName: "app/components/Profile/Form/index.tsx",
              lineNumber: 87,
              columnNumber: 39
            }, this) : null
          ] }, void 0, true, {
            fileName: "app/components/Profile/Form/index.tsx",
            lineNumber: 82,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-control", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "twitterUsername", children: "Twitter username" }, void 0, false, {
              fileName: "app/components/Profile/Form/index.tsx",
              lineNumber: 90,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { onChange: (e) => updateField({
              twitterUsername: e.target.value
            }), value: profileData?.twitterUsername, id: "twitterUsername", name: "twitterUsername", type: "text", className: "form-input", placeholder: "Without the @" }, void 0, false, {
              fileName: "app/components/Profile/Form/index.tsx",
              lineNumber: 91,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/Profile/Form/index.tsx",
            lineNumber: 89,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Profile/Form/index.tsx",
          lineNumber: 81,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-control", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "bio", children: "Bio" }, void 0, false, {
            fileName: "app/components/Profile/Form/index.tsx",
            lineNumber: 97,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { onChange: (e) => updateField({
            bio: e.target.value
          }), value: profileData?.bio, name: "bio", id: "bio", cols: 30, rows: 3, className: "form-textarea" }, void 0, false, {
            fileName: "app/components/Profile/Form/index.tsx",
            lineNumber: 98,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Profile/Form/index.tsx",
          lineNumber: 96,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-control", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "job-title", children: "Job title" }, void 0, false, {
              fileName: "app/components/Profile/Form/index.tsx",
              lineNumber: 104,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { onChange: (e) => updateField({
              title: e.target.value
            }), value: profileData?.title, id: "job-title", name: "job-title", type: "text", className: "form-input" }, void 0, false, {
              fileName: "app/components/Profile/Form/index.tsx",
              lineNumber: 105,
              columnNumber: 19
            }, this),
            errors?.title ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("em", { className: "text-red-600", children: errors.title }, void 0, false, {
              fileName: "app/components/Profile/Form/index.tsx",
              lineNumber: 108,
              columnNumber: 36
            }, this) : null
          ] }, void 0, true, {
            fileName: "app/components/Profile/Form/index.tsx",
            lineNumber: 103,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-control", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "website", children: "Website link" }, void 0, false, {
              fileName: "app/components/Profile/Form/index.tsx",
              lineNumber: 111,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { onChange: (e) => updateField({
              websiteUrl: e.target.value
            }), value: profileData?.websiteUrl, id: "website", name: "website", type: "url", className: "form-input" }, void 0, false, {
              fileName: "app/components/Profile/Form/index.tsx",
              lineNumber: 112,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/Profile/Form/index.tsx",
            lineNumber: 110,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Profile/Form/index.tsx",
          lineNumber: 102,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Profile/Form/index.tsx",
        lineNumber: 80,
        columnNumber: 9
      }, this),
      action != "edit" && // user auth input forms
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-control", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "job-title", children: "Email" }, void 0, false, {
            fileName: "app/components/Profile/Form/index.tsx",
            lineNumber: 122,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { onChange: (e) => setAuthData((data) => ({
            ...data,
            email: e.target.value
          })), value: authData.email, id: "email", name: "email", type: "email", className: "form-input", required: true }, void 0, false, {
            fileName: "app/components/Profile/Form/index.tsx",
            lineNumber: 123,
            columnNumber: 17
          }, this),
          errors?.email ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("em", { className: "text-red-600", children: errors.email }, void 0, false, {
            fileName: "app/components/Profile/Form/index.tsx",
            lineNumber: 127,
            columnNumber: 34
          }, this) : null
        ] }, void 0, true, {
          fileName: "app/components/Profile/Form/index.tsx",
          lineNumber: 121,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-control", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "job-title", children: "Password" }, void 0, false, {
            fileName: "app/components/Profile/Form/index.tsx",
            lineNumber: 130,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { onChange: (e) => setAuthData((data) => ({
            ...data,
            password: e.target.value
          })), value: authData.password, id: "password", name: "password", type: "password", className: "form-input" }, void 0, false, {
            fileName: "app/components/Profile/Form/index.tsx",
            lineNumber: 131,
            columnNumber: 17
          }, this),
          errors?.password ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("em", { className: "text-red-600", children: errors.password }, void 0, false, {
            fileName: "app/components/Profile/Form/index.tsx",
            lineNumber: 135,
            columnNumber: 37
          }, this) : null
        ] }, void 0, true, {
          fileName: "app/components/Profile/Form/index.tsx",
          lineNumber: 129,
          columnNumber: 15
        }, this),
        errors?.ValidationError ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("em", { className: "text-red-600", children: errors.ValidationError }, void 0, false, {
          fileName: "app/components/Profile/Form/index.tsx",
          lineNumber: 137,
          columnNumber: 42
        }, this) : null,
        errors?.ApplicationError ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("em", { className: "text-red-600", children: errors.ApplicationError }, void 0, false, {
          fileName: "app/components/Profile/Form/index.tsx",
          lineNumber: 138,
          columnNumber: 43
        }, this) : null
      ] }, void 0, true, {
        fileName: "app/components/Profile/Form/index.tsx",
        lineNumber: 120,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "action-cont mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "cta", children: [
        " ",
        navigation.state == "submitting" ? "Submitting" : "Submit",
        " "
      ] }, void 0, true, {
        fileName: "app/components/Profile/Form/index.tsx",
        lineNumber: 142,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/Profile/Form/index.tsx",
        lineNumber: 141,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Profile/Form/index.tsx",
      lineNumber: 77,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Profile/Form/index.tsx",
    lineNumber: 75,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Profile/Form/index.tsx",
    lineNumber: 74,
    columnNumber: 10
  }, this);
};
_s(ProfileForm, "7bcPVMD2g+U94V/2IgJOuAt0RX8=", false, function() {
  return [useNavigation];
});
_c = ProfileForm;
var Form_default = ProfileForm;
var _c;
$RefreshReg$(_c, "ProfileForm");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  Form_default
};
//# sourceMappingURL=/build/_shared/chunk-PF5UGGKY.js.map
