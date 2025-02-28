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
    description: "Ternai, bütçenize ve tatil planınıza en uygun seyahat seçeneklerini sunan akıllı bir mobil uygulamadır.Konaklama süresine, bütçeye ve tercihlere göre önerilerde bulunarak kullanıcıların en verimli şekilde seyahat planlaması yapmasına yardımcı olur.",
    image: "assets/images/ternai.png",
  ),
  Project(
    title: "Portfolio",
    description: "Mobil ve web geliştirme alanındaki projelerimi sergilediğim, yeteneklerimi ve deneyimlerimi yansıtan kişisel portfolyo web sitesi.",
    image: "assets/images/portfolio.png",
  ),
];
