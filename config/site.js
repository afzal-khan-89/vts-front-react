import { Routes } from "./routes";

export const siteSettings = {
  name: "VTS Application",
  description: "",
  logo: {
    url: "/logo.jpg",
    alt: "VTS shop",
    href: "/",
    width: 128,
    height: 40,
  },
  defaultLanguage: "en",
  //   authorizedLinks: [
  //     { href: Routes.profile, label: "auth-menu-profile" },
  //     { href: Routes.orders, label: "auth-menu-my-orders" },
  //     { href: Routes.wishlists, label: "profile-sidebar-my-wishlist" },
  //     { href: Routes.checkout, label: "auth-menu-checkout" },
  //   ],
  //   authorizedLinksMobile: [
  //     { href: Routes.profile, label: "auth-menu-profile" },
  //     { href: Routes.orders, label: "auth-menu-my-orders" },
  //     { href: Routes.cards, label: "profile-sidebar-my-cards" },
  //     { href: Routes.wishlists, label: "profile-sidebar-my-wishlist" },
  //     { href: Routes.questions, label: "profile-sidebar-my-questions" },
  //     { href: Routes.refunds, label: "text-my-refunds" },
  //     { href: Routes.reports, label: "profile-sidebar-my-reports" },
  //     { href: Routes.checkout, label: "auth-menu-checkout" },
  //     { href: Routes.changePassword, label: "profile-sidebar-password" },
  //   ],
  headerLinks: [
    { href: Routes.home, icon: null, label: "Home" },
    { href: Routes.tracking, icon: null, label: "Tracking" },
    { href: Routes.products, label: "Products" },
    { href: Routes.reports, label: "Reports" },
    { href: Routes.opeartion, label: "Opeartion" },
    { href: Routes.accounting, label: "Accounting" },
    { href: Routes.serviceCharge, label: "Service Charge" },
    // { href: Routes.contact, label: "Contact" },
    { href: Routes.home, label: "Product 1" },
    { href: Routes.home, label: "Product 2" },
    { href: Routes.home, label: "Product 3" },
    { href: Routes.home, label: "Product 4" },
    { href: Routes.home, label: "Product 5" },
    { href: Routes.home, label: "Product 6" },
  ],
  footer: {
    copyright: {
      name: "VTS Application",
      href: "https://google.com/",
      description: "All rights reserved worldwide",
    },
    address: "Modammadpur, Dhaka, Bangladesh",
    email: "imkawsar007@gmail.com",
    phone: "+880-1751108400",
    location: {
      // lat: 42.9585979, will be replaced
      // lng: -76.9087202, will be replaced
      zip: null,
      city: "Dhaka",
      state: "Dhaka",
      country: "Bangladesh",
      formattedAddress:
        "VTS Application./@23.7794254,90.423255,17z/data=!3m1!4b1!4m6!3m5!1s0x3755c79abfd93947:0xdc95d7342dc18c32!8m2!3d23.7794205!4d90.4258299!16s%2Fg%2F11rhylfvfd?entry=ttu",
    },
    menus: [
      {
        title: "Explore",
        links: [
          {
            name: "Shops",
            href: Routes.shops,
          },
          {
            name: "Authors",
            href: Routes.authors,
          },
          {
            name: "Flash Deals",
            href: Routes?.flashSale,
          },
          {
            name: "Coupon",
            href: Routes.coupons,
          },
        ],
      },
      {
        title: "Customer Service",
        links: [
          {
            name: "FAQ",
            href: Routes.faq,
          },
          {
            name: "Vendor Refund Policies",
            href: Routes.vendorRefundPolicies,
          },
          {
            name: "Customer Refund Policies",
            href: Routes.customerRefundPolicies,
          },
        ],
      },
      {
        title: "Our Information",
        links: [
          {
            name: "Manufacturers",
            href: Routes?.manufacturers,
          },
          {
            name: "Privacy Policies",
            href: Routes.privacy,
          },
          {
            name: "Terms Condition",
            href: Routes.terms,
          },
          {
            name: "Contact Us",
            href: Routes.contactUs,
          },
        ],
      },
    ],
  },
};
