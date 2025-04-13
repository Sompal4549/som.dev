import Navbar from "@/components/Navigations/Navbar";
export const metadata = {
  title: "Movie App",
  description: "View all upcoming, popular, now playing and top rated movies",
};

export default function RootLayout({ children }) {
  const navData = [
    { title: "Home", url: "/" },
    { title: "Products", url: "/products" },
    { title: "Cart", url: "/cart" },
  ];
  return (
    <main style={{ maxWidth: 1250, width: "100%", margin: "0 auto" }}>
      <Navbar navData={navData} />
      {children}
    </main>
  );
}
