// "use client";

// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";

// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";

// const formSchema = z.object({
//   name: z.string().min(1, { message: "Companion is required." }),
//   subject: z.string().min(1, { message: "Subject is required." }),
//   topic: z.string().min(1, { message: "Topic is required." }),
//   voice: z.string().min(1, { message: "Voice is required." }),
//   style: z.string().min(1, { message: "Style is required." }),
//   duration: z.coerce.number().min(1, { message: "Duration is required." }),
// });

// const CompanionForm = () => {
//   // 1. Define your form.

//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       name: "",
//       subject: "",
//       topic: "",
//       voice: "",
//       style: "",
//       duration: 15,
//     },
//   });

//   // 2. Define a submit handler.
//   const onSubmit = (values: z.infer<typeof formSchema>) => {
//     console.log(values);
//   };
//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
//         <FormField
//           control={form.control}
//           name="name"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Username</FormLabel>
//               <FormControl>
//                 <Input placeholder="shadcn" {...field} />
//               </FormControl>
//               <FormDescription>
//                 This is your public display name.
//               </FormDescription>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <Button type="submit">Submit</Button>
//       </form>
//     </Form>
//   );
// };

// export default CompanionForm;

// "use client";

// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { subjects } from "@/constants";
// import { Textarea } from "./ui/textarea";

// // Schema
// const formSchema = z.object({
//   name: z.string().min(1, { message: "Companion is required." }),
//   subject: z.string().min(1, { message: "Subject is required." }),
//   topic: z.string().min(1, { message: "Topic is required." }),
//   voice: z.string().min(1, { message: "Voice is required." }),
//   style: z.string().min(1, { message: "Style is required." }),
//   duration: z.coerce.number().min(1, { message: "Duration is required." }),
// });

// // 👇 Infer the input type (before coercion)
// type FormSchemaType = z.input<typeof formSchema>;

// const CompanionForm = () => {
//   const form = useForm<FormSchemaType>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       name: "",
//       subject: "",
//       topic: "",
//       voice: "",
//       style: "",
//       duration: 15, // You can also set as "15" to test coercion
//     },
//   });

//   const onSubmit = (values: FormSchemaType) => {
//     console.log(values);
//   };

//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
//         <FormField
//           control={form.control}
//           name="name"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Companion name</FormLabel>
//               <FormControl>
//                 <Input
//                   placeholder="Enter the companion name"
//                   {...field}
//                   className="input"
//                 />
//               </FormControl>

//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={form.control}
//           name="subject"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Subject</FormLabel>
//               <FormControl></FormControl>
//               <Select
//                 onValueChange={field.onChange}
//                 value={field.value}
//                 defaultValue={field.value}
//               >
//                 <SelectTrigger className="input capitalize">
//                   <SelectValue placeholder="Select the subject" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   {subjects.map((subject) => (
//                     <SelectItem
//                       value={subject}
//                       key={subject}
//                       className="capitalize"
//                     >
//                       {subject}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={form.control}
//           name="topic"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>What should the companion help with?</FormLabel>
//               <FormControl>
//                 <Textarea
//                   placeholder="Ex. Derivates & Integrals"
//                   {...field}
//                   className="input"
//                 />
//               </FormControl>

//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={form.control}
//           name="voice"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Voice</FormLabel>
//               <FormControl></FormControl>
//               <Select
//                 onValueChange={field.onChange}
//                 value={field.value}
//                 defaultValue={field.value}
//               >
//                 <SelectTrigger className="input">
//                   <SelectValue placeholder="Select the voice" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="male">Male</SelectItem>
//                   <SelectItem value="female">Female</SelectItem>
//                 </SelectContent>
//               </Select>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={form.control}
//           name="style"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Style</FormLabel>
//               <FormControl></FormControl>
//               <Select
//                 onValueChange={field.onChange}
//                 value={field.value}
//                 defaultValue={field.value}
//               >
//                 <SelectTrigger className="input">
//                   <SelectValue placeholder="Select the style" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="formal">Formal</SelectItem>
//                   <SelectItem value="casual">Casual</SelectItem>
//                 </SelectContent>
//               </Select>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <FormField
//           control={form.control}
//           name="duration"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Estimated session duration in minutes</FormLabel>
//               <FormControl>
//                 <Input
//                   type="number"
//                   placeholder="15"
//                   {...field}
//                   className="input"
//                 />
//               </FormControl>

//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <Button type="submit">Submit</Button>
//       </form>
//     </Form>
//   );
// };

// export default CompanionForm;
// "use client";

// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm, SubmitHandler } from "react-hook-form";
// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { subjects } from "@/constants";
// import { Textarea } from "./ui/textarea";
// import { createCompanion } from "@/lib/actions/companion.actions";
// import { redirect } from "next/navigation";

// // Simple schema without transforms to avoid type conflicts
// const formSchema = z.object({
//   name: z.string().min(1, { message: "Companion is required." }),
//   subject: z.string().min(1, { message: "Subject is required." }),
//   topic: z.string().min(1, { message: "Topic is required." }),
//   voice: z.string().min(1, { message: "Voice is required." }),
//   style: z.string().min(1, { message: "Style is required." }),
//   duration: z.string().min(1, { message: "Duration is required." }),
// });

// type FormInputs = z.infer<typeof formSchema>;

// const CompanionForm = () => {
//   const form = useForm<FormInputs>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       name: "",
//       subject: "",
//       topic: "",
//       voice: "",
//       style: "",
//       duration: "",
//     },
//   });

//   const onSubmit: SubmitHandler<FormInputs> = async (values) => {
//     // Convert duration to number here if needed

//     const companion = await createCompanion(values);

//     if (companion) {
//       redirect(`/companions/${companion.id}`);
//     } else {
//       console.log("Failed to create a companion");
//       redirect("/");
//     }

//     const processedValues = {
//       ...values,
//       duration: parseInt(values.duration, 10),
//     };

//     // Validate duration is a positive number
//     if (isNaN(processedValues.duration) || processedValues.duration <= 0) {
//       form.setError("duration", {
//         type: "manual",
//         message: "Duration must be a positive number.",
//       });
//       return;
//     }

//     console.log(processedValues);
//   };

//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
//         <FormField
//           control={form.control}
//           name="name"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Companion name</FormLabel>
//               <FormControl>
//                 <Input
//                   placeholder="Enter the companion name"
//                   {...field}
//                   className="input"
//                 />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <FormField
//           control={form.control}
//           name="subject"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Subject</FormLabel>
//               <FormControl>
//                 <Select
//                   onValueChange={field.onChange}
//                   value={field.value}
//                   defaultValue={field.value}
//                 >
//                   <SelectTrigger className="input capitalize">
//                     <SelectValue placeholder="Select the subject" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     {subjects.map((subject) => (
//                       <SelectItem
//                         value={subject}
//                         key={subject}
//                         className="capitalize"
//                       >
//                         {subject}
//                       </SelectItem>
//                     ))}
//                   </SelectContent>
//                 </Select>
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <FormField
//           control={form.control}
//           name="topic"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>What should the companion help with?</FormLabel>
//               <FormControl>
//                 <Textarea
//                   placeholder="Ex. Derivates & Integrals"
//                   {...field}
//                   className="input"
//                 />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <FormField
//           control={form.control}
//           name="voice"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Voice</FormLabel>
//               <FormControl>
//                 <Select
//                   onValueChange={field.onChange}
//                   value={field.value}
//                   defaultValue={field.value}
//                 >
//                   <SelectTrigger className="input">
//                     <SelectValue placeholder="Select the voice" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="male">Male</SelectItem>
//                     <SelectItem value="female">Female</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <FormField
//           control={form.control}
//           name="style"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Style</FormLabel>
//               <FormControl>
//                 <Select
//                   onValueChange={field.onChange}
//                   value={field.value}
//                   defaultValue={field.value}
//                 >
//                   <SelectTrigger className="input">
//                     <SelectValue placeholder="Select the style" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="formal">Formal</SelectItem>
//                     <SelectItem value="casual">Casual</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <FormField
//           control={form.control}
//           name="duration"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Estimated session duration in minutes</FormLabel>
//               <FormControl>
//                 <Input
//                   type="number"
//                   placeholder="15"
//                   {...field}
//                   className="input"
//                 />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <Button type="submit" className="w-full cursor-pointer">
//           Build Your Companion
//         </Button>
//       </form>
//     </Form>
//   );
// };

// export default CompanionForm;
"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { subjects } from "@/constants";
import { Textarea } from "./ui/textarea";
import { createCompanion } from "@/lib/actions/companion.actions";
import { redirect } from "next/navigation";

// Simple schema without transforms to avoid type conflicts
const formSchema = z.object({
  name: z.string().min(1, { message: "Companion is required." }),
  subject: z.string().min(1, { message: "Subject is required." }),
  topic: z.string().min(1, { message: "Topic is required." }),
  voice: z.string().min(1, { message: "Voice is required." }),
  style: z.string().min(1, { message: "Style is required." }),
  duration: z.string().min(1, { message: "Duration is required." }),
});

type FormInputs = z.infer<typeof formSchema>;

const CompanionForm = () => {
  const form = useForm<FormInputs>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      subject: "",
      topic: "",
      voice: "",
      style: "",
      duration: "",
    },
  });

  const onSubmit: SubmitHandler<FormInputs> = async (values) => {
    // Convert duration to number and validate
    const durationNumber = parseInt(values.duration, 10);

    // Validate duration is a positive number
    if (isNaN(durationNumber) || durationNumber <= 0) {
      form.setError("duration", {
        type: "manual",
        message: "Duration must be a positive number.",
      });
      return;
    }

    // Process values with correct types
    const processedValues = {
      ...values,
      duration: durationNumber,
    };

    console.log(processedValues);

    // Now create companion with properly typed data
    const companion = await createCompanion(processedValues);

    if (companion) {
      redirect(`/companions/${companion.id}`);
    } else {
      console.log("Failed to create a companion");
      redirect("/");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Companion name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter the companion name"
                  {...field}
                  className="input"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  value={field.value}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="input capitalize">
                    <SelectValue placeholder="Select the subject" />
                  </SelectTrigger>
                  <SelectContent>
                    {subjects.map((subject) => (
                      <SelectItem
                        value={subject}
                        key={subject}
                        className="capitalize"
                      >
                        {subject}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="topic"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What should the companion help with?</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Ex. Derivates & Integrals"
                  {...field}
                  className="input"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="voice"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Voice</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  value={field.value}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="input">
                    <SelectValue placeholder="Select the voice" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="style"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Style</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  value={field.value}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="input">
                    <SelectValue placeholder="Select the style" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="formal">Formal</SelectItem>
                    <SelectItem value="casual">Casual</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="duration"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Estimated session duration in minutes</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="15"
                  {...field}
                  className="input"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full cursor-pointer">
          Build Your Companion
        </Button>
      </form>
    </Form>
  );
};

export default CompanionForm;
