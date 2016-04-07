import {Array1} from './array1';

export class Array2<T> extends Array<Array<T>> {
    
    constructor(width:int, height:int);
    constructor(src: Array<Array<T>>);
    constructor();
    constructor(...args:any[]) {
        super();
        if (args.length === 1){
            var a= args[0];
            for (var y=0; y < a.length; y++){
                this.push(a[y].slice());
            }            
        }
        else if (args.length===2){
            var width = args[0], height = args[1];
            if (width > 0 && height > 0){
                this.Array2.length = height;
                for (var i=0; i < height; i++){
                    this.Array2[i] = new Array(width);
                }
            }
        }          
    }

    private Array2 =this;
        
    public get height() {
        return !this.Array2 ? 0 : this.Array2.length;
    }
    public get width() {
        return (this.height != 0 && this.Array2[0]) ? this.Array2[0].length : 0;
    }
    
    public get(x:int, y:int) : T {
        if (this.inBounds(x,y)) 
            return this.Array2[y][x];
    }
    
    public set(x:int, y:int, value:T ) {
        if (this.inBounds(x,y))
            this.Array2[y][x] = value;
    }    
    
    private inBounds(x:int, y:int){
        return (x > -1 &&  y > -1 && x < this.width && y < this.height);
    }

    public rotateCounterClockwise(): Array2<T> {
        var n:int= this.height;
        var a= this.copy();
        for (var i:int=0; i < n/2; i++) {
            for (var j:int=i; j < n-i-1; j++) {
                var tmp:T=a[i][j];
                a[i][j]=a[j][n-i-1];
                a[j][n-i-1]=a[n-i-1][n-j-1];
                a[n-i-1][n-j-1]=a[n-j-1][i];
                a[n-j-1][i]=tmp;
            }
        }
        return a;
    }
    
    public rotateClockwise(): Array2<T> {
        var n:int= this.height;
        var a= this.copy();
        for (var i:int=0; i < n/2; i++) {
            for (var j:int=i; j < n-i-1; j++) {
                var tmp:T=a[i][j];
                a[i][j]=a[n-j-1][i];
                a[n-j-1][i]=a[n-i-1][n-j-1];
                a[n-i-1][n-j-1]=a[j][n-i-1];
                a[j][n-i-1]=tmp;
            }
        }
        return a;
    }
    
    public region( x1:int, y1:int, x2:int, y2:int ) : Array2<T> {
        if (this.inBounds(x1,y1) && this.inBounds(x2,y2)){
            var width = (x2-x1)+1;
            var height = (y2-y1)+1;
            var tmp = new Array2<T>(width,height);
            var yy=0;
            for (var y=y1; y <= y2; y++){
                var xx=0;
                for (var x= x1; x <= x2; x++){
                    tmp[yy][xx++]=this.Array2[y][x];
                }
                yy++;
            }
            return tmp;
        }
    }   

    public resize( width: int, height: int) : Array2<T>{                                
        if (width > 0 && height > 0){
            var tmp = this.copy();
            tmp.length= height;
            for (var i=0; i < height; i++){
                var row = tmp[i];
                if (!row) tmp[i] = new Array(width);
                else {
                    row.length = width;
                }
            }
            return tmp;            
        }      
    }
    
    public copy(): Array2<T> {
        var tmp: Array<Array<T>> = [];
        for (var y=0; y < this.height; y++){
            tmp.push(this.Array2[y].slice());
        }
        return new Array2<T>(tmp);
    }
    
    public toString(): string {
        var s:string = '';
        for (var i=0; i < this.height; i++){
            s +=  this.Array2[i].toString() + ']\n';                        
        }
        return s;
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
        
    public column(columnIndex:int) : Array1<T>{
        if (columnIndex >-1 && columnIndex < this.width){
            var tmp = new Array1<T>();        
            for (var y=0; y < this.height; y++){
                tmp.push( this[y][columnIndex]);
            }
            return tmp;
        }
    }
    
    public row(rowIndex:int) : Array1<T>{
        if (rowIndex >-1 && rowIndex < this.height){
            return new Array1<T>(this[rowIndex]);
        }
    }
    
    public each(callback: (element:T, x:int, y:int)=>any){
        for (var y = 0; y < this.height; y++){
            for (var x = 0; x < this.width; x++){
                if (callback(this[y][x],x,y)) return;
            }
        }
    }                    

    public flatten( ): Array1<T>{
        var a = new Array1<T>();
        for (var y = 0; y < this.height; y++){
            for (var x = 0; x < this.width; x++){
                a.push(this[y][x]);
            }
        }
        return a;
    }                    
    
}