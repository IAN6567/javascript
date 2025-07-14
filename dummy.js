//A function is a reusable block of code that performs a specific function

//functions can take inputs(parameters) and return outputs

//creating/declaring a function
function add(a,b){
    console.log("adding two numbers;",a,b);//this logs the values of a and b to the console
    return a+b;//this fuunction takes two parameters and return their sum
}
function sendEmail(recepient,content){
    console.log(`sending email to ${recepient}with content:${content}`)//putting a variable inside a string
    //string concatenation is another way to combine strings and variables
    console.log("Email sent to"+ receient +"with content,"+ content);
    return{status:"success",message;"Email sent succesfully"};//return 

}
function calculateArea(length,width)
{
    return lenght*width;
}
function alert(){
    console.log("this is an alert message");
}
//a function without a return statement automatically  returns undefined.A return statement is used to specify the value that should be returned from the function when it is called.(the result of the function execution)

//calling/invoking a function -code in a function is not executed until the function is called
add(5,4);
add(12,40);
alert();
