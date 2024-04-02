<template>
  <br />
  <img src="/src/views/logo.png" padding="-20px" width="220px" />
  <br />
  <br />
  <div class="home container">
    <div class="home-wrapper">
      <h3>Welcome to Beyond Chat Bot.</h3>
    </div>
  </div>
  <br />
  <br />

  <main class="mainContainer">
    <header class="sidebarHeader">
      <img chatbotIcon src="./NEW_FAVICO_W_BUFFER.png" />
      <h>Beyond 21</h>
    </header>

    <div class="messagesContainer">
      <div class="welcome">
        <h8
          >Hello! I'm Herbie - Your Habitual Helper. <br />
          Feel free to ask me anything you need help with, and let's embark on
          this journey together.
        </h8>
        <br />
        <br />
      </div>

      <div class="messageBox">
        <template v-for="(message, index) in messages" :key="index">
          <div
            :class="
              message.from == 'user' ? 'messageFromUser' : 'messageFromOpenAI'
            "
          >
            <div
              :class="
                message.from == 'user'
                  ? 'userMessageWrapper'
                  : 'openAIMessageWrapper'
              "
            >
              <div
                :class="
                  message.from == 'user'
                    ? 'userMessageContent'
                    : 'openAIMessageContent'
                "
              >
                {{ message.data }}
              </div>
            </div>
          </div>
        </template>
      </div>

      <img chatbotIcon2 src="./NEW_FAVICO_W_BUFFER.png" />
    </div>

    <div class="inputContainer">
      <input
        v-model="currentInput"
        type="text"
        class="messageInput"
        placeholder="Type your message"
      />
      <button @click="sendMessage(currentInput)" class="askButton">Ask</button>
    </div>
  </main>
 <div class="made">
    <p>
      Built during Momentum Team NCCU 1 Cohort in &#128002 Durham, N.C. <br />by 
      <a href="https://LinkedIn.com/in/joannaem">Joanna Matanga </a>,
      <a href="https://linkedin.com/in/austin-cathey"> Austin Cathey </a>, 
      <a href="https://linkedin.com/in/megancgeo"> Megan Cain </a> & 
      <a href="https://www.linkedin.com/in/sanadevkota"> Upasana Devkota</a>
    </p>



  </div>
</template>

<script>
import axios from "redaxios";

export default {
  name: "ChatBot",
  data() {
    return {
      currentInput: "",
      messages: [],
    };
  },
  methods: {
    async sendMessage(message) {
      this.messages.push({
        from: "user",
        data: message,
      });
      await axios
        .post("https://chatbot-backend-04h8.onrender.com/chatbot", {
          userInput: message,
        })
        .then((response) => {
          this.messages.push({
            from: "openAI",
            data: response.data.data,
          });
          this.removeUserMessage();
        });
    },
  },
};
</script>

<style></style>