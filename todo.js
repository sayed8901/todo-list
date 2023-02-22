// to make dynamic sl number, firstly number declared outside the function with initial value 0
let count = 0;

document.getElementById('input-btn').addEventListener('click', function(){
  // to make dynamic sl number, numbers are added by 1 to get next sl number
  count = count + 1;

  // getting the input values from title & description field
  const myInputTitleValue = getValueFromElementById('input-title-value');
  const myInputDescriptionValue = getValueFromElementById('input-description-value');

  // clearing inputted value after got btn got clicked
  clearInput('input-title-value');
  clearInput('input-description-value');

  // get the parent element to add on it later
  const parent = document.getElementById("content-container");

  // creating the tableData quickly by using innerHTML
  const tr = document.createElement("tr");
  // we can use Template String to add value here dynamically
  tr.innerHTML = `
    <td>${count}</td>
    <td>${myInputTitleValue}</td>
    <td>${myInputDescriptionValue}</td>
    <td>
    <button class="btn btn-warning delete-btn">Delete</button>
    <button class="btn btn-primary done-btn">Done</button>
    </td>
  `;
  // adding the innerHTML tableData to its parent by appendChild
  parent.appendChild(tr);

  // to delete table row, firstly select it with querySelector
  const tableRowToDelete = document.querySelectorAll('.delete-btn');

  for(const singleRowToDelete of tableRowToDelete){
    // to delete table row data by clicking on delete button
    singleRowToDelete.addEventListener('click', function(e){
      // console.log(e.target.parentNode.parentNode);
      e.target.parentNode.parentNode.style.display = 'none';
    })
  }

    // mark table row as done
    const tableRowToMark = document.querySelectorAll('.done-btn');

    for(const singleToMarkRow of tableRowToMark){
      // to mark table row data by clicking on done button
      singleToMarkRow.addEventListener('click', function(e){
        console.log(e.target.parentNode.parentNode);
        e.target.style.textDecoration = 'line-through';
      })
    }

    
  // to clearAll the todo lists
  document.getElementById('clear-all-btn').addEventListener('click', function(e){
    document.getElementById('content-container').style.display = 'none';
  })
});
