import { useEffect, useState } from "react";
import { api } from "../../axios/axios";

type Post = {
    userId: number,
    id: number,
    title: string,
    body: string,
}

export function PostsPage() {
    const [posts, setPosts] = useState<Post[] | []>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function GetPosts() {
            try {
                const posts = await api.get("/posts")
                setPosts(posts.data)
                setError(null)
                console.error(posts.data);
            } catch (err) {
                setError("Error while fetching posts")
                console.error(err);
            }
        }
        GetPosts()
    }, [])

    return (
        <>
            {posts && posts.map((post, index) => (
                <div key={index}>
                    Title {index + 1}: {post?.title || "-"}
                </div>
            ))}{error}
        </>
    )
}