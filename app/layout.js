import './globals.scss';
import Header from "@/components/header/Header";


export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="page">
        <Header />
        {children}
      </body>
    </html>
  );
}
