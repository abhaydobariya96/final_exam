const { User } = require("../models")

/** create User */
const createUser = async (reqBody) => {
    return User.create(reqBody)
};
/**list User */
const getUser = async () => {
    return User.find()
};

/**delete User */
const deleteUser = async (id) => {
    return User.findByIdAndDelete(id)
};

/**get User */
const getUserById = async (id) => {
    return User.findById(id)
};

/**update User */
const updateDetails = async (id, updateBody) => {
    return User.findByIdAndUpdate(id, { $set: updateBody })
};


module.exports = {
    createUser,
    getUser,
    deleteUser,
    getUserById,
    updateDetails
}