import type { ReactElement } from "react";

import ItemCard from "./components/ItemCard";

import allTheLatest from "./data.json";

const AllTheLatest = (): ReactElement => {
  return (
    <div className="all-the-latest-container">
      <div className="wrapper">
        <header>
          <h1>
            all the latest from <strong>aeg</strong>
          </h1>
        </header>
        {allTheLatest.data.map((item) => {
          return <ItemCard key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default AllTheLatest;
