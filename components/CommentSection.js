"use client";

import { useComments } from "@/hooks/useComments";

export default function CommentSection({ id }) {
  const { comments, loading, error } = useComments(id);

  if (loading) return <p>Loading comments...</p>;
  if (error) return <p>Error loading comments...</p>;

  if (comments.length) {
    return (
      <div>
        <h2 className="text-2xl font-semibold mb-4">Comments</h2>
        <ul>
          {comments.map((comment) => (
            <li key={comment.id} className="border-b py-2">
              <p className="font-semibold">{comment.name}</p>
              <p className="text-gray-600">{comment.email}</p>
              <p>{comment.body}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return <div>No Comment!</div>;
}
