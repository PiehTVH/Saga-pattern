const Producer = require("../../../kafkaBroker/kafkaHandler/routes");

module.exports = (data) => {
  try {
    console.log("data", data);
    Producer({
      topic: "ORDER_CREATION_TRANSACTIONS",
      type: "PAYMENT_COMPLETED_STATE",
      payload: {
        transactionId: data.transactionId,
      },
    });
  } catch (e) {
    console.log(e);
  }
};
