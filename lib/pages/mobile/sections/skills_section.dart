import 'package:flutter/material.dart';
import 'package:portfolio_site/widgets/gradient_text.dart';
import 'package:portfolio_site/widgets/mobile-widgets/category_box.dart';
import 'package:portfolio_site/constants/skills_data.dart';
import 'package:portfolio_site/constants/colors.dart';

class SkillsSection extends StatefulWidget {
  const SkillsSection({super.key});

  @override
  State<SkillsSection> createState() => _SkillsSectionState();
}

class _SkillsSectionState extends State<SkillsSection> {
  @override
  Widget build(BuildContext context) {
    final skills = SkillsData.getSkills();

    return Column(
      crossAxisAlignment: CrossAxisAlignment.center,
      children: [
        const SizedBox(height: 30),
        const GradientText(text: "SKILLS"),
        const SizedBox(height: 20),
        Padding(
          padding: const EdgeInsets.symmetric(horizontal: 20),
          child: Wrap(
            spacing: 15,
            runSpacing: 15,
            alignment: WrapAlignment.center,
            children: skills.map((skill) {
              return GestureDetector(
                onTap: () => _showSkillDetails(context, skill),
                child: CategoryBox(title: skill.title, image: skill.image),
              );
            }).toList(),
          ),
        ),
      ],
    );
  }

  void _showSkillDetails(BuildContext context, Skill skill) {
    showModalBottomSheet(
      context: context,
      backgroundColor: const Color(0xFF101010),
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(15),
      ),
      builder: (context) {
        return Padding(
          padding: const EdgeInsets.all(20),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Text(
                    skill.title,
                    style: const TextStyle(
                      fontSize: 20,
                      fontWeight: FontWeight.bold,
                      color: AppColors.oatMilk,
                    ),
                  ),
                  IconButton(
                    onPressed: () => Navigator.pop(context),
                    icon: const Icon(Icons.close, color: AppColors.textPrimary),
                  ),
                ],
              ),
              const SizedBox(height: 10),
              ...skill.details.map((detail) => Padding(
                    padding: const EdgeInsets.symmetric(vertical: 4),
                    child: Text(
                      "• $detail",
                      style: const TextStyle(color: AppColors.textPrimary, fontSize: 13),
                    ),
                  )),
            ],
          ),
        );
      },
    );
  }
}
