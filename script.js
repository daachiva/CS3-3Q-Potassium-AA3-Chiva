function checksMessage() {
    let messageInput = prompt("Please Enter Your Text:");

    if (messageInput.includes("FR") || (messageInput.includes("AI") && messageInput.includes("FR"))) {
        if (messageInput.includes("Ai") || messageInput.includes("aI")) {
            document.getElementById('result').innerHTML  =  "The message "  +  '"' + messageInput  +  '"'  +  " is fake!";
        } else {
            document.getElementById('result').innerHTML  =  "The message "  +  '"'  +  messageInput  +  '"'  +  " is legitimate!";
        }

    } else if (messageInput.includes("AI") || messageInput.includes("aI") || messageInput.includes("Ai")) {
        document.getElementById('result').innerHTML  =  "The message "  +  '"' +   messageInput  +  '"'  +  " is fake!";
    } else {
        document.getElementById('result').innerHTML  =  "The message "  +  '"'  +  messageInput  +  '"'  +  " is not yet encoded.";
    }
}