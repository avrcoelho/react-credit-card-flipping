export interface Props {
  brand?: string;
  name: string;
  number: string;
  expiry: string;
  cvv: number | string;
  backgroundColor?: string;
  filledBackgroundColor?: string;
  flipCard?: boolean;
  emptyName?: string;
}
