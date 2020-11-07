
const selectLogicGate = (id) => {
  cancelAllSubscriptions();

  if (selectedLogicGate?.id === id) {
    selectedLogicGate = null;
  } else {
    selectedLogicGate = logicGates.find((gate) => gate.id === id);
    createSubscriptionForLogicGate(selectedLogicGate);
  };

  drawResultsDiv('divResults', false);
  displaySelectedLogicGate();
  selectedLogicGate && createSubscriptionForLogicGate(selectedLogicGate);
};

const createSubscriptionForLogicGate = (gate) => {
  console.log('===== createSubscriptionForLogicGate =====');

}

const cancelAllSubscriptions = () => {
  console.log('===== cancelAllSubscriptions =====');

};
