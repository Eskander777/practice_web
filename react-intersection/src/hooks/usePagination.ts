import { useEffect, Dispatch, SetStateAction } from "react";
import { productType, productPageType, getPage } from "../App";

export default function usePagination({
  setCurPage,
  setProductsPage,
  perPage,
  prods,
  curPage,
  productsPage,
  lastItem,
}: {
  setCurPage: Dispatch<SetStateAction<number>>;
  setProductsPage: Dispatch<SetStateAction<productPageType>>;
  perPage: number;
  prods: productType[];
  curPage: number;
  productsPage: productPageType;
  lastItem: HTMLLIElement | null;
}) {
  const observer = new IntersectionObserver((entries) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      setCurPage((prevPage) => prevPage + 1);
    }
  });

  useEffect(() => {
    const newProdPage = getPage({
      array: prods,
      pageNumber: curPage,
      pageSize: perPage,
    });

    if (newProdPage.length > 0 && productsPage.page !== curPage) {
      setProductsPage((prevPage) => ({
        products: prevPage.products.concat(newProdPage),
        page: prevPage.page + 1,
      }));
    }
  }, [curPage]);

  useEffect(() => {
    if (lastItem) {
      observer.observe(lastItem);
    }

    return () => {
      if (lastItem) observer.unobserve(lastItem);
    };
  }, [lastItem]);

  return {};
}
