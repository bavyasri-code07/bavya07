// =====================================================
// StudyMate AI - script.js
// =====================================================

const messageInput = document.getElementById("message");
const messagesBox = document.getElementById("messages");
const voiceBtn = document.getElementById("voiceBtn");


// =====================================================
// FRIENDLY RESPONSE ENGINE
// =====================================================

function getReply(message) {

    const text = message.toLowerCase().trim();


    // ---------------- FRIENDLY CHAT ----------------

    if (
        text.includes("hi") ||
        text.includes("hello") ||
        text.includes("ஹாய்") ||
        text.includes("வணக்கம்")
    ) {
        return `
            ஹாய்! 👋😊<br><br>
            உங்களுக்கு என்ன வேணும் சொல்லுங்க.
            சும்மா friendly-ஆ பேசணும்னாலும் பேசலாம்.
            Study doubt, coding, project எதுவாக இருந்தாலும்
            கேளுங்க. நான் help பண்றேன். 💙
        `;
    }


    if (
        text.includes("சாப்பிட்ட") ||
        text.includes("saptiya") ||
        text.includes("சாப்பிட")
    ) {
        return `
            ஹாஹா 😄 நான் AI-தானே, அதனால் சாப்பிட முடியாது.
            ஆனா உங்களோட பேசிட்டு இருக்கிறது நல்லா இருக்கு! 😊
            நீங்க சாப்பிட்டீங்களா?
        `;
    }


    if (
        text.includes("என்ன பண்ற") ||
        text.includes("enna panra") ||
        text.includes("what are you doing")
    ) {
        return `
            இப்போ உங்களோட பேசிட்டு இருக்கேன் 😄
            உங்களுக்கு என்ன help வேணும்னு சொல்லுங்க.
            Study-ஆ, coding-ஆ, project-ஆ,
            இல்ல சும்மா பேசலாமா? 😊
        `;
    }


    if (
        text.includes("எப்படி இருக்க") ||
        text.includes("how are you")
    ) {
        return `
            நான் நல்லா இருக்கேன்! 😊
            உங்களோட பேசிட்டு இருக்கிறதால இன்னும் happy-ஆ இருக்கு. 💙
            நீங்க எப்படி இருக்கீங்க?
        `;
    }


    // ---------------- CODING ----------------

    if (
        text.includes("coding") ||
        text.includes("code") ||
        text.includes("html") ||
        text.includes("javascript") ||
        text.includes("python") ||
        text.includes("java")
    ) {
        return `
            கண்டிப்பா! 💻😊<br><br>

            Coding-ல என்ன செய்யணும் சொல்லுங்க.
            <br><br>

            உதாரணமாக:
            <br>
            • ஒரு webpage உருவாக்கணுமா?
            <br>
            • ஒரு game செய்யணுமா?
            <br>
            • ஒரு calculator செய்யணுமா?
            <br>
            • error fix பண்ணணுமா?
            <br>
            • JavaScript feature சேர்க்கணுமா?
            <br><br>

            நீங்க என்ன செய்யணும்னு சொன்னா,
            அதற்கேற்ற code + simple explanation
            கொடுக்கிறேன். 🚀
        `;
    }


    // ---------------- PHYSICS ----------------

    if (
        text.includes("physics") ||
        text.includes("force") ||
        text.includes("newton")
    ) {
        return `
            சரி 😊 Physics doubt-ஐ அனுப்புங்க.

            <br><br>

            Question-ஐ முழுசாக type பண்ணலாம்
            அல்லது உங்களிடம் இருக்கும் question-ஐ
            இங்கே சொல்லலாம்.

            <br><br>

            நான்:
            <br>
            • Definition
            <br>
            • Theory
            <br>
            • Formula
            <br>
            • Example
            <br>
            • Step-by-step explanation
            <br><br>

            எல்லாத்தையும் easy-ஆ explain பண்ண முயற்சி பண்றேன். ⚡
        `;
    }


    // ---------------- CHEMISTRY ----------------

    if (
        text.includes("chemistry") ||
        text.includes("chemical")
    ) {
        return `
            Chemistry doubt-ஆ? 🧪😊

            Question அல்லது topic-ஐ அனுப்புங்க.
            Definition, theory, equation மற்றும் example
            இருந்தால் simple-ஆ explain பண்ணலாம்.

            புரியாத இடம் இருந்தாலும்
            அந்த particular part மட்டும் கேட்கலாம்.
        `;
    }


    // ---------------- MATHS ----------------

    if (
        text.includes("math") ||
        text.includes("maths") ||
        text.includes("கணக்கு")
    ) {
        return `
            Maths problem-ஐ அனுப்புங்க. ➗😊

            Answer மட்டும் இல்லாமல்,
            எப்படி solve பண்ணுறது என்பதையும்
            step-by-step-ஆ explain பண்ணுகிறேன்.

            Question-ஐ type பண்ணுங்க.
        `;
    }


    // ---------------- PROJECT ----------------

    if (
        text.includes("project") ||
        text.includes("ப்ராஜெக்ட்")
    ) {
        return `
            Super! 🚀

            Project பண்ணணும்னா முதலில்
            என்ன project என்று சொல்லுங்க.

            அதுக்குப் பிறகு:
            <br>
            1. Idea
            <br>
            2. Features
            <br>
            3. Design
            <br>
            4. Technologies
            <br>
            5. Code
            <br>
            6. Testing

            எல்லாத்தையும் step-by-step-ஆ plan பண்ணலாம். 😊
        `;
    }


    // ---------------- PORTFOLIO ----------------

    if (
        text.includes("portfolio") ||
        text.includes("போர்ட்ஃபோலியோ")
    ) {
        return `
            கண்டிப்பா! 🌐😊

            Portfolio-ல பொதுவாக:
            <br>
            • About Me
            <br>
            • Skills
            <br>
            • Projects
            <br>
            • Education
            <br>
            • Contact
            <br><br>

            மாதிரி sections வைக்கலாம்.

            உங்களுக்கு வேண்டிய design-ஐ சொல்லுங்க;
            அதற்கேற்ற HTML, CSS, JavaScript
            help பண்ணலாம்.
        `;
    }


    // ---------------- EDITING ----------------

    if (
        text.includes("edit") ||
        text.includes("photo") ||
        text.includes("image") ||
        text.includes("போட்டோ")
    ) {
        return `
            சரி! 🖼️😊

            என்ன மாதிரி edit வேண்டும் என்று சொல்லுங்க.

            உதாரணமாக:
            <br>
            • Background மாற்றணுமா?
            <br>
            • Dress/style மாற்றணுமா?
            <br>
            • Invitation design வேண்டுமா?
            <br>
            • AI image prompt வேண்டுமா?

            உங்களுக்கு தேவையான edit-ஐ
            தெளிவாக சொல்லுங்க.
        `;
    }


    // ---------------- INVITATION ----------------

    if (
        text.includes("invitation") ||
        text.includes("marriage") ||
        text.includes("திருமண")
    ) {
        return `
            கண்டிப்பா! 💌😊

            Invitation செய்ய:
            <br>
            • Names
            <br>
            • Date
            <br>
            • Time
            <br>
            • Venue
            <br>
            • Theme

            போன்ற details கொடுக்கலாம்.

            அதைப் பயன்படுத்தி invitation content
            மற்றும் AI editing/design prompt
            தயார் பண்ணலாம்.
        `;
    }


    // ---------------- SPEECH / AI ----------------

    if (
        text.includes("speech") ||
        text.includes("college") ||
        text.includes("artificial intelligence") ||
        text.includes("ai")
    ) {
        return `
            கண்டிப்பா! 🎤🤖

            Topic-ஐ சொல்லுங்க.

            நான் உங்களுக்கு:
            <br>
            • Introduction
            <br>
            • Main points
            <br>
            • Simple explanation
            <br>
            • Examples
            <br>
            • Conclusion
            <br><br>

            மாதிரி ஒரு easy-to-speak format
            தயார் பண்ண உதவுகிறேன்.
        `;
    }


    // ---------------- GAME ----------------

    if (
        text.includes("game") ||
        text.includes("கேம்")
    ) {
        return `
            Game உருவாக்கலாமே! 🎮😄

            எந்த மாதிரி game வேண்டும் என்று சொல்லுங்க.

            உதாரணமாக:
            <br>
            • Quiz game
            <br>
            • Memory game
            <br>
            • Number game
            <br>
            • Simple browser game
            <br><br>

            Idea முதல் code வரை
            step-by-step-ஆ help பண்ணலாம்.
        `;
    }


    // ---------------- QUIZ ----------------

    if (
        text.includes("quiz") ||
        text.includes("க்விஸ்")
    ) {
        return `
            சரி! 🧠😄 Quiz விளையாடலாம்.

            எந்த subject-ல quiz வேண்டும்?
            Maths, Physics, Chemistry, Computer
            அல்லது General Knowledge?

            Subject சொல்லுங்க!
        `;
    }


    // ---------------- STRESS / SAD ----------------

    if (
        text.includes("stress") ||
        text.includes("sad") ||
        text.includes("சோக") ||
        text.includes("stress")
    ) {
        return `
            சரி 💙 கொஞ்சம் relax பண்ணலாம்.

            என்ன விஷயம் என்று பேசணும்னு
            தோணுதோ அதை சொல்லலாம்.

            அவசரம் எதுவும் இல்லை.
            முதலில் என்ன நடக்குது என்று
            சொல்லுங்க; நான் கேட்கிறேன்.
        `;
    }


    // ---------------- DEFAULT ----------------

    return `
        சரி 😊 நீங்க சொன்னதைப் புரிஞ்சுக்கிட்டேன்.

        இன்னும் கொஞ்சம் detail-ஆ சொல்லுங்க.
        அதைப் பார்த்து உங்களுக்கு useful-ஆ
        answer பண்ண முயற்சி பண்றேன்.

        Study, coding, project, editing,
        portfolio அல்லது just friendly conversation
        எதுவாக இருந்தாலும் கேளுங்க. 💙
    `;
}



// =====================================================
// SEND MESSAGE
// =====================================================

function sendMessage() {

    const message = messageInput.value.trim();

    if (message === "") {
        return;
    }

    addMessage(message, "user");

    messageInput.value = "";

    showTyping();

    setTimeout(() => {

        removeTyping();

        const reply = getReply(message);

        addMessage(reply, "bot");

    }, 600);
}



// =====================================================
// QUICK BUTTON
// =====================================================

function quickAsk(text) {

    if (!text) {
        return;
    }

    addMessage(text, "user");

    showTyping();

    setTimeout(() => {

        removeTyping();

        const reply = getReply(text);

        addMessage(reply, "bot");

    }, 600);
}



// =====================================================
// ADD MESSAGE
// =====================================================

function addMessage(text, sender) {

    const messageDiv = document.createElement("div");

    messageDiv.className =
        sender === "user"
        ? "message user-message"
        : "message bot-message";


    const avatar =
        sender === "user"
        ? "👤"
        : "🤖";


    messageDiv.innerHTML = `
        <div class="message-avatar">
            ${avatar}
        </div>

        <div class="message-content">
            ${text}
        </div>
    `;


    messagesBox.appendChild(messageDiv);

    messagesBox.scrollTop =
        messagesBox.scrollHeight;
}



// =====================================================
// TYPING INDICATOR
// =====================================================

function showTyping() {

    if (document.getElementById("typing")) {
        return;
    }

    const typing = document.createElement("div");

    typing.id = "typing";

    typing.className =
        "message bot-message";


    typing.innerHTML = `
        <div class="message-avatar">
            🤖
        </div>

        <div class="message-content typing">
            <span></span>
            <span></span>
            <span></span>
        </div>
    `;


    messagesBox.appendChild(typing);

    messagesBox.scrollTop =
        messagesBox.scrollHeight;
}


function removeTyping() {

    const typing =
        document.getElementById("typing");

    if (typing) {
        typing.remove();
    }
}



// =====================================================
// ENTER TO SEND
// =====================================================

function enterSend(event) {

    if (
        event.key === "Enter" &&
        !event.shiftKey
    ) {

        event.preventDefault();

        sendMessage();
    }
}



// =====================================================
// NEW CHAT
// =====================================================

function newChat() {

    messagesBox.innerHTML = "";

    messageInput.value = "";

}



// =====================================================
// FILE SELECT
// =====================================================

function handleFile(event) {

    const file =
        event.target.files[0];

    if (!file) {
        return;
    }


    addMessage(
        `📎 File selected: <b>${file.name}</b>`,
        "user"
    );


    setTimeout(() => {

        addMessage(
            `சரி 😊 <b>${file.name}</b> select பண்ணியிருக்கீங்க. 
            இந்த demo version-ல் file-ஐ நேரடியாக analyze செய்ய
            AI connection தேவைப்படும்.`,
            "bot"
        );

    }, 500);
}



// =====================================================
// VOICE INPUT
// =====================================================

function startVoice() {

    const SpeechRecognition =
        window.SpeechRecognition ||
        window.webkitSpeechRecognition;


    if (!SpeechRecognition) {

        alert(
            "இந்த browser-ல் voice input support இல்லை."
        );

        return;
    }


    const recognition =
        new SpeechRecognition();


    recognition.lang = "ta-IN";

    recognition.continuous = false;

    recognition.interimResults = false;


    voiceBtn.innerText = "🔴";


    recognition.start();


    recognition.onresult = function(event) {

        const speech =
            event.results[0][0].transcript;


        messageInput.value = speech;

    };


    recognition.onerror = function() {

        alert(
            "Voice input எடுக்க முடியவில்லை. மீண்டும் try பண்ணுங்க."
        );

    };


    recognition.onend = function() {

        voiceBtn.innerText = "🎤";

    };

}



// =====================================================
// STARTUP MESSAGE
// =====================================================

window.addEventListener("load", () => {

    setTimeout(() => {

        addMessage(
            `
            ஹாய்! 👋😊<br><br>
            உங்களுக்கு என்ன வேணும் சொல்லுங்க.
            Friendly-ஆ பேசலாம்,
            coding help கேட்கலாம்,
            study doubt கேட்கலாம்,
            project அல்லது editing help-உம் கேட்கலாம். 💙
            `,
            "bot"
        );

    }, 500);
    function sendMessage() {
    const input = document.getElementById("message");
    const messages = document.getElementById("messages");

    const text = input.value.trim();

    if (text === "") return;

    messages.innerHTML += `
        <div class="message user-message">
            <div class="message-avatar">👤</div>
            <div class="message-content">${text}</div>
        </div>
    `;

    input.value = "";

    setTimeout(function () {

        messages.innerHTML += `
            <div class="message bot-message">
                <div class="message-avatar">🤖</div>
                <div class="message-content">
                    ஹாய்! 😊 உங்களோட பேசிட்டு இருக்கேன்.
                    என்ன help வேணும்னு சொல்லுங்க!
                </div>
            </div>
        `;

        messages.scrollTop = messages.scrollHeight;

    }, 500);
}


function enterSend(event) {
    if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        sendMessage();
    }
}
function getReply(message) {

    message = message.toLowerCase();

    if (
        message.includes("thank you") ||
        message.includes("thanks")
    ) {
        return "You're welcome! 😊 வேற ஏதாவது help வேணும்னா சொல்லுங்க.";
    }

    // மற்ற replies இங்கே...

}

});
