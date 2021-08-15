const users = []


const addUser = ({ id, username, room }) => {
    // clean the data
    usrname = username.trim().toLowerCase()
    room = room.trim().toLowerCase()


    // Validate the data
    if (!username || !room) {
        return {
            error: 'Username and room are required'
        }
    }

    // Check for existing user
    const existingUser = users.find((user) => {
        return user.room === room && user.username === username
    })

    // validating username
    if (existingUser) {
        return {
            error: 'Username is in user'
        }
    }

    // store user

    const user = { id, username, room }
    users.push(user)
    return { user }
}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id)

    if (index !== -1) {
        return users.splice(index, 1)[0]
    }
}


const getUser = (id) => {
    return users.find((user) => user.id === id)
}



const getUsersinRoom = (room) => {
    room = room.trim().toLowerCase()
    return users.filter((user) => user.room === room)
}

// addUser({
//     id: 22,
//      username: 'prince',
//     room : '2222'
// })

// console.log(getUser(22).room)



module.exports = {
    addUser,
    removeUser,
    getUsersinRoom,
    getUser
}