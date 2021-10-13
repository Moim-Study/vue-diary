<template>
	<div class="AddWrapper">
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
			v-model="todoArea"
			:modelValue="isTodo"
		></textarea>
		<button class="AddModalBtn" @click="saveData">Save Todo</button>
		<span class="AddTodoNotice" v-if="AddTodoNotice">
			할 일을 입력해주세요.
		</span>
	</div>
</template>

<script>
import { ref } from 'vue';
export default {
	name: 'AddTodo',
	props: {
		modelValue: Array,
	},
	setup() {
		const todoArea = ref('');
		const isTodo = ref([]);
		const isColor = ref('');
		const AddTodoNotice = ref(false);
		function PrimaryBtnFunc(color) {
			switch (color) {
				case 'red':
					isColor.value = 'red';
					break;
				case 'orange':
					isColor.value = 'orange';
					break;
				case 'yellow':
					isColor.value = 'yellow';
					break;
				case 'green':
					isColor.value = 'green';
					break;
				case 'blue':
					isColor.value = 'blue';
					break;
				default:
					break;
			}
		}
		function saveData() {
			if (isColor.value !== '' && todoArea.value !== '') {
				console.log(isTodo.value);
				isTodo.value.push({ todo: todoArea.value, primary: isColor.value });
			} else {
				AddTodoNotice.value = true;
				setTimeout(() => (AddTodoNotice.value = false), 3000);
			}
		}
		return {
			todoArea,
			isColor,
			isTodo,
			PrimaryBtnFunc,
			saveData,
			AddTodoNotice,
		};
	},
};
</script>

<style lang="scss" scoped>
@import '../Mixin.scss';
.AddWrapper {
	@include flex(unset, center, column);
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
	.AddModalBtn {
		border: 1px solid black;
		width: 150px;
		height: 40px;
		margin: 20px 0;
		&:hover {
			background-color: #2c3e50;
			color: white;
		}
	}
	.AddTodoNotice {
		color: red;
		display: block;
		font-size: 14px;
	}
	.AddTodo {
		width: 89%;
		height: auto;
		padding: 3%;
		font-weight: 500;
		&:focus {
			outline-color: #2c3e50;
		}
	}
}
</style>
