import React, { useState, useEffect } from "react";
import { Core } from "./components/core";
import { Button } from "antd";

let FriendStatus = {};

const useFriendStatus = (firendId: number) => {
	const [online, setOnline] = useState<boolean | null>(null);

	const handleStatusChange = (status: boolean) => {
		setOnline(status);
	};

	useEffect(() => {
		FriendStatus[firendId] = handleStatusChange;
		return () => {
			delete FriendStatus[firendId];
		};
	});

	return online;
};

const App = () => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		document.title = `your clicked ${count} times`;
		console.log(`your clicked ${count} times`);
		return () => {
			console.log("unmount");
		};
	});

	const isOnline = useFriendStatus(1);

	// setTimeout(() => {
	// 	Object.keys(FriendStatus).forEach((item) => {
	// 		FriendStatus[item](!isOnline);
	// 	});
	// }, 1500);

	let firend = "loading....";

	if (isOnline) {
		firend = "true";
	} else {
		firend = "false";
	}

	return (
		<div>
			<Core></Core>
			<p>{count}</p>
			<Button
				onClick={() => {
					setCount(count + 1);
				}}
			>
				add
				{firend}
			</Button>
		</div>
	);
};

export default App;
