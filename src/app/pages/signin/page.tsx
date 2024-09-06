"use client";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";
import { IoLogoGithub } from "react-icons/io";
import { JSX, MouseEvent, SVGProps } from "react";
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
import { formSchema } from "@/schema/zodValidationSchema";
import Navbar from "@/components/custom/Navbar";
import { IconContext } from "react-icons/lib";

function onSubmit(values: z.infer<typeof formSchema>) {
  toast.promise(signIn("credentials", values), {
    loading: "signing...",
    success: <b>User logged in!</b>,
    error: <b>Failed to login user.</b>,
  });
}

export default function ProfileForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function googleSignInHandler(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    return signIn("google");
  }

  function githubSignInHandler(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    return signIn("google");
  }

  return (
    <>
      <Navbar />
      <div className="dark:bg-black dark:text-white flex items-center h-screen justify-center">
        <div className="border border-gray-800 m-10 p-10 lg:px-20 lg:py-20 rounded-lg">
          <h1 className="mt-6 text-center text-3xl font-bold tracking-tight text-foreground text-black dark:text-white">
            Create an account
          </h1>
          <p className="text-gray-400 p-3 text-sm text-center">
            Enter your email and password below to create an account
          </p>
          <div className="pt-4 ">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-2"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter email"
                          {...field}
                          autoFocus
                          autoComplete="email"
                          className="block w-full appearance-none rounded-md border border-input bg-background px-3 py-2 placeholder-muted-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                            autoComplete="password"
                            className="block w-full appearance-none rounded-md border border-input bg-background px-3 py-2 placeholder-muted-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                            {...field}
                          />
                          <Button
                            variant="ghost"
                            size="icon"
                            className="absolute top-1/2 right-2 -translate-y-1/2"
                            // onClick={}
                          >
                            <EyeIcon className="h-5 w-5" />
                            <span className="sr-only">
                              Toggle password visibility
                            </span>
                          </Button>
                        </div>
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex items-center  justify-center">
                  <Button
                    type="submit"
                    variant={"secondary"}
                    className="w-full mt-3  font-bold flex justify-center rounded-md bg-primary px-3 py-2 text-sm text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    Login
                  </Button>
                </div>
              </form>
            </Form>
            <div className="flex items-center justify-center opacity-10">
              <div className="w-[23%] border h-0"></div>
              <div className="px-2">or continue with</div>
              <div className="w-[22%] border h-0"></div>
            </div>
            <div className="flex gap-10">
              <Button
                className="mt-3 border border-gray-700 flex w-full items-center justify-center rounded-md  border-input bg-white dark:bg-white px-3 py-2 text-sm font-semibold text-muted-foreground text-black shadow-sm transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                onClick={(e) => googleSignInHandler(e)}
              >
                <IconContext.Provider value={{ size: "25" }}>
                  <div className="px-2">
                    <FcGoogle />
                  </div>
                </IconContext.Provider>
                Google
              </Button>
              <Button
                className="mt-3 border border-gray-700 flex w-full items-center justify-center rounded-md border-input bg-white dark:bg-white px-3 py-2 text-sm font-semibold text-muted-foreground text-black shadow-sm transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                onClick={(e) => githubSignInHandler(e)}
              >
                <IconContext.Provider value={{ size: "25" }}>
                  <div className="px-2">
                    <IoLogoGithub />
                  </div>
                </IconContext.Provider>
                Github
              </Button>
            </div>
          </div>
        </div>{" "}
      </div>
    </>
  );
  // }

  // import Link from "next/link";
  // import { Label } from "@/components/ui/label";
  // import { Input } from "@/components/ui/input";
  // import { Checkbox } from "@/components/ui/checkbox";
  // import { Button } from "@/components/ui/button";
  // import { JSX, SVGProps } from "react";

  // export default function Component() {
  //   return (
  //     <div className="flex min-h-screen items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
  //       <div className="w-full max-w-md space-y-8">
  //         <div>
  //           <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-foreground">
  //             Sign in to your account
  //           </h2>
  //           <p className="mt-2 text-center text-sm text-muted-foreground">
  //             Or{" "}
  //             <Link
  //               href="#"
  //               className="font-medium text-primary hover:text-primary/90"
  //               prefetch={false}
  //             >
  //               sign up for a new account
  //             </Link>
  //           </p>
  //         </div>
  //         <form className="space-y-6" action="#" method="POST">
  //           <div>
  //             <Label htmlFor="email" className="sr-only">
  //               Email address
  //             </Label>
  //             <Input
  //               id="email"
  //               name="email"
  //               type="email"
  //               autoComplete="email"
  //               required
  //               placeholder="Email address"
  //               className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-foreground placeholder-muted-foreground focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
  //             />
  //           </div>
  //           <div>
  //             <Label htmlFor="password" className="sr-only">
  //               Password
  //             </Label>
  //             <Input
  //               id="password"
  //               name="password"
  //               type="password"
  //               autoComplete="current-password"
  //               required
  //               placeholder="Password"
  //               className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-foreground placeholder-muted-foreground focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
  //             />
  //           </div>
  //           <div className="flex items-center justify-between">
  //             <div className="flex items-center">
  //               <Checkbox
  //                 id="remember-me"
  //                 name="remember-me"
  //                 className="h-4 w-4 rounded"
  //               />
  //               <Label
  //                 htmlFor="remember-me"
  //                 className="ml-2 block text-sm text-muted-foreground"
  //               >
  //                 Remember me
  //               </Label>
  //             </div>
  //             <div className="text-sm">
  //               <Link
  //                 href="#"
  //                 className="font-medium text-primary hover:text-primary/90"
  //                 prefetch={false}
  //               >
  //                 Forgot your password?
  //               </Link>
  //             </div>
  //           </div>
  //           <div>
  //             <Button
  //               type="submit"
  //               className="flex w-full justify-center rounded-md bg-primary py-2 px-4 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
  //             >
  //               Sign in
  //             </Button>
  //           </div>
  //         </form>
  //         <div className="flex items-center justify-center space-x-4">
  //           <Button
  //             variant="outline"
  //             className="flex items-center justify-center"
  //           >
  //             <ChromeIcon className="h-5 w-5 mr-2" />
  //             Sign in with Google
  //           </Button>
  //           <Button
  //             variant="outline"
  //             className="flex items-center justify-center"
  //           >
  //             <GitlabIcon className="h-5 w-5 mr-2" />
  //             Sign in with GitHub
  //           </Button>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  function ChromeIcon(
    props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
  ) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="4" />
        <line x1="21.17" x2="12" y1="8" y2="8" />
        <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
        <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
      </svg>
    );
  }
  function EyeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    );
  }

  function GitlabIcon(
    props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
  ) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z" />
      </svg>
    );
  }

  function XIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    );
  }
}
