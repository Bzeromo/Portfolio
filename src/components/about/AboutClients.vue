<script>
import AboutClientSingle from './AboutClientSingle.vue';

export default {
	components: {
		AboutClientSingle,
	},
	data: () => {
		return {
			clientsHeading: 'Representative technology stack',
			clients: [
				{
					id: 1,
					title: 'Spring',
					img: require('@/assets/images/developstack/spring-color.svg'),
				},
				{
					id: 2,
					title: 'Springboot',
					img: require('@/assets/images/developstack/springboot-color.svg'),
				},
				{
					id: 3,
					title: 'Node.js',
					img: require('@/assets/images/developstack/nodedotjs-color.svg'),
				},
				{
					id: 4,
					title: 'React',
					img: require('@/assets/images/developstack/react-color.svg'),
				},
				{
					id: 5,
					title: 'Vue',
					img: require('@/assets/images/developstack/vuedotjs-color.svg'),
				},
				{
					id: 6,
					title: 'Flutter',
					img: require('@/assets/images/developstack/flutter-color.svg'),
				},
				{
					id: 7,
					title: 'Git',
					img: require('@/assets/images/developstack/git-color.svg'),
				},
				{
					id: 8,
					title: 'Docker',
					img: require('@/assets/images/developstack/docker-color.svg'),
				},
			],
		};
	},
};
</script>

<template>
	<div class="mt-10 sm:mt-20">
		<p
			class="font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light"
		>
			{{ clientsHeading }}
		</p>
		<div class="grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-14 gap-2">
			<AboutClientSingle
				v-for="client in clients"
				:key="client.id"
				:client="client"
			/>
		</div>
	</div>
</template>
