import { prisma } from "./generated/prisma-client"

// A `main` function so that we can use async/await
async function main() {
  // Create a new user called `Alice`
  const newUser = await prisma.createUser({
    name: "Bob",
    email: "bob@prisma.io",
    comments: {
      create: [{ body: "First comment!" }, { body: "And a second comment!" }],
    },
  })
  console.log(`Created new user: ${newUser.name} (ID: ${newUser.id})`)

  // Read all users from the database and print them to the console
  const allUsers = await prisma.users()
  console.log(allUsers)

  const allComments = await prisma.comments()
  console.log(allComments)
}

main().catch(e => console.error(e))
