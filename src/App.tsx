import { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';
import MenuList from './components/MenuList';
import { menuItems } from './data/menu';
import type { CategoryFilterValue, MenuItem } from './types';

const categories: CategoryFilterValue[] = ['Semua', 'Kopi', 'Non-Kopi', 'Camilan'];

function App() {
  const [search, setSearch] = useState<string>('');
  const [category, setCategory] = useState<CategoryFilterValue>('Semua');

  const filteredItems = menuItems.filter((item) => {
    const matchCategory = category === 'Semua' || item.category === category;
    const matchSearch = item.name.toLowerCase().includes(search.trim().toLowerCase());
    return matchCategory && matchSearch;
  });

  // Sementara hanya mencatat di console. Di tahap berikutnya diganti ke keranjang.
  const handleAdd = (item: MenuItem) => {
    console.log('Tambah ke keranjang:', item.name);
  };

  return (
    <>
      <Header
        title="Kopi dan Nyemil"
        studentName="Tsulsi Khoirunisa"
        nim="1247050119"
        cartCount={0}
      />
      <main className="container" id="menu">
        <div className="toolbar">
          <SearchBar value={search} onChange={setSearch} />
          <CategoryFilter categories={categories} active={category} onSelect={setCategory} />
        </div>
        <MenuList items={filteredItems} onAdd={handleAdd} />
      </main>
    </>
  );
}

export default App;