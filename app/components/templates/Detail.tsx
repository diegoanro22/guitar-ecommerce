import Header from '@organisms/shared/Header';
import Footer from '@organisms/shared/Footer';
import MainDetail from '@organisms/detail/MainDetail';

export default function DetailPage() {
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <MainDetail />
      <Footer />
    </div>
  );
}
