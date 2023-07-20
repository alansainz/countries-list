const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
type RegionType = (typeof regions)[number];

export default regions;
export type { RegionType };
