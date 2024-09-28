/* Basic page styling */
body, html {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    height: 100%;
    background-color: #f5f5f5;
}

.content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
}

/* Chatbot button styling */
.chatbot-container {
    position: fixed;
    bottom: 20px;
    right: 20px;
}

.chatbot-btn {
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 50px;
    cursor: pointer;
}

.chatbot-btn:hover {
    background-color: #45a049;
}

/* Chatbot box styling */
.chatbot-box {
    display: none;
    position: fixed;
    bottom: 80px;
    right: 20px;
    width: 300px;
    height: 400px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.chatbot-header {
    background-color: #4CAF50;
    color: white;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.chatbot-body {
    flex: 1;
    display: flex;
    flex-direction: column;
}

#chatbotMessages {
    flex: 1;
    padding: 10px;
    overflow-y: auto;
}

#chatInput {
    padding: 10px;
    border: 1px solid #ddd;
    width: 100%;
    box-sizing: border-box;
    border-radius: 0;
}

#chatInput:focus {
    outline: none;
}
