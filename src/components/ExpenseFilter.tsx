import categories from "../categories";

interface Props {
  onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <div className="mb-3">
      <select
        className="form-select"
        onChange={(e) => onSelectCategory(e.target.value)}
      >
        <option value="All categories">All categories</option>
        {categories.map((c) => (
          <option value={c}>{c}</option>
        ))}
      </select>
    </div>
  );
};

export default ExpenseFilter;
