import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {PurchaseCreate} from "../Page/Purchase/PurchaseCreate"
import {PurchaseSearch} from "../Page/Purchase/PurchaseSearch"
import {PurchaseUpdate} from "../Page/Purchase/PurchaseUpdate"
import { ShippingCreate } from 'src/Page/Shipping/ShippingCreate';
import { ShippingUpdate } from 'src/Page/Shipping/ShippingUpdate';
import { ShippingSearch } from 'src/Page/Shipping/ShippingSearch';
import { StockCreate } from 'src/Page/Stock/StockCreate';
import { StockUpdate } from 'src/Page/Stock/StockUpdate';
import { StockSearch } from 'src/Page/Stock/StockSearch';

const routes: Routes = [
 
  {
    path: 'PurchaseCreate',
    component:PurchaseCreate
  },
  {
    path: 'PurchaseSearch',
    component:PurchaseSearch
  }
  ,
  {
    path: 'PurchaseUpdate',
    component:PurchaseUpdate
  } ,
  {
    path: 'ShippingCreate',
    component:ShippingCreate
  },
  {
    path: 'ShippingUpdate',
    component:ShippingUpdate
  },
  {
    path: 'ShippingSearch',
    component:ShippingSearch
  }
  ,
  {
    path: 'StockCreate',
    component:StockCreate
  }
  ,
  {
    path: 'StockUpdate',
    component:StockUpdate
  }
  ,
  {
    path: 'StockSearch',
    component:StockSearch
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
