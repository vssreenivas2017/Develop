import '../styles/globals.css';

export const metadata = {
  title: 'Gym Streak - Share Your Fitness Progress',
  description: 'A social fitness app where you can share daily gym percentages as snaps with friends',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
