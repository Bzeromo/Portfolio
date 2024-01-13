// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'CodiCloset',
		category: 'Mobile Application',
		img: require('@/assets/images/match_codi.png'),
	},
	{
		id: 2,
		title: 'Bobmukda',
		category: 'Mobile Application',
		img: require('@/assets/images/bobmukda.png'),
	},
	{
		id: 3,
		title: 'Policy hub',
		category: 'Web Application',
		img: require('@/assets/images/policyhub.png'),
	},
	{
		id: 4,
		title: 'Speak Together',
		category: 'Mobile Application',
		img: require('@/assets/images/speak_together.png'),
	},
	{
		id: 5,
		title: 'Satreci-devops-project',
		category: 'CI/CD',
		img: require('@/assets/images/Satreci.png'),
	},
	{
		id: 6,
		title: 'SSAth(SSAFY health)',
		category: 'Web Application',
		img: require('@/assets/images/SSAth.png'),
	},
];

export default projects;
