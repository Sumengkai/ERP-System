import { PurchaseFace, PurchaseFace2 } from "./PurchaseFace";

// 先建假資料 ( 之後要連 API )
export  const PurchaseServiceTestMock: PurchaseFace[] = [
    { id: 1, name:"Alice" },
    { id: 2, name:"Bob"},
    { id: 3, name:"Charlie"}
  ];
  export  const PurchaseServiceTestMock2: PurchaseFace2[] = [
   {randomId:1,req1:"a",req2:"b",req3:"c"},
   {randomId:2,req1:"a",req2:"b",req3:"c"},
  ];