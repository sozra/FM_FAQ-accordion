function test(index) {
    console.log('trigger test function', index);    
    let tag = document.getElementById("testt");
    const classList = tag.classList;
    if (classList.contains("test")) {
        classList.remove("test");
    } else {
        classList.add("test");
    }
}