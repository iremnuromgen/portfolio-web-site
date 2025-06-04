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
          "Flutter (Widget structures, State Management)",
          "Dart",
          "Clean Architecture",
          "Responsive UI Design",
          "Mobile Application Development",
          "Build & Deployment Processes",
          "SOLID Principles",
          "Atomic Design Methodology",
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