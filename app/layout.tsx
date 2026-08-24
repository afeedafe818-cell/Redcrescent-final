import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        <AppRouterCacheProvider>
          <Navbar />
          {children}
          <Footer />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
