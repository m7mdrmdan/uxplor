import { KeyValue } from '@angular/common';
export class CustomFunctions {
    
    // reordering json Object key values 
    pipeIndexOrder:Function = (akv: KeyValue<string, any>, bkv: KeyValue<string, any>): number => {
        const a = akv.value.index;
        const b = bkv.value.index;
        return a > b ? 1 : (b > a ? -1 : 0);
      };
    
}