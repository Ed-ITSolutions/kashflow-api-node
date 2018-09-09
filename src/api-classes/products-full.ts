import {Product} from './product'
import {SubProduct} from './sub-product'

export interface ProductsFull{
  ProductFull: Product
  SubProducts: SubProduct[]
}