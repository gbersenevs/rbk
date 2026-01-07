"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, AlertCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Button } from "./button";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(1, "Full name is required"),
  company: z.string().optional(),
  email: z.string().min(1, "Email is required").email("Please enter a valid email"),
  serviceType: z.string().min(1, "Please select a service type"),
  message: z.string().min(10, "Message must be at least 10 characters"),
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

      // Redirect to thank you page
      router.push("/thank-you");
    } catch (error) {
      setSubmitStatus("error");
      console.error("Form submission error:", error);
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      {submitStatus === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-red-800 font-medium">Submission failed</p>
            <p className="text-red-700 text-sm">
              Please try again or contact us directly at {siteConfig.company.email}
            </p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Full Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-text mb-2 notranslate">
            Full name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            {...register("name")}
            placeholder={formConfig.fields.name.placeholder}
            className={cn(
              "w-full px-4 py-3 border rounded-lg transition-colors",
              "focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",
              errors.name ? "border-red-500" : "border-border"
            )}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        {/* Company Name */}
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-text mb-2 notranslate">
            Company name (optional)
          </label>
          <input
            type="text"
            id="company"
            {...register("company")}
            placeholder={formConfig.fields.company.placeholder}
            className="w-full px-4 py-3 border border-border rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text mb-2 notranslate">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            {...register("email")}
            placeholder={formConfig.fields.email.placeholder}
            className={cn(
              "w-full px-4 py-3 border rounded-lg transition-colors",
              "focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",
              errors.email ? "border-red-500" : "border-border"
            )}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

      </div>

      {/* Service Type */}
      <div>
        <label htmlFor="serviceType" className="block text-sm font-medium text-text mb-2 notranslate">
          Service type <span className="text-red-500">*</span>
        </label>
        <select
          id="serviceType"
          {...register("serviceType")}
          className={cn(
            "w-full px-4 py-3 border rounded-lg transition-colors appearance-none bg-white",
            "focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",
            errors.serviceType ? "border-red-500" : "border-border"
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

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text mb-2 notranslate">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          {...register("message")}
          rows={5}
          placeholder={formConfig.fields.message.placeholder}
          className={cn(
            "w-full px-4 py-3 border rounded-lg transition-colors resize-y",
            "focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",
            errors.message ? "border-red-500" : "border-border"
          )}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto notranslate">
        {isSubmitting ? (
          <>
            <span className="animate-spin mr-2">⏳</span>
            Sending...
          </>
        ) : (
          <>
            <Send className="w-4 h-4 mr-2" />
            Send message
          </>
        )}
      </Button>
    </form>
  );
}
