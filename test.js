function renderBoard() {
      const boardHTML = `
        <tr>
            <td id="1"></td>
            <td id="2"></td>
            <td id="3"></td>
        </tr>
        <tr>
            <td id="4"></td>
            <td id="5"></td>
            <td id="6"></td>
        </tr>
        <tr>
            <td id="7"></td>
            <td id="8"></td>
            <td id="9"></td>
        </tr>
    `;
      document.getElementById('board').innerHTML = boardHTML;
}
