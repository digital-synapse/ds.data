export class Array1<T> extends Array<T> {
    
    constructor(length:int);
    constructor(src: Array<T>);
    constructor();
    constructor(arg?:any) {
        super();
        if (arg){
            if (arg.length){
                for (var i=0; i < arg.length; i++){
                    this.push(arg[i]);
                }
            }
            else {
                this.length = length;
            }
        }
    }
    
    public get(i:int) : T {
        if (this.inBounds(i)) 
            return this[i];
    }
    
    public set(i:int, value:T ) {
        if (this.inBounds(i))
            this[i] = value;
    }    
    
    private inBounds(i:int){
        return (this.length && i > -1 &&  i < this.length);
    }
    
    public sum() : number{
        var acc:any=0;
        for (var i=0; i < this.length; i++){
            acc += this[i];
        }
        return acc;
    }
    
    public avg() : number{
        var acc = this.sum();        
        return acc / this.length;
    }
    
    public min() : number{
        var min= Number.POSITIVE_INFINITY;
        for (var i=0; i < this.length; i++){
            var e:any=this[i];
            if (e < min) min = e;
        }        
        return min;
    }
    
    public max() : number{
        var max= Number.NEGATIVE_INFINITY;
        for (var i=0; i < this.length; i++){
            var e:any=this[i];
            if (e > max) max = e;
        }        
        return max;
    }
    
    public each(callback: (element:T, index:int)=>any){
        for (var i = 0; i < this.length; i++){
            if (callback(this[i],i)) break;
        }
    }                    
        
    public hashCode(): int {
        var input = this.toString();
        var hash = 0, i, chr, len;
        if (input.length === 0) return hash;
        for (i = 0, len = input.length; i < len; i++) {
            chr   = input.charCodeAt(i);
            hash  = ((hash << 5) - hash) + chr;
            hash |= 0; // Convert to 32bit integer
        }
        return hash;        
    }    
    
    public copy(): Array1<T>{
        return new Array1<T>(this);
    }
}

