<template>
	<div>
		<div class="AddTodoPrimary">
			<label class="PrimaryContainer">
				<span>Primary</span>
				<span class="PrimaryButtons">
					<button @click="PrimaryBtnFunc('red')">🔴</button>
					<button @click="PrimaryBtnFunc('orange')">🟠</button>
					<button @click="PrimaryBtnFunc('yellow')">🟡</button>
					<button @click="PrimaryBtnFunc('green')">🟢</button>
					<button @click="PrimaryBtnFunc('blue')">🔵</button>
				</span>
			</label>
			<label class="Tip"><b>Tip!</b><b>Emargency</b></label>
		</div>
		<textarea
			name="AddTodo"
			class="AddTodo"
			placeholder="What do you have to do?"
			cols="2"
			rows="2"
			v-model="isTodo"
			:isColor="isColor"
		></textarea>
	</div>
</template>

<script>
	import { ref } from 'vue';
	export default {
		name: 'AddTodo',
		props: {
			todoData: Array,
		},
		setup() {
			return {
				isColor: ref(null),
				isTodo: ref(null),
			};
		},
		methods: {
			PrimaryBtnFunc(color) {
				switch (color) {
					case 'red':
						this.isColor = 'red';
						break;
					case 'orange':
						this.isColor = 'orange';
						break;
					case 'yellow':
						this.isColor = 'yellow';
						break;
					case 'green':
						this.isColor = 'green';
						break;
					case 'blue':
						this.isColor = 'blue';
						break;
					default:
						break;
				}
			},
		},
	};
</script>

<style lang="scss" scoped>
	@import '../Mixin.scss';

	.AddTodoPrimary {
		margin: 10% auto;
		width: 90%;
		.PrimaryContainer {
			@include flex(space-between, center, row);
			flex-wrap: nowrap;
			margin: 0 auto;
			& > span:first-of-type {
				font-weight: 600;
			}
		}
		.Tip {
			margin: 10px auto 0;
			text-align: left;
			font-size: 11px;
			display: block;
			& > b:last-of-type {
				color: red;
			}
		}
		.PrimaryButtons {
			& > button {
				border: 0;
				background: transparent;
				width: 20px;
				height: 20px;
				text-align: center;
				&:focus,
				&:focus-visible {
					font-size: 16px;
				}
			}
		}
	}

	.AddTodo {
		width: 90%;
		height: auto;
		padding: 3%;
		font-weight: 500;
		&:focus {
			outline-color: #2c3e50;
		}
	}
</style>
