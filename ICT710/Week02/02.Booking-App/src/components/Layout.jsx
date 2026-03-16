import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 container mx-auto px-4 py-6 max-w-4xl">
        <Outlet />
      </main>
      <footer className="border-t py-4 text-center text-sm text-gray-500">
        Doctor Booking — ICT710. Your consultation is private and secure.
      </footer>
    </div>
  );
}
