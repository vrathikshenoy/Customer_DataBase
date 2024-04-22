import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
import { getDatabase, ref, onValue ,get,child } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase();

// Fetch all data from Firebase and display in table
async function fetchData() {
const tableBody = document.getElementById('tableBody');
const ss = document.getElementById('searchInput');

try {
    const snapshot = await get(ref(database));
    const data = [];
    console.log(snapshot.val());
    snapshot.forEach((childSnapshot) => {
      childSnapshot.forEach((grandChildSnapshot) => {
        grandChildSnapshot.forEach((greatGrandChildSnapshot) => {
          data.push({
            'Name': greatGrandChildSnapshot.val()['Name'],
            'Address': greatGrandChildSnapshot.val()['Address'],
            'Phone': greatGrandChildSnapshot.val()['Phone']
          });
        });
      });
    });
  
    // Sort the data by name in ascending order
    data.sort((a, b) => a['Name'].localeCompare(b['Name']));
  
    // Clear the existing table body
    tableBody.innerHTML = '';
    
    
    // Add the sorted data to the table
    data.forEach((row) => {
        const name = sentenceCase(row['Name']);
        const address = sentenceCase(row['Address']);
        const html = `
        <td style="text-align: center;">${name}</td>
        <td style="text-align: center;">${address}</td>
        <td style="text-align: center;">${row['Phone']}</td>
      `;
      tableBody.innerHTML += html;
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  function sentenceCase(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }
}
function search() {
    const input = document.getElementById('searchInput').value.toUpperCase();
    const table = document.getElementById('dataTable');
    const rows = table.getElementsByTagName('tr');
  
    for (let i = 1; i < rows.length; i++) { // start from 1 to skip header row
      const nameCol = rows[i].getElementsByTagName('td')[0];
      const phoneCol = rows[i].getElementsByTagName('td')[2];
  
      if (nameCol && phoneCol) {
        const nameText = nameCol.textContent || nameCol.innerText;
        const phoneText = phoneCol.textContent || phoneCol.innerText;
  
        if (nameText.toUpperCase().indexOf(input) > -1 || phoneText.toUpperCase().indexOf(input) > -1) {
          rows[i].style.display = '';
        } else {
          rows[i].style.display = 'none';
        }
      }
    }
  }

document.getElementById('searchInput').addEventListener('keyup', search);
window.onload = async function() {
try {
  await fetchData(); // Wait for data fetching to complete
} catch (error) {
  console.error("Error fetching data:", error);
}
};
