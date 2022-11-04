const hasDuplicate = ((arr) => {
    let notDuplicateArr = new Set(arr);
    if(notDuplicateArr.size!==arr.length) {
        return console.log(false);
    } else{
        return console.log(true);
    }
   
});

hasDuplicate([1,1,-1,4]);