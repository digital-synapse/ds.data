import {Array2} from './array2';

describe('Array2', () => {
    var subject : Array2<string>;

    beforeEach(function () {
        subject = new Array2<string>([
            ['A','B','C','D'],
            ['E','F','G','H'],
            ['I','J','K','L'],
            ['M','N','O','P'],
        ]);
    });

    describe('#constructor', () => {
        it('should init the array with data', () => {
            if (subject[0] == undefined)
                throw new Error('expected data');        
        });
        it('should init the array with dimensions', () => {
            if (subject.width != 4 || subject.height !=4)
                throw new Error('expected width and height to = 4');        
        });        
    });
    
    describe('#rotateClockwise', () => {
        
        var r: Array2<string>;
        beforeEach(function () {
            r = subject.rotateClockwise();
        });
        
        it('should return a new object', () => {                       
            if (r == subject)
                throw new Error('expected a new object');        
        });
        it('should rotate the array data 90 degrees clockwise', () => {
            var expect = new Array2<string>([
                ['M','I','E','A'],
                ['N','J','F','B'],
                ['O','K','G','C'],
                ['P','L','H','D']
            ]);
            if (expect.toString() != r.toString())
                throw new Error('expected data to be rotated 90 degrees clockwise');        
        });        
    });
    
    describe('#rotateCounterClockwise', () => {
        
        var r: Array2<string>;
        beforeEach(function () {
            r = subject.rotateCounterClockwise();
        });
        
        it('should return a new object', () => {                       
            if (r == subject)
                throw new Error('expected a new object');        
        });
        it('should rotate the array data 90 degrees counter-clockwise', () => {
            var expect = new Array2<string>([
                ['D','H','L','P'],
                ['C','G','K','O'],
                ['B','F','J','N'],
                ['A','E','I','M']
            ]);
            if (expect.toString() != r.toString())
                throw new Error('expected data to be rotated 90 degrees counter-clockwise');        
        });        
    });    

    describe('#resize', () => {                
        
        it('should return a new object', () => {                       
            var r = subject.resize(2,2);
            if (r == subject)
                throw new Error('expected a new object');        
        });
        it('should reduce the array size and preserve data', () => {
            var r = subject.resize(2,2);
            var expect = new Array2<string>([
                ['A','B'],
                ['E','F']
            ]);
            if (expect.toString() != r.toString())
                throw new Error('expected data to be preserved while resizing down');        
        });        
        it('should increase the array size and preserve data', () => {
            var r = subject.resize(5,4);
            var expect = new Array2<string>([
                ['A','B','C','D', undefined],
                ['E','F','G','H', undefined],
                ['I','J','K','L', undefined],
                ['M','N','O','P', undefined],
            ]);
            if (expect.toString() != r.toString())
                throw new Error('expected data to be preserved while resizing up');        
        });        
        
    });    

    describe('#region', () => {                

        var r: Array2<string>;
        beforeEach(function () {
            r = subject.region(1,1,2,2);
        });
        
        it('should return a new object', () => {                       
            if (r == subject)
                throw new Error('expected a new object');        
        });
        it('should return a section from the array (inclusive)', () => {            
            var expect = new Array2<string>([
                ['F','G'],
                ['J','K']
            ]);
            if (expect.toString() != r.toString())
                throw new Error('expected data to be preserved while resizing down');        
        });        
                
    });    

    describe('#column', () => {                

        var r: string[];
        beforeEach(function () {
            r = subject.column(1);
        });
        
        it('should return a new array', () => {                       
            if (r == subject.column(1))
                throw new Error('expected a new array');        
        });
        it('should return a column of data', () => {            
            var expect = ['B','F','J','N'];
            if (expect.toString() != r.toString())
                throw new Error('expected data to be preserved while resizing down');        
        });        
                
    });    

    describe('#row', () => {                

        var r: string[];
        beforeEach(function () {
            r = subject.row(1);
        });
        
        it('should return a new array', () => {                       
            if (r == subject.row(1))
                throw new Error('expected a new array');        
        });
        it('should return a row of data', () => {            
            var expect = ['E','F','G','H'];
            if (expect.toString() != r.toString())
                throw new Error('expected data to be preserved while resizing down');        
        });        
                
    });    
    
    describe('#get', () => {                

        it('should return element at coordinates', () => {                       
            var e= subject.get(1,0);
            if (e != 'B')
                throw new Error('expected element to = B');        
        });
        it('should be safe (bounds checked) and not throw exception', () => {            
            var e = subject.get(50,50);
            if (e != undefined)
                throw new Error('expected data to be undefined');        
        });        
                
    });    
    
    describe('#set', () => {                

        it('should set element at coordinates', () => {                       
            subject.set(1,0,'Z');
            var e = subject.get(1,0);
            if (e != 'Z')
                throw new Error('expected element to = Z');        
        });
        it('should be safe (bounds checked) and not throw exception', () => {            
            try{
                subject.set(50,50,'Z');
            }
            catch (ex) {            
                throw new Error('expected set with illegal bounds to fail silently');
            }        
        });        
                
    });    

    describe('[] (direct access)', () => {                

        it('should set element at coordinates', () => {                       
            subject[0][1]='Z';
            var e = subject.get(1,0);
            if (e != 'Z')
                throw new Error('expected element to = Z');        
        });
        it('should get element at coordinates', () => {            
            var e=subject[0][1];
            if (e != 'B')          
                throw new Error('expected element to = B');
                    
        });        
                
    });    

    describe('#hashCode', () => {                

        it('should return consistent hashcodes', () => {                       
            var a = (new Array2([['A']])).hashCode();
            var b = (new Array2([['A']])).hashCode();
            if (a !== b)
                throw new Error('expected the same hashcode');        
        });
        it('should return different hashcodes when data has changed', () => {                       
            var a = (new Array2([['A']])).hashCode();
            var b = (new Array2([['B']])).hashCode();
            if (a === b)
                throw new Error('expected a different hashcode');        
        });
                
    });    

    describe('#each', () => {                

        it('should enumerate the collection', () => {                       
            subject.each((e,x,y)=>{
                var expected = subject.get(x,y);
                if (e != expected)
                    throw new Error('expected iterator to resolve '+ expected);
            });            
        });
        
        it('should preserve the calling context', () => {
            var preservesContext = true;                       
            subject.each((e)=>{                
                if (!preservesContext)
                    throw new Error('expected each to preserve calling context');
            });            
        }); 
        
        it('should break if a value is returned', () => {
            var loops=0;                 
            subject.each((e)=>{                
                loops++;
                return true;                
            });
            if (loops !== 1)   
                throw new Error('expected each to break');                        
        });                
                        
    });
    
    describe('#flatten', () => {                

        it('should flatten the 2D array to a 1D Array', () => {                       
            
            var expected = 'A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P';
            var flatten = subject.flatten().toString();
            if (flatten != expected)
                    throw new Error('expected flat array'+ expected);                       
        });

    });        

    describe('#copy', () => {                

        it('should return a new object', () => {                       
                        
            if (subject == subject.copy())
                    throw new Error('expected a new object');                       
        });
        it('should copy by value', () => {                       
            
            var expected = subject.toString();
            var copy = subject.copy().toString();
            if (copy != expected)
                    throw new Error('expected 1:1 data copy');                       
        });

    });        
            
});
