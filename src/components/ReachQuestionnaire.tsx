"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

function ReachQuestionnaire() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(JSON.stringify(formData, null, 2));
  };

  return (
    <div className="w-full flex flex-col gap-12">
      {/* Stepper UI */}
      <div id="stepper" className="flex items-center max-w-lg mx-auto w-full">
        {[1, 2, 3].map((s, i) => (
          <React.Fragment key={s}>
            <div
              className={cn(
                "size-4 rounded-full",
                step >= s ? "bg-primary" : "bg-muted"
              )}
            ></div>
            {i < 2 && (
              <div
                className={cn(
                  "flex-1 h-1",
                  step > s ? "bg-primary" : "bg-muted"
                )}
              ></div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Form Content */}
      <form
        onSubmit={handleSubmit}
        className="font-sans flex flex-col mx-auto w-full max-w-lg gap-6"
      >
        {step === 1 && (
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={cn(
              "w-full h-12 bg-transparent border px-4 outline-none transition",
              "border-primary focus:border-foreground/80"
            )}
            placeholder="Enter Your Name"
            required
          />
        )}

        {step === 2 && (
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={cn(
              "w-full h-12 bg-transparent border px-4 outline-none transition",
              "border-primary focus:border-foreground/80"
            )}
            placeholder="Enter Your Email"
            required
          />
        )}

        {step === 3 && (
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={cn(
              "w-full resize-none h-36 py-2 bg-transparent border px-4 outline-none transition",
              "border-primary focus:border-foreground/80"
            )}
            placeholder="Enter Your Message"
            required
          />
        )}

        {/* Buttons */}
        <div className="flex justify-between gap-4">
          {step > 1 ? (
            <button
              type="button"
              onClick={handlePrevious}
              className={cn(
                "h-12 px-6 border font-medium text-sm transition",
                "border-primary text-foreground hover:bg-primary/80"
              )}
            >
              Previous
            </button>
          ) : (
            <div className="h-12 px-6" />
          )}

          {step < 3 ? (
            <button
              type="button"
              onClick={handleNext}
              className={cn(
                "h-12 px-6 font-medium text-sm transition",
                "bg-primary text-foreground hover:bg-primary/80"
              )}
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className={cn(
                "h-12 px-6 font-medium text-sm transition",
                "bg-primary text-foreground hover:bg-primary/80"
              )}
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default ReachQuestionnaire;
