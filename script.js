function createTable() {
    //Write your code here
	const rows = prompt("Input number of rows");
  if (rows === null) return; // Handle cancel button

  // Prompt for the number of columns
  const columns = prompt("Input number of columns");
  if (columns === null) return; // Handle cancel button

  const table = document.getElementById("myTable");

  // Clear existing table content
  table.innerHTML = '';

  // Create rows and columns
  for (let i = 0; i < rows; i++) {
    const row = table.insertRow(i);

    for (let j = 0; j < columns; j++) {
      const cell = row.insertCell(j);
      cell.textContent = `Row-${i} Column-${j}`;
    }
  
}
