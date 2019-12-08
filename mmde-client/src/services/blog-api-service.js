import DATASTORE from '../DATASTORE'

const BlogApiService = {
    getBlogByIndex(blogIndex, blogPosts) {
        return blogPosts.find(({ index }) => index == blogIndex)
    },
    getBlogPosts() {
        return new Promise((resolve, reject) => {
            resolve(DATASTORE.BLOGPOSTS);
        });
    },
}

export default BlogApiService