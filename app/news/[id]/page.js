import CommentSection from "@/components/CommentSection";
import Header from "@/components/Header";

export async function generateStaticParams() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const newsList = await response.json();

  return newsList.map((news) => ({ id: String(news.id) }));
}

export default async function NewsPage({ params }) {
  const { id } = params;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const newsItem = await response.json();

  return (
    <div>
      <Header />
      <h1 className="text-4xl font-bold mb-4">{newsItem.title}</h1>
      <p className="text-gray-600 mb-4">ID: {newsItem.id}</p>
      <p className="mb-8">{newsItem.body}</p>
      <CommentSection id={id} />
    </div>
  );
}
