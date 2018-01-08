function regi() {
    var login = document.getElementById('login').value;
    if (login.length > 3 ) {
   console.log(login);
    } 
    else {
      console.log('error');
    }

     var pass = document.getElementById('pass').value;
    if (pass.length > 8 ) {
   console.log(pass);
    } 
    else {
      console.log('error');
    }

     var pass2 = document.getElementById('pass2').value;
    if (pass2.length > 8 ) {
   console.log(pass2);
    } 
    else {
      console.log('error');
    }


    if (pass2 == pass ) {
   console.log('пароли совпадают');
    } 
    else {
      console.log('не совпадает');
    }
    
    
    if (pass2 == pass , login.length > 3 , pass.length > 8 , pass2 > 8 ){
        
        document.location.href = "shop.html";
    }

     else {
      console.log('не верный логин или пароль');
    }

}



function shop(){}

