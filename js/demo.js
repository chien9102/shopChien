var ban = [false ,false,false,false,false,true];
    //       0     1     2      3     4     5
ban.forEach((element,index) => {
    if(element) {
        console.log(index);
    }
})