import { Component, Renderer2, AfterViewInit, QueryList, ElementRef, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { PurchaseFace2 } from '../Purchase/PurchaseFace';
@Component({
  selector: 'PurchaseCreate',
  templateUrl: './PurchaseCreate.component.html',
  styleUrls: ['../../styles.css'],


})
export class PurchaseCreate implements AfterViewInit{
    constructor(private router: Router,private renderer: Renderer2,private elementRef: ElementRef) {}
    // 元件區塊
    // PS: ( ViewChildren )- 这行代码使用了 Angular 的 @ViewChildren 装饰器。它用于选择模板中标记为 inputPurchase 的所有元素，并将它们存储在名为 inputPurchases 的属性中。QueryList 是 Angular 提供的一个集合类，用于存储选中的元素。
    @ViewChildren('inputPurchase') inputPurchases!: QueryList<ElementRef>;
    // ==================================================================
    // 屬性區塊
    // ps.變數記得改
    req1 ="";
    req2 ="";
    req3 ="";
    req4 ="";
    btnBol = false;
    inputArray: string[] = [];
    purchaseList: PurchaseFace2[] = []; 
    // ==================================================================
    // 方法區塊
      // 內建
    navigateToLogin() {
      this.router.navigate(['/PurchaseCreate']);
    }
    ngAfterViewInit() {
       // PS: ngAfterViewInit 是 Angular 组件的生命周期钩子方法之一。它会在组件的视图及其子视图初始化完成后调用。在这个方法内部，我们订阅了 inputPurchases 的 changes 事件。当 inputPurchases 的元素列表发生变化时（例如，动态添加或删除了与选择器匹配的元素），回调函数就会被触发  
      let purchaseUpdateBtn = this.elementRef.nativeElement.querySelectorAll('button[id*=PurchaseCreateUpdate]');
      purchaseUpdateBtn.forEach((btn: HTMLElement) => {
        console.log(btn);
        this.renderer.listen(btn, 'click', (event: Event) => {
          let numUuid = +btn.id.split('_')[1];
          console.log(numUuid);
          this.searchOnlyPurchase(numUuid);
        });
      });
      } 
      // ---
        // 自訂
          // 1.暫存新增
      addPurchase() {
        // 按(+)後，將input的值裝入List，並清空input標籤
        // -----隨機Id，用於藏值用
        let min: number = 1;
        let max: number = 10000000000;
        let randomInRange: number = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log(randomInRange+"隨機");
        // -----
        const reqList: PurchaseFace2[] = [
          {randomId:randomInRange,req1:this.req1,req2:this.req2,req3:this.req3,req4:this.req4},
         ];
        this.inputPurchases.forEach((input: ElementRef) => {
          input.nativeElement.value = '';
        });
        // ---清空綁定屬性
        this.stringOutPut(randomInRange);
        this.req1 ="";
        this.req2 ="";
        this.req3 ="";
        this.req4 ="";
        // ---
        // ---將值加入要丟去後端的list
         this.purchaseList.push(...reqList);
         console.log(this.purchaseList);
        //  -
         let outPutListArea = this.renderer.selectRootElement('#outPut-List-Area');
         console.log(outPutListArea);
        
        this.renderer.setProperty(outPutListArea, 'innerHTML', this.inputArray.join(''));
        this.ngAfterViewInit();
         // ---------
        }
       // 1-1.輸出字串 ( list ) 
            stringOutPut(randomInRange:Number){
              this.inputArray.push(`
            <div class="Page-area-child-area-col">
                <div class="Page-area-child-area-2 Page-area-child-area-2-1">
                    <div class="Page-area-child-area-2-p">
                    <p>${this.req1}</p>
                    </div>
                </div>
                <div class="Page-area-child-area-2 Page-area-child-area-2-2">
                    <div class="Page-area-child-area-2-p">
                    <p>${this.req2}</p>
                    </div>
                </div>
                <div class="Page-area-child-area-2 Page-area-child-area-2-3">
                    <div class="Page-area-child-area-2-p">
                    <p>${this.req3}</p>
                    </div>
                </div>
                <div class="Page-area-child-area-2 Page-area-child-area-2-4">
                    <div class="Page-area-child-area-2-p">
                    <p>${this.req4}</p>
                    </div>
                </div>
                <div class="Page-area-child-area-2 Page-area-child-area-2-5">
                    <div class="Page-area-child-area-2-6-btn">
                        <button type="button" class="btn btn-primary" id="PurchaseCreateUpdate_${randomInRange}" (click)="test()">修改</button>
                        <button type="button" class="btn btn-danger"  id="PurchaseCreateDelete_${randomInRange}">刪除</button>
                    </div>
                </div>
            </div>

      `);
    }
          // 2.更新前，將資料帶進input
        searchOnlyPurchase(randomInRange:Number) {
            // 按(+)後，將input的值裝入List，並清空input標籤
            // -----隨機Id，用於藏值用
            console.log(randomInRange+"隨機");
            let purchaseList =  this.purchaseList;
            let purchaseItem: PurchaseFace2 | undefined; // 聲明 purchaseItem 的類型
            for(let item of purchaseList){
             if(item.randomId ==randomInRange){
                purchaseItem =item
             }     
            }
            console.log(purchaseItem?.req1);
            if (purchaseItem) {
              this.req1 = purchaseItem.req1;
              this.req2 = purchaseItem.req2;
              this.req3 = purchaseItem.req3;
              this.req4 = purchaseItem.req4;
            }
            this.btnBol =true; 
            }
          // 3.暫存修改
         updatePurchase() {
              console.log("修改");
              this.btnBol =false; 
    

    }
}
