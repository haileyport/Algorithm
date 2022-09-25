function solution(new_id) {
    const one = new_id.toLowerCase().replace(/[^\w-_.]/g, "").replace(/\.+/g, ".").replace(/^\.|\.$/g, "").replace(/^$/, "a").replace(/\.$/, "").slice(0, 15).replace(/\.$/, '');
    
    const len = one.length;
    
    return len > 2 ? one : one + one.charAt(len-1).repeat(3 - len);
}