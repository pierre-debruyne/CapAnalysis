"use client";

import Footer from "@/components/common/Footer";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ChevronRight, Plus } from "lucide-react";
import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    isHuman: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      isHuman: e.target.checked,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          isHuman: false,
        });
      } else {
        setSubmitStatus("error");
        setErrorMessage(result.error || "An error occurred");
      }
    } catch {
      setSubmitStatus("error");
      setErrorMessage("Connection error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Header */}
      <div className='bg-dark w-full h-[235px] mt-[87px] text-beige flex items-center justify-center pt-[60px] pb-[43px] flex-col gap-[30px]'>
        <h2 className='text-[60px] text-center font-serif whitespace-pre-line leading-[1.1]'>Contact us</h2>
        <h3 className='text-2xl italic font-serif'>Start monitoring now</h3>
      </div>

      {/* Contact form */}
      <div className='w-full bg-[#F5EDE6] py-[35px] md:pt-[80px] md:pb-[85px] px-5 xl:px-0'>
        <div className='xl:max-w-[1222px] mx-auto flex flex-col gap-5 '>
          <form onSubmit={handleSubmit}>
            <div className='flex gap-5 xl:flex-row flex-col'>
              <Input name='name' placeholder='Your name' className='xl:w-[394px]' value={formData.name} onChange={handleInputChange} required />
              <Input name='email' type='email' placeholder='Your email' className='xl:w-[394px]' value={formData.email} onChange={handleInputChange} required />
              <Input name='subject' placeholder='Subject' className='xl:w-[394px]' value={formData.subject} onChange={handleInputChange} required />
            </div>

            <Textarea name='message' placeholder='Your message' className='w-full h-[235px] mt-4' value={formData.message} onChange={handleInputChange} required />

            <div className='flex justify-between mt-4'>
              <div className='flex items-center gap-[10px]'>
                <Checkbox checked={formData.isHuman} onChange={handleCheckboxChange} />
                <span className='text-[11px] text-[#806863] font-sans font-light'>I&apos;M HUMAN!</span>
              </div>
              <button type='submit' disabled={isSubmitting} className='flex cursor-pointer items-center uppercase gap-2 text-[11px] font-sans font-light px-1 min-h-[25px] border border-[#b7aca9] text-[#806863] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed'>
                <div className='flex items-center text-[#BAACA9]'>
                  <Plus color='#806863' className='w-[10px] h-[10px]' strokeWidth={1} />
                  <ChevronRight color='#806863' className='w-[14px] h-[14px] -ml-[6px]' strokeWidth={1} />
                </div>
                <span className='whitespace-nowrap'>{isSubmitting ? "SENDING..." : "SEND MESSAGE"}</span>
              </button>
            </div>
          </form>

          {/* Status messages */}
          {submitStatus === "success" && <div className='mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded'>Message sent successfully! We will get back to you soon.</div>}

          {submitStatus === "error" && <div className='mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded'>{errorMessage}</div>}
        </div>
      </div>

      <Footer />
    </div>
  );
}
