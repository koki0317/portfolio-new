"use client";

import React, { useEffect, useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useTheme } from "next-themes";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email(),
  message: z.string().min(30, {
    message: "Message requires at least 30 characters.",
  }),
});

const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.post("/api/email", values);
      toast.success("Submission successful.");
      form.reset();
    } catch (error) {
      toast.error("An error occurred. ");
    }
  };

  const isLoading = form.formState.isSubmitting;

  const { theme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted && (
      <section
        id="contact"
        className="relative overflow-hidden px-4 lg:px-6 py-16 max-w-sm mx-auto"
      >
        <div className="">
          <h2 className="title-text text-center mb-5 lg:mb-8">Contact</h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 gap-5 mb-5">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="relative">
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="name"
                          {...field}
                          className="bg-gray-100"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="email@google.com"
                          {...field}
                          className="bg-gray-100"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          rows={5}
                          placeholder="Message"
                          {...field}
                          className="bg-gray-100"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button type="submit" disabled={isLoading}>
                Submit
              </Button>
            </form>
          </Form>
        </div>
        {theme === "dark" && (
          <div className="z-[-10] -right-5 bottom-2 opacity-50 absolute">
            <video
              className=""
              preload="false"
              playsInline
              loop
              muted
              autoPlay
              src="/space-decoration.webm"
            />
          </div>
        )}
      </section>
    )
  );
};

export default Contact;
