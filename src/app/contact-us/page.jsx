"use client";

import Breadcrumb from "@/components/Breadcrumb";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import { z } from "zod";

const contactSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required"),
  lastName: z.string().trim().optional(),
  email: z.string().trim().email("Please enter a valid email address"),
  mobile: z
    .string()
    .regex(/^\d{10}$/, "Mobile number must be exactly 10 digits"),
  message: z.string().trim().min(1, "Message is required"),
  isVerified: z.boolean().refine((value) => value, {
    message: "Please check the reCAPTCHA box",
  }),
});

const initialFormData = {
  firstName: "",
  lastName: "",
  email: "",
  mobile: "",
  message: "",
  isVerified: false,
};

export default function ContactPage() {
  const router = useRouter();
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    const nextValue =
      name === "mobile"
        ? value.replace(/\D/g, "").slice(0, 10)
        : type === "checkbox"
          ? checked
          : value;

    setFormData((prev) => ({ ...prev, [name]: nextValue }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }

    if (errors.form) {
      setErrors((prev) => ({ ...prev, form: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = contactSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors = {};

      result.error.issues.forEach((issue) => {
        const field = issue.path[0];
        if (field) fieldErrors[field] = issue.message;
      });

      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setSubmitting(true);

    try {
      const fullName = [formData.firstName.trim(), formData.lastName.trim()]
        .filter(Boolean)
        .join(" ");

      const finalData = {
        access_key: "123456", // Replace with your Web3Forms access key
        subject: "New Contact Inquiry from Jainco Weld",
        from_name: fullName,
        email: formData.email.trim(),
        phone: `+91${formData.mobile}`,
        message: formData.message.trim(),
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(finalData),
      });

      const res = await response.json();

      if (!response.ok || !res.success) {
        setErrors({
          form: res.message || "Something went wrong. Please try again.",
        });
        return;
      }
      sessionStorage.setItem("contactFormSubmitted", "true");
      router.push("/thank-you");
    } catch {
      setErrors({ form: "Network error. Please check your connection." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <Breadcrumb title="Contact Us" />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-2xl lg:grid-cols-12">
          <div className="flex flex-col justify-between bg-[#0a1128] p-8 text-white sm:p-12 lg:col-span-5">
            <div>
              <h2 className="mb-8 text-xl font-bold tracking-wide text-[#facc15] sm:text-2xl">
                REACH OUT TO US!
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4 rounded-xl bg-white p-4 text-gray-900 shadow-md">
                  <div className="mt-1 rounded-lg bg-[#0a1128] p-3 text-white">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold">Phone:</h3>
                    <p className="mt-0.5 text-sm text-gray-600">
                      +91 98110-21632
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl bg-white p-4 text-gray-900 shadow-md">
                  <div className="mt-1 rounded-lg bg-[#0a1128] p-3 text-white">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold">Email:</h3>
                    <p className="mt-0.5 break-all text-sm text-gray-600">
                      info@jaincoweld.com
                    </p>
                    <p className="break-all text-sm text-gray-600">
                      weldingaxexpert@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl bg-white p-4 text-gray-900 shadow-md">
                  <div className="mt-1 rounded-lg bg-[#0a1128] p-3 text-white">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold">Address:</h3>
                    <p className="mt-0.5 text-sm leading-relaxed text-gray-600">
                      Plot -55, Pocket I-1, Sector-5, Bawana Industrial Area,
                      New Delhi - 110039, Delhi, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="mb-4 text-lg font-semibold">Get In Touch</h3>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.facebook.com/people/Jainco-Welding-Safety-Products/61573620396525/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-gray-900 shadow transition-colors hover:bg-gray-100"
                  aria-label="Facebook"
                >
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center bg-white p-8 sm:p-12 lg:col-span-7">
            <h2 className="mb-8 text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
              GET IN TOUCH WITH US!
            </h2>

            {errors.form && (
              <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800">
                {errors.form}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    autoComplete="given-name"
                    aria-invalid={Boolean(errors.firstName)}
                    className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#facc15]"
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.firstName}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name (optional)"
                    autoComplete="family-name"
                    aria-invalid={Boolean(errors.lastName)}
                    className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#facc15]"
                  />
                </div>
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  autoComplete="email"
                  aria-invalid={Boolean(errors.email)}
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#facc15]"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              <div>
                <div className="flex w-full items-center overflow-hidden rounded-lg border border-gray-200 bg-gray-50 transition-all focus-within:bg-white focus-within:ring-2 focus-within:ring-[#facc15]">
                  <span className="select-none border-r border-gray-200 bg-gray-200 px-3 py-3 text-sm font-semibold text-gray-700">
                    +91
                  </span>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Mobile (10 digits)"
                    autoComplete="tel-national"
                    inputMode="numeric"
                    maxLength={10}
                    aria-invalid={Boolean(errors.mobile)}
                    className="w-full bg-transparent px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none"
                  />
                </div>
                {errors.mobile && (
                  <p className="mt-1 text-sm text-red-500">{errors.mobile}</p>
                )}
              </div>

              <div>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  aria-invalid={Boolean(errors.message)}
                  className="w-full resize-none rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#facc15]"
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>

              <div>
                <div className="inline-block rounded border border-gray-300 bg-[#f9f9f9] p-3 shadow-sm">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="recaptcha"
                      name="isVerified"
                      checked={formData.isVerified}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.isVerified)}
                      className="h-6 w-6 cursor-pointer rounded border-gray-300 accent-blue-600"
                    />
                    <label
                      htmlFor="recaptcha"
                      className="cursor-pointer select-none text-sm text-gray-700"
                    >
                      I'm not a robot
                    </label>
                    <div className="ml-6 flex flex-col items-center justify-center">
                      <div className="relative h-12 w-16">
                        <Image
                          src="/icon/captcha.webp"
                          alt="reCAPTCHA"
                          fill
                          sizes="64px"
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {errors.isVerified && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.isVerified}
                  </p>
                )}
              </div>

              <div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="rounded-lg bg-[#eab308] px-8 py-3 text-sm font-bold uppercase tracking-wider text-white shadow-md transition-colors duration-200 hover:bg-[#ca8a04] disabled:opacity-50"
                >
                  {submitting ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="relative h-[400px] w-full border-t border-gray-200">
        <iframe
          title="Bawana Industrial Area Map Location"
          src="https://maps.google.com/maps?ll=28.802404,77.073934&z=16&t=m&hl=en&gl=IN&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-full w-full"
        />
      </section>
    </main>
  );
}
