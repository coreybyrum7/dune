var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react"), import_server = require("react-dom/server"), import_jsx_runtime = require("react/jsx-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.RemixServer, { context: remixContext, url: request.url })
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
var import_node2 = require("@remix-run/node");

// app/styles/app.css
var app_default = "/build/_assets/app-6PWU2WQH.css";

// app/root.tsx
var import_react3 = require("@remix-run/react");

// app/components/SiteHeader.tsx
var import_react2 = require("@remix-run/react"), import_jsx_runtime2 = require("react/jsx-runtime"), SiteHeader = ({ user }) => {
  let transition = (0, import_react2.useTransition)();
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("header", { className: "site-header", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "wrapper", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("figure", { className: "site-logo", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Link, { to: "/", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h1", { children: "CB" }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("nav", { className: "site-nav", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("ul", { className: "links", children: user != null && user.id ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_react2.Link, { to: `/${user == null ? void 0 : user.slug}`, children: [
        " Hey, ",
        user == null ? void 0 : user.username,
        "! "
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Form, { action: "/sign-out", method: "post", className: "link", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { type: "submit", disabled: transition.state != "idle", children: transition.state == "idle" ? "Sign Out" : "Loading..." }) })
    ] }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", { className: "link", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Link, { to: "/members", children: "Members" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", { className: "link", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Link, { to: "/blog", children: "Blog" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", { className: "link", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Link, { to: "/auth/sign-in", children: "Sign In" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", { className: "link", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Link, { to: "/register", children: "Register" }) })
    ] }) }) })
  ] }) });
}, SiteHeader_default = SiteHeader;

// app/utils/session.server.ts
var import_node = require("@remix-run/node"), { getSession, commitSession, destroySession } = (0, import_node.createCookieSessionStorage)({
  cookie: {
    name: "userSession",
    // normally you want this to be `secure: true`
    // but that doesn't work on localhost for Safari
    // https://web.dev/when-to-use-local-https/
    secure: !0,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: !0
  }
}), createUserSession = async (userData, redirectTo) => {
  let session = await getSession();
  return session.set("userData", userData), console.log({ session }), (0, import_node.redirect)(redirectTo, {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  });
}, getUserSession = (request) => getSession(request.headers.get("Cookie")), getUserData = async (request) => {
  let userData = (await getUserSession(request)).get("userData");
  return console.log({ userData }), userData || null;
};
var logout = async (request) => {
  let session = await getUserSession(request);
  return (0, import_node.redirect)("/sign-in", {
    headers: {
      "Set-Cookie": await destroySession(session)
    }
  });
};

// app/root.tsx
var import_jsx_runtime3 = require("react/jsx-runtime"), meta = () => ({
  charset: "utf-8",
  title: "Profiles | Find & connect with people",
  viewport: "width=device-width,initial-scale=1"
}), links = () => [{ rel: "stylesheet", href: app_default }], loader = async ({ request }) => (0, import_node2.json)({
  userData: await getUserData(request)
});
function App() {
  let { userData } = (0, import_react3.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react3.Meta, {}),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react3.Links, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("body", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("main", { className: "site-main", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(SiteHeader_default, { user: userData == null ? void 0 : userData.user }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react3.Outlet, {}),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react3.ScrollRestoration, {}),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react3.Scripts, {}),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react3.LiveReload, {})
    ] }) })
  ] });
}

// app/routes/auth/forgot-password/route.tsx
var route_exports = {};
__export(route_exports, {
  action: () => action,
  default: () => route_default
});
var import_node3 = require("@remix-run/node"), import_react4 = require("@remix-run/react");

// app/utils/slugify.ts
var slugify = (str) => str && str.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, ""), slugify_default = slugify;

// app/models/profiles.server.ts
var strapiApiUrl = process.env.STRAPI_API_URL, getProfiles = async () => await (await fetch(`${strapiApiUrl}/users/?populate=profilePic`)).json(), getProfileBySlug = async (slug) => {
  let response = await (await fetch(`${strapiApiUrl}/users?populate=profilePic&filters[slug]=${slug}`)).json();
  return console.log({ response }), response[0];
}, signIn = async (data) => {
  console.log({ data });
  let response = await (await fetch(`${strapiApiUrl}/auth/local`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })).json();
  return console.log({ response }), response;
}, register = async (data) => {
  var _a;
  let slug = slugify_default((_a = data.username) == null ? void 0 : _a.toString());
  return data.slug = slug, await (await fetch(`${strapiApiUrl}/auth/local/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })).json();
}, updateProfile = async (data, token) => {
  let { id } = data, response = await (await fetch(`${strapiApiUrl}/users/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      // set the auth token to the user's jwt
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(data)
  })).json();
  return console.log({ response }), response;
}, sendResetMail = async (email) => await (await fetch(`${strapiApiUrl}/auth/forgot-password`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ email })
})).json(), resetPass = async ({ password, passwordConfirmation, code }) => await (await fetch(`${strapiApiUrl}/auth/reset-password`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    password,
    passwordConfirmation,
    code
  })
})).json();

// app/routes/auth/forgot-password/route.tsx
var import_jsx_runtime4 = require("react/jsx-runtime"), action = async ({ request }) => {
  let email = (await request.formData()).get("email"), response = await sendResetMail(email);
  return (0, import_node3.json)(response);
}, ForgotPass = () => {
  let transition = (0, import_react4.useTransition)(), data = (0, import_react4.useActionData)();
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("section", { className: "site-section profiles-section", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "wrapper", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("header", { className: "section-header", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h2", { className: "text-4xl", children: "Forgot password" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { children: "Click the button below to send the reset link to your registerd email" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react4.Form, { method: "post", className: "form", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "wrapper", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { children: data != null && data.ok ? "Link sent! Check your mail. Can't find it in the inbox? Check Spam" : "" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "form-control", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("label", { htmlFor: "email", children: "Email" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("input", { id: "email", name: "email", type: "email", className: "form-input", required: !0 })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "action-cont mt-4", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("button", { className: "cta", children: [
        " ",
        transition.state == "submitting" ? "Sending" : "Send link",
        " "
      ] }) })
    ] }) })
  ] }) });
}, route_default = ForgotPass;

// app/routes/auth/reset-password/route.tsx
var route_exports2 = {};
__export(route_exports2, {
  action: () => action2,
  default: () => route_default2,
  loader: () => loader2
});
var import_node4 = require("@remix-run/node"), import_react5 = require("@remix-run/react");
var import_jsx_runtime5 = require("react/jsx-runtime"), loader2 = async ({ request }) => {
  let code = new URL(request.url).searchParams.get("code");
  return code ? (0, import_node4.json)({
    code
  }) : (0, import_node4.redirect)("/sign-in");
}, action2 = async ({ request }) => {
  let formData = await request.formData(), code = formData.get("code"), password = formData.get("password"), passwordConfirmation = formData.get("confirmPassword"), response = await resetPass({ password, passwordConfirmation, code });
  return password != passwordConfirmation ? (0, import_node4.json)({ confirmPassword: "Passwords should match" }) : (0, import_node4.json)(response);
}, ResetPass = () => {
  let transition = (0, import_react5.useTransition)(), error = (0, import_react5.useActionData)(), { code } = (0, import_react5.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("section", { className: "site-section profiles-section", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "wrapper", children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("header", { className: "section-header", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h2", { className: "text-4xl", children: "Reset password" }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { children: "Enter your new password" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_react5.Form, { method: "post", className: "form", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("input", { value: code, type: "hidden", id: "code", name: "code", required: !0 }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "wrapper", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "form-control", children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("label", { htmlFor: "job-title", children: "Password" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("input", { id: "password", name: "password", type: "password", className: "form-input", required: !0 })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "form-control", children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("label", { htmlFor: "job-title", children: "Confirm password" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("input", { id: "confirmPassword", name: "confirmPassword", type: "password", className: "form-input", required: !0 }),
          error != null && error.confirmPassword ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("em", { className: "text-red-600", children: error.confirmPassword }) : null
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "action-cont mt-4", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("button", { className: "cta", children: [
          " ",
          transition.state == "submitting" ? "Sending" : "Reset password",
          " "
        ] }) })
      ] })
    ] })
  ] }) });
}, route_default2 = ResetPass;

// app/routes/auth/register/route.tsx
var route_exports3 = {};
__export(route_exports3, {
  action: () => action3,
  default: () => route_default3
});
var import_node5 = require("@remix-run/node"), import_react8 = require("@remix-run/react");

// app/components/ProfileForm.tsx
var import_react6 = require("@remix-run/react"), import_react7 = require("react"), import_jsx_runtime6 = require("react/jsx-runtime"), ProfileForm = ({ profile, onModifyData, action: action7, errors }) => {
  let transition = (0, import_react6.useTransition)(), [profileData, setProfileData] = (0, import_react7.useState)(profile), [authData, setAuthData] = (0, import_react7.useState)({ email: "", password: "" }), updateField = (field) => setProfileData((value) => ({ ...value, ...field }));
  return (0, import_react7.useEffect)(() => {
    onModifyData && (action7 == "create" ? onModifyData({ ...profileData, ...authData }) : action7 == "login" ? onModifyData(authData) : onModifyData(profileData));
  }, [profileData, authData]), /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react6.Form, { method: action7 == "edit" ? "put" : "post", className: "form", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("fieldset", { disabled: transition.state == "submitting", children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("input", { value: profile == null ? void 0 : profile.id, type: "hidden", name: "id", required: !0 }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "wrapper", children: [
      action7 != "login" && // profile edit input forms
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_jsx_runtime6.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "form-group", children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "form-control", children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("label", { htmlFor: "username", children: "Name" }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
              "input",
              {
                onChange: (e) => updateField({ username: e.target.value }),
                value: profileData == null ? void 0 : profileData.username,
                id: "username",
                name: "username",
                type: "text",
                className: "form-input",
                required: !0
              }
            ),
            errors != null && errors.username ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("em", { className: "text-red-600", children: errors.username }) : null
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "form-control", children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("label", { htmlFor: "twitterUsername", children: "Twitter username" }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
              "input",
              {
                onChange: (e) => updateField({ twitterUsername: e.target.value }),
                value: profileData == null ? void 0 : profileData.twitterUsername,
                id: "twitterUsername",
                name: "twitterUsername",
                type: "text",
                className: "form-input",
                placeholder: "Without the @"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "form-control", children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("label", { htmlFor: "bio", children: "Bio" }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
            "textarea",
            {
              onChange: (e) => updateField({ bio: e.target.value }),
              value: profileData == null ? void 0 : profileData.bio,
              name: "bio",
              id: "bio",
              cols: 30,
              rows: 3,
              className: "form-textarea"
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "form-group", children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "form-control", children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("label", { htmlFor: "job-title", children: "Job title" }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
              "input",
              {
                onChange: (e) => updateField({ title: e.target.value }),
                value: profileData == null ? void 0 : profileData.title,
                id: "job-title",
                name: "job-title",
                type: "text",
                className: "form-input"
              }
            ),
            errors != null && errors.title ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("em", { className: "text-red-600", children: errors.title }) : null
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "form-control", children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("label", { htmlFor: "website", children: "Website link" }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
              "input",
              {
                onChange: (e) => updateField({ websiteUrl: e.target.value }),
                value: profileData == null ? void 0 : profileData.websiteUrl,
                id: "website",
                name: "website",
                type: "url",
                className: "form-input"
              }
            )
          ] })
        ] })
      ] }),
      action7 != "edit" && // user auth input forms
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_jsx_runtime6.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "form-control", children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("label", { htmlFor: "job-title", children: "Email" }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
            "input",
            {
              onChange: (e) => setAuthData((data) => ({ ...data, email: e.target.value })),
              value: authData.email,
              id: "email",
              name: "email",
              type: "email",
              className: "form-input",
              required: !0
            }
          ),
          errors != null && errors.email ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("em", { className: "text-red-600", children: errors.email }) : null
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "form-control", children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("label", { htmlFor: "job-title", children: "Password" }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
            "input",
            {
              onChange: (e) => setAuthData((data) => ({ ...data, password: e.target.value })),
              value: authData.password,
              id: "password",
              name: "password",
              type: "password",
              className: "form-input"
            }
          ),
          errors != null && errors.password ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("em", { className: "text-red-600", children: errors.password }) : null
        ] }),
        errors != null && errors.ValidationError ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("em", { className: "text-red-600", children: errors.ValidationError }) : null,
        errors != null && errors.ApplicationError ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("em", { className: "text-red-600", children: errors.ApplicationError }) : null
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "action-cont mt-4", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("button", { className: "cta", children: [
        " ",
        transition.state == "submitting" ? "Submitting" : "Submit",
        " "
      ] }) })
    ] })
  ] }) });
}, ProfileForm_default = ProfileForm;

// app/routes/auth/register/route.tsx
var import_jsx_runtime7 = require("react/jsx-runtime"), action3 = async ({ request }) => {
  try {
    let formData = await request.formData(), email = formData.get("email"), password = formData.get("password"), username = formData.get("username"), title = formData.get("job-title"), twitterUsername = formData.get("twitterUsername"), bio = formData.get("bio"), websiteUrl = formData.get("website"), errors = {
      email: email ? null : "Email is required",
      password: password ? null : "Password is required",
      username: username ? null : "Username is required",
      title: title ? null : "Job title is required"
    };
    if (Object.values(errors).some((errorMessage) => errorMessage))
      throw errors;
    console.log({ email, password, username, title, twitterUsername, bio, websiteUrl });
    let { jwt, user, error } = await register({ email, password, username, title, twitterUsername, bio, websiteUrl });
    if (console.log({ jwt, user, error }), error)
      throw { [error.name]: error.message };
    return createUserSession({ jwt, user }, "/");
  } catch (error) {
    return (0, import_node5.json)(error);
  }
}, Register = () => {
  let errors = (0, import_react8.useActionData)();
  return console.log({ errors }), /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("section", { className: "site-section profiles-section", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "wrapper", children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("header", { className: "section-header", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h2", { className: "text-4xl", children: "Register" }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { children: "Create a new profile" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(ProfileForm_default, { action: "create", errors })
  ] }) });
}, route_default3 = Register;

// app/routes/auth/sign-out/route.tsx
var route_exports4 = {};
__export(route_exports4, {
  action: () => action4,
  loader: () => loader3
});
var import_node6 = require("@remix-run/node");
var action4 = async ({ request }) => logout(request), loader3 = async () => (0, import_node6.redirect)("/");

// app/routes/auth/sign-in/route.tsx
var route_exports5 = {};
__export(route_exports5, {
  action: () => action5,
  default: () => route_default4
});
var import_node7 = require("@remix-run/node"), import_react9 = require("@remix-run/react");
var import_jsx_runtime8 = require("react/jsx-runtime"), action5 = async ({ request }) => {
  try {
    let formData = await request.formData(), identifier = formData.get("email"), password = formData.get("password");
    console.log({ identifier, password });
    let errors = {
      identifier: identifier ? null : "Email is required",
      password: password ? null : "Password is required"
    }, hasErrors = Object.values(errors).some((errorMessage) => errorMessage);
    if (console.log({ hasErrors }), hasErrors)
      throw errors;
    console.log({ identifier, password });
    let { jwt, user, error } = await signIn({ identifier, password });
    if (console.log({ jwt, user, error }), error)
      throw { [error.name]: error.message };
    return createUserSession({ jwt, user }, "/");
  } catch (error) {
    return (0, import_node7.json)(error);
  }
}, Login = () => {
  let errors = (0, import_react9.useActionData)();
  return console.log({ errors }), /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("section", { className: "site-section profiles-section", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "wrapper", children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("header", { className: "section-header", children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h2", { className: "text-4xl", children: "Sign in " }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { children: "You have to log in to edit your profile" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(ProfileForm_default, { action: "login", errors })
  ] }) });
}, route_default4 = Login;

// app/routes/members.$slug.tsx
var members_slug_exports = {};
__export(members_slug_exports, {
  action: () => action6,
  default: () => members_slug_default,
  loader: () => loader4
});
var import_node8 = require("@remix-run/node"), import_react11 = require("@remix-run/react"), import_react12 = require("react");

// app/components/ProfileCard.tsx
var import_react10 = require("@remix-run/react"), import_jsx_runtime9 = require("react/jsx-runtime"), strapiUrl = "http://localhost:1337", getImgUrl = ({ url, username }) => url ? `${strapiUrl}${url}` : `https://ui-avatars.com/api/?name=${username == null ? void 0 : username.replace(" ", "+")}&background=2563eb&color=fff`, ProfileCard = ({ profile, preview }) => {
  var _a;
  return console.log({ profile }), /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_jsx_runtime9.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("article", { className: `profile ${preview ? "preview" : ""}`, children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "wrapper", children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "profile-pic-cont", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("figure", { className: "profile-pic img-cont", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
      "img",
      {
        src: getImgUrl({ url: (_a = profile.profilePic) == null ? void 0 : _a.formats.small.url, username: profile.username }),
        alt: `A photo of ${profile.username}`,
        className: "w-full"
      }
    ) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "profile-content", children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("header", { className: "profile-header ", children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("h3", { className: "username", children: profile.username }),
        profile.twitterUsername && /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("a", { href: "https://twitter.com/miracleio", className: "twitter link", children: [
          "@",
          profile.twitterUsername
        ] }),
        profile.bio && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { className: "bio", children: profile.bio })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("ul", { className: "links", children: [
        profile.title && /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("li", { className: "w-icon", children: [
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("svg", { className: "icon stroke", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
            "path",
            {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("span", { children: [
            " ",
            profile.title,
            " "
          ] })
        ] }),
        profile.websiteUrl && /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("li", { className: "w-icon", children: [
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("svg", { className: "icon stroke", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
            "path",
            {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("a", { href: "http://miracleio.me", target: "_blank", rel: "noopener noreferrer", className: "link", children: profile.websiteUrl })
        ] })
      ] }),
      !preview && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("footer", { className: "grow flex items-end justify-end pt-4", children: (profile == null ? void 0 : profile.slug) && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_react10.Link, { to: profile == null ? void 0 : profile.slug, children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("button", { className: "cta w-icon", children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { children: "View profile" }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "icon stroke", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M17 8l4 4m0 0l-4 4m4-4H3" }) })
      ] }) }) })
    ] })
  ] }) }) });
}, ProfileCard_default = ProfileCard;

// app/routes/members.$slug.tsx
var import_jsx_runtime10 = require("react/jsx-runtime"), loader4 = async ({ params, request }) => (0, import_node8.json)({
  userData: await getUserData(request),
  profile: await getProfileBySlug(params.slug)
}), action6 = async ({ request }) => {
  let data = await getUserData(request), formData = await request.formData(), id = formData.get("id"), username = formData.get("username"), twitterUsername = formData.get("twitterUsername"), bio = formData.get("bio"), title = formData.get("job-title"), websiteUrl = formData.get("website");
  console.log({ id, username, twitterUsername, bio, title, websiteUrl });
  let errors = {
    id: id ? null : "Id is required",
    username: username ? null : "username is required",
    title: title ? null : "title is required"
  };
  return Object.values(errors).some((errorMessage) => errorMessage) ? (0, import_node8.json)(errors) : (await updateProfile({ id, username, twitterUsername, bio, title, websiteUrl }, data == null ? void 0 : data.jwt), null);
}, Profile = () => {
  var _a, _b;
  let { profile, userData } = (0, import_react11.useLoaderData)(), errors = (0, import_react11.useActionData)(), [profileData, setprofileData] = (0, import_react12.useState)(profile), [isEditing, setIsEditing] = (0, import_react12.useState)(!1);
  return console.log({ userData, profile }), /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("section", { className: "site-section", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "wrapper flex items-center py-16 min-h-[calc(100vh-4rem)]", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "profile-cont w-full max-w-5xl m-auto", children: [
    profileData ? /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_jsx_runtime10.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(ProfileCard_default, { profile: profileData, preview: !0 }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("ul", { className: "actions", children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("li", { className: "action", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("button", { className: "cta w-icon", children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "icon stroke", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
            "path",
            {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { children: "Share" })
        ] }) }),
        ((_a = userData == null ? void 0 : userData.user) == null ? void 0 : _a.id) == profile.id && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("li", { className: "action", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("button", { onClick: () => setIsEditing(!isEditing), className: "cta w-icon", children: [
          isEditing ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "icon stroke", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" }) }) : /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "icon stroke", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
            "path",
            {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { children: isEditing ? "Cancel" : "Edit" })
        ] }) })
      ] })
    ] }) : /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "text-center", children: "Oops, that profile doesn't exist... yet" }),
    ((_b = userData == null ? void 0 : userData.user) == null ? void 0 : _b.id) == (profile == null ? void 0 : profile.id) && isEditing && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(ProfileForm_default, { errors, profile, action: "edit", onModifyData: (value) => setprofileData(value) })
  ] }) }) });
}, members_slug_default = Profile;

// app/routes/blog/route.tsx
var route_exports6 = {};
__export(route_exports6, {
  default: () => Index,
  loader: () => loader5
});
var import_node9 = require("@remix-run/node");
var import_jsx_runtime11 = require("react/jsx-runtime"), loader5 = async () => (0, import_node9.json)({
  profiles: await getProfiles()
});
function Index() {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("section", { className: "site-section profiles-section", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("header", { className: "section-header", children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h2", { className: "text-4xl", children: "Dashboard!" }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { children: "Welcome to the new hub" })
  ] }) }) });
}

// app/routes/members.tsx
var members_exports = {};
__export(members_exports, {
  default: () => Members,
  loader: () => loader6
});
var import_node10 = require("@remix-run/node"), import_react13 = require("@remix-run/react");
var import_jsx_runtime12 = require("react/jsx-runtime"), loader6 = async () => (0, import_node10.json)({
  profiles: await getProfiles()
});
function Members() {
  let { profiles } = (0, import_react13.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("section", { className: "site-section profiles-section", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("header", { className: "section-header", children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h2", { className: "text-4xl", children: "Explore profiles" }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { children: "Find and connect with amazing people all over the world!" })
    ] }),
    profiles.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("ul", { className: "profiles-list", children: profiles.map((profile) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("li", { className: "profile-item", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(ProfileCard_default, { profile, preview: !1 }) }, profile.id)) }) : /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { children: "No profiles yet \u{1F642}" }),
    " "
  ] }) });
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index2,
  loader: () => loader7
});
var import_node11 = require("@remix-run/node");
var import_jsx_runtime13 = require("react/jsx-runtime"), loader7 = async () => (0, import_node11.json)({
  profiles: await getProfiles()
});
function Index2() {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("section", { className: "site-section profiles-section", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("header", { className: "section-header", children: [
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("h2", { className: "text-4xl", children: "Dashboard!" }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { children: "Welcome to the new hub" })
  ] }) }) });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-3JKOXJKP.js", imports: ["/build/_shared/chunk-7522LVBJ.js", "/build/_shared/chunk-KMXBE32N.js", "/build/_shared/chunk-Q3IECNXJ.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-BZM47Y6C.js", imports: ["/build/_shared/chunk-PGOH7JLP.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/auth/forgot-password/route": { id: "routes/auth/forgot-password/route", parentId: "root", path: "auth/forgot-password/route", index: void 0, caseSensitive: void 0, module: "/build/routes/auth/forgot-password/route-S5FNFD22.js", imports: ["/build/_shared/chunk-BPBVRJKG.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/auth/register/route": { id: "routes/auth/register/route", parentId: "root", path: "auth/register/route", index: void 0, caseSensitive: void 0, module: "/build/routes/auth/register/route-IZBLYM5X.js", imports: ["/build/_shared/chunk-ZXKDU7N3.js", "/build/_shared/chunk-BPBVRJKG.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/auth/reset-password/route": { id: "routes/auth/reset-password/route", parentId: "root", path: "auth/reset-password/route", index: void 0, caseSensitive: void 0, module: "/build/routes/auth/reset-password/route-AE426UAQ.js", imports: ["/build/_shared/chunk-BPBVRJKG.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/auth/sign-in/route": { id: "routes/auth/sign-in/route", parentId: "root", path: "auth/sign-in/route", index: void 0, caseSensitive: void 0, module: "/build/routes/auth/sign-in/route-X73CY2NL.js", imports: ["/build/_shared/chunk-ZXKDU7N3.js", "/build/_shared/chunk-BPBVRJKG.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/auth/sign-out/route": { id: "routes/auth/sign-out/route", parentId: "root", path: "auth/sign-out/route", index: void 0, caseSensitive: void 0, module: "/build/routes/auth/sign-out/route-KEIPTI4E.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/blog/route": { id: "routes/blog/route", parentId: "root", path: "blog/route", index: void 0, caseSensitive: void 0, module: "/build/routes/blog/route-23GCGDQM.js", imports: ["/build/_shared/chunk-BPBVRJKG.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-T5W5UQ6U.js", imports: ["/build/_shared/chunk-BPBVRJKG.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/members": { id: "routes/members", parentId: "root", path: "members", index: void 0, caseSensitive: void 0, module: "/build/routes/members-GN2XPJ6F.js", imports: ["/build/_shared/chunk-RWCN5YPZ.js", "/build/_shared/chunk-BPBVRJKG.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/members.$slug": { id: "routes/members.$slug", parentId: "root", path: "members/:slug", index: void 0, caseSensitive: void 0, module: "/build/routes/members.$slug-UKJPLBB5.js", imports: ["/build/_shared/chunk-RWCN5YPZ.js", "/build/_shared/chunk-ZXKDU7N3.js", "/build/_shared/chunk-BPBVRJKG.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "a7249d1d", hmr: void 0, url: "/build/manifest-A7249D1D.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !1, v2_headers: !1, v2_meta: !1, v2_normalizeFormMethod: !1, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/auth/forgot-password/route": {
    id: "routes/auth/forgot-password/route",
    parentId: "root",
    path: "auth/forgot-password/route",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports
  },
  "routes/auth/reset-password/route": {
    id: "routes/auth/reset-password/route",
    parentId: "root",
    path: "auth/reset-password/route",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports2
  },
  "routes/auth/register/route": {
    id: "routes/auth/register/route",
    parentId: "root",
    path: "auth/register/route",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports3
  },
  "routes/auth/sign-out/route": {
    id: "routes/auth/sign-out/route",
    parentId: "root",
    path: "auth/sign-out/route",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports4
  },
  "routes/auth/sign-in/route": {
    id: "routes/auth/sign-in/route",
    parentId: "root",
    path: "auth/sign-in/route",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports5
  },
  "routes/members.$slug": {
    id: "routes/members.$slug",
    parentId: "root",
    path: "members/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: members_slug_exports
  },
  "routes/blog/route": {
    id: "routes/blog/route",
    parentId: "root",
    path: "blog/route",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports6
  },
  "routes/members": {
    id: "routes/members",
    parentId: "root",
    path: "members",
    index: void 0,
    caseSensitive: void 0,
    module: members_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
