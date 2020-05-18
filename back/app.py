import os


from flask import Flask, render_template, jsonify
from flask_socketio import SocketIO, emit, send, join_room, leave_room

app = Flask(__name__)
# app.config["SECRET_KEY"] = os.getenv("SECRET_KEY")
app.config['SECRET_KEY'] = 'secret_key!'
socketio = SocketIO(app)


msg = {"General": [{'author': "Admin", 'message': "Welcome to channel general", 'date': ""}]
       }
limit = 100


@app.route("/")
def index():
    return render_template("index.html")


@socketio.on('get channels')
def getChannels(data):
    emit('channels', list(msg.keys()))


@socketio.on('get messeges')
def getMesseges(data):
    # print("AAAAAA")
    # print(data)
    # print(msg[data])
    emit('messeges', msg[data])


@socketio.on('add channel')
def addChannel(data):
    title = data['title']
    greeting = 'Welcome to channel ' + title
    emit("channel added", {'channel': title}, broadcast=True)
    msg[title] = [{'author': "Admin", 'message': greeting, 'date': ""}]

@socketio.on('delete channel')
def deleteChannel(data):
    title = data['title']
    print(title)
    msg.pop(title, None)
    print(list(msg.keys()))
    emit("channel deleted", {'channel': title}, broadcast=True)



@socketio.on('send message')
def sendMessage(data):
    message = data['message']
    author = data['author']
    date = data['date']
    channel = data['channel']
    print(message)

    if channel in msg:
        # in case there is more than limit messeges in one channel
        if len(msg[channel]) >= limit:
            msg[channel].pop(0)
        msg[channel].append(
            {'author': author, 'message': message, 'date': date})
        print(msg[channel])
    else:
        msg[channel] = [
            {'author': author, 'message': message, 'date': date}]
        print(msg[channel])

    emit("send", {'author': author, 'message': message,
                  'date': date, 'channel': channel}, broadcast=True)


if __name__ == '__main__':
    socketio.run(app, debug=True, use_reloader=True)
