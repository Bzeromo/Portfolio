<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio:
						'백엔드 or 풀스택 신입 개발자를 희망하는 박영규입니다.',
				},
				{
					id: 2,
					bio:
						"백엔드&프론트엔드 분야를 넘나드는 다양한 프로젝트 경험과 충남대학교 소프트웨어 아카데미 및 삼성 소프트웨어 아카데미 경험을 바탕으로 백엔드 및 풀스택 개발을 희망하고 있습니다.",
				},
				{
					id: 3,
					bio:
						"단순한 경험을 넘어 삼성 아카데미 프로젝트 경진대회 수상 등의 성과를 보유하고 있으며, NAVER CLOUD PLATFORM Certified Associate 및 SQL개발자 자격증을 보유중입니다. ",
				},
			],
		};
	},
};
</script>

<template>
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- About profile image -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img
				src="@/assets/images/profile.jpg"
				class="rounded-xl w-96"
				alt=""
			/>
		</div>

		<!-- About details -->
		<div class="w-full sm:w-3/4 text-left">
			<p
				v-for="bio in bios"
				:key="bio.id"
				class="font-bold mb-4 text-ternary-dark dark:text-ternary-light text-lg"
			>
				{{ bio.bio }}
			</p>
		</div>
	</div>
</template>
