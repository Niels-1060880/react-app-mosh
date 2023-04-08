let count = 0;

function Message() {
  console.log('Message called', count);
  
  count++;
  return <p>Message {count}</p>;
}

export default Message;
