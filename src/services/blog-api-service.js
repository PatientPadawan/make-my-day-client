import config from '../config';

const BlogApiService = {
  getBlogById(blogId, blogPosts) {
    const numBlogId = parseInt(blogId, 10);
    return blogPosts.find(({ id }) => id === numBlogId);
  },
  async getBlogPosts() {
    const res = await fetch(`${config.API_BASE_URL}/blogpost`);
    return (
      (!res.ok) ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  async addBlogPost(post, token) {
    const res = await fetch(`${config.API_BASE_URL}/blogpost`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(post),
    });
    return (
      (!res.ok) ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  async deleteBlogPost(postId, token) {
    const numPostId = parseInt(postId, 10);
    const res = await fetch(`${config.API_BASE_URL}/blogpost/${numPostId}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    return (
      (!res.ok) ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  async putBlogPostContent(postId, newContent, token) {
    const postToPut = {
      content: `${newContent}`,
    };
    const numPostId = parseInt(postId, 10);
    const res = await fetch(`${config.API_BASE_URL}/blogpost/${numPostId}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(postToPut),
    });
    return (
      (!res.ok) ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  async putBlogPostPublish(postId, publishState, token) {
    const postToPut = {
      published: `${publishState}`,
    };
    const numPostId = parseInt(postId, 10);
    const res = await fetch(`${config.API_BASE_URL}/blogpost/${numPostId}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(postToPut),
    });
    return (
      (!res.ok) ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};

export default BlogApiService;
