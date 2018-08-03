(function() {
    class MaxSumm {

        constructor(arr) {
            this.arr = arr;
        }

        sumCalculate() {
            let result = 0;
            let summ = 0;

            if( this.arr.length <= 1 ) return 'Нужно больше элементов массива'

            this.arr.forEach((item, i, arr) => {
                summ += item;

                if( summ < 0 ) summ = 0;                     
                    
                result = Math.max(result, summ);
            });

            alert(result)
        }

    }


    let obj = new MaxSumm([-1, 10, -9, 5, 6, -10]);
    obj.sumCalculate()
})();