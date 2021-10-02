import React from "react";
import { MultiSelect as BPMultiSelect } from "@blueprintjs/select";
import { MenuItem } from "@blueprintjs/core";

function createFilm(title) {
  return title;
}

function renderCreateFilmOption(query, active, handleClick) {
  return (
    <MenuItem
      icon="add"
      text={`Create "${query}"`}
      active={active}
      onClick={handleClick}
      shouldDismissPopover={false}
    />
  );
}

export default function MultiSelect({
  items,
  selectedItems,
  onItemSelect,
  onRemove,
}) {
  if (!selectedItems) {
    selectedItems = [];
  }
  return (
    <BPMultiSelect
      createNewItemFromQuery={createFilm}
      createNewItemRenderer={renderCreateFilmOption}
      items={items}
      itemRenderer={(item, { handleClick, modifiers }) => (
        <MenuItem
          key={item}
          disabled={selectedItems.includes(item)}
          onClick={handleClick}
          text={item}
        />
      )}
      allowCreate={true}
      selectedItems={selectedItems}
      onItemSelect={onItemSelect}
      onRemove={onRemove}
      tagRenderer={(item) => item}
      fill
      tagInputProps={{
        tagProps: {
          minimal: true,
        },
      }}
    />
  );
}
