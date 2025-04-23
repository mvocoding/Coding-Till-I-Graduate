from telethon import TelegramClient, events
api_id = '29772279'
api_hash = '5ff3dc24e095de118a14eae56fa36091'

# Create the Telegram client
client = TelegramClient('session_name', api_id, api_hash)

# To keep track of the state
state = {"step": 0}

async def main():
    # Connect to the client
    await client.start()

    bot_username = '@BananaGunSniper_bot'
    
    # Send a message to the bot to initiate the conversation
    await client.send_message(bot_username, '/start')
    state["step"] = 1

    @client.on(events.NewMessage(from_users=bot_username))
    async def handler(event):
        if state["step"] == 1:
            print("Bot's initial reply:", event.message.message)

            # Check if the bot's message contains an inline keyboard
            if event.message.buttons:
                print("Inline keyboard detected:")
                first_button = event.message.buttons[0][0]
                await first_button.click()

                # Update state to wait for the next response
                state["step"] = 2
        elif state["step"] == 2:
            print("Bot's reply after button click:", event.message.message)

            # Reply to the bot's message instead of sending a new one
            await event.message.reply("0x0122ede3adc05828df80b84adfda14fa940a02b6")

            # Update state to wait for the next response
            state["step"] = 3
        elif state["step"] == 3:
            print("Bot's reply after sending text:", event.message.message)

            # Reply again with a different message
            await event.message.reply("0.001")

            # Update state to wait for the next response
            state["step"] = 4
        elif state["step"] == 4:
            print("Bot's reply after sending text:", event.message.message)
            await event.message.reply("0.001")
            
            # Optionally, reply one last time
            await event.message.reply("Final message")

            # Update state to the final step
            state["step"] = 5
        elif state["step"] == 5:
            print("Final bot reply:", event.message.message)
            await client.disconnect()

    # Start the client and run it
    await client.run_until_disconnected()

with client:
    client.loop.run_until_complete(main())
