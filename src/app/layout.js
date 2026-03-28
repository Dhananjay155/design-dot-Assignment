export const metadata = {
  title: "DesignDot Assignment",
  description: "Full Stack Assignment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-black" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}