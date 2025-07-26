import vazirFont from "@/constants/localFont";
import "@/styles/globals.css";
import Header from "@/components/Header";
import { Toaster } from "react-hot-toast";
import AuthProvider from "@/context/AuthContext";

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
        <AuthProvider>
          <Toaster />
          <Header />
          <div className="container xl:max-w-screen-xl">{children}</div>
        </AuthProvider>
      </body>
    </html>
  );
}
