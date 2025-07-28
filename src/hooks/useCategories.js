import { getCategoriesApi } from "@/services/categoryServie";
import { useQuery } from "@tanstack/react-query";

export function useCategories() {
  const { data, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategoriesApi,
  });

  const { categories: rawCategories = [] } = data || {};

  const categories = rawCategories.map((item) => ({
    label: item.title,
    value: item._id,
  }));

  const transformedCategories = rawCategories.map((item) => ({ label: item.title, value: item.englishTile }));

  return { isLoading, categories, transformedCategories };
}
