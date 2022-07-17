function getHex(){
    var letter= '0123456789ABCDEF'


    var color = '#'

    for(let k = 0; k<6; k++){
        color += letter[
            (Math.floor(Math.random() * 16))
        ]
    }
    return  color 
}

function bg(){
    var hex = getHex();
    document.getElementById('hex').innerHTML = hex;
    document.getElementsByTagName('body')[0].
    style.backgroundColor = hex; 
}
