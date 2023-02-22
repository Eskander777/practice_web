import { useState } from "react";

import ListEl from "./components/ListElement";
import usePagination from "./hooks/usePagination";

export type productType = { id: string; name: string };
export type productPageType = {
  products: productType[];
  page: number;
};

const prods: productType[] = [];
const MAX_PRODUCTS = 180;
const MAX_PER_PAGE = 40;
const FIRST_PAGE = 1;

for (let i = 0; i < MAX_PRODUCTS; i++) {
  const prod = { id: `p${i}`, name: `Product${i + 1}` };
  prods.push(prod);
}

export function getPage({
  array,
  pageSize,
  pageNumber,
}: {
  array: any[];
  pageSize: number;
  pageNumber: number;
}) {
  return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
}

function App() {
  const [curPage, setCurPage] = useState<number>(FIRST_PAGE);
  const [lastItem, setLastItem] = useState<HTMLLIElement | null>(null);
  const [productsPage, setProductsPage] = useState<productPageType>({
    products: getPage({
      array: prods,
      pageSize: MAX_PER_PAGE,
      pageNumber: FIRST_PAGE,
    }),
    page: FIRST_PAGE,
  });

  usePagination({
    setCurPage,
    setProductsPage,
    perPage: MAX_PER_PAGE,
    prods,
    curPage,
    productsPage,
    lastItem,
  });

  return (
    <ul style={{ fontFamily: "sans-serif" }}>
      {productsPage.products.map((product, index) => {
        if (index === productsPage.products.length - 1)
          return (
            <ListEl
              key={product.id}
              propsStyle={{ marginBottom: "10rem" }}
              refConnect={setLastItem}
            >
              {product.name}
            </ListEl>
          );
        return <ListEl key={product.id}>{product.name}</ListEl>;
      })}
    </ul>
  );
}

export default App;
