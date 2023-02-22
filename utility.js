// function 1: to get data from input field by id
function getValueFromElementById(id){
    const value = document.getElementById(id).value;
    return value;
}

// function 2: to clear the input field after btn clicked
function clearInput(id){
    document.getElementById(id).value = '';
}