const User = require('../models/UserModel');
const facturapi = require('../apis/facturapi');

const getAllUsers = async () => {
    return User.find({});
}

const getUserById = async (id) => {
    const user = await User.findById(id);
    //console.log("Usuario recuperado:", user);
    return user;
}

const createUser = async (user) => {
    const facturapiClient = await facturapi.createClient(user);
    user.facturapiId = facturapiClient.id;
    return User.create(user);
}

const updateUser = async (_id, user) => {
    const userDB = await getUserById(_id);
    const facturapiId = userDB.facturapiId;
    await facturapi.updateClient(facturapiId, user);
    user.facturapiId = facturapiId;
    return User.findByIdAndUpdate(_id, user, { new: true });
}

const deleteUser = async (_id) => {
    const userDB = await getUserById(_id);
    const facturapiId = userDB.facturapiId;
    await facturapi.deleteClient(facturapiId);
    return User.findByIdAndDelete(_id);
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}