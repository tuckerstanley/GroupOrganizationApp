import express from 'express';

const admin = require("firebase-admin");

const serviceAccount = require("./service-account.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
const app = express();

// allow request body parsing
app.use(express.json());

app.get('/', (_, res) => {
  res.send('connected!');
});

type Post = {
  details: string;
  displayed: boolean;
  title: string;
  event: string
};

type PostWithId = Post & {
  id: string;
};

const postsCollection = db.collection('posts');

// generate a document with a random name to store the post's data
app.post('/createPost', async function (req, res) {
  const post: Post = req.body;
  const postDoc = postsCollection.doc();
  await postDoc.set(post);
  console.log(postDoc);
  console.log(post);
  res.send(`Post ${postDoc.id} added!`);
});

// Gets all of the posts.
app.get('/getPosts', async (_, res) => {
  const postsSnapshot = await postsCollection.get();
  const allPostsDoc = postsSnapshot.docs;
  const posts: PostWithId[] = [];
  for (let doc of allPostsDoc) {
    const post: PostWithId = doc.data() as PostWithId;
    post.id = doc.id;
    posts.push(post);
  }
  res.send(posts);
});

app.get('/getPosts/:event', async (req, res) => {
  const id = req.params.event;
  const postsSnapshot = await postsCollection.get();
  const allPostsDoc = postsSnapshot.docs;
  const posts: PostWithId[] = [];
  for (let doc of allPostsDoc) {
    const post: PostWithId = doc.data() as PostWithId;
    post.id = doc.id;
    if (post.event == id)
      posts.push(post);
  }
  res.send(posts);
});

// Edits a post. You are able to edit the title, the caption, and the display status.
app.post('/editPost', async function (req, res) {
  const newDetails = req.body.details;
  const newDisplayStatus = req.body.displayed;
  const newTitle = req.body.title;
  const id: string = req.body.id;
  await postsCollection.doc(id).update({ details: newDetails, displayed: newDisplayStatus, title: newTitle });
  res.send('updated!');
});

// Allows you to delete a post. Will need to add in functionality to 
// ensure that only the user who post it can delete it. 
app.delete('/deletePost/:id', async function (req, res) {
  const id = req.params.id;
  console.log(id)
  await postsCollection.doc(id).delete();
  res.send('deleted!');
});

app.listen(8080, function () {
  console.log('server started');
});