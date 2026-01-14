import { c as createComponent, m as maybeRenderHead, d as addAttribute, f as renderSlot, b as renderTemplate, r as renderComponent, e as createAstro, g as renderHead } from '../chunks/astro/server_D7iSzgVg.mjs';
import 'clsx';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useState } from 'react';
import { s as supabase } from '../chunks/supabase_Be65Jajg.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

let className = "";
const $$VerticalNav = createComponent(($$result, $$props, $$slots) => {
  const links = [
    { name: "Home", href: "/home" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
    { name: "Services", href: "/services" }
  ];
  return renderTemplate`${maybeRenderHead()}<nav${addAttribute(`flex flex-col h-full bg-white border-r border-gray-200 p-6 w-72 max-w-xs overflow-y-auto ${className}`, "class")}> <!-- Logo --> <a href="/home" class="mb-8 flex items-center gap-2 font-bold text-lg bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
DevPath
</a> <!-- Navigation Links --> <ul class="flex-1 flex flex-col gap-1"> ${links.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")} class="block px-4 py-3 rounded-lg font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 active:bg-indigo-100 transition-all duration-200"> ${link.name} </a> </li>`)} </ul> <!-- Profile Section --> <div class="border-t border-gray-200 pt-6 flex flex-col gap-4"> <div class="flex items-center gap-3 px-4 py-3 rounded-lg bg-indigo-50 border border-indigo-200"> <img src="https://i.pravatar.cc/40" alt="avatar" class="w-10 h-10 rounded-full object-cover ring-2 ring-indigo-300 flex-shrink-0"> <div class="flex-1 min-w-0"> <p class="font-semibold text-gray-900 text-sm truncate">Muneer Khan</p> <p class="text-xs text-gray-600">Admin Account</p> </div> </div> ${renderSlot($$result, $$slots["default"])} </div> </nav>`;
}, "C:/Users/MuhammadMuneerKhan/Desktop/ui-library/src/components/VerticalNav.astro", void 0);

function LogoutButton() {
  const [isLoading, setIsLoading] = useState(false);
  const handleLogout = async () => {
    setIsLoading(true);
    await supabase.auth.signOut();
    document.cookie = "sb-access-token=; path=/; max-age=0";
    document.cookie = "sb-refresh-token=; path=/; max-age=0";
    setTimeout(() => {
      window.location.assign("/login");
    }, 300);
  };
  return /* @__PURE__ */ jsx(
    "button",
    {
      onClick: handleLogout,
      disabled: isLoading,
      type: "button",
      className: "w-full px-4 py-3 rounded-lg font-semibold text-white bg-linear-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2",
      children: isLoading ? /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsxs(
          "svg",
          {
            className: "w-5 h-5 animate-spin",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            children: [
              /* @__PURE__ */ jsx(
                "circle",
                {
                  className: "opacity-25",
                  cx: "12",
                  cy: "12",
                  r: "10",
                  stroke: "currentColor",
                  strokeWidth: "4"
                }
              ),
              /* @__PURE__ */ jsx(
                "path",
                {
                  className: "opacity-75",
                  fill: "currentColor",
                  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                }
              )
            ]
          }
        ),
        "Logging out..."
      ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(
          "svg",
          {
            className: "w-5 h-5",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: /* @__PURE__ */ jsx(
              "path",
              {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              }
            )
          }
        ),
        "Logout"
      ] })
    }
  );
}

const $$Sidebar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<aside class="h-screen max-w-xs flex flex-col fixed left-0 top-0"> ${renderComponent($$result, "VerticalNav", $$VerticalNav, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "LogoutButton", LogoutButton, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "C:/Users/MuhammadMuneerKhan/Desktop/ui-library/src/components/auth/LogoutButton.jsx", "client:component-export": "default" })} ` })} </aside>`;
}, "C:/Users/MuhammadMuneerKhan/Desktop/ui-library/src/layouts/Sidebar.astro", void 0);

const $$Astro = createAstro();
const $$DashboardLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$DashboardLayout;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><meta name="description"${addAttribute(description, "content")}>${renderHead()}</head> <body class="bg-gray-50"> <main> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "C:/Users/MuhammadMuneerKhan/Desktop/ui-library/src/layouts/DashboardLayout.astro", void 0);

const prerender = false;
const $$Dashboard = createComponent(($$result, $$props, $$slots) => {
  const stats = [
    { title: "Total Revenue", value: "$45,231.89", change: "+20.1%", icon: "\u{1F4B0}", color: "indigo" },
    { title: "Active Users", value: "2,543", change: "+15.3%", icon: "\u{1F465}", color: "purple" },
    { title: "Total Orders", value: "1,234", change: "+8.2%", icon: "\u{1F4E6}", color: "blue" },
    { title: "Conversion Rate", value: "3.24%", change: "+2.5%", icon: "\u{1F4CA}", color: "green" }
  ];
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "Dashboard", "description": "Dashboard overview of key metrics and analytics." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex"> ${renderComponent($$result2, "Sidebar", $$Sidebar, {})} <main class="flex-1 ml-80"> <!-- Header --> <div class="bg-linear-to-r from-indigo-600 to-purple-600 px-8 py-12"> <h1 class="text-4xl font-bold text-white mb-2">Dashboard</h1> <p class="text-indigo-100">Welcome back! Here's your performance overview.</p> </div> <!-- Content --> <div class="p-8"> <!-- Stats Grid --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"> ${stats.map((stat) => renderTemplate`<div class="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100"> <div class="p-6"> <div class="flex items-center justify-between mb-4"> <h3 class="text-gray-600 font-medium text-sm">${stat.title}</h3> <span class="text-3xl">${stat.icon}</span> </div> <p class="text-3xl font-bold text-gray-900 mb-2">${stat.value}</p> <p class="text-sm font-medium text-green-600">${stat.change} from last month</p> </div> </div>`)} </div> <!-- Charts Section --> <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8"> <!-- Chart 1 --> <div class="lg:col-span-2 bg-white rounded-xl shadow-md border border-gray-100 p-6"> <h2 class="text-xl font-bold text-gray-900 mb-6">Revenue Trends</h2> <div class="h-64 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg flex items-center justify-center"> <p class="text-gray-500 font-medium">Chart will be displayed here</p> </div> </div> <!-- Chart 2 --> <div class="bg-white rounded-xl shadow-md border border-gray-100 p-6"> <h2 class="text-xl font-bold text-gray-900 mb-6">Top Products</h2> <div class="space-y-4"> ${[
    { name: "Product A", sales: 1250, percent: 45 },
    { name: "Product B", sales: 890, percent: 32 },
    { name: "Product C", sales: 620, percent: 23 }
  ].map((product) => renderTemplate`<div> <div class="flex justify-between mb-2"> <span class="font-medium text-gray-700">${product.name}</span> <span class="text-gray-600">${product.sales}</span> </div> <div class="w-full bg-gray-200 rounded-full h-2"> <div class="bg-linear-to-r from-indigo-600 to-purple-600 h-2 rounded-full"${addAttribute(`width: ${product.percent}%`, "style")}></div> </div> </div>`)} </div> </div> </div> <!-- Recent Orders --> <div class="bg-white rounded-xl shadow-md border border-gray-100 p-6"> <h2 class="text-xl font-bold text-gray-900 mb-6">Recent Orders</h2> <div class="overflow-x-auto"> <table class="w-full"> <thead> <tr class="border-b border-gray-200"> <th class="text-left py-3 px-4 font-semibold text-gray-700">Order ID</th> <th class="text-left py-3 px-4 font-semibold text-gray-700">Customer</th> <th class="text-left py-3 px-4 font-semibold text-gray-700">Amount</th> <th class="text-left py-3 px-4 font-semibold text-gray-700">Status</th> <th class="text-left py-3 px-4 font-semibold text-gray-700">Date</th> </tr> </thead> <tbody> ${[
    { id: "#12345", customer: "John Doe", amount: "$249.99", status: "Completed", date: "Jan 7, 2026" },
    { id: "#12346", customer: "Jane Smith", amount: "$189.99", status: "Processing", date: "Jan 6, 2026" },
    { id: "#12347", customer: "Bob Johnson", amount: "$329.99", status: "Pending", date: "Jan 5, 2026" },
    { id: "#12348", customer: "Alice Williams", amount: "$99.99", status: "Completed", date: "Jan 4, 2026" }
  ].map((order) => renderTemplate`<tr class="border-b border-gray-100 hover:bg-gray-50 transition-colors"> <td class="py-3 px-4 font-medium text-gray-900">${order.id}</td> <td class="py-3 px-4 text-gray-700">${order.customer}</td> <td class="py-3 px-4 font-semibold text-gray-900">${order.amount}</td> <td class="py-3 px-4"> <span${addAttribute(`px-3 py-1 rounded-full text-sm font-medium ${order.status === "Completed" ? "bg-green-100 text-green-700" : order.status === "Processing" ? "bg-blue-100 text-blue-700" : "bg-yellow-100 text-yellow-700"}`, "class")}> ${order.status} </span> </td> <td class="py-3 px-4 text-gray-600">${order.date}</td> </tr>`)} </tbody> </table> </div> </div> </div> </main> </div> ` })}`;
}, "C:/Users/MuhammadMuneerKhan/Desktop/ui-library/src/pages/dashboard.astro", void 0);

const $$file = "C:/Users/MuhammadMuneerKhan/Desktop/ui-library/src/pages/dashboard.astro";
const $$url = "/dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Dashboard,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
