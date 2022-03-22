/* main.js */


/* A simple script which will get some basic data and return it using console.log('data'). */

let username = ''
let password = ''
let email = ''

function secret(string, key)
{   
    if (!typeof(string) == 'string') { return }
    if (!typeof(key) == 'string')

    var returnstring = ''

    for (x = 1; x <= string.length; x++)
    {
        returnstring = returnstring + key
    }

    return returnstring
}

console.log('username: ' + username)
console.log('password: ' + secret(password, '*'))
console.log('email: ' + secret("@" + email.split("@")[2]), "*")