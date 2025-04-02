import { currentUser } from "@clerk/nextjs/server";
import { db } from '@/lib/prisma'; // Adjust path if needed

export const checkUser = async () => {
    try {
        const user = await currentUser();
        
        if (!user) {
            console.log("No user found!");
            return null;
        }

        console.log("User data from Clerk:", user);

        // Check if user already exists in the database
        const loggedInUser = await db.user.findUnique({
            where: { clerkUserId: user.id },
        });

        if (loggedInUser) return loggedInUser;

        // Create new user if not found in DB
        const name = `${user.firstName || ""} ${user.lastName || ""}`.trim();
        const email = user.emailAddresses?.[0]?.emailAddress || "";
        const imageUrl = user.imageUrl || "";

        const newUser = await db.user.create({
            data: {
                clerkUserId: user.id,
                name,
                imageUrl,
                email,
            },
        });

        return newUser;
    } catch (error) {
        console.error("Error in checkUser:", error);
        return null; // Ensure function always returns a value
    }
};
