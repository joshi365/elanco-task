import React, { useCallback } from 'react';

interface FilterProps {
  onFilter: (region: string) => void;
}

const Filter: React.FC<FilterProps> = ({ onFilter }) => {
  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania', ''];

  const handleChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    onFilter(e.target.value);
  }, [onFilter]);

  return (
    <select style={{ width: "12%", height: "45px", padding: "5px", borderRadius: "6px" }} onChange={handleChange}>
      <option value="">All Regions</option>
      {regions.map((region) => (
        <option key={region} value={region}>
          {region}
        </option>
      ))}
    </select>
  );
};

export default React.memo(Filter);