import Post from "./Post.js";
import fileService from "./FileService.js";

class PostService {
  async create(post, picture) {
    const fileName = fileService.saveFile(picture);
    const createdPost = await Post.create({ ...post, picture: fileName });
    return createdPost;
  }

  async getAll() {
    try {
      const posts = await Post.find();
      return posts;
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getOne(id) {
    try {
      if (!id) {
        throw new Error("Id is not defined");
      }
      const post = await Post.findById(id);
      return post;
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async update(post) {
    try {
      if (!post._id) {
        throw new Error("Id is not defined");
      }
      const updatedPost = await Post.findByIdAndUpdate(post._id, post, {
        new: true,
      });
      return updatedPost;
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async delete(id) {
    try {
      if (!id) {
        throw new Error("Id is not defined");
      }
      const post = await Post.findByIdAndDelete(id);
      return post;
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new PostService();
