function printMagicIndex(arr) {
    console.log(arr?.[4]);
}

printMagicIndex([0, 1, 2, 3, 4, 5]); // undefined
printMagicIndex(); // undefined; if not using ?., this would throw
