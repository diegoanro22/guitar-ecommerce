import Header from '@organisms/shared/Header';
import Footer from '@organisms/shared/Footer';
import MainCart from '@organisms/cart/MainCart';

export default function CartPage() {
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <MainCart />
      <Footer />
    </div>
  );
}
