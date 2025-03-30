export const normalizeCategory = (catMap, category) => {
    return catMap[category] || category;
}

export const randomIndex = (min, max) => {
    if (min > max) throw new Error(`min (${min}) cannot be greater than max (${max})`);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default {normalizeCategory, randomIndex};

