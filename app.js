function sendMessage() {
    const inputField = document.getElementById('user-input');
    const chatOutput = document.getElementById('chat-output');
    const aiSelected = document.getElementById('ai-select').value;
    const text = inputField.value.trim();
    
    if (text === '') return;
    
    let encryptedText = encryptMessage(text);
    console.log("الإشارة المشفرة في الشبكة:", encryptedText);
    
    chatOutput.innerHTML += `<div class="message user-msg">${text}</div>`;
    inputField.value = '';
    chatOutput.scrollTop = chatOutput.scrollHeight;
    
    setTimeout(() => {
        let aiResponse = `تم تأمين الإشارة وجلب الرد من نموذج [${aiSelected.toUpperCase()}].`;
        let mockSource = "https://wikipedia.org";
        chatOutput.innerHTML += `
            <div class="message ai-msg">
                ${aiResponse}
                <a href="${mockSource}" target="_blank" class="source-link">🔗 تم التحقق عبر موقع: ${mockSource}</a>
            </div>`;
        chatOutput.scrollTop = chatOutput.scrollHeight;
    }, 1000);
}
