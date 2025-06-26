"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import type { FormData } from "@/types/questionnaire";

function ReachQuestionnaire() {
  const [step, setStep] = useState(1);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onTouched",
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const name = watch("name");
  const email = watch("email");
  const message = watch("message");

  const isStepValid = () => {
    if (step === 1) return !!name && !errors.name;
    if (step === 2) return !!email && !errors.email;
    if (step === 3) return !!message && !errors.message;
    return false;
  };

  const onSubmit = (data: FormData) => {
    alert(JSON.stringify(data, null, 2));
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1);
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
        onSubmit={handleSubmit(onSubmit)}
        className="font-sans flex flex-col mx-auto w-full max-w-lg gap-6"
      >
        {step === 1 && (
          <>
            <input
              type="text"
              placeholder="Enter Your Name"
              className={cn(
                "w-full h-12 bg-transparent border px-4 outline-none transition",
                "border-primary focus:border-foreground/80"
              )}
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </>
        )}

        {step === 2 && (
          <>
            <input
              type="email"
              placeholder="Enter Your Email"
              className={cn(
                "w-full h-12 bg-transparent border px-4 outline-none transition",
                "border-primary focus:border-foreground/80"
              )}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </>
        )}

        {step === 3 && (
          <>
            <textarea
              placeholder="Enter Your Message"
              className={cn(
                "w-full resize-none h-36 py-2 bg-transparent border px-4 outline-none transition",
                "border-primary focus:border-foreground/80"
              )}
              {...register("message", { required: "Message is required" })}
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message.message}</p>
            )}
          </>
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
              disabled={!isStepValid()}
              className={cn(
                "h-12 px-6 font-medium text-sm transition",
                "bg-primary text-foreground hover:bg-primary/80",
                !isStepValid() && "opacity-50 cursor-not-allowed"
              )}
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              disabled={!isStepValid()}
              className={cn(
                "h-12 px-6 font-medium text-sm transition",
                "bg-primary text-foreground hover:bg-primary/80",
                !isStepValid() && "opacity-50 cursor-not-allowed"
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
