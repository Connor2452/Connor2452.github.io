//import { link } from 'fs';
import Image from 'next/image';

export default function ProjectsSection() {
		const projects = [
		{
			title: "Lunar Lander with Deep Q-Learning",
			description:
				"A reinforcement learning agent trained with Deep Q-Networks (DQN) to land a spacecraft safely using Gymnasium and PyTorch.",
			image: "/landing.gif", // put demo.gif in /public
			link: "https://github.com/Connor2452/lunar-lander-dqn", // replace with your repo link
		},
		{
			title: "Kung Fu with A3C",
			description: "Asynchronous Advantage Actor-Critic (A3C) agent trained to play Kung Fu Master using policy gradients and frame preprocessing for Atari environments.",
			image: "/kungfu.gif",
			link: "https://github.com/Connor2452/A3C-Kung-Fu",
		},
		{
			title: "Tuned Llama 2 Chatbot",
			description: "A chatbot built using the Llama 2 model and medical knowledge from Hugging Face library.",
			image: "/LLM_Image.png",
			link: "https://github.com/Connor2452/Tuned-Llama-2-Chatbot",
		},
		{
			title: "Ms Pacman with Deep Convolutional Q-Learning",
			description: "A reinforcement learning agent trained with Deep Convolutional Q-Networks (DCQN) to play Ms. Pacman using Gymnasium and PyTorch.",
			image: "/pacman.gif",
			link: "https://github.com/Connor2452/ms-pacman-dcqn",
		}
	];
	return (
		<section className="py-12 sm:py-20">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">Featured Projects</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
					{projects.map((project, index) => (
						<div key={index} className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
							<div className="aspect-video bg-gray-700 relative">
								<Image src={project.image} alt={project.title} fill className="object-cover" />
							</div>
							<div className="p-4 sm:p-6">
								<h3 className="text-base sm:text-lg font-semibold text-white mb-2">{project.title}</h3>
								<p className="text-sm sm:text-base text-gray-300 mb-4">{project.description}</p>
								<div className="flex gap-2">
									<a href={project.link} className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base">
										View Project →
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
