import React from "react";

export class MemoryPage extends React.Component {
	private _data: number[] = [];

	constructor(props: any) {
		super(props);

		this._data.length = 1000000;
	}

	public render(): React.ReactNode {
		return (
			<div>
				Memory Page
			</div>
		);
	}
}

export function MemoryPageWrapper() {
	return (
		<MemoryPage/>
	);
}
