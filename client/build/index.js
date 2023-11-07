var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import isbot from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 48,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 98,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
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
import {
  json
} from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData
} from "@remix-run/react";

// app/styles/app.css
var app_default = "/build/_assets/app-2TIAORPG.css";

// app/components/Header/index.tsx
import { Form, Link, useNavigation } from "@remix-run/react";
import { Fragment, jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var SiteHeader = ({ user }) => {
  let navigation = useNavigation();
  return /* @__PURE__ */ jsxDEV2("header", { className: "site-header", children: /* @__PURE__ */ jsxDEV2("div", { className: "wrapper", children: [
    /* @__PURE__ */ jsxDEV2("figure", { className: "site-logo", children: /* @__PURE__ */ jsxDEV2(Link, { to: "/", children: /* @__PURE__ */ jsxDEV2("h1", { children: "CB" }, void 0, !1, {
      fileName: "app/components/Header/index.tsx",
      lineNumber: 15,
      columnNumber: 52
    }, this) }, void 0, !1, {
      fileName: "app/components/Header/index.tsx",
      lineNumber: 15,
      columnNumber: 39
    }, this) }, void 0, !1, {
      fileName: "app/components/Header/index.tsx",
      lineNumber: 15,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV2("nav", { className: "site-nav", children: /* @__PURE__ */ jsxDEV2("ul", { className: "links", children: user?.id ? /* @__PURE__ */ jsxDEV2(Fragment, { children: [
      /* @__PURE__ */ jsxDEV2("li", { children: /* @__PURE__ */ jsxDEV2(Link, { to: `/${user?.slug}`, children: [
        " Hey, ",
        user?.username,
        "! "
      ] }, void 0, !0, {
        fileName: "app/components/Header/index.tsx",
        lineNumber: 23,
        columnNumber: 19
      }, this) }, void 0, !1, {
        fileName: "app/components/Header/index.tsx",
        lineNumber: 22,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV2(Form, { action: "/logout", method: "post", className: "link", children: /* @__PURE__ */ jsxDEV2("button", { type: "submit", disabled: navigation.state != "idle", children: navigation.state == "idle" ? "Sign Out" : "Loading..." }, void 0, !1, {
        fileName: "app/components/Header/index.tsx",
        lineNumber: 27,
        columnNumber: 19
      }, this) }, void 0, !1, {
        fileName: "app/components/Header/index.tsx",
        lineNumber: 26,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Header/index.tsx",
      lineNumber: 20,
      columnNumber: 15
    }, this) : /* @__PURE__ */ jsxDEV2(Fragment, { children: [
      /* @__PURE__ */ jsxDEV2("li", { className: "link", children: /* @__PURE__ */ jsxDEV2(Link, { to: "/members", children: "Members" }, void 0, !1, {
        fileName: "app/components/Header/index.tsx",
        lineNumber: 34,
        columnNumber: 19
      }, this) }, void 0, !1, {
        fileName: "app/components/Header/index.tsx",
        lineNumber: 33,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV2("li", { className: "link", children: /* @__PURE__ */ jsxDEV2(Link, { to: "/blog/all", children: "Blog" }, void 0, !1, {
        fileName: "app/components/Header/index.tsx",
        lineNumber: 37,
        columnNumber: 19
      }, this) }, void 0, !1, {
        fileName: "app/components/Header/index.tsx",
        lineNumber: 36,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV2("li", { className: "link", children: /* @__PURE__ */ jsxDEV2(Link, { to: "/login", children: "Sign In" }, void 0, !1, {
        fileName: "app/components/Header/index.tsx",
        lineNumber: 40,
        columnNumber: 38
      }, this) }, void 0, !1, {
        fileName: "app/components/Header/index.tsx",
        lineNumber: 40,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV2("li", { className: "link", children: /* @__PURE__ */ jsxDEV2(Link, { to: "/register", children: "Register" }, void 0, !1, {
        fileName: "app/components/Header/index.tsx",
        lineNumber: 41,
        columnNumber: 38
      }, this) }, void 0, !1, {
        fileName: "app/components/Header/index.tsx",
        lineNumber: 41,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Header/index.tsx",
      lineNumber: 32,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/components/Header/index.tsx",
      lineNumber: 17,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/Header/index.tsx",
      lineNumber: 16,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Header/index.tsx",
    lineNumber: 14,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Header/index.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}, Header_default = SiteHeader;

// app/utils/session.server.ts
import { createCookieSessionStorage, redirect } from "@remix-run/node";
var { getSession, commitSession, destroySession } = createCookieSessionStorage({
  cookie: {
    name: "userSession",
    // normally you want this to be `secure: true`
    // but that doesn't work on localhost for Safari
    // https://web.dev/when-to-use-local-https/
    secure: !1,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: !0
  }
}), createUserSession = async (userData, redirectTo) => {
  let session = await getSession();
  return session.set("userData", userData), console.log({ session }), redirect(redirectTo, {
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
  return redirect("/sign-in", {
    headers: {
      "Set-Cookie": await destroySession(session)
    }
  });
};

// app/root.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var meta = () => [{
  charset: "utf-8",
  title: "Profiles | Find & connect with people",
  viewport: "width=device-width,initial-scale=1"
}], links = () => [{ rel: "stylesheet", href: app_default }], loader = async ({ request }) => json({
  userData: await getUserData(request)
});
function App() {
  let { userData } = useLoaderData();
  return /* @__PURE__ */ jsxDEV3("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV3("head", { children: [
      /* @__PURE__ */ jsxDEV3("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 47,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3("body", { children: /* @__PURE__ */ jsxDEV3("main", { className: "site-main", children: [
      /* @__PURE__ */ jsxDEV3(Header_default, { user: userData?.user }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 54,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV3(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 55,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV3(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 56,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV3(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 57,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV3(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 58,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 53,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 45,
    columnNumber: 5
  }, this);
}

// app/routes/_auth.forgotPassword.tsx
var auth_forgotPassword_exports = {};
__export(auth_forgotPassword_exports, {
  action: () => action,
  default: () => auth_forgotPassword_default
});
import {
  json as json2
} from "@remix-run/node";
import { Form as Form2, useActionData, useNavigation as useNavigation2 } from "@remix-run/react";

// app/utils/slugify.ts
var slugify = (str) => str && str.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, ""), slugify_default = slugify;

// app/models/profiles.server.ts
var strapiApiUrl = process.env.STRAPI_API_URL, getProfiles = async () => await (await fetch(`${strapiApiUrl}/users/?populate=profilePic`)).json(), getProfileBySlug = async (slug) => {
  let response = await (await fetch(
    `${strapiApiUrl}/users?populate=profilePic&filters[slug]=${slug}`
  )).json();
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
  let slug = slugify_default(data.username?.toString());
  return data.slug = slug, await (await fetch(`${strapiApiUrl}/auth/local/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })).json();
}, updateProfile = async (data, token) => {
  let { id } = data;
  return await (await fetch(`${strapiApiUrl}/users/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      // set the auth token to the user's jwt
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(data)
  })).json();
}, sendResetMail = async (email) => await (await fetch(`${strapiApiUrl}/auth/forgot-password`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ email })
})).json(), resetPass = async ({
  password,
  passwordConfirmation,
  code
}) => await (await fetch(`${strapiApiUrl}/auth/reset-password`, {
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

// app/routes/_auth.forgotPassword.tsx
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
var action = async ({ request }) => {
  let email = (await request.formData()).get("email"), response = await sendResetMail(email);
  return json2(response);
}, ForgotPass = () => {
  let navigation = useNavigation2(), data = useActionData();
  return /* @__PURE__ */ jsxDEV4("section", { className: "site-section profiles-section", children: /* @__PURE__ */ jsxDEV4("div", { className: "wrapper", children: [
    /* @__PURE__ */ jsxDEV4("header", { className: "section-header", children: [
      /* @__PURE__ */ jsxDEV4("h2", { className: "text-4xl", children: "Forgot password" }, void 0, !1, {
        fileName: "app/routes/_auth.forgotPassword.tsx",
        lineNumber: 27,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV4("p", { children: "Click the button below to send the reset link to your registerd email" }, void 0, !1, {
        fileName: "app/routes/_auth.forgotPassword.tsx",
        lineNumber: 28,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_auth.forgotPassword.tsx",
      lineNumber: 26,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV4(Form2, { method: "post", className: "form", children: /* @__PURE__ */ jsxDEV4("div", { className: "wrapper", children: [
      /* @__PURE__ */ jsxDEV4("p", { children: data?.ok ? "Link sent! Check your mail. Can't find it in the inbox? Check Spam" : "" }, void 0, !1, {
        fileName: "app/routes/_auth.forgotPassword.tsx",
        lineNumber: 33,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV4("div", { className: "form-control", children: [
        /* @__PURE__ */ jsxDEV4("label", { htmlFor: "email", children: "Email" }, void 0, !1, {
          fileName: "app/routes/_auth.forgotPassword.tsx",
          lineNumber: 35,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV4("input", { id: "email", name: "email", type: "email", className: "form-input", required: !0 }, void 0, !1, {
          fileName: "app/routes/_auth.forgotPassword.tsx",
          lineNumber: 36,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_auth.forgotPassword.tsx",
        lineNumber: 34,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV4("div", { className: "action-cont mt-4", children: /* @__PURE__ */ jsxDEV4("button", { className: "cta", children: [
        " ",
        navigation.state == "submitting" ? "Sending" : "Send link",
        " "
      ] }, void 0, !0, {
        fileName: "app/routes/_auth.forgotPassword.tsx",
        lineNumber: 39,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/_auth.forgotPassword.tsx",
        lineNumber: 38,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_auth.forgotPassword.tsx",
      lineNumber: 32,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/_auth.forgotPassword.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_auth.forgotPassword.tsx",
    lineNumber: 25,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_auth.forgotPassword.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}, auth_forgotPassword_default = ForgotPass;

// app/routes/_auth.resetPassword.tsx
var auth_resetPassword_exports = {};
__export(auth_resetPassword_exports, {
  action: () => action2,
  default: () => auth_resetPassword_default,
  loader: () => loader2
});
import {
  redirect as redirect2,
  json as json3
} from "@remix-run/node";
import { Form as Form3, useActionData as useActionData2, useLoaderData as useLoaderData2, useNavigation as useNavigation3 } from "@remix-run/react";
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
var loader2 = async ({ request }) => {
  let code = new URL(request.url).searchParams.get("code");
  return code ? json3({
    code
  }) : redirect2("/sign-in");
}, action2 = async ({ request }) => {
  let formData = await request.formData(), code = formData.get("code"), password = formData.get("password"), passwordConfirmation = formData.get("confirmPassword"), response = await resetPass({ password, passwordConfirmation, code });
  return password != passwordConfirmation ? json3({ confirmPassword: "Passwords should match" }) : json3(response);
}, ResetPass = () => {
  let navigation = useNavigation3(), error = useActionData2(), { code } = useLoaderData2();
  return /* @__PURE__ */ jsxDEV5("section", { className: "site-section profiles-section", children: /* @__PURE__ */ jsxDEV5("div", { className: "wrapper", children: [
    /* @__PURE__ */ jsxDEV5("header", { className: "section-header", children: [
      /* @__PURE__ */ jsxDEV5("h2", { className: "text-4xl", children: "Reset password" }, void 0, !1, {
        fileName: "app/routes/_auth.resetPassword.tsx",
        lineNumber: 54,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV5("p", { children: "Enter your new password" }, void 0, !1, {
        fileName: "app/routes/_auth.resetPassword.tsx",
        lineNumber: 55,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_auth.resetPassword.tsx",
      lineNumber: 53,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV5(Form3, { method: "post", className: "form", children: [
      /* @__PURE__ */ jsxDEV5("input", { value: code, type: "hidden", id: "code", name: "code", required: !0 }, void 0, !1, {
        fileName: "app/routes/_auth.resetPassword.tsx",
        lineNumber: 59,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV5("div", { className: "wrapper", children: [
        /* @__PURE__ */ jsxDEV5("div", { className: "form-control", children: [
          /* @__PURE__ */ jsxDEV5("label", { htmlFor: "job-title", children: "Password" }, void 0, !1, {
            fileName: "app/routes/_auth.resetPassword.tsx",
            lineNumber: 62,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV5("input", { id: "password", name: "password", type: "password", className: "form-input", required: !0 }, void 0, !1, {
            fileName: "app/routes/_auth.resetPassword.tsx",
            lineNumber: 63,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_auth.resetPassword.tsx",
          lineNumber: 61,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV5("div", { className: "form-control", children: [
          /* @__PURE__ */ jsxDEV5("label", { htmlFor: "job-title", children: "Confirm password" }, void 0, !1, {
            fileName: "app/routes/_auth.resetPassword.tsx",
            lineNumber: 66,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV5("input", { id: "confirmPassword", name: "confirmPassword", type: "password", className: "form-input", required: !0 }, void 0, !1, {
            fileName: "app/routes/_auth.resetPassword.tsx",
            lineNumber: 67,
            columnNumber: 15
          }, this),
          error?.confirmPassword ? /* @__PURE__ */ jsxDEV5("em", { className: "text-red-600", children: error.confirmPassword }, void 0, !1, {
            fileName: "app/routes/_auth.resetPassword.tsx",
            lineNumber: 68,
            columnNumber: 41
          }, this) : null
        ] }, void 0, !0, {
          fileName: "app/routes/_auth.resetPassword.tsx",
          lineNumber: 65,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV5("div", { className: "action-cont mt-4", children: /* @__PURE__ */ jsxDEV5("button", { className: "cta", children: [
          " ",
          navigation.state == "submitting" ? "Sending" : "Reset password",
          " "
        ] }, void 0, !0, {
          fileName: "app/routes/_auth.resetPassword.tsx",
          lineNumber: 71,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/_auth.resetPassword.tsx",
          lineNumber: 70,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_auth.resetPassword.tsx",
        lineNumber: 60,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_auth.resetPassword.tsx",
      lineNumber: 58,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_auth.resetPassword.tsx",
    lineNumber: 52,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_auth.resetPassword.tsx",
    lineNumber: 51,
    columnNumber: 5
  }, this);
}, auth_resetPassword_default = ResetPass;

// app/routes/_auth.register.tsx
var auth_register_exports = {};
__export(auth_register_exports, {
  action: () => action3,
  default: () => auth_register_default
});
import { json as json4 } from "@remix-run/node";
import { useActionData as useActionData3 } from "@remix-run/react";

// app/components/Profile/Form/index.tsx
import { Form as Form4, useNavigation as useNavigation4 } from "@remix-run/react";
import { useEffect, useState } from "react";
import { Fragment as Fragment2, jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
var ProfileForm = ({ profile, onModifyData, action: action7, errors }) => {
  let navigation = useNavigation4(), [profileData, setProfileData] = useState(profile), [authData, setAuthData] = useState({ email: "", password: "" }), updateField = (field) => setProfileData((value) => ({ ...value, ...field }));
  return useEffect(() => {
    onModifyData && (action7 == "create" ? onModifyData({ ...profileData, ...authData }) : action7 == "login" ? onModifyData(authData) : onModifyData(profileData));
  }, [profileData, authData]), /* @__PURE__ */ jsxDEV6(Form4, { method: action7 == "edit" ? "put" : "post", className: "form", children: /* @__PURE__ */ jsxDEV6("fieldset", { disabled: navigation.state == "submitting", children: [
    /* @__PURE__ */ jsxDEV6("input", { value: profile?.id, type: "hidden", name: "id", required: !0 }, void 0, !1, {
      fileName: "app/components/Profile/Form/index.tsx",
      lineNumber: 43,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV6("div", { className: "wrapper", children: [
      action7 != "login" && // profile edit input forms
      /* @__PURE__ */ jsxDEV6(Fragment2, { children: [
        /* @__PURE__ */ jsxDEV6("div", { className: "form-group", children: [
          /* @__PURE__ */ jsxDEV6("div", { className: "form-control", children: [
            /* @__PURE__ */ jsxDEV6("label", { htmlFor: "username", children: "Name" }, void 0, !1, {
              fileName: "app/components/Profile/Form/index.tsx",
              lineNumber: 50,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV6(
              "input",
              {
                onChange: (e) => updateField({ username: e.target.value }),
                value: profileData?.username,
                id: "username",
                name: "username",
                type: "text",
                className: "form-input",
                required: !0
              },
              void 0,
              !1,
              {
                fileName: "app/components/Profile/Form/index.tsx",
                lineNumber: 51,
                columnNumber: 19
              },
              this
            ),
            errors?.username ? /* @__PURE__ */ jsxDEV6("em", { className: "text-red-600", children: errors.username }, void 0, !1, {
              fileName: "app/components/Profile/Form/index.tsx",
              lineNumber: 60,
              columnNumber: 39
            }, this) : null
          ] }, void 0, !0, {
            fileName: "app/components/Profile/Form/index.tsx",
            lineNumber: 49,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV6("div", { className: "form-control", children: [
            /* @__PURE__ */ jsxDEV6("label", { htmlFor: "twitterUsername", children: "Twitter username" }, void 0, !1, {
              fileName: "app/components/Profile/Form/index.tsx",
              lineNumber: 63,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV6(
              "input",
              {
                onChange: (e) => updateField({ twitterUsername: e.target.value }),
                value: profileData?.twitterUsername,
                id: "twitterUsername",
                name: "twitterUsername",
                type: "text",
                className: "form-input",
                placeholder: "Without the @"
              },
              void 0,
              !1,
              {
                fileName: "app/components/Profile/Form/index.tsx",
                lineNumber: 64,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/Profile/Form/index.tsx",
            lineNumber: 62,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Profile/Form/index.tsx",
          lineNumber: 48,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV6("div", { className: "form-control", children: [
          /* @__PURE__ */ jsxDEV6("label", { htmlFor: "bio", children: "Bio" }, void 0, !1, {
            fileName: "app/components/Profile/Form/index.tsx",
            lineNumber: 76,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV6(
            "textarea",
            {
              onChange: (e) => updateField({ bio: e.target.value }),
              value: profileData?.bio,
              name: "bio",
              id: "bio",
              cols: 30,
              rows: 3,
              className: "form-textarea"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Profile/Form/index.tsx",
              lineNumber: 77,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/Profile/Form/index.tsx",
          lineNumber: 75,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV6("div", { className: "form-group", children: [
          /* @__PURE__ */ jsxDEV6("div", { className: "form-control", children: [
            /* @__PURE__ */ jsxDEV6("label", { htmlFor: "job-title", children: "Job title" }, void 0, !1, {
              fileName: "app/components/Profile/Form/index.tsx",
              lineNumber: 89,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV6(
              "input",
              {
                onChange: (e) => updateField({ title: e.target.value }),
                value: profileData?.title,
                id: "job-title",
                name: "job-title",
                type: "text",
                className: "form-input"
              },
              void 0,
              !1,
              {
                fileName: "app/components/Profile/Form/index.tsx",
                lineNumber: 90,
                columnNumber: 19
              },
              this
            ),
            errors?.title ? /* @__PURE__ */ jsxDEV6("em", { className: "text-red-600", children: errors.title }, void 0, !1, {
              fileName: "app/components/Profile/Form/index.tsx",
              lineNumber: 98,
              columnNumber: 36
            }, this) : null
          ] }, void 0, !0, {
            fileName: "app/components/Profile/Form/index.tsx",
            lineNumber: 88,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV6("div", { className: "form-control", children: [
            /* @__PURE__ */ jsxDEV6("label", { htmlFor: "website", children: "Website link" }, void 0, !1, {
              fileName: "app/components/Profile/Form/index.tsx",
              lineNumber: 101,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV6(
              "input",
              {
                onChange: (e) => updateField({ websiteUrl: e.target.value }),
                value: profileData?.websiteUrl,
                id: "website",
                name: "website",
                type: "url",
                className: "form-input"
              },
              void 0,
              !1,
              {
                fileName: "app/components/Profile/Form/index.tsx",
                lineNumber: 102,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/Profile/Form/index.tsx",
            lineNumber: 100,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Profile/Form/index.tsx",
          lineNumber: 87,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Profile/Form/index.tsx",
        lineNumber: 47,
        columnNumber: 13
      }, this),
      action7 != "edit" && // user auth input forms
      /* @__PURE__ */ jsxDEV6(Fragment2, { children: [
        /* @__PURE__ */ jsxDEV6("div", { className: "form-control", children: [
          /* @__PURE__ */ jsxDEV6("label", { htmlFor: "job-title", children: "Email" }, void 0, !1, {
            fileName: "app/components/Profile/Form/index.tsx",
            lineNumber: 118,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV6(
            "input",
            {
              onChange: (e) => setAuthData((data) => ({ ...data, email: e.target.value })),
              value: authData.email,
              id: "email",
              name: "email",
              type: "email",
              className: "form-input",
              required: !0
            },
            void 0,
            !1,
            {
              fileName: "app/components/Profile/Form/index.tsx",
              lineNumber: 119,
              columnNumber: 17
            },
            this
          ),
          errors?.email ? /* @__PURE__ */ jsxDEV6("em", { className: "text-red-600", children: errors.email }, void 0, !1, {
            fileName: "app/components/Profile/Form/index.tsx",
            lineNumber: 128,
            columnNumber: 34
          }, this) : null
        ] }, void 0, !0, {
          fileName: "app/components/Profile/Form/index.tsx",
          lineNumber: 117,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV6("div", { className: "form-control", children: [
          /* @__PURE__ */ jsxDEV6("label", { htmlFor: "job-title", children: "Password" }, void 0, !1, {
            fileName: "app/components/Profile/Form/index.tsx",
            lineNumber: 131,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV6(
            "input",
            {
              onChange: (e) => setAuthData((data) => ({ ...data, password: e.target.value })),
              value: authData.password,
              id: "password",
              name: "password",
              type: "password",
              className: "form-input"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Profile/Form/index.tsx",
              lineNumber: 132,
              columnNumber: 17
            },
            this
          ),
          errors?.password ? /* @__PURE__ */ jsxDEV6("em", { className: "text-red-600", children: errors.password }, void 0, !1, {
            fileName: "app/components/Profile/Form/index.tsx",
            lineNumber: 140,
            columnNumber: 37
          }, this) : null
        ] }, void 0, !0, {
          fileName: "app/components/Profile/Form/index.tsx",
          lineNumber: 130,
          columnNumber: 15
        }, this),
        errors?.ValidationError ? /* @__PURE__ */ jsxDEV6("em", { className: "text-red-600", children: errors.ValidationError }, void 0, !1, {
          fileName: "app/components/Profile/Form/index.tsx",
          lineNumber: 142,
          columnNumber: 42
        }, this) : null,
        errors?.ApplicationError ? /* @__PURE__ */ jsxDEV6("em", { className: "text-red-600", children: errors.ApplicationError }, void 0, !1, {
          fileName: "app/components/Profile/Form/index.tsx",
          lineNumber: 143,
          columnNumber: 43
        }, this) : null
      ] }, void 0, !0, {
        fileName: "app/components/Profile/Form/index.tsx",
        lineNumber: 116,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV6("div", { className: "action-cont mt-4", children: /* @__PURE__ */ jsxDEV6("button", { className: "cta", children: [
        " ",
        navigation.state == "submitting" ? "Submitting" : "Submit",
        " "
      ] }, void 0, !0, {
        fileName: "app/components/Profile/Form/index.tsx",
        lineNumber: 148,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/Profile/Form/index.tsx",
        lineNumber: 147,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Profile/Form/index.tsx",
      lineNumber: 44,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Profile/Form/index.tsx",
    lineNumber: 42,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Profile/Form/index.tsx",
    lineNumber: 41,
    columnNumber: 5
  }, this);
}, Form_default = ProfileForm;

// app/routes/_auth.register.tsx
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
var action3 = async ({ request }) => {
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
    return json4(error);
  }
}, Register = () => {
  let errors = useActionData3();
  return console.log({ errors }), /* @__PURE__ */ jsxDEV7("section", { className: "site-section profiles-section", children: /* @__PURE__ */ jsxDEV7("div", { className: "wrapper", children: [
    /* @__PURE__ */ jsxDEV7("header", { className: "section-header", children: [
      /* @__PURE__ */ jsxDEV7("h2", { className: "text-4xl", children: "Register" }, void 0, !1, {
        fileName: "app/routes/_auth.register.tsx",
        lineNumber: 60,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV7("p", { children: "Create a new profile" }, void 0, !1, {
        fileName: "app/routes/_auth.register.tsx",
        lineNumber: 61,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_auth.register.tsx",
      lineNumber: 59,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV7(Form_default, { action: "create", errors }, void 0, !1, {
      fileName: "app/routes/_auth.register.tsx",
      lineNumber: 65,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_auth.register.tsx",
    lineNumber: 58,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_auth.register.tsx",
    lineNumber: 57,
    columnNumber: 5
  }, this);
}, auth_register_default = Register;

// app/routes/members._index.tsx
var members_index_exports = {};
__export(members_index_exports, {
  default: () => Members,
  loader: () => loader3
});
import { json as json5 } from "@remix-run/node";
import { useLoaderData as useLoaderData3 } from "@remix-run/react";

// app/components/Profile/Card/index.tsx
import { Link as Link2 } from "@remix-run/react";

// app/utils/shared/index.ts
var strapiUrl = "http://localhost:1337", getImgUrl = ({
  url,
  username
}) => url ? `${strapiUrl}${url}` : `https://ui-avatars.com/api/?name=${username?.replace(
  " ",
  "+"
)}&background=2563eb&color=fff`;

// app/components/Profile/Card/index.tsx
import { Fragment as Fragment3, jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
var ProfileCard = ({ profile, preview }) => /* @__PURE__ */ jsxDEV8(Fragment3, { children: /* @__PURE__ */ jsxDEV8("article", { className: `profile ${preview ? "preview" : ""}`, children: /* @__PURE__ */ jsxDEV8("div", { className: "wrapper", children: [
  /* @__PURE__ */ jsxDEV8("div", { className: "profile-pic-cont", children: /* @__PURE__ */ jsxDEV8("figure", { className: "profile-pic img-cont", children: /* @__PURE__ */ jsxDEV8(
    "img",
    {
      src: getImgUrl({ url: profile.profilePic?.formats?.small?.url, username: profile.username }),
      alt: `A photo of ${profile.username}`,
      className: "w-full"
    },
    void 0,
    !1,
    {
      fileName: "app/components/Profile/Card/index.tsx",
      lineNumber: 20,
      columnNumber: 15
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/Profile/Card/index.tsx",
    lineNumber: 19,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/components/Profile/Card/index.tsx",
    lineNumber: 18,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ jsxDEV8("div", { className: "profile-content", children: [
    /* @__PURE__ */ jsxDEV8("header", { className: "profile-header ", children: [
      /* @__PURE__ */ jsxDEV8("h3", { className: "username", children: profile.username }, void 0, !1, {
        fileName: "app/components/Profile/Card/index.tsx",
        lineNumber: 29,
        columnNumber: 15
      }, this),
      profile.twitterUsername && /* @__PURE__ */ jsxDEV8("a", { href: "https://twitter.com/miracleio", className: "twitter link", children: [
        "@",
        profile.twitterUsername
      ] }, void 0, !0, {
        fileName: "app/components/Profile/Card/index.tsx",
        lineNumber: 33,
        columnNumber: 17
      }, this),
      profile.bio && /* @__PURE__ */ jsxDEV8("p", { className: "bio", children: profile.bio }, void 0, !1, {
        fileName: "app/components/Profile/Card/index.tsx",
        lineNumber: 39,
        columnNumber: 31
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Profile/Card/index.tsx",
      lineNumber: 28,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV8("ul", { className: "links", children: [
      profile.title && /* @__PURE__ */ jsxDEV8("li", { className: "w-icon", children: [
        /* @__PURE__ */ jsxDEV8("svg", { className: "icon stroke", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ jsxDEV8(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Profile/Card/index.tsx",
            lineNumber: 46,
            columnNumber: 21
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/Profile/Card/index.tsx",
          lineNumber: 45,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ jsxDEV8("span", { children: [
          " ",
          profile.title,
          " "
        ] }, void 0, !0, {
          fileName: "app/components/Profile/Card/index.tsx",
          lineNumber: 52,
          columnNumber: 19
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Profile/Card/index.tsx",
        lineNumber: 44,
        columnNumber: 17
      }, this),
      profile.websiteUrl && /* @__PURE__ */ jsxDEV8("li", { className: "w-icon", children: [
        /* @__PURE__ */ jsxDEV8("svg", { className: "icon stroke", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ jsxDEV8(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Profile/Card/index.tsx",
            lineNumber: 60,
            columnNumber: 21
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/Profile/Card/index.tsx",
          lineNumber: 59,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ jsxDEV8("a", { href: "http://miracleio.me", target: "_blank", rel: "noopener noreferrer", className: "link", children: profile.websiteUrl }, void 0, !1, {
          fileName: "app/components/Profile/Card/index.tsx",
          lineNumber: 66,
          columnNumber: 19
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Profile/Card/index.tsx",
        lineNumber: 58,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Profile/Card/index.tsx",
      lineNumber: 41,
      columnNumber: 13
    }, this),
    !preview && /* @__PURE__ */ jsxDEV8("footer", { className: "grow flex items-end justify-end pt-4", children: profile?.slug && /* @__PURE__ */ jsxDEV8(Link2, { to: `/members/${profile?.slug}`, children: /* @__PURE__ */ jsxDEV8("button", { className: "cta w-icon", children: [
      /* @__PURE__ */ jsxDEV8("span", { children: "View profile" }, void 0, !1, {
        fileName: "app/components/Profile/Card/index.tsx",
        lineNumber: 77,
        columnNumber: 23
      }, this),
      /* @__PURE__ */ jsxDEV8("svg", { xmlns: "http://www.w3.org/2000/svg", className: "icon stroke", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ jsxDEV8("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M17 8l4 4m0 0l-4 4m4-4H3" }, void 0, !1, {
        fileName: "app/components/Profile/Card/index.tsx",
        lineNumber: 79,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "app/components/Profile/Card/index.tsx",
        lineNumber: 78,
        columnNumber: 23
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Profile/Card/index.tsx",
      lineNumber: 76,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/components/Profile/Card/index.tsx",
      lineNumber: 75,
      columnNumber: 19
    }, this) }, void 0, !1, {
      fileName: "app/components/Profile/Card/index.tsx",
      lineNumber: 73,
      columnNumber: 15
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Profile/Card/index.tsx",
    lineNumber: 27,
    columnNumber: 11
  }, this)
] }, void 0, !0, {
  fileName: "app/components/Profile/Card/index.tsx",
  lineNumber: 17,
  columnNumber: 9
}, this) }, void 0, !1, {
  fileName: "app/components/Profile/Card/index.tsx",
  lineNumber: 16,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/components/Profile/Card/index.tsx",
  lineNumber: 14,
  columnNumber: 5
}, this), Card_default = ProfileCard;

// app/routes/members._index.tsx
import { jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
var loader3 = async () => json5({
  profiles: await getProfiles()
});
function Members() {
  let { profiles } = useLoaderData3();
  return /* @__PURE__ */ jsxDEV9("section", { className: "site-section profiles-section", children: /* @__PURE__ */ jsxDEV9("div", { children: [
    /* @__PURE__ */ jsxDEV9("header", { className: "section-header", children: [
      /* @__PURE__ */ jsxDEV9("h2", { className: "text-4xl", children: "Explore profiles" }, void 0, !1, {
        fileName: "app/routes/members._index.tsx",
        lineNumber: 29,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV9("p", { children: "Find and connect with amazing people all over the world!" }, void 0, !1, {
        fileName: "app/routes/members._index.tsx",
        lineNumber: 30,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/members._index.tsx",
      lineNumber: 28,
      columnNumber: 9
    }, this),
    profiles.length > 0 ? /* @__PURE__ */ jsxDEV9("ul", { className: "profiles-list", children: profiles.map((profile) => /* @__PURE__ */ jsxDEV9("li", { className: "profile-item", children: /* @__PURE__ */ jsxDEV9(Card_default, { profile, preview: !1 }, void 0, !1, {
      fileName: "app/routes/members._index.tsx",
      lineNumber: 36,
      columnNumber: 17
    }, this) }, profile.id, !1, {
      fileName: "app/routes/members._index.tsx",
      lineNumber: 35,
      columnNumber: 15
    }, this)) }, void 0, !1, {
      fileName: "app/routes/members._index.tsx",
      lineNumber: 33,
      columnNumber: 11
    }, this) : /* @__PURE__ */ jsxDEV9("p", { children: "No profiles yet \u{1F642}" }, void 0, !1, {
      fileName: "app/routes/members._index.tsx",
      lineNumber: 41,
      columnNumber: 11
    }, this),
    " "
  ] }, void 0, !0, {
    fileName: "app/routes/members._index.tsx",
    lineNumber: 27,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/members._index.tsx",
    lineNumber: 26,
    columnNumber: 5
  }, this);
}

// app/routes/members.$slug.tsx
var members_slug_exports = {};
__export(members_slug_exports, {
  action: () => action4,
  default: () => members_slug_default,
  loader: () => loader4
});
import { json as json6 } from "@remix-run/node";
import { useLoaderData as useLoaderData4, useActionData as useActionData4 } from "@remix-run/react";
import { useState as useState2 } from "react";
import { Fragment as Fragment4, jsxDEV as jsxDEV10 } from "react/jsx-dev-runtime";
var loader4 = async ({ params, request }) => json6({
  userData: await getUserData(request),
  profile: await getProfileBySlug(params.slug)
}), action4 = async ({ request }) => {
  let data = await getUserData(request), formData = await request.formData(), id = formData.get("id"), username = formData.get("username"), twitterUsername = formData.get("twitterUsername"), bio = formData.get("bio"), title = formData.get("job-title"), websiteUrl = formData.get("website");
  console.log({ id, username, twitterUsername, bio, title, websiteUrl });
  let errors = {
    id: id ? null : "Id is required",
    username: username ? null : "username is required",
    title: title ? null : "title is required"
  };
  return Object.values(errors).some((errorMessage) => errorMessage) ? json6(errors) : (await updateProfile({ id, username, twitterUsername, bio, title, websiteUrl }, data?.jwt), null);
}, Profile = () => {
  let { profile, userData } = useLoaderData4(), errors = useActionData4(), [profileData, setprofileData] = useState2(profile), [isEditing, setIsEditing] = useState2(!1);
  return console.log({ userData, profile }), /* @__PURE__ */ jsxDEV10("section", { className: "site-section", children: /* @__PURE__ */ jsxDEV10("div", { className: "wrapper flex items-center py-16 min-h-[calc(100vh-4rem)]", children: /* @__PURE__ */ jsxDEV10("div", { className: "profile-cont w-full max-w-5xl m-auto", children: [
    profileData ? /* @__PURE__ */ jsxDEV10(Fragment4, { children: [
      /* @__PURE__ */ jsxDEV10(Card_default, { profile: profileData, preview: !0 }, void 0, !1, {
        fileName: "app/routes/members.$slug.tsx",
        lineNumber: 99,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV10("ul", { className: "actions", children: [
        /* @__PURE__ */ jsxDEV10("li", { className: "action", children: /* @__PURE__ */ jsxDEV10("button", { className: "cta w-icon", children: [
          /* @__PURE__ */ jsxDEV10("svg", { xmlns: "http://www.w3.org/2000/svg", className: "icon stroke", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ jsxDEV10(
            "path",
            {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/members.$slug.tsx",
              lineNumber: 106,
              columnNumber: 23
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/members.$slug.tsx",
            lineNumber: 105,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV10("span", { children: "Share" }, void 0, !1, {
            fileName: "app/routes/members.$slug.tsx",
            lineNumber: 112,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/members.$slug.tsx",
          lineNumber: 104,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/routes/members.$slug.tsx",
          lineNumber: 103,
          columnNumber: 17
        }, this),
        userData?.user?.id == profile.id && /* @__PURE__ */ jsxDEV10("li", { className: "action", children: /* @__PURE__ */ jsxDEV10("button", { onClick: () => setIsEditing(!isEditing), className: "cta w-icon", children: [
          isEditing ? /* @__PURE__ */ jsxDEV10("svg", { xmlns: "http://www.w3.org/2000/svg", className: "icon stroke", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ jsxDEV10("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" }, void 0, !1, {
            fileName: "app/routes/members.$slug.tsx",
            lineNumber: 128,
            columnNumber: 27
          }, this) }, void 0, !1, {
            fileName: "app/routes/members.$slug.tsx",
            lineNumber: 127,
            columnNumber: 25
          }, this) : /* @__PURE__ */ jsxDEV10("svg", { xmlns: "http://www.w3.org/2000/svg", className: "icon stroke", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ jsxDEV10(
            "path",
            {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/members.$slug.tsx",
              lineNumber: 120,
              columnNumber: 27
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/members.$slug.tsx",
            lineNumber: 119,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ jsxDEV10("span", { children: isEditing ? "Cancel" : "Edit" }, void 0, !1, {
            fileName: "app/routes/members.$slug.tsx",
            lineNumber: 132,
            columnNumber: 23
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/members.$slug.tsx",
          lineNumber: 117,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/members.$slug.tsx",
          lineNumber: 116,
          columnNumber: 19
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/members.$slug.tsx",
        lineNumber: 102,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/members.$slug.tsx",
      lineNumber: 97,
      columnNumber: 13
    }, this) : /* @__PURE__ */ jsxDEV10("p", { className: "text-center", children: "Oops, that profile doesn't exist... yet" }, void 0, !1, {
      fileName: "app/routes/members.$slug.tsx",
      lineNumber: 139,
      columnNumber: 13
    }, this),
    userData?.user?.id == profile?.id && isEditing && /* @__PURE__ */ jsxDEV10(Form_default, { errors, profile, action: "edit", onModifyData: (value) => setprofileData(value) }, void 0, !1, {
      fileName: "app/routes/members.$slug.tsx",
      lineNumber: 144,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/members.$slug.tsx",
    lineNumber: 95,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/members.$slug.tsx",
    lineNumber: 94,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/members.$slug.tsx",
    lineNumber: 93,
    columnNumber: 5
  }, this);
}, members_slug_default = Profile;

// app/routes/_auth.logout.tsx
var auth_logout_exports = {};
__export(auth_logout_exports, {
  action: () => action5,
  loader: () => loader5
});
import { redirect as redirect3 } from "@remix-run/node";
var action5 = async ({ request }) => logout(request), loader5 = async () => redirect3("/");

// app/routes/_auth.login.tsx
var auth_login_exports = {};
__export(auth_login_exports, {
  action: () => action6,
  default: () => auth_login_default
});
import { json as json7 } from "@remix-run/node";
import { useActionData as useActionData5 } from "@remix-run/react";
import { jsxDEV as jsxDEV11 } from "react/jsx-dev-runtime";
var action6 = async ({ request }) => {
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
    return json7(error);
  }
}, Login = () => {
  let errors = useActionData5();
  return console.log({ errors }), /* @__PURE__ */ jsxDEV11("section", { className: "site-section profiles-section", children: /* @__PURE__ */ jsxDEV11("div", { className: "wrapper", children: [
    /* @__PURE__ */ jsxDEV11("header", { className: "section-header", children: [
      /* @__PURE__ */ jsxDEV11("h2", { className: "text-4xl", children: "Sign in " }, void 0, !1, {
        fileName: "app/routes/_auth.login.tsx",
        lineNumber: 61,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV11("p", { children: "You have to log in to edit your profile" }, void 0, !1, {
        fileName: "app/routes/_auth.login.tsx",
        lineNumber: 62,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_auth.login.tsx",
      lineNumber: 60,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV11(Form_default, { action: "login", errors }, void 0, !1, {
      fileName: "app/routes/_auth.login.tsx",
      lineNumber: 66,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_auth.login.tsx",
    lineNumber: 59,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_auth.login.tsx",
    lineNumber: 58,
    columnNumber: 5
  }, this);
}, auth_login_default = Login;

// app/routes/blog.$id.tsx
var blog_id_exports = {};
__export(blog_id_exports, {
  default: () => blog_id_default,
  loader: () => loader6
});
import { json as json8 } from "@remix-run/node";
import { useLoaderData as useLoaderData5 } from "@remix-run/react";

// app/models/blog.server.ts
var strapiApiUrl2 = process.env.STRAPI_API_URL, getBlog = async () => (await (await fetch(`${strapiApiUrl2}/blogs/?populate=hero`)).json()).data, getBlogPost = async (id) => (await (await fetch(`${strapiApiUrl2}/blogs/${id}`)).json()).data;

// app/routes/blog.$id.tsx
import { Fragment as Fragment5, jsxDEV as jsxDEV12 } from "react/jsx-dev-runtime";
var loader6 = async ({ params }) => json8({
  post: await getBlogPost(params.id)
}), BlogPost = () => {
  let { post: { attributes } } = useLoaderData5();
  return console.log(attributes), /* @__PURE__ */ jsxDEV12("section", { className: "site-section", children: /* @__PURE__ */ jsxDEV12("div", { className: "wrapper flex items-center py-16 min-h-[calc(100vh-4rem)]", children: /* @__PURE__ */ jsxDEV12("div", { className: "profile-cont w-full max-w-5xl m-auto", children: attributes ? /* @__PURE__ */ jsxDEV12(Fragment5, { children: /* @__PURE__ */ jsxDEV12("h2", { children: attributes.title }, void 0, !1, {
    fileName: "app/routes/blog.$id.tsx",
    lineNumber: 27,
    columnNumber: 29
  }, this) }, void 0, !1, {
    fileName: "app/routes/blog.$id.tsx",
    lineNumber: 26,
    columnNumber: 25
  }, this) : /* @__PURE__ */ jsxDEV12("p", { className: "text-center", children: "Oops, that post doesn't exist... yet" }, void 0, !1, {
    fileName: "app/routes/blog.$id.tsx",
    lineNumber: 30,
    columnNumber: 25
  }, this) }, void 0, !1, {
    fileName: "app/routes/blog.$id.tsx",
    lineNumber: 24,
    columnNumber: 17
  }, this) }, void 0, !1, {
    fileName: "app/routes/blog.$id.tsx",
    lineNumber: 23,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/blog.$id.tsx",
    lineNumber: 22,
    columnNumber: 9
  }, this);
}, blog_id_default = BlogPost;

// app/routes/blog.all.tsx
var blog_all_exports = {};
__export(blog_all_exports, {
  default: () => Index,
  loader: () => loader7
});
import { json as json9 } from "@remix-run/node";
import { useLoaderData as useLoaderData6 } from "@remix-run/react";

// app/components/Blog/Card/index.tsx
import { Link as Link3 } from "@remix-run/react";
import { jsxDEV as jsxDEV13 } from "react/jsx-dev-runtime";
function BlogCard({ post }) {
  let data = post.attributes;
  return /* @__PURE__ */ jsxDEV13("div", { className: "card", children: /* @__PURE__ */ jsxDEV13("div", { className: "card-content", children: [
    /* @__PURE__ */ jsxDEV13("div", { className: "card-img", children: /* @__PURE__ */ jsxDEV13(
      "img",
      {
        src: `${strapiUrl}${data.hero.data.attributes.url}`,
        alt: data.hero.data.attributes.alternativeText
      },
      void 0,
      !1,
      {
        fileName: "app/components/Blog/Card/index.tsx",
        lineNumber: 10,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/Blog/Card/index.tsx",
      lineNumber: 9,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV13("div", { className: "card-details", children: [
      /* @__PURE__ */ jsxDEV13(Link3, { to: `/blog/${post.id}`, className: "card-title", children: data.title }, void 0, !1, {
        fileName: "app/components/Blog/Card/index.tsx",
        lineNumber: 17,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV13("p", { className: "card-excerpt", children: data.excerpt }, void 0, !1, {
        fileName: "app/components/Blog/Card/index.tsx",
        lineNumber: 21,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Blog/Card/index.tsx",
      lineNumber: 15,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Blog/Card/index.tsx",
    lineNumber: 8,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Blog/Card/index.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/routes/blog.all.tsx
import { jsxDEV as jsxDEV14 } from "react/jsx-dev-runtime";
var loader7 = async () => json9({
  blog: await getBlog()
});
function Index() {
  let { blog } = useLoaderData6();
  return /* @__PURE__ */ jsxDEV14("section", { className: "site-section profiles-section", children: /* @__PURE__ */ jsxDEV14("div", { children: [
    /* @__PURE__ */ jsxDEV14("header", { className: "section-header", children: [
      /* @__PURE__ */ jsxDEV14("h2", { className: "text-4xl", children: "Blog!" }, void 0, !1, {
        fileName: "app/routes/blog.all.tsx",
        lineNumber: 24,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV14("p", { children: "Welcome to the new blog" }, void 0, !1, {
        fileName: "app/routes/blog.all.tsx",
        lineNumber: 25,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/blog.all.tsx",
      lineNumber: 23,
      columnNumber: 9
    }, this),
    blog.length > 0 ? /* @__PURE__ */ jsxDEV14("ul", { className: "profiles-list", children: blog.map((post) => /* @__PURE__ */ jsxDEV14("li", { className: "profile-item", children: /* @__PURE__ */ jsxDEV14(BlogCard, { post }, void 0, !1, {
      fileName: "app/routes/blog.all.tsx",
      lineNumber: 31,
      columnNumber: 17
    }, this) }, post.id, !1, {
      fileName: "app/routes/blog.all.tsx",
      lineNumber: 30,
      columnNumber: 15
    }, this)) }, void 0, !1, {
      fileName: "app/routes/blog.all.tsx",
      lineNumber: 28,
      columnNumber: 11
    }, this) : /* @__PURE__ */ jsxDEV14("p", { children: "No blog posts yet \u{1F642}" }, void 0, !1, {
      fileName: "app/routes/blog.all.tsx",
      lineNumber: 36,
      columnNumber: 11
    }, this),
    " "
  ] }, void 0, !0, {
    fileName: "app/routes/blog.all.tsx",
    lineNumber: 22,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/blog.all.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index2,
  loader: () => loader8
});
import { json as json10 } from "@remix-run/node";
import { jsxDEV as jsxDEV15 } from "react/jsx-dev-runtime";
var loader8 = async () => json10({
  profiles: await getProfiles()
});
function Index2() {
  return /* @__PURE__ */ jsxDEV15("section", { className: "site-section profiles-section", children: /* @__PURE__ */ jsxDEV15("div", { children: /* @__PURE__ */ jsxDEV15("header", { className: "section-header", children: [
    /* @__PURE__ */ jsxDEV15("h2", { className: "text-4xl", children: "Dashboard!" }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 27,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV15("p", { children: "Welcome to the new hub" }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 28,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 26,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 25,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-PGYEBOCP.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-RZPHRSLC.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-CQXNOMFL.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-SPN7RCVH.js", imports: ["/build/_shared/chunk-V22J52NZ.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/_auth.forgotPassword": { id: "routes/_auth.forgotPassword", parentId: "root", path: "forgotPassword", index: void 0, caseSensitive: void 0, module: "/build/routes/_auth.forgotPassword-7ZYH6QT5.js", imports: ["/build/_shared/chunk-JUU7V43I.js"], hasAction: !0, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_auth.login": { id: "routes/_auth.login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/_auth.login-GXF7UWZR.js", imports: ["/build/_shared/chunk-PF5UGGKY.js", "/build/_shared/chunk-JUU7V43I.js"], hasAction: !0, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_auth.logout": { id: "routes/_auth.logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/_auth.logout-TQQKM25O.js", imports: void 0, hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/_auth.register": { id: "routes/_auth.register", parentId: "root", path: "register", index: void 0, caseSensitive: void 0, module: "/build/routes/_auth.register-J65OYWMM.js", imports: ["/build/_shared/chunk-PF5UGGKY.js", "/build/_shared/chunk-JUU7V43I.js"], hasAction: !0, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_auth.resetPassword": { id: "routes/_auth.resetPassword", parentId: "root", path: "resetPassword", index: void 0, caseSensitive: void 0, module: "/build/routes/_auth.resetPassword-Z7PS3WTV.js", imports: ["/build/_shared/chunk-JUU7V43I.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-YSOF37DW.js", imports: ["/build/_shared/chunk-JUU7V43I.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/blog.$id": { id: "routes/blog.$id", parentId: "root", path: "blog/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/blog.$id-ND3NFL4F.js", imports: ["/build/_shared/chunk-SFZDIPEC.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/blog.all": { id: "routes/blog.all", parentId: "root", path: "blog/all", index: void 0, caseSensitive: void 0, module: "/build/routes/blog.all-BFQST4UB.js", imports: ["/build/_shared/chunk-SFZDIPEC.js", "/build/_shared/chunk-GDFLR6UG.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/members.$slug": { id: "routes/members.$slug", parentId: "root", path: "members/:slug", index: void 0, caseSensitive: void 0, module: "/build/routes/members.$slug-NXXWTV7Y.js", imports: ["/build/_shared/chunk-PF5UGGKY.js", "/build/_shared/chunk-DYRTJG6H.js", "/build/_shared/chunk-GDFLR6UG.js", "/build/_shared/chunk-JUU7V43I.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/members._index": { id: "routes/members._index", parentId: "root", path: "members", index: !0, caseSensitive: void 0, module: "/build/routes/members._index-WEK4ZXQU.js", imports: ["/build/_shared/chunk-DYRTJG6H.js", "/build/_shared/chunk-GDFLR6UG.js", "/build/_shared/chunk-JUU7V43I.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 } }, version: "3734e4f8", hmr: { runtime: "/build/_shared/chunk-CQXNOMFL.js", timestamp: 1699373413020 }, url: "/build/manifest-3734E4F8.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/_auth.forgotPassword": {
    id: "routes/_auth.forgotPassword",
    parentId: "root",
    path: "forgotPassword",
    index: void 0,
    caseSensitive: void 0,
    module: auth_forgotPassword_exports
  },
  "routes/_auth.resetPassword": {
    id: "routes/_auth.resetPassword",
    parentId: "root",
    path: "resetPassword",
    index: void 0,
    caseSensitive: void 0,
    module: auth_resetPassword_exports
  },
  "routes/_auth.register": {
    id: "routes/_auth.register",
    parentId: "root",
    path: "register",
    index: void 0,
    caseSensitive: void 0,
    module: auth_register_exports
  },
  "routes/members._index": {
    id: "routes/members._index",
    parentId: "root",
    path: "members",
    index: !0,
    caseSensitive: void 0,
    module: members_index_exports
  },
  "routes/members.$slug": {
    id: "routes/members.$slug",
    parentId: "root",
    path: "members/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: members_slug_exports
  },
  "routes/_auth.logout": {
    id: "routes/_auth.logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: auth_logout_exports
  },
  "routes/_auth.login": {
    id: "routes/_auth.login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: auth_login_exports
  },
  "routes/blog.$id": {
    id: "routes/blog.$id",
    parentId: "root",
    path: "blog/:id",
    index: void 0,
    caseSensitive: void 0,
    module: blog_id_exports
  },
  "routes/blog.all": {
    id: "routes/blog.all",
    parentId: "root",
    path: "blog/all",
    index: void 0,
    caseSensitive: void 0,
    module: blog_all_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
