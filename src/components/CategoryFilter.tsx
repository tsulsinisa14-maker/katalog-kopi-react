import type { CategoryFilterValue } from '../types';

interface CategoryFilterProps {
  categories: CategoryFilterValue[];
  active: CategoryFilterValue;
  onSelect: (category: CategoryFilterValue) => void;
}

export default function CategoryFilter({ categories, active, onSelect }: CategoryFilterProps) {
  return (
    <div className="filters" role="group" aria-label="Filter kategori">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          className={category === active ? 'chip is-active' : 'chip'}
          aria-pressed={category === active}
          onClick={() => onSelect(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}