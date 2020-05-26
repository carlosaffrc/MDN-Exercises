
let choice = 'January';

switch(true) {
    case (choice === 'January' || choice === 'July' ): 
        update('black','white')
        break;

    case (choice === 'February' || choice === 'August' ): 
        update('black','white')
        break;
}

days =  (choice === 'February'|| choice === 'April' || choice === 'June' ||
               choice === 'September' || choice === 'November') ? 30 : 31;

console.log(days);