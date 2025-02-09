import 'package:flutter/material.dart';
import 'package:portfolio_site/widgets/gradient_text.dart';
import 'package:portfolio_site/widgets/category_box.dart';
import 'package:portfolio_site/constants/skills_data.dart';
import 'package:portfolio_site/constants/colors.dart';

class SkillsSection extends StatefulWidget {
  const SkillsSection({super.key});

  @override
  State<SkillsSection> createState() => _SkillsSectionState();
}

class _SkillsSectionState extends State<SkillsSection> {
  Skill? selectedSkill;

  @override
  Widget build(BuildContext context) {
    final skills = SkillsData.getSkills();

    return Stack(
      children: [
        Container(
          width: double.infinity,
          height: MediaQuery.of(context).size.height / 2,
          color: Colors.transparent,
          child: Column(
            children: [
              const SizedBox(height: 50),
              const GradientText(text: "SKILLS"),
              const SizedBox(height: 20),
              Padding(
                padding: const EdgeInsets.only(left: 60),
                child: SingleChildScrollView(
                  scrollDirection: Axis.horizontal,
                  child: Row(
                    children: skills.map((skill) => MouseRegion(
                      cursor: SystemMouseCursors.click,
                      child: GestureDetector(
                        onTap: () {
                          setState(() {
                            selectedSkill = skill;
                          });
                        },
                        child: CategoryBox(title: skill.title, image: skill.image),
                      ),
                    )).toList(),
                  ),
                ),
              ),
            ],
          ),
        ),
        if (selectedSkill != null)
          Center(
            child: Material(
              color: const Color(0xFF101010),
              borderRadius: BorderRadius.circular(10),
              elevation: 10,
              child: Container(
                width: 500,
                height: 500,
                padding: const EdgeInsets.all(20),
                child: Stack(
                  children: [
                    Column(
                      crossAxisAlignment: CrossAxisAlignment.center,
                      children: [
                        Text(
                          selectedSkill!.title,
                          style: const TextStyle(
                            fontSize: 20,
                            fontWeight: FontWeight.bold,
                            color: AppColors.oatMilk,
                          ),
                          textAlign: TextAlign.center,
                        ),
                        const SizedBox(height: 20),
                        Expanded(
                          child: ListView(
                            children: selectedSkill!.details.map((detail) => Padding(
                              padding: const EdgeInsets.symmetric(vertical: 4),
                              child: Text(
                                "- $detail",
                                style: const TextStyle(color: AppColors.textPrimary, fontSize: 16),
                                textAlign: TextAlign.start,
                              ),
                            )).toList(),
                          ),
                        ),
                      ],
                    ),
                    Positioned(
                      right: 10,
                      top: 10,
                      child: MouseRegion(
                        cursor: SystemMouseCursors.click,
                        child: GestureDetector(
                          onTap: () {
                            setState(() {
                              selectedSkill = null;
                            });
                          },
                          child: const Icon(Icons.close, color: AppColors.textPrimary, size: 24),
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ),
      ],
    );
  }
}