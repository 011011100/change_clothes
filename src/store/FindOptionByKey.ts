import { clothingOptions, type ClothingOptions } from "./ClothingOptions";

export function findOptionByKey<T extends keyof ClothingOptions>(
    part: T,
    key: string
): ClothingOptions[T][number] | undefined {
    return clothingOptions[part].find((item) => item.key === key);
}
