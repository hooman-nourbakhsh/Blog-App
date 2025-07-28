import vazirFont from "@/constants/localFont";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
import AuthProvider from "@/context/AuthContext";
import ReactQueryProvider from "@/providers/ReactQueryProvider";

export const metadata = {
  title: {
    template: "%s | بلاگستان",
    default: "بلاگستان",
  },
  description: "این پروژه به کمک نکست 14 توسعه داده شده",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirFont.variable} font-sans min-h-screen`}>
        <Toaster />
        <ReactQueryProvider>
          <AuthProvider>{children}</AuthProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
