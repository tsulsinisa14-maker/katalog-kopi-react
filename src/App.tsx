import { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';
import MenuList from './components/MenuList';
import Cart from './components/Cart';
import Footer from './components/Footer';
import { menuItems } from './data/menu';
import type { CartItem, CategoryFilterValue, MenuItem } from './types';

const categories: CategoryFilterValue[] = ['Semua', 'Kopi', 'Non-Kopi', 'Camilan'];
const STUDENT_NAME = 'Tsulsi Khoirunisa';
const NIM = '1247050119';

function App() {
  const [search, setSearch] = useState<string>('');
  const [category, setCategory] = useState<CategoryFilterValue>('Semua');
  const [cart, setCart] = useState<CartItem[]>([]);

  const filteredItems = menuItems.filter((item) => {
    const matchCategory = category === 'Semua' || item.category === category;
    const matchSearch = item.name.toLowerCase().includes(search.trim().toLowerCase());
    return matchCategory && matchSearch;
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

  return (
    <>
      <Header title="Kopi dan Nyemil" studentName={STUDENT_NAME} nim={NIM} cartCount={cartCount} />

      <main className="container">
        <div className="layout">
          <section id="menu" aria-label="Daftar menu">
            <div className="toolbar">
              <SearchBar value={search} onChange={setSearch} />
              <CategoryFilter categories={categories} active={category} onSelect={setCategory} />
            </div>
            <MenuList items={filteredItems} onAdd={handleAdd} />
          </section>

          <Cart items={cart} onChangeQty={handleChangeQty} onRemove={handleRemove} onClear={handleClear} />
        </div>
      </main>

      <Footer studentName={STUDENT_NAME} nim={NIM} />
    </>
  );
}

export default App;