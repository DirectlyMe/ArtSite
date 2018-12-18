import React from "react";
import classnames from "classnames";
import "./styles.scss";

const ItemTypeSelector = ({ types, selectedType, selectTypeFunc }) => {
  const typeNodes = types.map((typeItem, i) => {
    return typeItem.type === selectedType ? (
      <button
        key={i}
        className={classnames("type-selector--node", "type-selector--node---selected")}
        onClick={() => selectTypeFunc(typeItem.type)}
      >
        {typeItem.type}
      </button>
    ) : (
      <button
        key={i}
        className="type-selector--node"
        onClick={() => selectTypeFunc(typeItem.type)}
      >
        {typeItem.type}
      </button>
    );
  });

  return <div className="type-selector">{typeNodes}</div>;
};

export default ItemTypeSelector;
