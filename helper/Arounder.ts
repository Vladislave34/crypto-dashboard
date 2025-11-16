const Aruonder= (num: number): string =>{

    if (num >= 1e9) {
        return `${Math.floor(num / 1e9)}B`;
    }
    if (num >= 1e6) {
        return `${Math.floor(num / 1e6)}M`;
    }
    return num.toString();
}
export default Aruonder;