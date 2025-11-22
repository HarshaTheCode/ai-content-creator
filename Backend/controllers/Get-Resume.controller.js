import mongoose from "mongoose";
import usermodel from "../models/user.model.js";


export async function getResumesForUser(req, res) {
    try {
        const userId = req.cookies.Id;

        if (!userId) {
            return res.status(401).json({ message: "User not authenticated" });
        }

        const userWithResumes = await usermodel.aggregate([
            {
                $match: {
                    _id: new mongoose.Types.ObjectId(userId)
                }
            },
            {
                $lookup: {
                    from: 'generatedresumes',
                    localField: 'GeneratedResumeIds',
                    foreignField: '_id',
                    as: 'resumes'
                }
            },
            {
                $project: {
                    password: 0,
                    GeneratedResumeIds: 0,
                    __v: 0
                }
            }
        ]);

        if (userWithResumes.length === 0) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(userWithResumes[0]);

    } catch (error) {
        console.error("Error fetching resumes:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
