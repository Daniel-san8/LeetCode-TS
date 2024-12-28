interface Array<T> {
    last: () => T | -1
}


Array.prototype.last = function() {
    const endChar = this.length - 1
    if(this.length === 0) return -1

    return this[endChar]
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */