import Header from '@organisms/shared/Header';
import Footer from '@organisms/shared/Footer';
import MainDashboard from '@organisms/dashboard/MainDashboard';

export default function DashboardPage() {
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <MainDashboard />
      <Footer />
    </div>
  );
}
