<template>
	<view>
		<u-picker :show="show" :columns="columns" :keyName="keyName" closeOnClickOverlay :defaultIndex="defaultIndex"
			@close="close" @cancel="close" @confirm="confirm"></u-picker>
	</view>
</template>

<script>
	export default {
		name: "custom-picker-dialog",
		props: {
			show: {
				type: Boolean,
				default: false
			},
			columns: {
				type: Array,
				default: () => []
			},
			currentId: {
				type: [String, Number],
				default: ''
			},
			keyName: {
				type: String,
				default: 'BnsinessName'
			},
			keyId: {
				type: String,
				default: 'Id'
			},
		},
		computed: {
			defaultIndex() {
				var arr = []
				if (this.currentId.length > 0 && this.columns.length > 0) {
					let list = this.columns[0]
					let index = list.findIndex(obj => obj[this.keyId] == this.currentId)
					if (index != -1) {
						arr.push(index)
					}
				}
				return arr
			}
		},
		methods: {
			close() {
				this.$emit('close')
			},
			confirm(obj) {
				this.$emit('confirm', obj)
				this.close()
			}
		},
	}
</script>