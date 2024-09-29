<template>
	<view>
		<u-image v-if="imageUrl.length==0" :src="defaultImage" :width="width" :height="height" :radius="radius"
			:mode="mode"></u-image>
		<u-image v-else :src="imageUrl" :width="width" :height="height" :radius="radius" :mode="mode" @click="clickImg">
			<template #error>
				<u-image :src="defaultImage" :width="width" :height="height" :radius="radius" :mode="mode"></u-image>
			</template>
		</u-image>
	</view>
</template>

<script>
	export default {
		name: "net-image",
		props: {
			imageUrl: {
				type: String,
				default: ''
			},

			width: {
				type: String,
				default: '100rpx'
			},

			height: {
				type: String,
				default: '100rpx'
			},

			radius: {
				type: String,
				default: '0rpx'
			},
			defaultImage: {
				type: String,
				default: ''
			},

			mode: {
				type: String,
				default: 'aspectFit'
			},
		}
	}
</script>