import PostList from "./PostList";

export default function PostLayout({children}) {
  return (
    <div className='grid grid-cols-4'>
        <div className='grid-cols-1 bg-slate-500 px-4 py-2 h-[calc(100vh-3rem)] max-h-screen overflow-y-auto'>
          <PostList />
        </div>
        <div className='grid-cols-3'>{children}</div>
    </div>
  )
}
