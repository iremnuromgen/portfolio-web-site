class Skill {
  final String title;
  final String image;
  final List<String> details;

  Skill({required this.title, required this.image, required this.details});
}

class SkillsData {
  static List<Skill> getSkills() {
    return [
      Skill(
        title: "Flutter & Mobile Development",
        image: "assets/images/mobile-development.png",
        details: [
          "Flutter (Widget yapıları, State Management)",
          "Dart Programlama Dili",
          "State Management (Provider, Riverpod, Bloc)",
          "Responsive UI Tasarımı",
          "Animasyonlar ve Custom Painter",
          "API Entegrasyonu",
          "Firebase (Auth, Firestore, Storage)",
          "Local Database",
        ],
      ),
      Skill(
        title: "Backend & Tools",
        image: "assets/images/cloud-api.png",
        details: [
          "Node.js & Express",
          "MongoDB & Firestore",
          "Git & GitHub",
        ],
      ),
    ];
  }
}