import { notFound } from 'next/navigation';
import React from 'react'

export const dynamicParams = true ;

async function fetchPost(postslug){
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postslug}`,
      {
        cache: "force-cache"
      }
    )
    const post = await res.json();
    return post;
}

async function pageDetail({params}) {

    const post = await fetchPost(params.postslug);

    // if(!post.id) throw new Error("post not found");
    if(!post.id) return notFound();

  return (
    <div>
        <h2>PostDetails - {params.postslug}</h2>
        <h3>Post Title : {post.title}</h3>
        <p>{post.body}</p>
    </div>
  )
}

export default pageDetail;


export async function generateStaticParams(){
  const res =await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts =await  res.json();

  return posts.slice(0,4).map((post)=>({
    postslug : post.id.toString(),
  }))
}