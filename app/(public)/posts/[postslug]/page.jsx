import { notFound } from 'next/navigation';
import React from 'react'

export const dynamicParams = true ;


// fetch pageData and use cache for ssi=no-cache or ssg=force-cache
async function fetchPost(postslug){
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postslug}`,
      {
        cache: "force-cache"
      }
    )
    const post = await res.json();
    return post;
}

// generate post
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

// get params by idpage
export async function generateStaticParams(){
  const res =await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts =await  res.json();

  return posts.slice(0,4).map((post)=>({
    postslug : post.id.toString(),
  }))
}

// automatik generate metatag like :  titile and discription
export async function generateMetadata({params}){
  const post = await fetchPost(params.postslug);
  return {title : post.title , discription : post.body};
}