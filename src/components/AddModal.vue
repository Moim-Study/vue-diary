<template>
	<div class="BlackScreen">
		<div class="WhiteScreen">
			<div
				class="AddTitle"
				v-for="(title, idx) in addText"
				:key="idx"
				v-text="'Add ' + title"
			></div>
			<AddTodo v-model="isTodo" />
		</div>
	</div>
</template>

<script>
import { ref } from 'vue';
import AddTodo from '../views/AddTodo.vue';

export default {
	components: {
		AddTodo,
	},
	setup() {
		const isTodo = ref([]);
		return {
			addText: ref(['Todo']),
			isTodo,
		};
	},
};
</script>

<style lang="scss" scoped>
.BlackScreen {
	width: 100vw;
	height: 100vh;
	background: rgba(0, 0, 0, 0.5);
	position: fixed;
	z-index: 3;
	top: 0;
	left: 0;
	.WhiteScreen {
		width: 80%;
		height: 80%;
		z-index: 2;
		margin: 0 auto;
		background: #ffffff;
		.AddTitle {
			width: 100%;
			text-align: center;
			font: {
				weight: 700;
				size: 20px;
			}
		}
	}
}
</style>
