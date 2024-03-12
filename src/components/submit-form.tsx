"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { submitFormSchema } from "@/schemas/submit-form-schema";
import * as z from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const SubmitForm = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof submitFormSchema>>({
    resolver: zodResolver(submitFormSchema),
    defaultValues: {
      name: "",
      surname: "",
      phone: "",
      email: "",
      birthdate: "",
      address: "",
      city: "",
      state: "",
      zip: "",
    },
  });

  const onSubmit = async (formData: z.infer<typeof submitFormSchema>) => {
    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      const orderID = await response.json();

      if (response.ok) {
        router.push(`/thank-you?orderId=${orderID}`);
      } else {
        console.error("Submission failed");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Name</FormLabel>
                <FormControl>
                  <Input
                    className="bg-white text-black"
                    placeholder="Jane"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="surname"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Surname</FormLabel>
                <FormControl>
                  <Input
                    className="bg-white text-black"
                    placeholder="Doe"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Phone Number</FormLabel>
              <FormControl>
                <Input
                  className="bg-white text-black"
                  placeholder="+1 (111) 111-1111"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-400" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Email</FormLabel>
              <FormControl>
                <Input
                  className="bg-white text-black"
                  placeholder="jane.doe@example.com"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-400" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="birthdate"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Date of Birth</FormLabel>
              <FormControl>
                <Input
                  className="bg-white text-black"
                  placeholder="12/24/1990"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-400" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Address</FormLabel>
              <FormControl>
                <Input
                  className="bg-white text-black"
                  placeholder="200 E Main St."
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-400" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">City</FormLabel>
              <FormControl>
                <Input
                  className="bg-white text-black"
                  placeholder="Phoenix"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-400" />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">State</FormLabel>
                <FormControl>
                  <Input
                    className="bg-white text-black"
                    placeholder="Arizona"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="zip"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Zip Code</FormLabel>
                <FormControl>
                  <Input
                    className="bg-white text-black"
                    placeholder="85123"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit" className="mt-4">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default SubmitForm;
