// Code your solutions in this file
function writeCards(namesArray, eventName)
{
    const messagesArray = [];

    for (let i = 0; i < namesArray.length; i++) {
        const message = `Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`;
        messagesArray.push(message);
    }

    return messagesArray;
}

function countDown(num)
{
    while (num >= 0) {
        console.log(num);
        num--;
    }


}