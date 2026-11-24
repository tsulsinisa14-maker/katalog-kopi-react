import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';
import SortSelect from './components/SortSelect';
import MenuList from './components/MenuList';
import Cart from './components/Cart';
import OrderSuccess from './components/OrderSuccess';
import Footer from './components/Footer';
import { menuItems } from './data/menu';
import type { CartItem, CategoryFilterValue, MenuItem, Order, SortOption } from './types';

const categories: CategoryFilterValue[] = ['Semua', 'Kopi', 'Non-Kopi', 'Camilan', 'Makanan'];
const STUDENT_NAME = 'Tsulsi Khoirunisa';
const NIM = '1247050119';
const BRAND_NAME = 'Ruang Seduh';

function App() {
  const [search, setSearch] = useState<string>('');
  const [category, setCategory] = useState<CategoryFilterValue>('Semua');
  const [sort, setSort] = useState<SortOption>('default');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [order, setOrder] = useState<Order | null>(null);

  const filteredItems = menuItems.filter((item) => {
    const matchCategory = category === 'Semua' || item.category === category;
    const matchSearch = item.name.toLowerCase().includes(search.trim().toLowerCase());
    return matchCategory && matchSearch;
  });

  const sortedItems = [...filteredItems].sort((a, b) => {
    switch (sort) {
      case 'termurah':
        return a.price - b.price;
      case 'termahal':
        return b.price - a.price;
      case 'nama':
        return a.name.localeCompare(b.name, 'id');
      default:
        return a.id - b.id;
    }
  });

  const cartCount = cart.reduce((sum, c) => sum + c.qty, 0);

  const handleAdd = (item: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.item.id === item.id);
      if (existing) {
        return prev.map((c) => (c.item.id === item.id ? { ...c, qty: c.qty + 1 } : c));
      }
      return [...prev, { item, qty: 1 }];
    });
  };

  const handleChangeQty = (id: number, delta: number) => {
    setCart((prev) =>
      prev
        .map((c) => (c.item.id === id ? { ...c, qty: c.qty + delta } : c))
        .filter((c) => c.qty > 0),
    );
  };

  const handleRemove = (id: number) => {
    setCart((prev) => prev.filter((c) => c.item.id !== id));
  };

  const handleClear = () => setCart([]);

  const handleCheckout = (customerName: string) => {
    const total = cart.reduce((sum, c) => sum + c.item.price * c.qty, 0);
    setOrder({
      id: `RS-${Date.now().toString().slice(-6)}`,
      customerName,
      items: cart,
      total,
    });
    setCart([]);
  };

  return (
    <>
      <Header title={BRAND_NAME} studentName={STUDENT_NAME} cartCount={cartCount} />
      <Hero
        title="Seduh Pelan, Nikmati Jeda"
        subtitle="Kopi pilihan, minuman segar, dan camilan hangat untuk menemani harimu."
      />

      <main className="container">
        <div className="layout">
          <section id="menu" aria-label="Daftar menu">
            <div className="toolbar">
              <SearchBar value={search} onChange={setSearch} />
              <CategoryFilter categories={categories} active={category} onSelect={setCategory} />
              <div className="toolbar-row">
                <p className="result-count">
                  Menampilkan {sortedItems.length} dari {menuItems.length} menu
                </p>
                <SortSelect value={sort} onChange={setSort} />
              </div>
            </div>
            <MenuList items={sortedItems} onAdd={handleAdd} />
          </section>

          <Cart
            items={cart}
            onChangeQty={handleChangeQty}
            onRemove={handleRemove}
            onClear={handleClear}
            onCheckout={handleCheckout}
          />
        </div>
      </main>

      <Footer brandName={BRAND_NAME} studentName={STUDENT_NAME} nim={NIM} />

      {order && <OrderSuccess order={order} onClose={() => setOrder(null)} />}
    </>
  );
}

export default App;