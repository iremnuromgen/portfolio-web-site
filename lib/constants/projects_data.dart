class Project {
  final String image;
  final String title;
  final String description;

  Project({
    required this.image,
    required this.title,
    required this.description,
  });
}

List<Project> projects = [
  Project(
    title: "Ternai",
    description: "Ternai is a smart mobile application where travelers can share their experiences as blogs on a social media feed, plan their trips more efficiently, and track live prices of destinations. It offers personalized travel recommendations based on users’ budgets and preferences, providing real-time price searches to help keep budgets up to date.",
    image: "assets/images/ternai.png",
  ),
  Project(
    title: "Portfolio",
    description: "A personal portfolio website showcasing my projects in mobile and web development, reflecting my skills and experiences.",
    image: "assets/images/portfolio.png",
  )
];
