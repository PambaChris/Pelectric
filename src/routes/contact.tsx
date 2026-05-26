import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact | Progressive Electrical Contractors" },
      {
        name: "description",
        content:
          "Request a quote or reach Progressive Electrical Contractors at (713) 772-2018 or info@pelectric.com.",
      },
    ],
  }),
});

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SiteNav />
      <section className="flex-1 py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-6">
              Get in touch
            </p>
            <h1 className="text-5xl md:text-6xl font-display font-bold leading-[1.05] mb-8">
              Let's talk about your project.
            </h1>
            <p className="text-muted-foreground leading-relaxed mb-12 max-w-md">
              Tell us about your scope, timeline and location. A senior estimator will follow up
              within one business day.
            </p>
            <div className="space-y-6">
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                  Phone
                </div>
                <a
                  href="tel:7137722018"
                  className="text-2xl font-display font-bold hover:text-brand-accent"
                >
                  (713) 772-2018
                </a>
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                  Email
                </div>
                <a
                  href="mailto:info@pelectric.com"
                  className="text-2xl font-display font-bold hover:text-brand-accent"
                >
                  info@pelectric.com
                </a>
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                  Service Area
                </div>
                <p className="font-medium">Houston & Greater Southeast Texas</p>
              </div>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="bg-secondary p-8 md:p-10 space-y-5"
          >
            {submitted ? (
              <div className="py-12 text-center">
                <h2 className="text-2xl font-display font-bold mb-3">Thanks — we got it.</h2>
                <p className="text-muted-foreground">We'll be in touch shortly.</p>
              </div>
            ) : (
              <>
                <Field label="Name" name="name" required />
                <Field label="Company" name="company" />
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone" name="phone" type="tel" />
                <div>
                  <label className="block text-xs uppercase tracking-widest font-bold mb-2">
                    Project details
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="w-full bg-background border border-border px-4 py-3 focus:outline-none focus:border-brand-accent"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground px-8 py-4 font-bold uppercase text-sm tracking-widest hover:bg-brand-accent hover:text-primary transition-colors"
                >
                  Request Quote
                </button>
              </>
            )}
          </form>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest font-bold mb-2">
        {label}
        {required && <span className="text-brand-accent"> *</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full bg-background border border-border px-4 py-3 focus:outline-none focus:border-brand-accent"
      />
    </div>
  );
}
