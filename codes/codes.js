let cookies = 0;
let cpc = 1;

function bakeCookie(){
    if(cookies <= 99){
        cookies += cpc;
    document.getElementById('cookie-number').innerHTML = "Cookies: " + cookies; 
    }else{
        alert('Ikke mer kjeks til deg')
        location.reload();
    }
    

}
