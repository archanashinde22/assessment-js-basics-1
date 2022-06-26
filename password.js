
// Create a variable called password and set it’s value to a string of your choice.
let password = "A5dslfg" ;


let maxLength = 20; // maximum length of password should be 20
let minlength = 10 ;  // minimum length of password should be 10


//1//first check whether entered password is at least 10 character long and maximum 20 character long
if(password.length >maxLength)  // // Additional Check 2 - checking maxium length of password
{
    console.log(`Maximum length of password should be ${maxLength}`);
}
else if(password.length >= minlength ) // checking minimum length of password
{
// Additional Check 1 - checking space in password
    if (password.includes(' '))
    {
        console.log(`There should not be space in password`);
    }
    else 
    {
    //  Conditions 2 3 : checking password contains at least one letter and one number using Regex expression 
    // // Additional Check  3 -  && Condition for at least one  special character 
      
            if(password.match(/[0-9]/) && password.match(/[a-z]/) && password.match(/[A-Z]/) && password.match(/[~!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/))
            {
                console.log(`Log in Successfull!`);
                

            }else
            {
                if(password.match(/[0-9]/) && password.match(/[a-z]/) && password.match(/[~!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/))   // // Additional Checkk 4 : checking upper case letter is there or not
                {
                    console.log(`Error : Password should contain at least one uppercase letter`);
                }
                else if(password.match(/[a-z]/) && password.match(/[A-Z]/) && password.match(/[~!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/))
                {
                    console.log(`Error : Password should contain at least one number`);
                }
                else if(password.match(/[0-9]/) && password.match(/[a-z]/) && password.match(/[A-Z]/))
                {
                    console.log(`Error : Password should contain at least one special character`);
                }
                { 
                    console.log(`Error : Password should contain at least one number and one upper case letter and one special character`) ;

                }
            }
    }
}
else // error message if length is less than 10
{
    console.log(`
    .----------------.  .----------------.  .----------------.  .----------------. 
   | .--------------. || .--------------. || .--------------. || .--------------. |
   | |  _________   | || |      __      | || |     _____    | || |   _____      | |
   | | |_   ___  |  | || |     /  \     | || |    |_   _|   | || |  |_   _|     | |
   | |   | |_  | |  | || |    / /\ \    | || |      | |     | || |    | |       | |
   | |   |  _|      | || |   / ____ \   | || |      | |     | || |    | |   _   | |
   | |  _| |_       | || | _/ /    \ \_ | || |     _| |_    | || |   _| |__/ |  | |
   | | |_____|      | || ||____|  |____|| || |    |_____|   | || |  |________|  | |
   | |              | || |              | || |              | || |              | |
   | '--------------' || '--------------' || '--------------' || '--------------' |
    '----------------'  '----------------'  '----------------'  '----------------' 
                                                                                   
                                                                                   
                                                                                   
                                                                                   
                                                                                   
                                                                                   
                                                                                   
                                                                                   
                                                                                   
                                                                                   
                                                                                   
   `);

    console.log(`Password should be at least ${minlength} characters long`);
}