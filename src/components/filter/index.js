import React, { useState } from 'react';
import './styles.scss';

function Filter({
  items, userTables, setItems,
}) {
  const [data, setData] = useState('');
  const [dataSelect, setDataSelect] = useState('');
  function renderFilters() {
    return items.map((item) => (
      <option value={item.firstName}>{item.firstName}</option>
    ));
  }
  const filter = () => {
    const textFilter = data || dataSelect;
    const searchResult = userTables.filter((element) => {
      if (element.firstName.toString().includes(textFilter.toString())
       || element.email.toString().includes(textFilter.toString())) {
        return element;
      }
      return null;
    });
    setItems(searchResult);
  };

  const filterText = (e) => {
    setData(e.target.value);
  };

  const filterSelect = (e) => {
    setDataSelect(e.target.value);
  };

  return (
    <div className="container">
      <div className="filter-container">
        <div className="input-filter">
          <h2>Filters</h2>
          <input type="text" value={data} onChange={filterText} placeholder="Filter by name or email" className="remove-border-right" />
        </div>
        <div className="input-filter">
          <select value={dataSelect} onChange={filterSelect} placeholder="Filter by name or email">
            <option value="">Filter select</option>
            {renderFilters()}
          </select>
        </div>
      </div>
      <button type="button" className="btn-secondary button-float-right" onClick={filter}>SUBMIT</button>
    </div>
  );
}

export default Filter;
