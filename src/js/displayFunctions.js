
const drawLogicGatesDiv = (divId, logicGates) => {
  let html = '';

  logicGates.forEach(
    (logicGate) => {
      html += `
        <div class="divLogicGate" onclick="selectLogicGate(${logicGate.id})">
            <div class="divLogicGateName">${logicGate.name}</div>
        </div>
      `;
    },
  );

  document.getElementById(divId).innerHTML = html;
};

const displaySelectedLogicGate = () => {
  const displayName = (selectedLogicGate) ? selectedLogicGate.displayDetails.displayName : '';
  const description = (selectedLogicGate) ? selectedLogicGate.displayDetails.description : '';

  document.getElementById("divSelectedLogicGateDisplayName").innerText = displayName;
  document.getElementById("divSelectedLogicGateDescription").innerText = description;

  displaySelectedLogicGateDiagram();
};

const displaySelectedLogicGateDiagram = () => {
  if (!selectedLogicGate) {
    document.getElementById("divSelectedLogicGateDiagram").innerHTML = '';
    return;
  }

  const inputs = selectedLogicGate.inputPins;
  const outputs = selectedLogicGate.outputPins;
  // const image = selectedLogicGate.displayDetails.image;

  // display keyboard keys
  // display input lines
  let inputHtml = '';
  console.log('===== inputs ======');
  console.log(inputs);
  inputs.forEach((input) => {
    inputHtml += `<table class=".no-padding-margin" width="100%">
        <tr>
          <td class="inputPinDisplayName">${input.displayName}</td>
          <td class="inputPinLine"><hr id="inputPin_${selectedLogicGate.id}_${input.id}" class="pinOff"/></td>
        </tr>
    </table>`;
  });

  // display gate image
  let imageHtml = `<div class="chipImage" style="background-color: ${selectedLogicGate.displayDetails.colour}"/>`;

  // display output lines
  let outputHtml = '';
  outputs.forEach((output) => {
    outputHtml += `<table class=".no-padding-margin" width="100%">
        <tr>
          <td class="outputPinLine"><hr id="outPin_${selectedLogicGate.id}_${output.id}" class="pinOff"/></td>
          <td class="outputPinDisplayName">${output.displayName}</td>
        </tr>
    </table>`;
  });

  let html = `<table id="logicGateDiagram" class="tblLogicGateDiagram">
    <tr>
        <td class="logicGateDiagramInputs no-padding-margin" width="50%">${inputHtml}</td>
        <td class="logicGateDiagramImage no-padding-margin">${imageHtml}</td>
        <td class="logicGateDiagramOutputs no-padding-margin" width="50%">${outputHtml}</td>
    </tr>
  </table>`;

  document.getElementById("divSelectedLogicGateDiagram").innerHTML = html;
}

const drawResultsDiv = (divId, result) => {
  let html = `<div class="lightBulbOff"/>`;
  if (result) {
    html = `<div class="lightBulbOn"/>`;
  };
  document.getElementById(divId).innerHTML = html;
};

const setupDisplay = () => {
  drawLogicGatesDiv('divLogicGates', logicGates);
  drawResultsDiv('divResults', result);
};
