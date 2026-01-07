"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, AlertCircle, Loader2 } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Button } from "./button";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  company: z.string().optional(),
  email: z.string().min(1, "Email is required").email("Please enter a valid email"),
  serviceType: z.string().min(1, "Please select an option"),
  message: z.string().min(10, "Please provide more detail (at least 10 characters)"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"error" | null>(null);
  const router = useRouter();

  const { form: formConfig } = siteConfig.contact;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      router.push("/thank-you");
    } catch (error) {
      setSubmitStatus("error");
      console.error("Form submission error:", error);
      setIsSubmitting(false);
    }
  };

  const inputClasses = (hasError: boolean) => cn(
    "w-full px-4 py-3 border rounded-lg transition-colors bg-white text-sm",
    "focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary",
    "placeholder:text-text-muted",
    hasError ? "border-red-400 focus:ring-red-200 focus:border-red-400" : "border-border hover:border-neutral-300"
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      {submitStatus === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-red-800 font-medium text-sm">Something went wrong</p>
            <p className="text-red-700 text-sm">
              Please try again or email us at{" "}
              <a href={`mailto:${siteConfig.company.email}`} className="underline notranslate">
                {siteConfig.company.email}
              </a>
            </p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-text mb-2">
            {formConfig.fields.name.label} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            {...register("name")}
            placeholder={formConfig.fields.name.placeholder}
            className={cn(inputClasses(!!errors.name), "notranslate")}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        {/* Company */}
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-text mb-2">
            {formConfig.fields.company.label}
          </label>
          <input
            type="text"
            id="company"
            {...register("company")}
            placeholder={formConfig.fields.company.placeholder}
            className={cn(inputClasses(false), "notranslate")}
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
            {formConfig.fields.email.label} <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            {...register("email")}
            placeholder={formConfig.fields.email.placeholder}
            className={cn(inputClasses(!!errors.email), "notranslate")}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* Service Type */}
        <div>
          <label htmlFor="serviceType" className="block text-sm font-medium text-text mb-2">
            {formConfig.fields.serviceType.label} <span className="text-red-500">*</span>
          </label>
          <select
            id="serviceType"
            {...register("serviceType")}
            className={cn(
              inputClasses(!!errors.serviceType),
              "appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%236B7280%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20d%3D%22M5.293%207.293a1%201%200%20011.414%200L10%2010.586l3.293-3.293a1%201%200%20111.414%201.414l-4%204a1%201%200%2001-1.414%200l-4-4a1%201%200%20010-1.414z%22%20clip-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')] bg-[length:20px] bg-[right_12px_center] bg-no-repeat pr-10"
            )}
          >
            <option value="">{formConfig.fields.serviceType.placeholder}</option>
            {formConfig.fields.serviceType.options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.serviceType && (
            <p className="mt-1 text-sm text-red-500">{errors.serviceType.message}</p>
          )}
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text mb-2">
          {formConfig.fields.message.label} <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          {...register("message")}
          rows={5}
          placeholder={formConfig.fields.message.placeholder}
          className={cn(inputClasses(!!errors.message), "resize-y min-h-[120px] notranslate")}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>

      {/* Submit */}
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-4 h-4 mr-2" />
            {formConfig.submitLabel}
          </>
        )}
      </Button>
    </form>
  );
}
