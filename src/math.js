/* Get percent betwen 2 range */
export function Percent(n, min, max, invert){
    var percent = (n-min)/(max-min);
    if(percent < 0) percent = 0;
    else if(percent > 1) percent = 1;
    if(invert) percent = 1-percent;
    return percent;
};
