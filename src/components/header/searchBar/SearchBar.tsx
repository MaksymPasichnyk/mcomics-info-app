import React, {ChangeEvent, useState} from "react";
import styles from "./searchBar.module.scss";
import { SearchOutlined } from "@ant-design/icons"

const SearchBar = () => {
	const [fieldValue, setFieldValue] = useState("");

	const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
		const newFieldValue = ev.currentTarget.value;

		setFieldValue(newFieldValue)
	} 

  return (
    <div className={styles["search-bar"]}>
      <input 
				onChange={handleChange}
				value={fieldValue}
				className={styles["search-bar__input"]} 
				type="text" 
				placeholder="Enter your search" 
				aria-label="search" />
      <button 
				className={styles["search-bar__button"]} 
				aria-label="submit-search"
			>
        <SearchOutlined />
      </button>
    </div>
  );
};

export default SearchBar;
