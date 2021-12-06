exports.run = (client, message, args) => {
    const sayMessage = "Hello, comrades! Servant is here to help..."
    message.delete().catch(O_o=>{}); // Ignores the error 
    message.channel.send(sayMessage);
  }
