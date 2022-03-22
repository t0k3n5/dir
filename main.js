/* main.js */


/* A simple script which will get some basic data and return it using console.log('data'). */

let username = 'asd'
let password = 'asd'
let email = 'asd@gmail.com'

/*let splitted = email.split('@')[1]*/
/*let splitted2 = email.split('@')[2]*/

function secret(string, key)
{   
    /*if (!typeof(string) == 'string') { return }*/
    /*if (!typeof(key) == 'string')*/

    var returnstring = ''

    for (x = 1; x <= string.length; x++)
    {
        returnstring = returnstring + key
    }

    return returnstring
}

console.log('username: ' + username)
console.log('password: ' + secret(password, '*'))
console.log('email: ' + email)