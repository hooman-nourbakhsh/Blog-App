import vazirFont from "@/constants/localFont";
import "@/styles/globals.css";

export const metadata = {
  title: "پروژه وبلاگ",
  description: "این پروژه به کمک نکست 14 توسعه داده شده",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirFont.variable} font-sans min-h-screen`}>
        <div>header</div>
        <div className="container xl:max-w-screen-xl">{children}</div>
      </body>
    </html>
  );
}
