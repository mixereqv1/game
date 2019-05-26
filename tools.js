export function setPos($element, x, y) {
    $element.style.transform = `translate(${x}px, ${y}px)`;
}
export function clamp(v, min, max) {
    if (v < min) {
        return min
    }else if (v > max) {
        return max
    }else {
        return v
    }
}

export function rectIntersect(r1, r2) {
    return !(r2.left > r1.right ||
        r2.right < r1.left ||
        r2.top > r1.bottom ||
        r2.bottom < r1.top)
}
export function rand(min = 0, max = 1) {
    return min + Math.random() * (max - min);
}