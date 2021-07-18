import React from "react";
import "./App.scss";
import { EnchantmentIds, EnchantmentMaxLevel, EnchantmentNames, IEnchantmentCommandObject } from "./modules/enchantments";
import { ItemIds, ItemNames } from "./modules/items";

interface IState {
	itemSearch: string;
	selectedItem: string;

	enchantmentSearch: string;
	selectedEnchantments: Set<EnchantmentIds>;
}
export default class App extends React.Component<{}, IState> {
	constructor(props: any) {
		super(props);

		this.state = {
			itemSearch: "",
			selectedItem: "",

			enchantmentSearch: "",
			selectedEnchantments: new Set()
		};
	}

	handleClick(e: React.MouseEvent) {
		const itemId = e.currentTarget.getAttribute("item-id") as ItemIds | null,
			enchantment = e.currentTarget.getAttribute("enchantment") as EnchantmentIds | null;

		if (itemId) {
			this.setState({ selectedItem: itemId });
		}

		if (enchantment) {
			const { selectedEnchantments } = this.state;

			if (selectedEnchantments.has(enchantment))
				selectedEnchantments.delete(enchantment);
			else selectedEnchantments.add(enchantment);

			this.setState({ selectedEnchantments });
		}
	}

	// getMaxEnchantments(item: Items): IEnchantmentCommand {
	// 	switch (item) {
	// 		case Items.Pickaxe:
	// 			return {
	// 				Enchantments: [
	// 					{ id: "efficiency", lvl: 5 },
	// 					{ id: "unbreaking", lvl: 3 },
	// 					{ id: "fortune", lvl: 3 },
	// 					{ id: "mending", lvl: 1 }
	// 				]
	// 			};
	// 	}
	// }

	handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
		switch (e.target.name) {
			case "ItemSearch":
				this.setState({
					itemSearch: e.target.value
				});
				break;

			case "EnchantmentSearch":
				this.setState({
					enchantmentSearch: e.target.value
				});
				break;
		}
	}

	getFilteredItems() {
		let { itemSearch } = this.state;

		itemSearch = itemSearch.trim();

		if (itemSearch.length === 0)
			return Object.entries(ItemNames);

		return Object.entries(ItemNames).filter(item =>
			item[1].toLowerCase().includes(itemSearch.toLowerCase())
		);
	}

	getFilteredEnchantments() {
		const { enchantmentSearch } = this.state;

		if (enchantmentSearch.trim().length === 0)
			return Object.entries(EnchantmentNames);

		return Object.entries(EnchantmentNames).filter(item =>
			item[1].toLowerCase().includes(enchantmentSearch)
		);
	}

	getSelectedEnchantments(): IEnchantmentCommandObject {
		return {
			Enchantments:
				Array.from(this.state.selectedEnchantments).map(item =>
					({ id: item, lvl: EnchantmentMaxLevel[item] })
				)
		};
	}

	clearEnchantments() {
		const { selectedEnchantments } = this.state;
		selectedEnchantments.clear();
		this.setState({ selectedEnchantments });
	}

	getFinishedCommand() {
		const { selectedItem, selectedEnchantments } = this.state;

		return (
			selectedItem === ""
				? "Pick an item first."
				:
				// this.getMaxEnchantments(Items.Pickaxe)
				"/give @p " +
				this.state.selectedItem +
				(
					selectedEnchantments.size > 0
						? JSON.stringify(this.getSelectedEnchantments())
						: ""
				) + " 1"
		);
	}

	render() {
		return (
			<div className="App">
				<h1>Minecraft /give Command Generator</h1>

				<div>
					By Hevanafa (July 2021)
				</div>

				<div className="version">
					Minecraft version: 1.16-1.17
				</div>

				<div className="flex-evenly">
					<div className="items">
						<h2>Select item</h2>

						<input
							name="ItemSearch"
							placeholder="Search..."
							onChange={this.handleInputChange.bind(this)}
							value={this.state.itemSearch}
						/>

						<div className="item-list">
							{
								this.getFilteredItems().map(item =>
									<div
										key={item[0]}
										className={item[0] === this.state.selectedItem ? " selected" : ""}
										{...{ "item-id": item[0] }}
										onClick={this.handleClick.bind(this)}>
										{ItemNames[item[0]]}
									</div>
								)
							}
						</div>
					</div>

					<div className="enchantments">
						<h2>Pick the enchantments</h2>

						<input
							name="EnchantmentSearch"
							placeholder="Search..."
							onChange={this.handleInputChange.bind(this)}
							value={this.state.enchantmentSearch}
						/>

						{
							this.state.selectedEnchantments.size
								? <button onClick={this.clearEnchantments.bind(this)}>
									Clear selection
								</button>
								: null
						}

						<div className="enchantment-list">
							{
								this.getFilteredEnchantments().map(item =>
									<div
										key={item[0]}
										className={this.state.selectedEnchantments.has(item[0] as EnchantmentIds) ? " selected" : ""}
										{...{ enchantment: item[0] }}
										onClick={this.handleClick.bind(this)}>
										{EnchantmentNames[item[0]]}
									</div>
								)
							}
						</div>
					</div>
				</div>

				<div className="generated-cmd">
					<h2>Generated command:</h2>

					<div>
						{
							this.getFinishedCommand()
						}
					</div>
				</div>

			</div>
		);
	}
}

