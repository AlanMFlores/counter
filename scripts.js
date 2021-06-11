// Set initial count 

let count = 0;

// Select value and buttons

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')) {
            count--;
        }
        else if(styles.contains('increase')) {
            count++;
        } else {
            count = 0;
        }
        value.textContent = count;

        if(count > 0) {
            value.style.color = '#16bd16';
        } 
        else if(count < 0) {
            value.style.color = '#bd1616';
        } else {
            value.style.color = '#000'
        }
    })
})

