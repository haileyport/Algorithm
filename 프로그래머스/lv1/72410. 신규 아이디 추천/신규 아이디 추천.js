function solution(new_id) {
    const one = new_id.toLowerCase();
    const two = one.replace(/[^a-z 0-9 \-\_\.]+/g, "");
    const three = two.replace(/\.{1,}/g, ".");
    const four = three.replace(/^\./, "");
    var five = '';
    if (four == '') {five = "a"} else {five = four}
    const six = five.substr(0,15).replace(/\.$/, "");
    var seven = six;
    while(seven.length<3){
        const repeat = seven.substr(seven.length-1);
        seven=seven+repeat
    }
    var answer = seven;
    return answer;
}