import { Outlet } from 'react-router-dom';
import BottomNav from './BottomNav/BottomNav';

export default function Root() {
  return (
    <div className="app-container">
      <main className="main-content">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
}