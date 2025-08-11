 //let calculation='';
        let calculation = localStorage.getItem('calculation') || '';

        function updateCalculation(num)
        {
            calculation+=num;
            console.log(calculation);
            updateDisplay();
            localStorage.setItem('calculation',calculation);
        }
       
        
        function updateDisplay() {
        document.querySelector('.js-calculation').innerHTML = calculation;
        }

        function clearCalculation()
        {
            calculation='';
            updateDisplay();
            localStorage.setItem('calculation',calculation);
        }

        function calculateCalculation()
        {
           calculation = eval(calculation).toString();
           updateDisplay();
           localStorage.setItem('calculation',calculation);
        }