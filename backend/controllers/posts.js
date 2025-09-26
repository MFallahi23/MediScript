import db from "../db.js";

const addPost = async (req, res) => {
  console.log("Starting!!");
  try {
    const secret = req.headers["x-secret"];
    if (secret !== process.env.ADMIN_SECRET) {
      return res.status(403).json({ error: "Forbidden" });
    }

    const { title, content } = req.body;

    if (!req || !content) {
      return res
        .status(400)
        .json({ error: "Post should have title and content" });
    }

    await db("posts").insert({ title, content });
    res.json({ success: true, message: `Article "${title}" inserted` });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

const getPosts = async (req, res) => {
  try {
    const limit = req.query.limit ? parseInt(req.query.limit) : null;
    let query = db("posts").select("*").orderBy("created_at", "desc");
    if (limit) query = query.limit(limit);
    const posts = await query;
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

const getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: "Id needed" });
    }

    const post = await db("posts").where({ id }).first();
    if (!post) return res.status(404).json({ error: "Not found" });
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export { addPost, getPosts, getPostById };
