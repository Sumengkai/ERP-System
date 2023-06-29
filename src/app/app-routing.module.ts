import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// ---
import { AppComponent } from './app.component';
// ---
import {PurchaseCreate} from "./Purchase-Create/PurchaseCreate.component"
import {PurchaseUpdate} from "./Purchase-Update/PurchaseUpdate.component"
import {PurchaseSearch} from "./Purchase-Search/PurchaseSearch.component"
// ---
import { ShippingCreate } from './Shipping-Create/ShippingCreate.component';
import { ShippingUpdate } from './Shipping-Update/ShippingUpdate.component';
import { ShippingSearch } from './Shipping-Search/ShippingSearch.component';
// ---
import { StockCreate } from './Stock-Create/StockCreate.component';
import { StockUpdate } from './Stock-Update/StockUpdate.component';
import { StockSearch } from './Stock-Search/StockSearch.component';
// ---
import { EmployeeCreate } from './Employee-Create/EmployeeCreate.component';
import { EmployeeUpdate } from './Employee-Update/EmployeeUpdate.component';
import { EmployeeSearch } from './Employee-Search/EmployeeSearch.component';
// ---
import { SupplierCreate } from './Supplier-Create/SupplierCreate.component';
import { SupplierUpdate } from './Supplier-Update/SupplierUpdate.component';
import { SupplierSearch } from './Supplier-Search/SupplierSearch.component';
// ---
import { RepairCreate } from './Repair-Create/RepairCreate.component';
import { RepairUpdate } from './Repair-Update/RepairUpdate.component';
import { RepairSearch } from './Repair-Search/RepairSearch.component';
// ---
import { InvoiceUpdate } from './Invoice-Update/InvoiceUpdate.component';
import { InvoiceSearch } from './Invoice-Search/InvoiceSearch.component';
// ---

const routes: Routes = [
// 首頁
  {
    path: 'AppComponent',
    component:AppComponent
  },
//  進貨管理
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
//  銷售管理
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
//  庫存管理

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
//  人員管理

  ,
  {
    path: 'EmployeeCreate',
    component:EmployeeCreate
  }

   ,
  {
    path: 'EmployeeUpdate',
    component:EmployeeUpdate
  } ,
  {
    path: 'EmployeeSearch',
    component:EmployeeSearch
  },
//  廠商管理

  {
    path: 'SupplierCreate',
    component:SupplierCreate
  },
  {
    path: 'SupplierUpdate',
    component:SupplierUpdate
  },
  {
    path: 'SupplierSearch',
    component:SupplierSearch
  }
//  維修管理
  ,
  {
    path: 'RepairCreate',
    component:RepairCreate
  }
  ,
  {
    path: 'RepairUpdate',
    component:RepairUpdate
  }
  ,
  {
    path: 'RepairSearch',
    component:RepairSearch
  }
  //  發票管理
  ,
  {
    path: 'InvoiceUpdate',
    component:InvoiceUpdate
  }
  ,
  {
    path: 'InvoiceSearch',
    component:InvoiceSearch
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
