# Instaclone

Instaclone Backend.

```
npm i --save-dev @babel/core
npm i @babel/preset-env --save-dev
npm i @babel/node --save-dev
npm install apollo-server graphql
npm install prisma --save-dev 
```

Prisma
```
pgadmin4
postgresql app
CREATE DATABASE instaclone
npx prisma init
```

## User:

- [x] Create Account
- [x] See Profile
- [x] Login
- [x] Edit Profile
- [x] Follow User
- [x] Unfollow User
- [x] Change Avatar (Image Upload)
- [x] Search Users
- [x] See Followers / pagination
- [x] See Following / cursor pagination

## Photos

- [x] See Photo
- [x] Upload Photo
- [x] Edit Photo
- [x] Like / Unlike Photo
- [x] See Photo Likes
- [x] See Feed
- [x] Search Photos
- [x] See Hashtags
- [x] See Photo Comments
- [x] is Me? (delete Photo)

## Comments

- [x] Comment on Photo
- [x] Edit Comment
- [x] Delete Comment

## Refactor

- [x] shared.typeDefs
- [x] protectedResolver edit

## Extras

- [ ] Amazon S3 Image Upload 