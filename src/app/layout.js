import './globals.css';
import Header from '@/components/Header';
import { ThemeProvider } from '@/context/ThemeContext';
import { Toaster } from 'react-hot-toast';

export const metadata = {
  title: 'Label Lift Dashboard',
  description: 'Music distribution dashboard.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Toaster position="top-center" />
          <div className="bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
            <Header />
            <main>{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}