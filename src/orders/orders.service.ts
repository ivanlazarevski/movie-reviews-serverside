import { Injectable } from '@nestjs/common';
import { Order, OrderStatus } from './order.interface';

const orders: Order[] = [
  {id: 1, items: ['Cheeseburger', 'Sprite', 'Fries'], amount: 9.99, status: OrderStatus.PENDING, date: '2022-08-17', deliverer: 'Ivan'},
  {id: 2, items: ['Hamburger', 'Fanta',], amount: 7.99, status: OrderStatus.PENDING, date: '2022-08-17', deliverer: 'Ivan'},
  {id: 3, items: ['Cheeseburger', 'Salad', 'Fries'], amount: 10.54, status: OrderStatus.PENDING, date: '2022-08-17', deliverer: 'Borche'},
  {id: 4, items: ['Steak', 'Cola', 'Fries'], amount: 12.29, status: OrderStatus.PENDING, date: '2022-08-17', deliverer: 'Borche'},
  {id: 5, items: ['Hamburger', 'Cola'], amount: 5.86, status: OrderStatus.PENDING, date: '2022-08-17', deliverer: 'Ivan'},
  {id: 6, items: ['Steak', 'Cola', 'Fries', 'Salad'], amount: 15.39, status: OrderStatus.PENDING, date: '2022-08-17', deliverer: 'Ivan'},
  {id: 7, items: ['Fries'], amount: 2.99, status: OrderStatus.PENDING, date: '2022-08-17', deliverer: 'Borche'},
  {id: 8, items: ['Salad', 'Wine', 'Fries'], amount: 20.25, status: OrderStatus.PENDING, date: '2022-08-17', deliverer: 'Ivan'},
  {id: 9, items: ['Cheeseburger', 'Beer', 'Fries'], amount: 5.99, status: OrderStatus.PENDING, date: '2022-08-17', deliverer: 'Borche'},
  {id: 10, items: ['Cheeseburger', 'Sprite', 'Fries'], amount: 9.99, status: OrderStatus.PENDING, date: '2022-08-17', deliverer: 'Ivan'},
];

@Injectable()
export class OrdersService {
  getAllOrders() {
    return orders;
  }

  getOrderById(orderId: number) {
    return orders.filter((order: Order) => order.id === orderId)[0];
  }
}