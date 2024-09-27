"use client";
import { ReactNode } from "react";
import HotToastProvider from "./HotToastProvider";
import { Provider } from "react-redux";
import { ThemeProvider } from "@/components/custom/ThemeProvider";
import store from "@/store";
import SProvider from "./SessionProvider";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SProvider>
            <HotToastProvider>{children}</HotToastProvider>
          </SProvider>
        </ThemeProvider>
      </Provider>
    </>
  );
}
