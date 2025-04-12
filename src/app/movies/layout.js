import Navbar from "@/components/Navigations/Navbar";
export const metadata = {
  title: "Movie App",
  description: "View all upcoming, popular, now playing and top rated movies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ maxWidth: 1250, width: "100%", margin: "0 auto" }}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
