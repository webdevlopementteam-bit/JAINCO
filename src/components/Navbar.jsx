"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubcategory, setActiveSubcategory] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileActiveCategory, setMobileActiveCategory] = useState(null);
  const [mobileActiveSubcategory, setMobileActiveSubcategory] = useState(null);
  const pathname = usePathname();

  const categories = [
    {
      name: "Electrical Welding Accessories",
      link: "/electrical-welding-accessories",
      subcategories: [
        { name: "Welding Holder", link: "/welding-holder" },
        { name: "Earthing Clamp", link: "/earthing-clamp" },
        { name: "Welding Cable", link: "/welding-cable" },
        {
          name: "Welding Hand Screen Welding Helmet Red Fibre",
          link: "/welding-hand-screen-welding-helmet-red-fibre",
        },
      ],
    },
    {
      name: "Gas Welding And Cutting Equipments",
      link: "/gas-welding-and-cutting-equipments",
      subcategories: [
        {
          name: "Pressure Regulator For Gas Cylinder",
          link: "/pressure-regulator-for-gas-cylinder",
          items: [
            { name: "Single Stage", link: "/single-stage" },
            { name: "Two Stage/Multi Stage", link: "/two-stage-multi-stage" },
          ],
        },
        {
          name: "Gas Cutting Torch",
          link: "/gas-cutting-torch",
          items: [
            {
              name: "Manual Cutting Blow Pipe",
              link: "/manual-cutting-blow-pipe",
            },
            { name: "NM Cutting Torch", link: "/nm-cutting-torch" },
          ],
        },
        { name: "Gas Cutting Nozzle", link: "/gas-cutting-nozzle" },
        { name: "Gas Welding Torch", link: "/gas-welding-torch" },
        { name: "Welding Hose", link: "/welding-hose" },
        { name: "Heating Torch", link: "/heating-torch" },
        { name: "Argon Co2 Flow Meter", link: "/argon-co2-flow-meter" },
      ],
    },
    {
      name: "Personal Protective Equipment",
      link: "/personal-protective-equipment",
      subcategories: [
        { name: "Hand Protection", link: "/hand-protection" },
        { name: "Head Protection", link: "/head-protection" },
        { name: "Face Protection", link: "/face-protection" },
        { name: "Eye Protection", link: "/eye-protection" },
        { name: "Hearing/Ear-Protection", link: "/hearing-protection" },
      ],
    },
    {
      name: "TIG",
      link: "/tig",
      subcategories: [
        { name: "Tig Torches", link: "/tig-torches" },
        { name: "Tig Spares", link: "/tig-spares" },
      ],
    },
    {
      name: "MIG/MAG",
      link: "/mig-mag",
      subcategories: [
        { name: "Mig Torches", link: "/mig-torches" },
        { name: "Mig Spares", link: "/mig-spares" },
        { name: "Mig Nozzles", link: "/mig-nozzles" },
      ],
    },
    {
      name: "Plasma",
      link: "/plasma",
      subcategories: [
        { name: "Plasma Torches", link: "/plasma-torches" },
        { name: "Plasma Consumable", link: "/plasma-consumable" },
      ],
    },
    {
      name: "Welding Machine",
      link: "/welding-machine",
      subcategories: [],
    },
    {
      name: "Other Spare Parts",
      link: "/other-spare-parts",
      subcategories: [{ name: "Cable Connector", link: "/cable-connector" }],
    },
  ];

  const isActive = (path) => pathname === path;

  // Helper to check if a category or any of its sub/nested children matches the current pathname
  const isCategoryOrChildActive = (cat) => {
    const catPath = cat.link;
    if (pathname === catPath || pathname.startsWith(`${catPath}/`)) return true;

    return cat.subcategories.some((sub) => {
      const subPath = sub.link;
      if (pathname === subPath || pathname.startsWith(`${subPath}/`))
        return true;

      if (sub.items) {
        return sub.items.some((item) => {
          const itemPath = item.link;
          return pathname === itemPath || pathname.startsWith(`${itemPath}/`);
        });
      }
      return false;
    });
  };

  // Helper specifically for subcategories to check if they or their nested items are active
  const isSubOrChildActive = (sub) => {
    const subPath = sub.link;
    if (pathname === subPath || pathname.startsWith(`${subPath}/`)) return true;

    if (sub.items) {
      return sub.items.some((item) => {
        const itemPath = item.link;
        return pathname === itemPath || pathname.startsWith(`${itemPath}/`);
      });
    }
    return false;
  };

  useEffect(() => {
    const currentCatIndex = categories.findIndex((cat) =>
      isCategoryOrChildActive(cat),
    );

    if (currentCatIndex !== -1) {
      setMobileActiveCategory(currentCatIndex);
    }
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-[#051132] border-b border-blue-900/40 shadow-lg">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between lg:grid lg:grid-cols-[1fr_auto_1fr] h-28">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center justify-start">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo/logo.png"
                alt="Jainco Logo"
                width={220}
                height={70}
                priority
                className="h-16 md:h-18 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center space-x-10">
            <Link
              href="/"
              className={`tracking-wide text-base lg:text-lg font-medium uppercase transition-colors py-4 ${
                isActive("/")
                  ? "text-[#facc15] font-semibold"
                  : "text-white hover:text-[#facc15]"
              }`}
            >
              Home
            </Link>

            <Link
              href="/about-us"
              className={`tracking-wide text-base lg:text-lg font-medium uppercase transition-colors py-4 ${
                isActive("/about-us")
                  ? "text-[#facc15] font-semibold"
                  : "text-white hover:text-[#facc15]"
              }`}
            >
              About Us
            </Link>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => {
                setIsDropdownOpen(false);
                setActiveCategory(null);
                setActiveSubcategory(null);
              }}
            >
              <button
                className={`flex items-center space-x-1 font-medium tracking-wide text-base lg:text-lg uppercase hover:text-[#facc15] transition-colors py-4 ${
                  pathname.startsWith("/products") ||
                  categories.some((cat) => isCategoryOrChildActive(cat))
                    ? "text-[#facc15] font-semibold"
                    : "text-white"
                }`}
              >
                <span>Products</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 w-80 bg-white text-gray-900 shadow-2xl rounded-md py-2 border border-gray-100 z-50">
                  {categories.map((cat, idx) => {
                    const catPath = cat.link;
                    const catActive = isCategoryOrChildActive(cat);
                    const hasSubcategories = cat.subcategories.length > 0;

                    return (
                      <div
                        key={idx}
                        className="relative group"
                        onMouseEnter={() => {
                          setActiveCategory(idx);
                          setActiveSubcategory(null);
                        }}
                        onMouseLeave={() => setActiveCategory(null)}
                      >
                        {hasSubcategories ? (
                          <div
                            className={`flex items-center justify-between px-4 py-3 cursor-pointer text-lg font-medium border-b border-gray-100 last:border-b-0 transition-colors group/link ${
                              catActive
                                ? "text-[#facc15] bg-[#061036] font-semibold"
                                : "hover:bg-[#061036] text-gray-800"
                            }`}
                          >
                            <span
                              className={`transition-colors ${
                                catActive
                                  ? "text-[#facc15] font-semibold"
                                  : "text-gray-800 group-hover/link:text-[#facc15]"
                              }`}
                            >
                              {cat.name}
                            </span>
                            <ChevronRight
                              className={`w-4 h-4 transition-colors ${
                                catActive
                                  ? "text-[#facc15]"
                                  : "text-gray-400 group-hover/link:text-[#facc15]"
                              }`}
                            />
                          </div>
                        ) : (
                          <Link
                            href={catPath}
                            className={`flex items-center justify-between px-4 py-3 cursor-pointer text-lg font-medium border-b border-gray-100 last:border-b-0 transition-colors group/link ${
                              catActive
                                ? "text-[#facc15] bg-[#061036] font-semibold"
                                : "hover:bg-[#061036] text-gray-800"
                            }`}
                          >
                            <span
                              className={`transition-colors ${
                                catActive
                                  ? "text-[#facc15] font-semibold"
                                  : "text-gray-800 group-hover/link:text-[#facc15]"
                              }`}
                            >
                              {cat.name}
                            </span>
                          </Link>
                        )}

                        {/* Level 2 Subcategories Menu */}
                        {activeCategory === idx &&
                          cat.subcategories.length > 0 && (
                            <div className="absolute top-0 left-full w-72 bg-white text-gray-900 shadow-2xl rounded-md py-2 border border-gray-100 z-50">
                              {cat.subcategories.map((sub, subIdx) => {
                                const subPath = sub.link;
                                const subActive = isSubOrChildActive(sub);
                                const hasNestedItems =
                                  sub.items && sub.items.length > 0;

                                return (
                                  <div
                                    key={subIdx}
                                    className="relative group/sub"
                                    onMouseEnter={() =>
                                      setActiveSubcategory(subIdx)
                                    }
                                    onMouseLeave={() =>
                                      setActiveSubcategory(null)
                                    }
                                  >
                                    {hasNestedItems ? (
                                      <div
                                        className={`flex items-center justify-between px-4 py-3 text-lg font-medium border-b border-gray-50 last:border-b-0 capitalize transition-colors hover:bg-[#061036] hover:text-[#facc15] cursor-pointer ${
                                          subActive
                                            ? "text-[#facc15] bg-[#061036] font-semibold"
                                            : "text-gray-700"
                                        }`}
                                      >
                                        <span>{sub.name}</span>
                                        <ChevronRight
                                          className={`w-4 h-4 transition-colors ${
                                            subActive
                                              ? "text-[#facc15]"
                                              : "text-gray-400 group-hover/sub:text-[#facc15]"
                                          }`}
                                        />
                                      </div>
                                    ) : (
                                      <Link
                                        href={subPath}
                                        className={`flex items-center justify-between px-4 py-3 text-lg font-medium border-b border-gray-50 last:border-b-0 capitalize transition-colors hover:bg-[#061036] hover:text-[#facc15] ${
                                          subActive
                                            ? "text-[#facc15] bg-[#061036] font-semibold"
                                            : "text-gray-700"
                                        }`}
                                      >
                                        <span>{sub.name}</span>
                                      </Link>
                                    )}

                                    {/* Level 3 Nested Menu */}
                                    {activeSubcategory === subIdx &&
                                      sub.items && (
                                        <div className="absolute top-0 left-full w-64 bg-white text-gray-900 shadow-2xl rounded-md py-2 border border-gray-100 z-50">
                                          {sub.items.map((nestedItem, nIdx) => {
                                            const nestedPath = nestedItem.link;
                                            const nestedActive =
                                              isActive(nestedPath) ||
                                              pathname.startsWith(
                                                `${nestedPath}/`,
                                              );

                                            return (
                                              <Link
                                                key={nIdx}
                                                href={nestedPath}
                                                className={`block px-4 py-2.5 text-lg font-medium border-b border-gray-50 last:border-b-0 transition-colors hover:bg-[#061036] hover:text-[#facc15] ${
                                                  nestedActive
                                                    ? "text-[#facc15] bg-[#061036] font-semibold"
                                                    : "text-gray-700"
                                                }`}
                                              >
                                                {nestedItem.name}
                                              </Link>
                                            );
                                          })}
                                        </div>
                                      )}
                                  </div>
                                );
                              })}
                            </div>
                          )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            <Link
              href="/contact-us"
              className={`tracking-wide text-base lg:text-lg font-medium uppercase transition-colors py-4 ${
                isActive("/contact-us")
                  ? "text-[#facc15] font-semibold"
                  : "text-white hover:text-[#facc15]"
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Request a Quote Button */}
          <div className="hidden lg:flex items-center justify-end">
            <Link
              href="/contact-us"
              className="bg-white text-[#051132] font-semibold font-serif px-6 py-3 rounded text-sm uppercase tracking-wide hover:bg-gray-100 transition-all shadow-md"
            >
              Request A Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white focus:outline-none p-2"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-8 h-8" />
              ) : (
                <Menu className="w-8 h-8" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#051132] border-t border-blue-900 px-4 pt-2 pb-6 space-y-3">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block text-[15px] uppercase py-2 ${
              isActive("/")
                ? "text-[#facc15] font-semibold"
                : "text-white font-medium"
            }`}
          >
            Home
          </Link>

          <Link
            href="/about-us"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block text-[15px] uppercase py-2 ${
              isActive("/about-us")
                ? "text-[#facc15] font-semibold"
                : "text-white font-medium"
            }`}
          >
            About Us
          </Link>

          {/* Mobile Products Category Section */}
          <div className="space-y-1">
            <span
              className={`block font-medium text-[15px] uppercase py-2 ${
                pathname.startsWith("/products") ||
                categories.some((cat) => isCategoryOrChildActive(cat))
                  ? "text-[#facc15] font-semibold"
                  : "text-white"
              }`}
            >
              Products
            </span>

            <div className="pl-4 space-y-2 border-l border-blue-900/60 my-2">
              {categories.map((cat, idx) => {
                const catPath = cat.link;
                const isCatExpanded = mobileActiveCategory === idx;
                const isThisCatActive = isCategoryOrChildActive(cat);
                const hasSubcategories = cat.subcategories.length > 0;

                return (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-center justify-between py-1">
                      {hasSubcategories ? (
                        <span
                          className={`text-[15px] font-semibold uppercase transition-colors cursor-pointer ${
                            isThisCatActive
                              ? "text-[#facc15]"
                              : "text-white hover:text-yellow-300"
                          }`}
                        >
                          {cat.name}
                        </span>
                      ) : (
                        <Link
                          href={catPath}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`text-[15px] font-semibold uppercase transition-colors ${
                            isThisCatActive
                              ? "text-[#facc15]"
                              : "text-white hover:text-yellow-300"
                          }`}
                        >
                          {cat.name}
                        </Link>
                      )}

                      {hasSubcategories && (
                        <button
                          onClick={() =>
                            setMobileActiveCategory(isCatExpanded ? null : idx)
                          }
                          className="text-white p-1 focus:outline-none"
                          aria-label="Expand subcategories"
                        >
                          <ChevronDown
                            className={`w-4 h-4 transition-transform ${
                              isCatExpanded ? "rotate-180 text-[#facc15]" : ""
                            }`}
                          />
                        </button>
                      )}
                    </div>

                    {/* Mobile Subcategories */}
                    {isCatExpanded && cat.subcategories.length > 0 && (
                      <div className="pl-3 space-y-1.5 py-1 border-l border-blue-900/40">
                        {cat.subcategories.map((sub, sIdx) => {
                          const subPath = sub.link;
                          const isThisSubActive = isSubOrChildActive(sub);
                          const isNestedExpanded =
                            mobileActiveSubcategory === `${idx}-${sIdx}`;
                          const hasNestedItems =
                            sub.items && sub.items.length > 0;

                          return (
                            <div key={sIdx} className="space-y-1">
                              <div className="flex items-center justify-between py-1">
                                {hasNestedItems ? (
                                  <span
                                    className={`block text-[15px] py-1.5 capitalize transition-colors cursor-pointer ${
                                      isThisSubActive
                                        ? "text-[#facc15] font-semibold"
                                        : "text-gray-300 hover:text-white"
                                    }`}
                                  >
                                    {sub.name}
                                  </span>
                                ) : (
                                  <Link
                                    href={subPath}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`block text-[15px] py-1.5 capitalize transition-colors ${
                                      isThisSubActive
                                        ? "text-[#facc15] font-semibold"
                                        : "text-gray-300 hover:text-white"
                                    }`}
                                  >
                                    {sub.name}
                                  </Link>
                                )}

                                {hasNestedItems && (
                                  <button
                                    onClick={() =>
                                      setMobileActiveSubcategory(
                                        isNestedExpanded
                                          ? null
                                          : `${idx}-${sIdx}`,
                                      )
                                    }
                                    className="text-white p-1 focus:outline-none"
                                  >
                                    <ChevronDown
                                      className={`w-4 h-4 transition-transform ${
                                        isNestedExpanded
                                          ? "rotate-180 text-[#facc15]"
                                          : ""
                                      }`}
                                    />
                                  </button>
                                )}
                              </div>

                              {/* Mobile Level 3 Nested Items */}
                              {isNestedExpanded && sub.items && (
                                <div className="pl-3 space-y-1.5 py-1 border-l border-blue-900/30">
                                  {sub.items.map((nestedItem, nIdx) => {
                                    const nestedPath = nestedItem.link;
                                    const nestedActive =
                                      isActive(nestedPath) ||
                                      pathname.startsWith(`${nestedPath}/`);

                                    return (
                                      <Link
                                        key={nIdx}
                                        href={nestedPath}
                                        onClick={() =>
                                          setIsMobileMenuOpen(false)
                                        }
                                        className={`block text-[15px] py-1 transition-colors ${
                                          nestedActive
                                            ? "text-[#facc15] font-semibold"
                                            : "text-gray-400 hover:text-white"
                                        }`}
                                      >
                                        {nestedItem.name}
                                      </Link>
                                    );
                                  })}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <Link
            href="/contact-us"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block text-[15px] uppercase py-2 ${
              isActive("/contact-us")
                ? "text-[#facc15] font-semibold"
                : "text-white font-medium"
            }`}
          >
            Contact Us
          </Link>

          <div className="pt-2">
            <Link
              href="/contact-us"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-center bg-white text-[#051132] font-semibold px-6 py-3 rounded text-sm uppercase tracking-wide shadow-md"
            >
              Request A Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
