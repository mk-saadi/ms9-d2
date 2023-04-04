import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./component/about/About";
import Contact from "./component/contact/Contact";
import ErrorPage from "./component/error/ErrorPage";
import Home from "./component/home/Home";
import First from "./component/first/First";
import Friends from "./component/friends/Friends";
import FriendD from "./component/friendDetail/FriendD";
import Posts from "./component/posts/Posts";
import PostD from "./component/postD/PostD";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home></Home>,
		children: [
			{
				// home er vitore default bhabe render hobe <First>
				path: "/",
				element: <First></First>,
			},
			{
				path: "/about",
				element: <About></About>,
				errorElement: <ErrorPage></ErrorPage>,
			},

			{
				path: "/contact",
				element: <Contact></Contact>,
				errorElement: <ErrorPage></ErrorPage>,
			},
			{
				path: "/friends",
				element: <Friends></Friends>,
				errorElement: <ErrorPage></ErrorPage>,
				loader: () =>
					fetch("https://jsonplaceholder.typicode.com/users"),
			},
			{
				// dynamic route
				path: "/friend/:friendId",
				element: <FriendD></FriendD>,
				//do not forget to use {params}
				loader: ({ params }) =>
					fetch(
						`https://jsonplaceholder.typicode.com/users/${params.friendId}`
					),
			},
			{
				path: "posts",
				element: <Posts></Posts>,
				// loader: () =>
				// 	fetch("https://jsonplaceholder.typicode.com/posts"),
			},
			{
				path: "post/:postId",
				element: <PostD></PostD>,
				//do not forget to use {params}
				// loader: ({ params }) =>
				// 	fetch(
				// 		`https://jsonplaceholder.typicode.com/posts/${params.postId}`
				// 	),
			},
		],
	},
	{
		path: "*",
		element: <div style={{ fontSize: "5rem" }}>404</div>,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
