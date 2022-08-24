export interface Order {
  id: number;
  items: string[]; // lowercase
  amount: number; // currency
  status: OrderStatus; // uppercase
  date: string; // date
  deliverer: string; 
}

export enum OrderStatus {
  PENDING = 'pending',
  CANCELLED = 'cancelled',
  COMPLETE = 'complete',
}
