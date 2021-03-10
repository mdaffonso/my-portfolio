export const debounce = (func, delay=1000) => {
    let timeoutId = null;
    return (...args) => {
        if(timeoutId) clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            func.apply(null, args);
        }, delay);
    }
}

export const throttle = (func, limit=1000) => {
    let wait = false;
    return (...args) => {
        if (!wait) {
            func.call(args);
            wait = true;
            setTimeout(() => {
                wait = false;
            }, limit);
        }
    }
}