import React, { useCallback } from 'react';

interface SortProps {
    onSortOrder: (order: 'asc' | 'desc') => void;
}

const Sort: React.FC<SortProps> = ({ onSortOrder }) => {
    const handleChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        onSortOrder(e.target.value as 'asc' | 'desc');
    }, [onSortOrder]);

    return (
        <select style={{ width: "13%", height: "45px", padding: "5px", borderRadius: "6px" }} onChange={handleChange}>
            <option value="asc">Population (Ascending)</option>
            <option value="desc">Population (Descending)</option>
        </select>
    );
};

export default React.memo(Sort);