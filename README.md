# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
# Stills
_Mission_

To create a platform that encourages users to create engaging short personal stories with photos paired with captions. To feel intimiate with people on social media.

# User Journey

## 1. Sign up and username creation
Firebase auth only allows for email authentication, will need to prompt user to create a username. User cannot post unless they've created a username

## 2. Create new post and either post or save to draft

1. User creates draft
2. User uploads draft to post (delete draft)

# Firebase Tables

`username/posts/postId`

`username/drafts/id`
* users (firebase default)
* usernames
* posts
* drafts
* reactions (maybe subcollection of posts)
* comments (maybe subcollection of posts)

## Users
```
/users/userId/followers/followerId
```
* For each documentId, there will be subcollection, Followers and following


## Drafts / newPost
* When user is creating a new post, and exits, we ask if they want to save
* If user says yes, we create a draft
* when user posts, we delete this draft
* need a page for drafts


collection name <b>Drafts</b>, 

DocumentId, auto generated
* id
* slides, slide[]
* authorId
* date created / last updated


### Bucket for images

* `username/postId/imageName`

* `username/account/profilePhoto`

### Data schema to be sending up to Firebase: 
```ts
interface Draft {
  authorId: string;
  slides: Slide[];
  createTime: date

}
```

## Post
UI elements to display:
* Shows reaction count, users can add/remove their reactions
* shows slides, and text per photo
* upload date
* author username
* author avatar
* user can edit or delete the post


Post data to store in Firebase:
```ts
interface Post {
  id: string;
  authorId: string;
  createdAt: Date;
  slides: Slide[];
}
```
### Slides
```ts
interface Slide {
  order: number;
  imagePath: string;
  caption: string
}
```
### Post Subcollection
* <b>Comments</b> can be a subcollection of a post
* <b>Reactions</b> can be subcollection of a post
## Comments

Should be a subcollection of posts
* documentID is auto generated

<b>Now also consider having it at root level</b>

## Reactions 
* By post, Need to track <b>count</b> per emoji, for example `:) 4`
* by Post, need to track <b>usernames</b> per emoji
* User needs to be able to add or remove their reaction

### Reaction is its own root level collection (Implemented this)

`/reactions/postId/emojis/emojiId/users`

At the emojiId document, we have a count field.
We have a users collection, which will track userIds.



The subcollection can be named with Emoji Ids, 
here we add UserIds as documents

# Key features

# APIs
* Post
  * Add post (done)
  * update post (done)
  * Delete post (done)
  * Add reaction (done)
  * remove reaction (done)
  * get reactions (done)
  * get comments (done)
  * add comment (done)
  * delete comment (done)
  * upload image (done)
  * delete images

* Draft
  * Add draft (done)
  * update draft (done)
  * delete draft (done)
  * get drafts (done)

* User profile
  * create username
  * follow (done)
  * unfollow
  * make private
  * add bio, update bio
  * add profile image
  * delete own profile

* Notifications
  * add notification
  * delete notification

# Frontend Architecture

* Layout
  * sidebar 
  * main content

# Routes
* `/` home page, feed
* `/new-post`

# Add New Post Component and states
* starts with one slide
* can add, and reorder
* can preview

```js
const state = [
  {
    caption: '',
    imagePath: ''
  }
]
```

# Issues
## Firebase hosting
Running into the below when running `firebase init`
```bash
=== Hosting Setup
The CJS build of Vite's Node API is deprecated. See https://vitejs.dev/guide/troubleshooting.html#vite-cjs-node-api-deprecated for more details.

Error: An unexpected error has occurred.

Error: An unexpected error has occurred.
```
## Swiper library, 
* crossfade issue, https://github.com/nolimits4web/swiper/issues/1098
* make image responsive
   * https://www.w3schools.com/howto/howto_css_image_responsive.asp
* easing gradients
   * https://larsenwork.com/easing-gradients/