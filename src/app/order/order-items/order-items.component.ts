import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from '../../restaurant-detail/shopping-cart/cart-item.model';

@Component({
  selector: 'mt-order-items',
  templateUrl: './order-items.component.html'
})
export class OrderItemsComponent implements OnInit {

  // tem que usar esse decorator quando vc quer acessar
  // essa propriedade de um component parent, com o @Input()
  // a propriedade fica acessivel em order (parent)
  @Input() items: CartItem[]

  @Output() increaseQty = new EventEmitter<CartItem>()
  @Output() decreaseQty = new EventEmitter<CartItem>()
  @Output() remove = new EventEmitter<CartItem>()

  constructor() { }

  ngOnInit() {
  }

  emitIncreaseQty(item: CartItem){
    this.increaseQty.emit(item)
  }
  
  emitDecreaseQty(item: CartItem){
    this.decreaseQty.emit(item)
  }

  emitRemove(item: CartItem){
    this.remove.emit(item)
  }
}
