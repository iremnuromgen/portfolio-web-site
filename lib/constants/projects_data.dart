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
    description: "Seyahat planlamanızı yapabileceğiniz akıllı bir mobil uygulama.",
    image: "assets/images/app_image1.jpg",
  ),
  Project(
    title: "E-Ticaret",
    description: "Kullanıcı dostu arayüzüyle modern bir e-ticaret platformu.",
    image: "assets/images/app_image2.jpg",
  ),
  Project(
    title: "Portfolio",
    description: "Kendi kişisel projelerimi sergilediğim portfolyo web sitesi.",
    image: "assets/images/app_image3.jpg",
  ),
];
