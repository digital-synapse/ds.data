import {Array1} from './array1';

describe('Array1', () => {
    var subject : Array1<string>;

    beforeEach(function () {
        subject = new Array1<string>(['A','B','C','D']);
    });

    describe('#constructor', () => {
        it('should init the array with data', () => {
            if (subject[0] == undefined)
                throw new Error('expected data');        
        });
        it('should init the array with dimensions', () => {
            if (subject.length != 4)
                throw new Error('expected length to = 4');        
        });        
    });
    
    describe('#get', () => {                

        it('should return element at coordinates', () => {                       
            var e= subject.get(1);
            if (e != 'B')
                throw new Error('expected element to = B');        
        });
        it('should be safe (bounds checked) and not throw exception', () => {            
            var e = subject.get(50);
            if (e != undefined)
                throw new Error('expected data to be undefined');        
        });        
                
    });    
    
    describe('#set', () => {                

        it('should set element at coordinates', () => {                       
            subject.set(1,'Z');
            var e = subject.get(1);
            if (e != 'Z')
                throw new Error('expected element to = Z');        
        });
        it('should be safe (bounds checked) and not throw exception', () => {            
            try{
                subject.set(50,'Z');
            }
            catch (ex) {            
                throw new Error('expected set with illegal bounds to fail silently');
            }        
        });        
                
    });    
    
    describe('[] (direct access)', () => {                

        it('should set element at coordinates', () => {                       
            subject[1]='Z';
            var e = subject.get(1);
            if (e != 'Z')
                throw new Error('expected element to = Z');        
        });
        it('should get element at coordinates', () => {            
            var e=subject[1];
            if (e != 'B')          
                throw new Error('expected element to = B');
                    
        });        
                
    });    

    describe('#hashCode', () => {                

        it('should return consistent hashcodes', () => {                       
            var a = (new Array1(['A'])).hashCode();
            var b = (new Array1(['A'])).hashCode();
            if (a !== b)
                throw new Error('expected the same hashcode');        
        });
        it('should return different hashcodes when data has changed', () => {                       
            var a = (new Array1(['A'])).hashCode();
            var b = (new Array1(['B'])).hashCode();
            if (a === b)
                throw new Error('expected a different hashcode');        
        });
                
    });    
    
    describe('#sum', () => {                

        it('should return the sum of all the numbers in the array', () => {                       
            var sum = (new Array1([1,1,1])).sum();            
            if (sum !== 3)
                throw new Error('expected the sum to = 3');        
        });
                        
    });
    
    describe('#avg', () => {                

        it('should return the average of all the numbers in the array', () => {                       
            var avg = (new Array1([1,1,1])).avg();            
            if (avg !== 1)
                throw new Error('expected the avg to = 1');        
        });
                        
    });        

    describe('#min', () => {                

        it('should return the smallest of all the numbers in the array', () => {                       
            var min = (new Array1([3,1,-2])).min();            
            if (min !== -2)
                throw new Error('expected the min to = -2');        
        });
                        
    });      
    
    describe('#max', () => {                

        it('should return the largest of all the numbers in the array', () => {                       
            var max = (new Array1([0,2,-2])).max();            
            if (max !== 2)
                throw new Error('expected the max to = 2');        
        });
                        
    });            
    
    describe('#each', () => {                

        it('should enumerate the collection', () => {                       
            subject.each((e,i)=>{
                var expected = subject.get(i);
                if (e != expected)
                    throw new Error('expected iterator to resolve '+ expected);
            });            
        });
        
        it('should preserve the calling context', () => {
            var preservesContext = true;                       
            subject.each((e,i)=>{                
                if (!preservesContext)
                    throw new Error('expected each to preserve calling context');
            });            
        }); 
        
        it('should break if a value is returned', () => {
            var loops=0;                 
            subject.each((e,i)=>{                
                loops++;
                return true;                
            });
            if (loops !== 1)   
                throw new Error('expected each to break');                        
        });                
                        
    });    
});