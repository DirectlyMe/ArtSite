import React from "react";
import classnames from "classnames";
import "./styles.scss";

const ItemTypeSelector = ({ types, selectedType, selectTypeFunc }) => {
  const typeNodes = types.map((typeItem, index) => {
    return typeItem === selectedType ? (
      <button
        key={index}
        className={classnames("type-selector--node", "type-selector--node---selected")}
        onClick={() => selectTypeFunc(index)}
      >
        {typeItem.type}
      </button>
    ) : (
      <button
        key={index}
        className="type-selector--node"
        onClick={() => selectTypeFunc(index)}
      >
        {typeItem.type}
      </button>
    );
  });

  return <div className="type-selector">{typeNodes}</div>;
};

export default ItemTypeSelector;
