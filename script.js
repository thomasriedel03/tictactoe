let fields = [
      null, //0
      null, //1
      null, //2
      null, //3
      null, //4
      null, //5
      null, //6
      null, //7
      null, //8
];

let circlesToPlay = true;
let crossesToPlay = false;

function render() {
      renderBoard();
      updateBoard();
}

function renderBoard() {
      const boardHTML = `
        <tr>
            <td class="cell" id="1"></td>
            <td class="cell" id="2"></td>
            <td class="cell" id="3"></td>
        </tr>
        <tr>
            <td class="cell" id="4"></td>
            <td class="cell" id="5"></td>
            <td class="cell" id="6"></td>
        </tr>
        <tr>
            <td class="cell" id="7"></td>
            <td class="cell" id="8"></td>
            <td class="cell" id="9"></td>
        </tr>
    `;
      document.getElementById('board').innerHTML = boardHTML;
}

function updateBoard() {
      // Hole alle td-Elemente im Board
      const cells = document.querySelectorAll('#board td');

      // Iteriere über die `fields`-Array
      fields.forEach((value, index) => {
            // Hole das entsprechende td-Element anhand des Index
            const cell = cells[index];

            // Setze den innerHTML des Feldes basierend auf dem Wert im Array
            if (value === 'circle') {
                  cell.innerHTML = generateAnimatedCircleSVG();
            } else if (value === 'cross') {
                  cell.innerHTML = generateAnimatedCrossSVG();
            } else {
                  cell.innerHTML = '';
                  // Füge das Klick-Event hinzu, wenn der Wert `null` ist
                  cell.onclick = () => addSymbol(index);
                  cell.style.cursor = 'pointer'; // Setze den Cursor auf pointer für klickbare Felder
            }
      });
}

function addSymbol(index) {
      // Überprüfen, ob das Feld leer ist
      if (fields[index] === null) {
            if (circlesToPlay) {
                  // Setze das Symbol auf 'circle'
                  fields[index] = 'circle';
                  // Wechsle zu 'crossesToPlay'
                  circlesToPlay = false;
                  crossesToPlay = true;
            } else if (crossesToPlay) {
                  // Setze das Symbol auf 'cross'
                  fields[index] = 'cross';
                  // Wechsle zu 'circlesToPlay'
                  crossesToPlay = false;
                  circlesToPlay = true;
            }
            // Das Board neu rendern
            render();
      }
}

function generateAnimatedCircleSVG() {
      return `
        <svg width="70" height="70" viewBox="0 0 70 70" xmlns="http://www.w3.org/2000/svg">
            <circle cx="35" cy="35" r="30" stroke="none" fill="none" />
            <circle cx="35" cy="35" r="30" stroke="#00B0EF" stroke-width="10" fill="none"
                stroke-dasharray="188.4"
                stroke-dashoffset="188.4">
                <animate
                    attributeName="stroke-dashoffset"
                    from="188.4"
                    to="0"
                    dur="1s"
                    fill="freeze" />
            </circle>
        </svg>
    `;
}

function generateAnimatedCrossSVG() {
      return `
        <svg width="70" height="70" viewBox="0 0 70 70" xmlns="http://www.w3.org/2000/svg">
            <!-- Das Kreuz mit Rotation -->
            <g transform="rotate(45 35 35)">
                <path 
                    d="M35,10 V60 M10,35 H60" 
                    stroke="#FFC000" 
                    stroke-width="10" 
                    fill="none">
                    <animate 
                        attributeName="stroke-dasharray"
                        from="0,100"
                        to="100,0"
                        dur="2s"
                        fill="freeze"/>
                </path>
            </g>
        </svg>
    `;
}
