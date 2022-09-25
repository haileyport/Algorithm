function solution(new_id) {
    const one = new_id.toLowerCase();
    const two = one.replace(/[^a-z 0-9 \-\_\.]+/g, "");
    const three = two.replace(/\.{1,}/g, ".");
    const four = three.replace(/^\./, "");
    let five = '';
    
    if (four == '') five = "a";
    else five = four;
          
    const six = five.substr(0,15).replace(/\.$/, "");
    let seven = six;
    
    while(seven.length<3){
        const repeat = seven.substr(seven.length-1);
        seven=seven+repeat
    }
    
    return seven;
}