// closures:
function get_user(id) {
    return function() {
        return users[id]; // closure!
        }
        }
        var user1 = get_user('jim');  // returns a reference to the inner function, not its result.
        var user2 = get_user('bob');
        /*
        -   **Lexical scope**
        -   The value of `this` is determined when the code runs and it depends on how we call our functions (directly or indirectly).
        -   A variable declared in an outer (enclosing) function is accessible from within any of that functions nested scopes and vice versa. This
        -   Lexically scoped variables are created when functions and blocks of code are defined (not executed). They can be accessed from anywhere within their lexical
        -   `var` is lexically scoped in JavaScript (unlike Python and Ruby). This means that it has block scope instead of function/module
        -   Lexically scoped variables are those that exist within the block in which they were declared or defined (i.e., their lifetime is limited by
            -   `this` is bound lexically in functions and methods.
            
            */
        
