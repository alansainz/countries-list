export default interface CountryCardProps {
  flag: {
    src: string;
    alt?: string;
  };
  name: string;
  population: number;
  region: string;
  capital: string;
}
