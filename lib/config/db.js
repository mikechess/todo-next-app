import mongoose from "mongoose"

export const ConnectDB = async () => {
    await mongoose.connect("mongodb+srv://mikecook450:moonhunt@cluster0.x02xwjh.mongodb.net/todo-app")
    console.log("DB Connected")
}




