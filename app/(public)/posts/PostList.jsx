import Link from 'next/link';
import React from 'react'

async function fetchPosts(){
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const posts = await res.json();
    return posts;
}
async function PostList() {
    const posts =await fetchPosts();
    return (
        <div>
            <h2>PostList</h2>
            <ul>
                {
                    posts.map( post=>(
                        <li key={post.id} className='border-b-2 pb-4'>
                            <article>
                                <h2 className='font-bold'>{post.title}</h2>
                                <p>{post.body}</p>
                                <p className='text-blue-300'>
                                    <Link href={`/posts/${post.id}`}>veiw Details</Link>
                                </p>
                            </article>
                        </li>
                    ))
                }
            </ul>   
        </div>
  )
}

export default PostList